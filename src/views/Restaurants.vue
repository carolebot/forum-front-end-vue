<template>
  <div class="container py-5">
    <NavTabs />
    <!-- NavPills -->
    <Spinner v-if="isLoading" />
    <template v-else>
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
        :categoryId="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaruantsPagination";
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/helpers";
import restaurantsAPI from "./../apis/restaurants";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantsPagination,
    Spinner,
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
      isLoading: true,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料",
        });
        console.log(error);
      }
    },
  },
};
</script>