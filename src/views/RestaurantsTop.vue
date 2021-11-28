<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <TopRestaurant
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initialRestaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import TopRestaurant from "./../components/TopRestaurant";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

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
    async fetchTops() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳",
        });
      }
    },
  },
};
</script>

