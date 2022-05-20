// App
function App() {
  return (
    <div>
      <nav class="navbar" id="nav">
        <div class="menu no-mobile">
          <a class="item" href="#experiences">
            Experiences
          </a>
          <a class="item" href="#educations">
            Educations
          </a>
          <a class="item" href="#researches">
            Researches
          </a>
          <a
            class="item"
            href="assets/chanhee-resume.pdf"
            target="_blank"
            onClick={() => {
              alert(
                "이 링크의 이력서는 2021년 5월에 마지막으로 업데이트 되었습니다."
              );
            }}
          >
            Resume
          </a>
          <a
            class="item"
            target="_blank"
            href="https://www.linkedin.com/in/chanhee-park"
          >
            LinkedIn
          </a>
        </div>
      </nav>
      <main>
        <Intro about={Data.about} />
        <Container title="Work Experiences" cssId="experiences">
          <Experiences experiences={Data.experiences} />
        </Container>
        <Container title="Educations" cssId="educations">
          <Educations educations={Data.educations} />
        </Container>
        <Container title="Researches" cssId="researches">
          <Researches researches={Data.researches} />
        </Container>
      </main>
      <footer>
        <p id="last_update">Last updated on 2022.05.20</p>
        <p id="copyright">© 2022 Chan-Hee Park</p>
      </footer>
    </div>
  );
}

// Common
function Container(props) {
  const { cssId, title, children } = props;
  return (
    <section id={cssId}>
      <div className="container">
        <h2 className="section_title">{title}</h2>
        <div className="section_content">{children}</div>
      </div>
    </section>
  );
}

function Card(props) {
  const title = props.title;
  const paragraphs = props.paragraphs;
  const listParagraphs = _.map(paragraphs, (p, i) => <p key={i}>{p}</p>);
  return (
    <div className="card">
      <div className="container">
        <h3 className="card_title">{title}</h3>
        <div className="card_letter">{listParagraphs}</div>
      </div>
    </div>
  );
}

// Intro
function Intro(props) {
  const { about } = props;
  return (
    <section class="intro" id="intro">
      <div class="container">
        <h1 class="name">Chan-Hee Park</h1>
        <div class="center">
          <img
            class="image--cover only-mobile center-content"
            src="assets/chanhee-profile.jpg"
            alt="Photo of Chanhee"
          />
        </div>
        <div class="flex-outer">
          <div class="flex-9">
            <section class="about" id="about">
              <About about={about} />
            </section>
            <div class="only-mobile">
              <a href="mailto: chanhee13p@gmail.com" class="mobile-email">
                <i class="fas fa-envelope fa-fw"></i>
                <span>chanhee13p@gmail.com</span>
              </a>
            </div>
          </div>
          <div class="flex-3 no-mobile">
            <div class="center">
              <img
                class="image--cover center-content"
                src="assets/chanhee-profile.jpg"
                alt="Photo of Chanhee"
              />
            </div>
            <ul class="tags">
              <li class="tag">#Web_Front_End</li>
              <li class="tag">#Data_Analytics</li>
            </ul>
          </div>
        </div>
        <Card
          title={Data.introCard.title}
          paragraphs={Data.introCard.paragraphs}
        />
      </div>
    </section>
  );
}
// About
function About(props) {
  return _.map(props.about, (p, i) => <p key={i}>{p}</p>);
}

// Experience
function Experiences(props) {
  const listItems = _.map(props.experiences, (experience, i) => {
    return (
      <li key={"experience" + i}>
        <span className="status">{experience["status"]}</span>
        <a
          className="whereiwas"
          href={experience["href"]}
          target="_blank"
          onClick={() => {
            if (!experience["href"]) {
              alert("현재 회사 홈페이지 이용이 불가능합니다. 죄송합니다.");
            }
          }}
        >
          {experience["where"]}
        </a>
        <span className="period">{experience["period"]}</span>
        {experience["story"].map((paragraph, i) => {
          return <p key={`experience-${i}`}>{paragraph}</p>;
        })}
      </li>
    );
  });
  return <ul className="items"> {listItems}</ul>;
}

// Education
function Educations(props) {
  const listItems = _.map(props.educations, (education, i) => {
    return (
      <li key={"education" + i}>
        <span className="status">{education["course"]}</span>
        <a className="whereiwas" href={education["href"]} target="_blank">
          {education["where"]}
        </a>
        <span className="period">{education["period"]}</span>
        <p>{education["story"]}</p>
      </li>
    );
  });
  return <ul className="items">{listItems}</ul>;
}

// Research
function Researches(props) {
  const listItems = _.map(props.researches, (research, i) => {
    const fileName = getFileName(research);
    const thumbType = research["gif"] ? "gif" : "png";
    return (
      <li key={i} className="researchItem">
        <div className="flex-outer">
          <div className="flex-8 text-zone">
            <h3 className="research_title">{research["title"]}</h3>
            <Authors authors={research["authors"]} />
            <div className="conf_title">
              {research["conf_title"]}
              {research["conf_short"] && (
                <strong>{`(${research["conf_short"]})`}</strong>
              )}
              , {research["year"]}.
            </div>
            <Materials
              project={research}
              fileName={fileName}
              projectType="researches"
            />
          </div>
          <div className="flex-4 image-zone">
            {
              <Thumbnail
                fileName={fileName}
                fileType={thumbType}
                projectType="researches"
              />
            }
          </div>
        </div>
      </li>
    );
  });
  return <ul className="items">{listItems}</ul>;
}

// Research & Projects
function Materials(props) {
  const project = props.project;
  const type = props.projectType;
  const fileNameWithDir = "assets/" + type + "/" + props.fileName;
  return (
    <div className="materials">
      {project["pdf"] && (
        <a href={fileNameWithDir + ".pdf"} target="_blank">
          Paper
        </a>
      )}
      {project["poster"] && (
        <a href={fileNameWithDir + "-poster.pdf"} target="_blank">
          Poster
        </a>
      )}
      {project["video"] && (
        <a href={fileNameWithDir + "-video.mp4"} target="_blank">
          Video
        </a>
      )}
    </div>
  );
}

function Thumbnail(props) {
  return (
    <div className="paper_thumbnail">
      <img
        src={
          "assets/" +
          props.projectType +
          "/" +
          props.fileName +
          "-thumb." +
          props.fileType
        }
      />
    </div>
  );
}

function Authors(props) {
  const listItems = props.authors.map((authorName, i) => {
    const classes = authorName == "Chanhee Park" ? "name my-name" : "name";
    return (
      <span key={i} className={classes}>
        {authorName + (i != props.authors.length - 1 ? ", " : "")}
      </span>
    );
  });
  return <div className="authors">{listItems}</div>;
}
