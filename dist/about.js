var element = React.createElement(Container, {
  title: null // Title: About 섹션을 헤더에 위치시키기위해 타이틀을 사용하지 않는다.
  , content: React.createElement(About, { about: Data.about })
});

// Render
ReactDOM.render(element, document.getElementById('about'));