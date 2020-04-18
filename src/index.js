const contents = {
  'about': <About about={Data.about} />,
  'education': <Education educations={Data.educations} />,
  'experience': <Experience experiences={Data.experiences} />,
  'research': <Research researches={Data.researches} />
}

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
