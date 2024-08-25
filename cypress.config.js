const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // ตั้งค่าเป็น true เพื่อให้บันทึกวิดีโอ
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
