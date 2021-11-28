<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <!-- Usercard -->
    <div class="row text-center">
      <UserCard v-for="user in users" :key="user.id" :initialUser="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";

import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        this.users = {
          ...data.users,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法獲取達人資料",
        });
        console.log(error)
      }
    },
  },
};
</script>