function renderExperienceSection () {
  // Data
  const experiences = Data.experiences;

  // Title
  const title = 'EXPERIENCE';

  // Content
  const listItems = experiences.map((experience, i) => (
    <li key={"experience" + i}>
      <a href={experience['href']} target="_blank">{experience['where']}</a>
      <div className='status'>{experience['status']}</div>
      <div className='period'>{experience['period']}</div>
      <p>{experience['story']}</p>
    </li>
  ));
  const content = <ul className="items"> {listItems}</ul>

  // Combine the title and the content
  const element = <Section title={title} content={content}></Section>

  // Render
  ReactDOM.render(
    element,
    document.getElementById('experience')
  );
}

renderExperienceSection();
