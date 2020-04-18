var element = React.createElement(Container, {
  title: 'EDUCATION',
  content: React.createElement(Education, { educations: Data.educations })
});

ReactDOM.render(element, document.getElementById('education'));