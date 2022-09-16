const path = require("path");
const { generateTheme, getLessVars } = require("antd-theme-generator");

const options = {
  stylesDir: path.join(__dirname, "./src/styles"),
  antDir: path.join(__dirname, "./node_modules/antd"),
  varFile: path.join(__dirname, "./src/styles/vars.less"),
  themeVariables: [
    "@primary-color",
    "@font-family",
    "@font-size-base",
    "@coherent-btn-hover",
    "@coherent-btn-active",
    "@coherent-table-row-hover-bg",
  ],
  indexFileName: "index.html",
  outputFilePath: path.join(__dirname, "./public/color.less"),
  customColorRegexArray: [/^fade\(.*\)$/],
};

generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
