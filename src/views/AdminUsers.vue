<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
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
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              @click.stop.prevent="toggleUserRole(user.id)"
              v-if="user.isAdmin && user.email !== 'root@example.com'"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click.stop.prevent="toggleUserRole(user.id)"
              v-if="!user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/Admin/AdminNav.vue";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$kzflzg2uL9ZgVBWoobl19.OhTvSzmAnXIg/JS11EDeRSBHBxifNfC",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$vJkOL4tLH77VRe1duVSExelRClufXpS/9OBpHARaGVa9yqTquY8gK",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$F22u2Sq/WVtGdTUDRAvXW.BbxuzOT3FpKyMJCPMuoXm5Te9WCQ2Jm",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
  ],
};
export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users  = dummyData.users.map((user) => ({
       ...user,
      }));
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin, 
          };
        }
        return user;
      });
    },
  },
};
</script>