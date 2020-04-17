function renderEducationSection() {
  // Data
  var educations = Data.educations;

  // Title
  var title = 'EDUCATION';

  // Contents
  var listItems = educations.map(function (education, i) {
    return React.createElement(
      'li',
      { key: "education" + i },
      React.createElement(
        'strong',
        null,
        education['course']
      ),
      React.createElement(
        'a',
        { href: education['href'] },
        education['where']
      ),
      React.createElement(
        'div',
        { className: 'period' },
        education['period']
      ),
      React.createElement(
        'p',
        null,
        education['story']
      )
    );
  });
  var content = React.createElement(
    'ul',
    { className: 'items' },
    ' ',
    listItems
  );

  // Get JSX
  var element = React.createElement(Section, { title: title, content: content });

  // Render
  ReactDOM.render(element, document.getElementById('education'));
}

renderEducationSection();