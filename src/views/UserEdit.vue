<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit($event)">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          width="200"
          height="200"
          class="d-block img-thumbnail mb-3"
          alt=""
        />
        <input
          @change="handleFileChange($event)"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">{{ isProcessing ? '更新中' : 'Submit' }}</button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.currentUser.image = imageURL;
      }
    },
    async handleSubmit(event) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: 'error',
            title: '姓名為空'
          })
          return
        }
        const form = event.target;
        const formData = new FormData(form);
        
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        console.log(this.user.id)

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user-profile", params: { id: this.user.id } });
      } catch (error) {
        console.error(error.message);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
    setUser(userId) {
      const { id, name, email, image } = this.currentUser;

       if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }

      this.user = {
        ...this.currentUser,
        id,
        name,
        email,
        image,
      };
    },
  },
};
</script>