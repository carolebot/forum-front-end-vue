import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  }
}
export const btns = {
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
    removeFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
    addLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
    removeLiked() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    },
    follow() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    unfollow() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
}