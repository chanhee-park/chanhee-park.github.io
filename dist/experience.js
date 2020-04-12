// Title
var title = 'EXPERIENCE';

// Contents
var exps = [{
  "where": "UC Davis VIDI Labs",
  "status": "Visiting Researcher",
  "href": "https://vidi.cs.ucdavis.edu/",
  "period": "2020.03 - 현재",
  "story": "\n      VIDI Labs \uB294 \uCE98\uB9AC\uD3EC\uB2C8\uC544 \uC8FC\uB9BD\uB300\uD559 \uB370\uC774\uBE44\uC2A4 \uCEA0\uD37C\uC2A4 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC\uC758 \uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uC5F0\uAD6C\uC2E4\uC785\uB2C8\uB2E4.\n      \uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uBD84\uC57C\uC758 \uAD8C\uC704\uC788\uB294 \uC5F0\uAD6C\uC790\uC774\uC2E0 Kwan-Liu Ma \uAD50\uC218\uB2D8\uC758 \uC9C0\uB3C4 \uC544\uB798\uC11C \n      \uBA38\uC2E0\uB7EC\uB2DD \uBAA8\uB378\uC758 \uC131\uB2A5 \uD3C9\uAC00 \uC5F0\uAD6C\uC640 \uB300\uC6A9\uB7C9 \uB124\uD2B8\uC6CC\uD06C \uBE44\uAD50\uB97C \uC704\uD55C \uC2DC\uAC01\uD654 \uC5F0\uAD6C\uB97C \uC218\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n      \uC774\uACF3\uC5D0\uC11C \uC5F0\uAD6C\uD558\uB294 \uB3D9\uC548 \uC5F0\uAD6C\uC758 \uAC00\uCE58\uB97C \uD310\uB2E8\uD558\uB294 \uC548\uBAA9\uACFC \uC601\uC5B4 \uC2E4\uB825\uC744 \uD5A5\uC0C1\uC2DC\uCF1C \uAE00\uB85C\uBC8C \uC778\uC7AC\uAC00 \uB418\uACE0\uC790 \uD569\uB2C8\uB2E4.\n      "
}, {
  "where": "(주) 더더랩",
  "status": "Software Membership & Intern",
  "href": "",
  "period": "2017.04 - 2019.02",
  "story": "\n      \uB354\uB354\uB7A9\uC740 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uAC1C\uBC1C\uD558\uACE0 \uACF5\uAE09\uD558\uB294 \uD68C\uC0AC\uC785\uB2C8\uB2E4.\n      \uC800\uB294 \uC774 \uD68C\uC0AC\uC5D0\uC11C \uC6F9 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uB85C\uC11C \uC5ED\uB7C9\uC744 \uAC08\uACE0 \uB2E6\uC558\uC2B5\uB2C8\uB2E4.\n      2017\uB144 \uBD04, \uD559\uAD50\uC758 \uC18C\uAC1C\uB85C \uBA64\uBC84\uC2ED \uD504\uB85C\uADF8\uB7A8\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4. \uBA64\uBC84\uC2ED \uD504\uB85C\uADF8\uB7A8\uC774 \uC885\uB8CC\uB41C \uC774\uD6C4\uC5D0\uB3C4 \uC778\uD134\uC73C\uB85C \uADFC\uBB34\uD588\uC2B5\uB2C8\uB2E4.\n      \uB354\uB354\uB7A9\uC5D0\uC11C \uADFC\uBB34\uD558\uB294 \uB3D9\uC548 TypeScript, Vue, Firebase \uB4F1 \uB2E4\uC591\uD55C \uC6F9 \uAC1C\uBC1C \uAE30\uC220 \uC2A4\uD0DD\uC744 \uC313\uC558\uC2B5\uB2C8\uB2E4.\n      \uCC38\uC5EC\uD55C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uC8FC\uB85C \uC6F9 \uD504\uB860\uD2B8\uC5D4\uB4DC\uC640 \uB370\uC774\uD130 \uC2DC\uAC01\uD654 \uAC1C\uBC1C\uC744 \uB9E1\uC558\uC2B5\uB2C8\uB2E4.\n      "
}];
var list_item = exps.map(function (exp, i) {
  return React.createElement(
    "li",
    { key: "experience" + i },
    exp['href'].length > 0 ? React.createElement(
      "a",
      { href: exp['href'] },
      exp['where']
    ) : React.createElement(
      "strong",
      null,
      exp['where']
    ),
    exp['status'],
    React.createElement(
      "div",
      { className: "left" },
      exp['period']
    ),
    React.createElement(
      "p",
      null,
      exp['story']
    )
  );
});
var content = getListContent(list_item);

// Get JSX
var element = getSectionJSX({ title: title, content: content });

// Render
ReactDOM.render(element, document.getElementById('experience'));