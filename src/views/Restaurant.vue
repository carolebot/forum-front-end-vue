<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail 
    :isFavorited="restaurant.isFavorited"
    :isLiked="restaurant.isLiked"
    :initialRestaurant="restaurant" />
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
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComment from "./../components/RestaurantComment";
import CreateComment from "./../components/CreateComment";

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
    viewCounts: 1,
    createdAt: "2021-11-07T17:41:46.000Z",
    updatedAt: "2021-11-11T05:54:36.037Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 3,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComment,
    CreateComment,
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
      currentUser: dummyUser.currentUser
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    fetchRestaurant() {
      const categoryName = dummyData.restaurant.Category.name;
      const {
        id,
        name,
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      } = dummyData.restaurant;
      const restaurantComments = dummyData.restaurant.Comments;
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
      this.restaurantComments = restaurantComments
    },
  },
};
</script>