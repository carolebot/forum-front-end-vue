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
            {{restaurantComment.User.name}}
          </a>
        </h3>
        <p>{{restaurantComment.text}}</p>
        <footer class="blockquote-footer">
          {{restaurantComment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComment: {
      type: Object,
      require: true
    }
  },
  data() {
    return {  
      currentUser: dummyUser.currentUser 
    }
  },
  methods: {
    handleDeleteBtnClick(commentId) {
      // 透過API請求刪除該筆comment
      // comment刪除後 註冊事件 帶參數id
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>