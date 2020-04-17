
// Common
function Section (props) {
  return (
    <div className="container">
      <h2 className="section_title">{props.title}</h2>
      {props.content}
    </div>
  );
}

// Research
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