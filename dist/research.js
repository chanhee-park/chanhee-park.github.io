function renderResearchSection() {
  // Data
  var researches = Data.researches;

  // Title
  var title = 'RESEARCH';

  // Contents
  var listItems = researches.map(function (research, i) {
    return React.createElement(
      'li',
      { key: i },
      React.createElement(
        'div',
        { className: 'research_title' },
        research['title']
      ),
      React.createElement(Authors, { authors: research['authors'] }),
      React.createElement(
        'div',
        { className: 'conf_title' },
        research['conf_title'],
        ' (',
        React.createElement(
          'strong',
          null,
          research['conf_short']
        ),
        '), 2020.'
      ),
      React.createElement(Materials, { research: research, fileName: getFileName(research, 'thumb') }),
      research['thumb'] && React.createElement(Thumbnails, { fileName: getFileName(research, 'thumb') })
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
  ReactDOM.render(element, document.getElementById('research'));
}

// Functions 
function getFileName(research) {
  return research['year'] + '-' + research['short_conf'] + '-' + research['id'];
}

renderResearchSection();