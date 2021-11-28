<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script>
import commentAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";
export default {
  name: "CreateComment",
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text) {
          Toast.fire({
            icon: "error",
            title: "評論內容為空",
          });
          return;
        }

        this.isProcessing = true;
        const { data } = await commentAPI.addComment({
          restaurantId: this.restaurantId,
          text: this.text,
        });

        if (data.status !== "success") {
          this.isProcessing = false;
          throw new Error(data.message);
        }
        //todo 需要請求API新增comment 收commentId
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.isProcessing = false;
        this.text = ""; // 將表單內的資料清空
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別",
        });
      }
    },
  },
};
</script>