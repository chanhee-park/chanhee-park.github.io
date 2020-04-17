function renderResearchSection () {
  // Data
  const researches = Data.researches;

  // Title
  const title = 'RESEARCH';

  // Contents
  const listItems = researches.map((research, i) => (
    <li key={i}>
      <div className="research_title">{research['title']}</div>
      <Authors authors={research['authors']} />
      <div className="conf_title">{research['conf_title']} (<strong>{research['conf_short']}</strong>), 2020.</div>
      <Materials research={research} fileName={getFileName(research, 'thumb')} />
      {research['thumb'] && <Thumbnails fileName={getFileName(research, 'thumb')} />}
    </li >
  ));
  const content = <ul className="items"> {listItems}</ul>

  // Combine the title and the content
  const element = <Section title={title} content={content}></Section>

  // Render
  ReactDOM.render(
    element,
    document.getElementById('research')
  );
}

// Functions 
function getFileName (research) {
  return `${research['year']}-${research['short_conf']}-${research['id']}`;
}

renderResearchSection();