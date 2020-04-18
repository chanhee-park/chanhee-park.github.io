const element = (
  <Container
    title='RESEARCH'
    content={<Research researches={Data.researches} />}
  />
);

ReactDOM.render(
  element,
  document.getElementById('research')
);

// Functions 
function getFileName (research) {
  return `${research['year']}-${research['short_conf']}-${research['id']}`;
}
