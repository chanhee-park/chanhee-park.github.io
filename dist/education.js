// Title
var title = 'EDUCATION';

// Contents
var edus = [{
  "course": "석사 과정",
  "where": "아주대학교 라이프미디어 협동과정",
  "href": "http://www.ajou.ac.kr/dt/index.jsp",
  "period": "2019-재학 중",
  "story": "\uB370\uC774\uD130 \uC2DC\uAC01\uD654\uC5D0 \uB300\uD55C \uB354 \uC2EC\uB3C4 \uAE4A\uC740 \uC5F0\uAD6C\uB97C \uD558\uAE30 \uC704\uD574 \uB300\uD559\uC6D0\uC5D0 \uC9C4\uD559\uD588\uC2B5\uB2C8\uB2E4.\n      \uC6F9 \uAE30\uBC18 \uB370\uC774\uD130 \uBD84\uC11D \uC2DC\uC2A4\uD15C, \uBA38\uC2E0\uB7EC\uB2DD \uBAA8\uB378\uC758 \uC131\uB2A5 \uD3C9\uAC00, \uB124\uD2B8\uC6CC\uD06C \uC2DC\uAC01\uD654\uB97C \uC5F0\uAD6C\uD569\uB2C8\uB2E4."
}, {
  "course": "학사",
  "where": "아주대학교 미디어학과",
  "href": "https://media.ajou.ac.kr/media/index.jsp",
  "period": "2019-2019",
  "story": "\uBBF8\uB514\uC5B4 \uCF58\uD150\uCE20 \uAE30\uD68D\uC790\uC774\uC790 \uAC1C\uBC1C\uC790\uB85C \uC131\uC7A5\uD558\uAE30 \uC704\uD55C \uC2DC\uAC04\uC774\uC5C8\uC2B5\uB2C8\uB2E4.\n      \uD504\uB85C\uC81D\uD2B8\uB97C \uC911\uC2EC\uC73C\uB85C \uC9C4\uD589\uB418\uC5C8\uB358 \uD559\uAD50 \uC0DD\uD65C \uB355\uBD84\uC5D0 \uB2E4\uC591\uD55C \uC9C0\uC2DD\uACFC \uAE30\uC220\uC744 \uC775\uD790 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.\n      \uC6F9 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC704\uD558\uC5EC \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uACF5\uBD80\uD588\uACE0, \uC778\uD130\uD398\uC774\uC2A4 \uB514\uC790\uC778\uC744 \uC218\uC6D4\uD558\uAC8C \uD558\uAE30 \uC704\uD574 \uB2E4\uC591\uD55C \uC5B4\uB3C4\uBE44 \uB514\uC790\uC778 \uD234\uC744 \uC775\uD614\uC2B5\uB2C8\uB2E4.\n      \uB354 \uC88B\uC740 \uCF58\uD150\uCE20\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD558\uC5EC UX \uB514\uC790\uC778\uACFC \uB514\uC9C0\uD138 \uBBF8\uB514\uC5B4 \uC2EC\uB9AC\uD559\uC744 \uACF5\uBD80\uD588\uC2B5\uB2C8\uB2E4.\n      "
}];
var list_item = edus.map(function (edu, i) {
  return React.createElement(
    "li",
    { key: "education" + i },
    React.createElement(
      "strong",
      null,
      edu['course']
    ),
    React.createElement(
      "a",
      { href: edu['href'] },
      edu['where']
    ),
    React.createElement(
      "div",
      { className: "left" },
      edu['period']
    ),
    React.createElement(
      "p",
      null,
      edu['story']
    )
  );
});
var content = getListContent(list_item);

// Get JSX
var element = getSectionJSX({ title: title, content: content });

// Render
ReactDOM.render(element, document.getElementById('education'));