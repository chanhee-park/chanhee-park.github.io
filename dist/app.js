// Babel setup for react:
// https://babeljs.io/docs/en/6.26.3/babel-preset-react
// npx babel src --out-dir dist --watch

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

// Functions
function getFileName(research) {
  return `${research["year"]}-${research["short_conf"]}-${research["id"]}`;
}