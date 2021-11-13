<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

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
    },
    {
      id: 4,
      name: "Christy Hills",
      tel: "513-540-6969",
      address: "784 Volkman Valleys",
      opening_hours: "08:00",
      description:
        "Voluptas cupiditate dicta corporis.\nVoluptas dolorum ut quia omnis illo.\nQui nihil tempora minus et mollitia.\nAliquid cumque autem minus fuga aliquam.",
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
    },
    {
      id: 5,
      name: "Deondre Bayer",
      tel: "1-696-075-8048",
      address: "1406 Linwood Shore",
      opening_hours: "08:00",
      description:
        "Harum vel quo tempore dolorem dolorum architecto vero est et.",
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
    },
    {
      id: 6,
      name: "Cortney West",
      tel: "(648) 332-0960 x3897",
      address: "859 Connie Walks",
      opening_hours: "08:00",
      description:
        "Amet rerum nisi sit odit vitae saepe quaerat. Earum sed quia molestiae dolores harum id sint doloremque mollitia. Iure minus quas reiciendis velit et deserunt in a est. Libero totam ut. Hic et esse mollitia dolores laborum.\n \rConsequatur nulla dolores. Quia sapiente consequatur laboriosam et suscipit autem. Quis nihil consequuntur itaque alias in.\n \rConsequatur porro qui tempore et possimus accusamus ex. Vitae alias soluta quia delectus veritatis sit. Aut reprehenderit et ut.",
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
    },
    {
      id: 7,
      name: "Jodie Waelchi",
      tel: "1-788-988-6803",
      address: "9362 Yundt Valley",
      opening_hours: "08:00",
      description:
        "Quibusdam voluptatem numquam. Mollitia quia vel ut. Molestiae nesciunt natus quia est. Aperiam nihil vel eligendi et deleniti harum molestiae. Dolorem ipsam numquam tenetur dolor qui sit omnis eius. Laboriosam nam velit laboriosam qui quibusdam error enim voluptatem ea.",
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
    },
    {
      id: 8,
      name: "Kale Osinski",
      tel: "539-265-9548 x7040",
      address: "7046 Schuppe Stravenue",
      opening_hours: "08:00",
      description:
        "Commodi incidunt ut iure sequi. Aperiam nihil facilis sit fugiat omnis. Perferendis et incidunt perferendis modi quod sit facere voluptas.",
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
    },
  ],
  comments: [
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
      Restaurant: {
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
      },
    },
    {
      id: 2,
      text: "Voluptas qui atque fuga nobis voluptates aspernatur esse facilis error.",
      UserId: 2,
      RestaurantId: 2,
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
      Restaurant: {
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
      },
    },
    {
      id: 3,
      text: "Vero hic eveniet quaerat et et eum.",
      UserId: 1,
      RestaurantId: 3,
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
      Restaurant: {
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
      },
    },
    {
      id: 4,
      text: "Consequatur autem dolores rerum nulla.",
      UserId: 1,
      RestaurantId: 4,
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
      Restaurant: {
        id: 4,
        name: "Christy Hills",
        tel: "513-540-6969",
        address: "784 Volkman Valleys",
        opening_hours: "08:00",
        description:
          "Voluptas cupiditate dicta corporis.\nVoluptas dolorum ut quia omnis illo.\nQui nihil tempora minus et mollitia.\nAliquid cumque autem minus fuga aliquam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=25.818346847179406",
        viewCounts: 0,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 5,
      text: "Ea quo aliquam sed.",
      UserId: 3,
      RestaurantId: 5,
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
      Restaurant: {
        id: 5,
        name: "Deondre Bayer",
        tel: "1-696-075-8048",
        address: "1406 Linwood Shore",
        opening_hours: "08:00",
        description:
          "Harum vel quo tempore dolorem dolorum architecto vero est et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=14.355308889584052",
        viewCounts: 0,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 6,
      text: "Facere at sint maiores.",
      UserId: 2,
      RestaurantId: 6,
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
      Restaurant: {
        id: 6,
        name: "Cortney West",
        tel: "(648) 332-0960 x3897",
        address: "859 Connie Walks",
        opening_hours: "08:00",
        description:
          "Amet rerum nisi sit odit vitae saepe quaerat. Earum sed quia molestiae dolores harum id sint doloremque mollitia. Iure minus quas reiciendis velit et deserunt in a est. Libero totam ut. Hic et esse mollitia dolores laborum.\n \rConsequatur nulla dolores. Quia sapiente consequatur laboriosam et suscipit autem. Quis nihil consequuntur itaque alias in.\n \rConsequatur porro qui tempore et possimus accusamus ex. Vitae alias soluta quia delectus veritatis sit. Aut reprehenderit et ut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=78.68127017169309",
        viewCounts: 0,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 7,
      text: "Fugiat laudantium quidem rerum beatae expedita eum vel iusto.",
      UserId: 2,
      RestaurantId: 7,
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
      Restaurant: {
        id: 7,
        name: "Jodie Waelchi",
        tel: "1-788-988-6803",
        address: "9362 Yundt Valley",
        opening_hours: "08:00",
        description:
          "Quibusdam voluptatem numquam. Mollitia quia vel ut. Molestiae nesciunt natus quia est. Aperiam nihil vel eligendi et deleniti harum molestiae. Dolorem ipsam numquam tenetur dolor qui sit omnis eius. Laboriosam nam velit laboriosam qui quibusdam error enim voluptatem ea.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=69.57687105492722",
        viewCounts: 0,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 8,
      text: "Omnis aliquid natus beatae odit beatae.",
      UserId: 1,
      RestaurantId: 8,
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
      Restaurant: {
        id: 8,
        name: "Kale Osinski",
        tel: "539-265-9548 x7040",
        address: "7046 Schuppe Stravenue",
        opening_hours: "08:00",
        description:
          "Commodi incidunt ut iure sequi. Aperiam nihil facilis sit fugiat omnis. Perferendis et incidunt perferendis modi quod sit facere voluptas.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=18.987657603716368",
        viewCounts: 0,
        createdAt: "2021-11-07T17:41:46.000Z",
        updatedAt: "2021-11-07T17:41:46.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 9,
      text: "Corrupti quas dolores laboriosam rerum magni rerum.",
      UserId: 3,
      RestaurantId: 9,
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
      Restaurant: {
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
      },
    },
    {
      id: 10,
      text: "Sint et debitis.",
      UserId: 3,
      RestaurantId: 10,
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
      Restaurant: {
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
      },
    },
  ],
};
export default {
  name:'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      const {restaurants, comments} =dummyData
      this.restaurants = restaurants;
      //這邊有可能資料有缺 當Restaurant存在 text存在才會傳進來 不然就會被過濾
      this.comments = comments.filter(comment => comment.Restaurant && comment.text) 
    },
  },
};
</script>