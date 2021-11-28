import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// export const apiHelper = axios.create({
//   baseURL //baseURL: baseURL 縮寫
// })

const axiosInstance = axios.create({
  baseURL //baseURL: baseURL 
})

axiosInstance.interceptors.request.use(
  config => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true, //要使用的樣板
  position: 'top-end', //右上角
  showConfirmButton: false, //確認按鈕
  timer: 3000,
})