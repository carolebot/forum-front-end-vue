 <template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link :to="{ name: 'user-profile-edit' }">
              <template v-if="user.id === profile.id">
                <button  type="submit" class="btn btn-primary">edit</button>
              </template>
              <template v-else>
                <button
                  @click.prevent.stop="unfollow"
                  v-if="user.isFollowed"
                  type="submit"
                  class="btn btn-danger"
                >
                  取消追蹤
                </button>
                <button
                  v-else
                  @click.prevent.stop="follow"
                  type="submit"
                  class="btn btn-primary"
                >
                  追蹤
                </button>
              </template>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { btns, emptyImageFilter } from "../../utils/mixins";
export default {
  mixins: [btns, emptyImageFilter],
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    profileUser: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      user: this.profileUser,
      isFollowed: this.initialIsFollowed,
    };
  },
};
</script>