const contents = {
  'about': <About about={Data.about} />,
  'experiences': <Experiences experiences={Data.experiences} />,
  'educations': <Educations educations={Data.educations} />,
  'researches': <Researches researches={Data.researches} />,
}

// Render Card
ReactDOM.render(
  <Card
    title={Data.introCard.title}
    paragraphs={Data.introCard.paragraphs}>
  </Card>, // element
  document.getElementById('card-root') // rootId
);

// Render Sections
_.forEach(contents, (content, key) => {
  ReactDOM.render(
    <Container title={key.toUpperCase()} content={content} />, // element
    document.getElementById(key) // rootId
  );
});

// Functions 
function getFileName (research) {
  return `${research['year']}-${research['short_conf']}-${research['id']}`;
}

