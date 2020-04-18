// Common
function Container (props) {
  return (
    <div className="container">
      <h2 className="section_title">{props.title}</h2>
      {props.content}
    </div>
  );
}

function Card (props) {
  const title = props.title;
  const paragraphs = props.paragraphs;
  const listParagraphs = _.map(paragraphs, (p, i) => <p key={i}>{p}</p>);
  return (
    <div className="card">
      <div className="container">
        <h3 className="card_title">{title}</h3>
        <div className="card_letter">
          {listParagraphs}
        </div>
      </div>
    </div>
  );
}

// About
function About (props) {
  return _.map(props.about, (p, i) => <p key={i}>{p}</p>);
}

// Experience
function Experiences (props) {
  const listItems = _.map(props.experiences, (experience, i) => {
    return (
      <li key={"experience" + i}>
        <span className='status'>{experience['status']}</span>
        <a href={experience['href']} target="_blank">{experience['where']}</a>
        <span className='period'>{experience['period']}</span>
        <p>{experience['story']}</p>
      </li>
    );
  });
  return <ul className="items"> {listItems}</ul>
}

// Education 
function Educations (props) {
  const listItems = _.map(props.educations, (education, i) => {
    return (
      <li key={"education" + i}>
        <span>{education['course']}</span>
        <a href={education['href']} target="_blank">{education['where']}</a>
        <span className='period'>{education['period']}</span>
        <p>{education['story']}</p>
      </li>
    );
  });
  return content = <ul className="items"> {listItems}</ul>
}

// Research
function Researches (props) {
  const listItems = _.map(props.researches, (research, i) => {
    const fileName = getFileName(research);
    return (
      <li key={i} className="researchItem">
        <div className="flex-outer">
          <div className="flex-8 text-zone">
            <h3 className="research_title">{research['title']}</h3>
            <Authors authors={research['authors']} />
            <div className="conf_title">{research['conf_title']} (<strong>{research['conf_short']}</strong>), 2020.</div>
            <Materials research={research} fileName={fileName} />
          </div>
          <div className="flex-4 image-zone">
            {research['video'] && <VideoThumbnail fileName={fileName} />}
            {!research['video'] && <Thumbnail fileName={fileName} />}
          </div>
        </div>
      </li >
    );
  });
  return <ul className="items">{listItems}</ul>;
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

function VideoThumbnail (props) {
  return (
    <div className="paper_thumbnail">
      <video autoPlay loop muted preload="metadata" >
        <source src={"research/" + props.fileName + "-video.mp4"} type="video/mp4" alt="Video of Speak Go" />>
      </video>
    </div>
  );
}

function Thumbnail (props) {
  return (
    <div className="paper_thumbnail">
      <img src={"research/" + props.fileName + "-thumb.png"} />
    </div>
  );
}

function Authors (props) {
  const listItems = props.authors.map((authorName, i) => {
    const classes = (authorName == 'Chanhee Park') ? 'name my-name' : 'name';
    return (
      <span
        key={i}
        className={classes}>
        {authorName + (i != props.authors.length - 1 ? ', ' : '')}
      </span>
    );
  });
  return <div className='authors'>{listItems}</div>
}
