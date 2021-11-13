<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>
    <!-- NavPills -->
    <RestaurantNavPills :categories="categories" />
    <!-- Cards -->
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>
    <!-- Pagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaruantsPagination";
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Lowell Donnelly",
      tel: "(447) 219-0008 x041",
      address: "191 Giuseppe Cape",
      opening_hours: "08:00",
      description: "Dolorem aspernatur dicta odio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.3823766226384295",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Geovanni Denesik",
      tel: "1-185-300-4867 x1701",
      address: "789 Lesch Fork",
      opening_hours: "08:00",
      description: "Earum alias ipsam beatae eos numquam sit et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.112703343908969",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Neoma Murphy",
      tel: "916-384-2514 x6215",
      address: "169 Pearlie Village",
      opening_hours: "08:00",
      description: "Eos dolor error.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.157321266980052",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Christy Hills",
      tel: "513-540-6969",
      address: "784 Volkman Valleys",
      opening_hours: "08:00",
      description: "Voluptas cupiditate dicta corporis.\nVoluptas dolor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.818346847179406",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Deondre Bayer",
      tel: "1-696-075-8048",
      address: "1406 Linwood Shore",
      opening_hours: "08:00",
      description: "Harum vel quo tempore dolorem dolorum architecto v",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.355308889584052",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Cortney West",
      tel: "(648) 332-0960 x3897",
      address: "859 Connie Walks",
      opening_hours: "08:00",
      description: "Amet rerum nisi sit odit vitae saepe quaerat. Earu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.68127017169309",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Jodie Waelchi",
      tel: "1-788-988-6803",
      address: "9362 Yundt Valley",
      opening_hours: "08:00",
      description: "Quibusdam voluptatem numquam. Mollitia quia vel ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.57687105492722",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Kale Osinski",
      tel: "539-265-9548 x7040",
      address: "7046 Schuppe Stravenue",
      opening_hours: "08:00",
      description: "Commodi incidunt ut iure sequi. Aperiam nihil faci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.987657603716368",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Aileen Abshire",
      tel: "(137) 428-6356 x6304",
      address: "0070 Chad Ranch",
      opening_hours: "08:00",
      description: "Qui optio praesentium nobis delectus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.257852064370574",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Meagan Carter",
      tel: "(369) 855-1510 x3630",
      address: "13614 Considine Trail",
      opening_hours: "08:00",
      description: "Eos ut a eligendi vel recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.77193219899113",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>