import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    type?: string
  }
}
