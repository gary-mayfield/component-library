module.exports = {
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    }
  };