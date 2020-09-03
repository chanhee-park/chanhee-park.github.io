// Common
function Container(props) {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h2",
      { className: "section_title" },
      props.title
    ),
    props.description && React.createElement(
      "p",
      { className: "descriptsion section_description" },
      props.description
    ),
    props.content
  );
}

function Card(props) {
  const title = props.title;
  const paragraphs = props.paragraphs;
  const listParagraphs = _.map(paragraphs, (p, i) => React.createElement(
    "p",
    { key: i },
    p
  ));
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h3",
        { className: "card_title" },
        title
      ),
      React.createElement(
        "div",
        { className: "card_letter" },
        listParagraphs
      )
    )
  );
}

// About
function About(props) {
  return _.map(props.about, (p, i) => React.createElement(
    "p",
    { key: i },
    p
  ));
}

// Experience
function Experiences(props) {
  const listItems = _.map(props.experiences, (experience, i) => {
    return React.createElement(
      "li",
      { key: "experience" + i },
      React.createElement(
        "span",
        { className: "status" },
        experience['status']
      ),
      React.createElement(
        "a",
        { className: "whereiwas", href: experience['href'], target: "_blank" },
        experience['where']
      ),
      React.createElement(
        "span",
        { className: "period" },
        experience['period']
      ),
      React.createElement(
        "p",
        null,
        experience['story']
      )
    );
  });
  return React.createElement(
    "ul",
    { className: "items" },
    " ",
    listItems
  );
}

// Education 
function Educations(props) {
  const listItems = _.map(props.educations, (education, i) => {
    return React.createElement(
      "li",
      { key: "education" + i },
      React.createElement(
        "span",
        { className: "status" },
        education['course']
      ),
      React.createElement(
        "a",
        { className: "whereiwas", href: education['href'], target: "_blank" },
        education['where']
      ),
      React.createElement(
        "span",
        { className: "period" },
        education['period']
      ),
      React.createElement(
        "p",
        null,
        education['story']
      )
    );
  });
  return content = React.createElement(
    "ul",
    { className: "items" },
    " ",
    listItems
  );
}

// Research
function Researches(props) {
  const listItems = _.map(props.researches, (research, i) => {
    const fileName = getFileName(research);
    const thumbType = research['gif'] ? 'gif' : 'png';
    return React.createElement(
      "li",
      { key: i, className: "researchItem" },
      React.createElement(
        "div",
        { className: "flex-outer" },
        React.createElement(
          "div",
          { className: "flex-8 text-zone" },
          React.createElement(
            "h3",
            { className: "research_title" },
            research['title']
          ),
          React.createElement(Authors, { authors: research['authors'] }),
          React.createElement(
            "div",
            { className: "conf_title" },
            research['conf_title'],
            " (",
            React.createElement(
              "strong",
              null,
              research['conf_short']
            ),
            "), ",
            research['year'],
            "."
          ),
          React.createElement(Materials, { project: research, fileName: fileName, projectType: "researches" })
        ),
        React.createElement(
          "div",
          { className: "flex-4 image-zone" },
          React.createElement(Thumbnail, { fileName: fileName, fileType: thumbType, projectType: "researches" })
        )
      )
    );
  });
  return React.createElement(
    "ul",
    { className: "items" },
    listItems
  );
}

// Projects
function Projects(props) {
  const listItems = _.map(props.projects, (project, i) => {
    const fileName = project['id'];
    const thumbType = project['gif'] ? 'gif' : 'png';
    return React.createElement(
      "li",
      { key: i, className: "projectItem" },
      React.createElement(
        "div",
        { className: "flex-outer" },
        React.createElement(
          "div",
          { className: "flex-8 text-zone" },
          React.createElement(
            "h3",
            { className: "project_title" },
            project['title']
          ),
          React.createElement(
            "div",
            { className: "project_year" },
            " ",
            project['year']
          ),
          React.createElement(
            "div",
            { className: "project_description" },
            " ",
            project['description']
          ),
          React.createElement(Materials, { project: project, fileName: fileName, projectType: "projects" })
        ),
        React.createElement(
          "div",
          { className: "flex-4 image-zone" },
          React.createElement(Thumbnail, { fileName: fileName, fileType: thumbType, projectType: "projects" })
        )
      )
    );
  });
  return React.createElement(
    "ul",
    { className: "items" },
    listItems
  );
}

// Research & Projects
function Materials(props) {
  const project = props.project;
  const type = props.projectType;
  const fileNameWithDir = "assets/" + type + "/" + props.fileName;
  return React.createElement(
    "div",
    { className: "materials" },
    project['pdf'] && React.createElement(
      "a",
      { href: fileNameWithDir + ".pdf", target: "_blank" },
      "Paper"
    ),
    project['poster'] && React.createElement(
      "a",
      { href: fileNameWithDir + "-poster.pdf", target: "_blank" },
      "Poster"
    ),
    project['video'] && React.createElement(
      "a",
      { href: fileNameWithDir + "-video.mp4", target: "_blank" },
      "Video"
    ),
    project['code'] && React.createElement(
      "a",
      { href: project['code'], target: "_blank" },
      "Code"
    ),
    project['site'] && React.createElement(
      "a",
      { href: project['site'], target: "_blank" },
      "Site"
    )
  );
}

function Thumbnail(props) {
  return React.createElement(
    "div",
    { className: "paper_thumbnail" },
    React.createElement("img", { src: "assets/" + props.projectType + "/" + props.fileName + "-thumb." + props.fileType })
  );
}

function Authors(props) {
  const listItems = props.authors.map((authorName, i) => {
    const classes = authorName == 'Chanhee Park' ? 'name my-name' : 'name';
    return React.createElement(
      "span",
      {
        key: i,
        className: classes },
      authorName + (i != props.authors.length - 1 ? ', ' : '')
    );
  });
  return React.createElement(
    "div",
    { className: "authors" },
    listItems
  );
}