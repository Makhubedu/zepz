/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  
  testEnvironment: 'jsdom',
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/jest-config/file-mock.js",
    '.(css|less)$': '<rootDir>/src/jest-config/style-mock.js'
  },
};