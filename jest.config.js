module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  moduleNameMapper: {
    "Features/(.*)": "<rootDir>/src/Features/$1",
    "Pages/(.*)": "<rootDir>/src/Pages/$1",
    "Global/(.*)": "<rootDir>/src/Global/$1"
  }
}
