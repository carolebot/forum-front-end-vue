<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>
      <hr />
      <TopRestaurant
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import TopRestaurant from "./../components/TopRestaurant";
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "topRestaurant",
  components: {
    NavTabs,
    TopRestaurant,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchTops();
  },
  methods: {
    async fetchTops() {
      try {
        this.isLoading = true;
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳",
        });
      }
    },
  },
};
</script>

