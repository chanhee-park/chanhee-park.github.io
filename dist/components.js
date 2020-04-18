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

function Card(props) {
  var title = props.title;
  var paragraphs = props.paragraphs;
  var listParagraphs = _.map(paragraphs, function (p, i) {
    return React.createElement(
      "p",
      { key: i },
      p
    );
  });
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
  return _.map(props.about, function (p, i) {
    return React.createElement(
      "p",
      { key: i },
      p
    );
  });
}

// Experience
function Experiences(props) {
  var listItems = _.map(props.experiences, function (experience, i) {
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
        { href: experience['href'], target: "_blank" },
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
  var listItems = _.map(props.educations, function (education, i) {
    return React.createElement(
      "li",
      { key: "education" + i },
      React.createElement(
        "span",
        null,
        education['course']
      ),
      React.createElement(
        "a",
        { href: education['href'], target: "_blank" },
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
  var listItems = _.map(props.researches, function (research, i) {
    var fileName = getFileName(research);
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
            "), 2020."
          ),
          React.createElement(Materials, { research: research, fileName: fileName })
        ),
        React.createElement(
          "div",
          { className: "flex-4 image-zone" },
          research['video'] && React.createElement(VideoThumbnail, { fileName: fileName }),
          !research['video'] && React.createElement(Thumbnail, { fileName: fileName })
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

function VideoThumbnail(props) {
  return React.createElement(
    "div",
    { className: "paper_thumbnail" },
    React.createElement(
      "video",
      { autoPlay: true, loop: true, muted: true, preload: "metadata" },
      React.createElement("source", { src: "research/" + props.fileName + "-video.mp4", type: "video/mp4", alt: "Video of Speak Go" }),
      ">"
    )
  );
}

function Thumbnail(props) {
  return React.createElement(
    "div",
    { className: "paper_thumbnail" },
    React.createElement("img", { src: "research/" + props.fileName + "-thumb.png" })
  );
}

function Authors(props) {
  var listItems = props.authors.map(function (authorName, i) {
    var classes = authorName == 'Chanhee Park' ? 'name my-name' : 'name';
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