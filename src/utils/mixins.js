import moment from 'moment'
import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'


export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}

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
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      }
      catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛'
        })
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.removeFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      }
      catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛'
        })
      }
    },
    async addLiked(restaurantId) {
      try {
        const { data } = await usersAPI.addLiked({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        }
      }
      catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入liked'
        })
      }
    },
    async removeLiked(restaurantId) {
      try {
        const { data } = await usersAPI.removeLiked({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除Liked'
        })
      }
    },
    async follow(userId) {
      try {
        const { data } = await usersAPI.follow({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          isFollowed: true,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤'
        })
      }
    },
    async unfollow(userId) {
      try {
        const { data } = await usersAPI.unfollow({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          isFollowed: false,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤'
        })
      }
    },
  },
}