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

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$kzflzg2uL9ZgVBWoobl19.OhTvSzmAnXIg/JS11EDeRSBHBxifNfC",
      isAdmin: true,
      image: "https://images.twgreatdaily.com/images/elastic/m63/m63Hp3MBURTf-Dn5mmLU.jpg",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$vJkOL4tLH77VRe1duVSExelRClufXpS/9OBpHARaGVa9yqTquY8gK",
      isAdmin: false,
      image: "https://i.ppfocus.com/2020/8/a1edece.jpg",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$F22u2Sq/WVtGdTUDRAvXW.BbxuzOT3FpKyMJCPMuoXm5Te9WCQ2Jm",
      isAdmin: false,
      image: "https://stickershop.line-scdn.net/stickershop/v1/sticker/64363776/android/sticker.png",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

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
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = {
        ...users
      };
    },
  },
};
</script>