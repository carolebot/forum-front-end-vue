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
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>
<script>
import { v4 as uuidv4 } from "uuid"
export default {
  name: "CreateComment",
  data() {
    return {
      text: "",
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      //todo 需要請求API新增comment 收commentId
      this.$emit("after-create-comment", {
        commentId: uuidv4(),  //目前尚未串接API 無法取得commentId
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = '' // 將表單內的資料清空
    },
  },
}; 
</script>