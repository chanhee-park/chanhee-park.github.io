var element = React.createElement(Container, {
  title: 'EXPERIENCE',
  content: React.createElement(Experience, { experiences: Data.experiences })
});

ReactDOM.render(element, document.getElementById('experience'));