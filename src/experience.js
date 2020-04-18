const element = (
  <Container
    title='EXPERIENCE'
    content={<Experience experiences={Data.experiences} />}
  />
);

ReactDOM.render(
  element,
  document.getElementById('experience')
);
