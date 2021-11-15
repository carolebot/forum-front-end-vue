<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <TopRestaurant 
    v-for="restaurant in restaurants" :key="restaurant.id" :initialRestaurant="restaurant"/>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import TopRestaurant from "./../components/TopRestaurant";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Adella Torphy",
      tel: "977.129.7302 x11246",
      address: "70257 Webster Village",
      opening_hours: "08:00",
      description: "laborum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.472595642503535",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Florencio Kutch",
      tel: "309-301-0707 x6581",
      address: "93293 Sylvester Shoals",
      opening_hours: "08:00",
      description: "Autem aut perferendis atque voluptatem et id neque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.3251516616679",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Rhianna Frami",
      tel: "216-129-2722",
      address: "4243 Francesca Brook",
      opening_hours: "08:00",
      description: "Amet eum nulla necessitatibus praesentium in. Qui ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.492591872595625",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Gunnar Runte",
      tel: "561-754-5806 x0251",
      address: "81946 Alba Forges",
      opening_hours: "08:00",
      description: "a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.97005037712124",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Mrs. Jameson Greenholt",
      tel: "801-255-3442 x178",
      address: "4542 Veum Knoll",
      opening_hours: "08:00",
      description: "Voluptatem sed ut tenetur aut molestiae exercitati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.272147544123023",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Polly Kohler",
      tel: "1-845-795-0347 x722",
      address: "654 Caitlyn Island",
      opening_hours: "08:00",
      description: "In quis quis iste laborum rerum qui non quas. Quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.02726361621269",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Melba Gaylord",
      tel: "080-514-0221 x9019",
      address: "4883 Princess Parks",
      opening_hours: "08:00",
      description: "perferendis et occaecati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.72970999130816",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Larry Schuppe I",
      tel: "1-669-239-9989",
      address: "6531 Kuhn Fort",
      opening_hours: "08:00",
      description: "Facilis modi similique ea aperiam maiores amet.\nNo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.23065759908286",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Miss Theodore Emard",
      tel: "113.580.2725 x8959",
      address: "3983 Cali Wells",
      opening_hours: "08:00",
      description: "minima",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.745663085006285",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Gustave Mills",
      tel: "208.443.7443",
      address: "0212 Yundt Islands",
      opening_hours: "08:00",
      description: "Fuga incidunt non eum qui necessitatibus autem.\nMi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.064971321332557",
      viewCounts: 0,
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "topRestaurant",
  components: {
    NavTabs,
    TopRestaurant,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTops();
  },
  methods: {
    fetchTops() {
      const { restaurants } = dummyData;
      this.restaurants = restaurants;
    },
  },
};
</script>

