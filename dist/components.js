// App
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "nav",
      { "class": "navbar", id: "nav" },
      React.createElement(
        "div",
        { "class": "menu no-mobile" },
        React.createElement(
          "a",
          { "class": "item", href: "#experiences" },
          "Experiences"
        ),
        React.createElement(
          "a",
          { "class": "item", href: "#educations" },
          "Educations"
        ),
        React.createElement(
          "a",
          { "class": "item", href: "#researches" },
          "Researches"
        ),
        React.createElement(
          "a",
          {
            "class": "item",
            href: "assets/chanhee-resume.pdf",
            target: "_blank",
            onClick: () => {
              alert("이 링크의 이력서는 2021년 5월에 마지막으로 업데이트 되었습니다.");
            }
          },
          "Resume"
        ),
        React.createElement(
          "a",
          {
            "class": "item",
            target: "_blank",
            href: "https://www.linkedin.com/in/chanhee-park"
          },
          "LinkedIn"
        )
      )
    ),
    React.createElement(
      "main",
      null,
      React.createElement(Intro, { about: Data.about }),
      React.createElement(
        Container,
        { title: "Work Experiences", cssId: "experiences" },
        React.createElement(Experiences, { experiences: Data.experiences })
      ),
      React.createElement(
        Container,
        { title: "Educations", cssId: "educations" },
        React.createElement(Educations, { educations: Data.educations })
      ),
      React.createElement(
        Container,
        { title: "Researches", cssId: "researches" },
        React.createElement(Researches, { researches: Data.researches })
      )
    ),
    React.createElement(
      "footer",
      null,
      React.createElement(
        "p",
        { id: "last_update" },
        "Last updated on 2022.05.20"
      ),
      React.createElement(
        "p",
        { id: "copyright" },
        "\xA9 2022 Chan-Hee Park"
      )
    )
  );
}

// Common
function Container(props) {
  const { cssId, title, children } = props;
  return React.createElement(
    "section",
    { id: cssId },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        { className: "section_title" },
        title
      ),
      React.createElement(
        "div",
        { className: "section_content" },
        children
      )
    )
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

// Intro
function Intro(props) {
  const { about } = props;
  return React.createElement(
    "section",
    { "class": "intro", id: "intro" },
    React.createElement(
      "div",
      { "class": "container" },
      React.createElement(
        "h1",
        { "class": "name" },
        "Chan-Hee Park"
      ),
      React.createElement(
        "div",
        { "class": "center" },
        React.createElement("img", {
          "class": "image--cover only-mobile center-content",
          src: "assets/chanhee-profile.jpg",
          alt: "Photo of Chanhee"
        })
      ),
      React.createElement(
        "div",
        { "class": "flex-outer" },
        React.createElement(
          "div",
          { "class": "flex-9" },
          React.createElement(
            "section",
            { "class": "about", id: "about" },
            React.createElement(About, { about: about })
          ),
          React.createElement(
            "div",
            { "class": "only-mobile" },
            React.createElement(
              "a",
              { href: "mailto: chanhee13p@gmail.com", "class": "mobile-email" },
              React.createElement("i", { "class": "fas fa-envelope fa-fw" }),
              React.createElement(
                "span",
                null,
                "chanhee13p@gmail.com"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "flex-3 no-mobile" },
          React.createElement(
            "div",
            { "class": "center" },
            React.createElement("img", {
              "class": "image--cover center-content",
              src: "assets/chanhee-profile.jpg",
              alt: "Photo of Chanhee"
            })
          ),
          React.createElement(
            "ul",
            { "class": "tags" },
            React.createElement(
              "li",
              { "class": "tag" },
              "#Web_Front_End"
            ),
            React.createElement(
              "li",
              { "class": "tag" },
              "#Data_Analytics"
            )
          )
        )
      ),
      React.createElement(Card, {
        title: Data.introCard.title,
        paragraphs: Data.introCard.paragraphs
      })
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
        experience["status"]
      ),
      React.createElement(
        "a",
        {
          className: "whereiwas",
          href: experience["href"],
          target: "_blank",
          onClick: () => {
            if (!experience["href"]) {
              alert("현재 회사 홈페이지 이용이 불가능합니다. 죄송합니다.");
            }
          }
        },
        experience["where"]
      ),
      React.createElement(
        "span",
        { className: "period" },
        experience["period"]
      ),
      experience["story"].map((paragraph, i) => {
        return React.createElement(
          "p",
          { key: `experience-${i}` },
          paragraph
        );
      })
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
        education["course"]
      ),
      React.createElement(
        "a",
        { className: "whereiwas", href: education["href"], target: "_blank" },
        education["where"]
      ),
      React.createElement(
        "span",
        { className: "period" },
        education["period"]
      ),
      React.createElement(
        "p",
        null,
        education["story"]
      )
    );
  });
  return React.createElement(
    "ul",
    { className: "items" },
    listItems
  );
}

// Research
function Researches(props) {
  const listItems = _.map(props.researches, (research, i) => {
    const fileName = getFileName(research);
    const thumbType = research["gif"] ? "gif" : "png";
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
            research["title"]
          ),
          React.createElement(Authors, { authors: research["authors"] }),
          React.createElement(
            "div",
            { className: "conf_title" },
            research["conf_title"],
            research["conf_short"] && React.createElement(
              "strong",
              null,
              research["conf_short"]
            ),
            ", ",
            research["year"],
            "."
          ),
          React.createElement(Materials, {
            project: research,
            fileName: fileName,
            projectType: "researches"
          })
        ),
        React.createElement(
          "div",
          { className: "flex-4 image-zone" },
          React.createElement(Thumbnail, {
            fileName: fileName,
            fileType: thumbType,
            projectType: "researches"
          })
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
    project["pdf"] && React.createElement(
      "a",
      { href: fileNameWithDir + ".pdf", target: "_blank" },
      "Paper"
    ),
    project["poster"] && React.createElement(
      "a",
      { href: fileNameWithDir + "-poster.pdf", target: "_blank" },
      "Poster"
    ),
    project["video"] && React.createElement(
      "a",
      { href: fileNameWithDir + "-video.mp4", target: "_blank" },
      "Video"
    )
  );
}

function Thumbnail(props) {
  return React.createElement(
    "div",
    { className: "paper_thumbnail" },
    React.createElement("img", {
      src: "assets/" + props.projectType + "/" + props.fileName + "-thumb." + props.fileType
    })
  );
}

function Authors(props) {
  const listItems = props.authors.map((authorName, i) => {
    const classes = authorName == "Chanhee Park" ? "name my-name" : "name";
    return React.createElement(
      "span",
      { key: i, className: classes },
      authorName + (i != props.authors.length - 1 ? ", " : "")
    );
  });
  return React.createElement(
    "div",
    { className: "authors" },
    listItems
  );
}