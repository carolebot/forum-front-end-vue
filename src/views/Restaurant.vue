<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <Spinner v-if="isLoading" />
    <template v-else>
    <RestaurantDetail :initialRestaurant="restaurant" />
    <h2 class="my-4">所有評論：</h2>
    <RestaurantComment
      @after-delete-comment="afterDeleteComment"
      v-for="restaurantComment in restaurantComments"
      :key="restaurantComment.id"
      :restaurantComment="restaurantComment"
    />

    <CreateComment
      @after-create-comment="afterCreateComment"
      :restaurantId="restaurant.id"
    />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComment from "./../components/RestaurantComment";
import CreateComment from "./../components/CreateComment";
import Spinner from "./../components/Spinner";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComment,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      isLoading: true,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    async fetchRestaurant(restaurantId) {
      try {
         this.isLoading = true;
        const { data } = await restaurantsAPI.getRestaurantDetail(restaurantId);
        const isFavorited = data.isFavorited;
        const isLiked = data.isLiked;
        const categoryName = data.restaurant.Category.name;
        const { id, name, image, openingHours, tel, address, description } =
          data.restaurant;
        const restaurantComments = data.restaurant.Comments;
        this.restaurant = {
          id,
          name,
          categoryName,
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };
        this.restaurantComments = restaurantComments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法獲取餐廳細節",
        });
        console.log(error);
      }
    },
  },
};
</script>