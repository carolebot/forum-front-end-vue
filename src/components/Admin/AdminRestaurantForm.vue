<template>
  <form @submit.prevent.stop="handleSubmit($event)">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.categoryId"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
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

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-07T17:41:46.000Z",
      updatedAt: "2021-11-07T17:41:46.000Z",
    },
  ],
};

export default {
  name:"AdminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
      })
    }
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant
      }
    };
  },
  created () {
    this.fetchCategories()
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(event){
      const form = event.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  },
};
</script>