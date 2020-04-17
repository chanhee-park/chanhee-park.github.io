function renderEducationSection () {
  // Data
  const educations = Data.educations;

  // Title
  const title = 'EDUCATION';

  // Contents
  const listItems = educations.map((education, i) => (
    <li key={"education" + i}>
      <strong>{education['course']}</strong>
      <a href={education['href']}>{education['where']}</a>
      <div className='period'>{education['period']}</div>
      <p>{education['story']}</p>
    </li>
  ));
  const content = <ul className="items"> {listItems}</ul>

  // Get JSX
  const element = <Section title={title} content={content}></Section>

  // Render
  ReactDOM.render(
    element,
    document.getElementById('education')
  );
}

renderEducationSection();