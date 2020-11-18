const defaultBindHost = '0.0.0.0'

class NuxtEnvironmentConfig {
  DESC: string
  PORT: number
  HOST: string
  API_BASE_URL: string

  constructor(
    DESC: string,
    PORT: number,
    HOST: string,
    API_BASE_URL: string
  ) {
    this.DESC = DESC
    this.PORT = PORT
    this.HOST = HOST
    this.API_BASE_URL = API_BASE_URL
  }
}
export { NuxtEnvironmentConfig }

const dev = new NuxtEnvironmentConfig(
  '开发环境',
  7000,
  defaultBindHost,
  'http://localhost:8080'
)

export default {
  dev,
}
