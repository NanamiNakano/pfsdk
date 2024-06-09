import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock"],
}

export default config
