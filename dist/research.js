var element = React.createElement(Container, {
  title: 'RESEARCH',
  content: React.createElement(Research, { researches: Data.researches })
});

ReactDOM.render(element, document.getElementById('research'));

// Functions 
function getFileName(research) {
  return research['year'] + '-' + research['short_conf'] + '-' + research['id'];
}