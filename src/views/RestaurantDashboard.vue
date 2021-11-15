<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>
    <hr />
    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Lowell Donnelly",
    tel: "(447) 219-0008 x041",
    address: "191 Giuseppe Cape",
    opening_hours: "08:00",
    description: "Dolorem aspernatur dicta odio.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=5.3823766226384295",
    viewCounts: 2,
    createdAt: "2021-11-07T17:41:46.000Z",
    updatedAt: "2021-11-11T05:56:57.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Repellat dicta sit.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$kzflzg2uL9ZgVBWoobl19.OhTvSzmAnXIg/JS11EDeRSBHBxifNfC",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-07T17:41:46.000Z",
          updatedAt: "2021-11-07T17:41:46.000Z",
        },
      },
      {
        id: 51,
        text: "Repellat voluptatum minus itaque non.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$F22u2Sq/WVtGdTUDRAvXW.BbxuzOT3FpKyMJCPMuoXm5Te9WCQ2Jm",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-07T17:41:46.000Z",
          updatedAt: "2021-11-07T17:41:46.000Z",
        },
      },
      {
        id: 101,
        text: "Ipsum porro molestias.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$vJkOL4tLH77VRe1duVSExelRClufXpS/9OBpHARaGVa9yqTquY8gK",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-07T17:41:46.000Z",
          updatedAt: "2021-11-07T17:41:46.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {     
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        viewCounts: 0,
        commentsLength:0
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchDashboard(restaurantId);
  },
  methods: {
    fetchDashboard() {
      const categoryName = dummyData.restaurant.Category.name;
      const commentsLength = dummyData.restaurant.Comments.length
      const {
        id,
        name,   
        viewCounts,
      } = dummyData.restaurant;
      this.restaurant = {
        id,
        name,
        categoryName,
        viewCounts,
        commentsLength
      };
    },
  },
};
</script>
