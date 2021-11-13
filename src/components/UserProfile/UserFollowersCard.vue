<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
       <router-link
        v-for="follower in profile.Followers"
        :key="follower.id"
        :to="{ name: 'follower', params: { id: follower.id } }"
      >
        <img :src="follower.image" width="60" height="60" class="avatar mx-1" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>
