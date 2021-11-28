import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  getUserDetail({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  removeFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLiked({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  removeLiked({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  follow({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  unfollow({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}