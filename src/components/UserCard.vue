 <template>
    <div class="col-3">
      <router-link :to="{ name: 'user-profile', params:{id: user.id}}">
        <img
          :src="user.image | emptyImage"
          width="140px"
          height="140px"
        />
      </router-link>
      <h2>{{user.name}}</h2>
      <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          @click.prevent.stop="unfollow(user.id)"
          type="button"
          class="btn btn-danger"
        >
          取消追蹤
        </button>
        <button
          v-else
          @click.prevent.stop="follow(user.id)"
          type="button"
          class="btn btn-primary"
        >
          追蹤
        </button>
      </p>
    </div>
</template>

<script>
import { btns,emptyImageFilter } from '../utils/mixins';
export default {
  mixins: [btns, emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
};
</script>

