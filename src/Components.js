
// Common
function Container (props) {
  return (
    <div className="container">
      <h2 className="section_title">{props.title}</h2>
      {props.content}
    </div>
  );
}

// About
function About (props) {
  return _.map(props.about, (p, i) => <p key={i}>{p}</p>);
}

// Experience
function Experience (props) {
  const listItems = _.map(props.experiences, (experience, i) => {
    return (
      <li key={"experience" + i}>
        <a href={experience['href']} target="_blank">{experience['where']}</a>
        <div className='status'>{experience['status']}</div>
        <div className='period'>{experience['period']}</div>
        <p>{experience['story']}</p>
      </li>
    );
  });
  return <ul className="items"> {listItems}</ul>
}

// Education 
function Education (props) {
  const listItems = _.map(props.educations, (education, i) => {
    return (
      <li key={"education" + i}>
        <strong>{education['course']}</strong>
        <a href={education['href']}>{education['where']}</a>
        <div className='period'>{education['period']}</div>
        <p>{education['story']}</p>
      </li>
    );
  });
  return content = <ul className="items"> {listItems}</ul>
}

// Research
function Research (props) {
  const listItems = _.map(props.researches, (research, i) => {
    return (
      <li key={i}>
        <div className="research_title">{research['title']}</div>
        <Authors authors={research['authors']} />
        <div className="conf_title">{research['conf_title']} (<strong>{research['conf_short']}</strong>), 2020.</div>
        <Materials research={research} fileName={getFileName(research, 'thumb')} />
        {research['thumb'] && <Thumbnails fileName={getFileName(research, 'thumb')} />}
      </li >
    );
  });
  return <ul className="items"> {listItems}</ul>
}

function Materials (props) {
  const research = props.research;
  const fileNameWithDir = "research/" + props.fileName;
  return (<div className="materials">
    {research['pdf'] && <a href={fileNameWithDir + ".pdf"} target="_blank">Paper</a>}
    {research['poster'] && <a href={fileNameWithDir + "-poster.pdf"} target="_blank">Poster</a>}
    {research['video'] && <a href={fileNameWithDir + "-video.mp4"} target="_blank">Video</a>}
    {research['code'] && <a href={research['code']} target="_blank">Code</a>}
    {research['site'] && <a href={research['site']} target="_blank">Site</a>}
  </div>);
}

function Thumbnails (props) {
  return (
    <div className="paper_thumbnail">
      <img src={"research/" + props.fileName + "-thumb.png"} />
    </div>
  );
}

function Authors (props) {
  const listItems = props.authors.map((authorName, i) => (
    authorName == 'Chanhee Park' ?
      <strong className="my_name" key={i}>{authorName + ', '}</strong>
      : <span key={i}>{authorName + (i != props.authors.length - 1 ? ', ' : '')}</span>
  ));
  return <div className='authors'>{listItems}</div>
}