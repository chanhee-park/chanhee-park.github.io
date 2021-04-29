// Babel setup for react:
// https://babeljs.io/docs/en/6.26.3/babel-preset-react
// npx babel src --out-dir dist --watch

const contents = {
  about: <About about={Data.about} />,
  experiences: <Experiences experiences={Data.experiences} />,
  educations: <Educations educations={Data.educations} />,
  researches: <Researches researches={Data.researches} />,
  projects: <Projects projects={Data.projects}></Projects>,
};

const descriptions = {
  researches: "학술지에 출판되거나 학회에서 발표된 연구입니다.",
  projects:
    "출판과 발표는 되지 않았지만 많은 것을 배운 프로젝트를 여기에 적었습니다.",
};

// Render Card
ReactDOM.render(
  <Card
    title={Data.introCard.title}
    paragraphs={Data.introCard.paragraphs}
  ></Card>, // element
  document.getElementById("card-root") // rootId
);

// Render Sections
_.forEach(contents, (content, key) => {
  ReactDOM.render(
    <Container
      title={key.toUpperCase()}
      content={content}
      description={descriptions[key]}
    />, // element
    document.getElementById(key) // rootId
  );
});

// Functions
function getFileName(research) {
  return `${research["year"]}-${research["short_conf"]}-${research["id"]}`;
}
