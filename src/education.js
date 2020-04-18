const element = (
  <Container
    title='EDUCATION'
    content={<Education educations={Data.educations} />}
  />
);

ReactDOM.render(
  element,
  document.getElementById('education')
);
