function renderExperienceSection() {
  // Data
  var experiences = Data.experiences;

  // Title
  var title = 'EXPERIENCE';

  // Content
  var listItems = experiences.map(function (experience, i) {
    return React.createElement(
      'li',
      { key: "experience" + i },
      React.createElement(
        'a',
        { href: experience['href'], target: '_blank' },
        experience['where']
      ),
      React.createElement(
        'div',
        { className: 'status' },
        experience['status']
      ),
      React.createElement(
        'div',
        { className: 'period' },
        experience['period']
      ),
      React.createElement(
        'p',
        null,
        experience['story']
      )
    );
  });
  var content = React.createElement(
    'ul',
    { className: 'items' },
    ' ',
    listItems
  );

  // Combine the title and the content
  var element = React.createElement(Section, { title: title, content: content });

  // Render
  ReactDOM.render(element, document.getElementById('experience'));
}

renderExperienceSection();