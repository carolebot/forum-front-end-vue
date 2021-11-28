<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" width="140">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin ? "admin" : "user" }}</td>
            <td>
              <button
                @click.stop.prevent="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
                v-if="currentUser.id !== user.id"
                type="button"
                class="btn btn-link"
              >
                {{ user.isAdmin ? "set as user" : "set as admin" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from "./../components/Admin/AdminNav.vue";
import Spinner from "./../components/Spinner";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await adminAPI.users.get();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = data.users.map((user) => ({
          ...user,
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast({
          icon: "error",
          title: "無法獲取資料",
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法切換角色",
        });
      }
    },
  },
};
</script>