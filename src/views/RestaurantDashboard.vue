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
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        viewCounts: 0,
        commentsLength: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchDashboard(restaurantId);
  },
  methods: {
    async fetchDashboard(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurantDetail(restaurantId);
        const categoryName = data.restaurant.Category.name;
        const commentsLength = data.restaurant.Comments.length;
        const { id, name, viewCounts } = data.restaurant;
        this.restaurant = {
          id,
          name,
          categoryName,
          viewCounts,
          commentsLength,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得dashboard資訊",
        });
      }
    },
  },
};
</script>
