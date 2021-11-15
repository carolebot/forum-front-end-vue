<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.Followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in profile.Followings"
        :key="following.id"
        :to="{ name: 'user-profile', params: { id: following.id } }"
      >
        <img
          :src="following.image | emptyImage"
          width="60"
          height="60"
          class="avatar mx-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>