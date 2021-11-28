<template>
  <div>
    <div>
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.prevent.stop="handleDeleteBtnClick(restaurantComment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ restaurantComment.User.name }}
          </a>
        </h3>
        <p>{{ restaurantComment.text }}</p>
        <footer class="blockquote-footer">
          {{ restaurantComment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import commentAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComment: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async handleDeleteBtnClick(commentId) {
      try {
        const { data } = await commentAPI.removeComment({commentId});
        if (data.status !== "success") {
          this.isProcessing = false;
          throw new Error(data.message);
        }
        // 透過API請求刪除該筆comment
        // comment刪除後 註冊事件 帶參數id
        this.$emit("after-delete-comment", commentId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>