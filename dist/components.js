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
    props.content
  );
}

// About
function About(props) {
  return _.map(props.about, function (p, i) {
    return React.createElement(
      "p",
      { key: i },
      p
    );
  });
}

// Experience
function Experience(props) {
  var listItems = _.map(props.experiences, function (experience, i) {
    return React.createElement(
      "li",
      { key: "experience" + i },
      React.createElement(
        "a",
        { href: experience['href'], target: "_blank" },
        experience['where']
      ),
      React.createElement(
        "div",
        { className: "status" },
        experience['status']
      ),
      React.createElement(
        "div",
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
function Education(props) {
  var listItems = _.map(props.educations, function (education, i) {
    return React.createElement(
      "li",
      { key: "education" + i },
      React.createElement(
        "strong",
        null,
        education['course']
      ),
      React.createElement(
        "a",
        { href: education['href'] },
        education['where']
      ),
      React.createElement(
        "div",
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
function Research(props) {
  var listItems = _.map(props.researches, function (research, i) {
    return React.createElement(
      "li",
      { key: i },
      React.createElement(
        "div",
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
        "), 2020."
      ),
      React.createElement(Materials, { research: research, fileName: getFileName(research, 'thumb') }),
      research['thumb'] && React.createElement(Thumbnails, { fileName: getFileName(research, 'thumb') })
    );
  });
  return React.createElement(
    "ul",
    { className: "items" },
    " ",
    listItems
  );
}

function Materials(props) {
  var research = props.research;
  var fileNameWithDir = "research/" + props.fileName;
  return React.createElement(
    "div",
    { className: "materials" },
    research['pdf'] && React.createElement(
      "a",
      { href: fileNameWithDir + ".pdf", target: "_blank" },
      "Paper"
    ),
    research['poster'] && React.createElement(
      "a",
      { href: fileNameWithDir + "-poster.pdf", target: "_blank" },
      "Poster"
    ),
    research['video'] && React.createElement(
      "a",
      { href: fileNameWithDir + "-video.mp4", target: "_blank" },
      "Video"
    ),
    research['code'] && React.createElement(
      "a",
      { href: research['code'], target: "_blank" },
      "Code"
    ),
    research['site'] && React.createElement(
      "a",
      { href: research['site'], target: "_blank" },
      "Site"
    )
  );
}

function Thumbnails(props) {
  return React.createElement(
    "div",
    { className: "paper_thumbnail" },
    React.createElement("img", { src: "research/" + props.fileName + "-thumb.png" })
  );
}

function Authors(props) {
  var listItems = props.authors.map(function (authorName, i) {
    return authorName == 'Chanhee Park' ? React.createElement(
      "strong",
      { className: "my_name", key: i },
      authorName + ', '
    ) : React.createElement(
      "span",
      { key: i },
      authorName + (i != props.authors.length - 1 ? ', ' : '')
    );
  });
  return React.createElement(
    "div",
    { className: "authors" },
    listItems
  );
}