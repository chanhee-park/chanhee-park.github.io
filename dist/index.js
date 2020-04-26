var contents = {
  'about': React.createElement(About, { about: Data.about }),
  'experiences': React.createElement(Experiences, { experiences: Data.experiences }),
  'educations': React.createElement(Educations, { educations: Data.educations }),
  'researches': React.createElement(Researches, { researches: Data.researches }),
  'projects': React.createElement(Projects, { projects: Data.projects })
};

var descriptions = {
  'researches': '학술지에 출판되거나 학회에서 발표된 연구입니다.',
  'projects': '출판과 발표는 되지 않았지만 많은 것을 배운 프로젝트를 여기에 적었습니다.'

  // Render Card
};ReactDOM.render(React.createElement(Card, {
  title: Data.introCard.title,
  paragraphs: Data.introCard.paragraphs }), // element
document.getElementById('card-root') // rootId
);

// Render Sections
_.forEach(contents, function (content, key) {
  ReactDOM.render(React.createElement(Container, { title: key.toUpperCase(), content: content, description: descriptions[key] }), // element
  document.getElementById(key) // rootId
  );
});

// Functions 
function getFileName(research) {
  return research['year'] + '-' + research['short_conf'] + '-' + research['id'];
}