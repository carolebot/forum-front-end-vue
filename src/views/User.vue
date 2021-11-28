<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :userProfile="user"
        :currentUser="currentUser"
      />
      <div class="row">
        <!-- UserFollowers & Following -->
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <br />
          <UserFollowersCard :followers="followers" />
        </div>
        <!-- Usercomment & Favorited -->
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <br />
          <UserFavoritedRestaurantsCard
            :favoritedRestaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfile/UserProfileCard";
import UserFollowersCard from "./../components/UserProfile/UserFollowersCard";
import UserFollowingsCard from "./../components/UserProfile/UserFollowingsCard";
import UserCommentsCard from "./../components/UserProfile/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserProfile/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  name: "user",
  components: {
    UserProfileCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        isFollowed: false,
      },
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserProfile(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUserProfile(id);
    next();
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const { data } = await usersAPI.getUserDetail({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        const { profile, isFollowed } = data;
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants,
        } = profile;
        const commentSet = new Set();
        this.comments = Comments.filter(
          (comment) =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        );
        this.user = {
          ...this.user,
          id,
          isFollowed,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };
        this.followings = Followings;
        this.followers = Followers;
        this.favoritedRestaurants = FavoritedRestaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法獲取使用者資料",
        });
      }
    },
  },
};
</script>