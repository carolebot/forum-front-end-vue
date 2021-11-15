<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit($event)">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
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
          v-if="currentUser.image"
          :src="currentUser.image"
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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "UserEdit",
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
        isAuthenticated: false,
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
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
     handleSubmit(event){
      const form = event.target
      console.log(form)
      const formData = new FormData(form)
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    fetchUser(userId) {
      console.log(userId);
      const { id, name, email, image, isAdmin } = dummyUser.currentUser;
      const isAuthenticated = dummyUser.isAuthenticated;
      this.currentUser = {
        ...this.currentUser,
        id,
        name,
        email,
        image,
        isAdmin,
        isAuthenticated,
      };
    },
  },
};
</script>