var contents = {
  'about': React.createElement(About, { about: Data.about }),
  'education': React.createElement(Education, { educations: Data.educations }),
  'experience': React.createElement(Experience, { experiences: Data.experiences }),
  'research': React.createElement(Research, { researches: Data.researches })
};

_.forEach(contents, function (content, key) {
  ReactDOM.render(React.createElement(Container, { title: key.toUpperCase(), content: content }), // element
  document.getElementById(key) // rootId
  );
});

// Functions 
function getFileName(research) {
  return research['year'] + '-' + research['short_conf'] + '-' + research['id'];
}