// Title
var title = 'RESEARCH';

// Contents
var papers = [{
  id: 'visml',
  title: 'A Visualization System for Performance Analysis of Image Classification Models',
  authors: 'Chanhee Park, Hyojin Kim, Kyungwon Lee',
  conf_title: 'IS&T International Symposium on Electronic Imaging',
  conf_short: "EI'20",
  short_conf: 'ei',
  year: '2020',
  thumb: 'research/2020-ei-visml-thumb.png',
  code: 'https://github.com/chanhee-park/VisMlic',
  site: 'https://chanhee-park.github.io/VisMlic/',
  video: true,
  pdf: true
}, {
  id: 'color',
  title: 'A Study of Colormaps in Network Visualization',
  authors: 'Raja Mubashar Karim, Oh-Hyun Kwon, Chanhee Park, Kyungwon Lee',
  conf_title: 'MDPI Applied Sciences',
  short_conf: 'mdpi',
  conf_short: 'Appl. Sci. 2019, 9(20)',
  year: '2019',
  pdf: true
}, {
  id: 'summ',
  title: 'A Narrative Topic Map Visualization to Summarize and Recall a Meeting',
  authors: 'Suhyun Lim, Chanhee Park, Hyunwoo Han, Jaejong Ho, Junyup Hong, Soojung Lee, Kyunwon Lee',
  conf_title: 'IEEE Visualization Conference',
  conf_short: "InfoVis'19",
  short_conf: 'vis',
  year: '2019',
  thumb: true,
  pdf: true,
  poster: true,
  video: true // ToDO: Add it
}, {
  id: 'gitvis',
  title: 'GitViz: An Interactive Visualization System for Analyzing Development Trends in the Open- Source Software Community',
  authors: 'Chanhee Park, Sungjun Do, Eunjeong Lee, Hanna Jang, Sungchan Jeong, Hyunwoo Han, Kyungwon Lee',
  conf_title: 'IEEE Pacific Visualization Symposium',
  conf_short: "PacificVis'19",
  short_conf: 'pvis',
  year: '2019',
  thumb: true,
  pdf: true,
  video: true // ToDo: Update it
}, {
  id: 'visml',
  title: 'ComDia+: An Interactive Visual Analytics System for Comparing, Diagnosing, and Improving Multiclass Classifiers',
  authors: 'Chanhee Park, Jina Lee, Hyunwoo Han, Kyungwon Lee',
  conf_title: 'IEEE Pacific Visualization Symposium',
  short_conf: 'pvis',
  conf_short: "PacificVis'19",
  year: '2019',
  pdf: true
}, {
  id: 'congress',
  title: 'A visual analysis of power relations among people on time-series data using network visualization',
  authors: 'Gyeongcheol Choi, Taerin Yoon, Chanhee Park, Sarah Lee, Hogwon Choi, Jieun Kang, Chulwoong Park, Seongmin Mun, Kyungwon Lee',
  conf_title: 'ocial Science History Association',
  conf_short: "SSHA'18",
  short_conf: 'ssha',
  year: '2018',
  thumb: true,
  pdf: true
}, {
  id: 'gitvis',
  title: 'An Interactive Visualization To Help You Gain Knowledge from Authoritative Developers',
  authors: 'Chanhee Park, Sungjun Do, Eunjeong Lee, Hanna Jang, Sungchan Jeong, Hyunwoo Han, Kyungwon Lee',
  conf_title: 'IEEE Visualization Conference',
  conf_short: "InfoVis'18",
  short_conf: 'vis',
  year: '2018',
  pdf: true,
  poster: true
}];

var list_item = papers.map(function (paper, i) {
  return React.createElement(
    'li',
    { key: i },
    React.createElement(
      'div',
      { className: 'booktitle' },
      paper['title']
    ),
    React.createElement(
      'div',
      { className: 'authors' },
      getAuthorsJSX(paper['authors'])
    ),
    React.createElement(
      'div',
      { className: 'conftitle' },
      paper['conf_title'],
      ' (',
      React.createElement(
        'strong',
        null,
        paper['conf_short']
      ),
      '), 2020. '
    ),
    React.createElement(
      'div',
      { className: 'materials' },
      paper['pdf'] && React.createElement(
        'a',
        { href: "research/" + getFileName(paper) + ".pdf",
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Paper'
      ),
      paper['poster'] && React.createElement(
        'a',
        { href: "research/" + getFileName(paper) + "-poster.pdf",
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Poster'
      ),
      paper['video'] && React.createElement(
        'a',
        { href: "research/" + getFileName(paper) + "-video.mp4",
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Video'
      ),
      paper['code'] && React.createElement(
        'a',
        { href: paper['code'],
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Code'
      ),
      paper['site'] && React.createElement(
        'a',
        { href: paper['code'],
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Site'
      ),
      paper['thumb'] && React.createElement(
        'div',
        { className: 'paper_thumbnail' },
        React.createElement('img', { src: "research/" + getFileName(paper) + "-thumb.png" })
      )
    )
  );
});
var content = getListContent(list_item);

// Get JSX
var element = getSectionJSX({ title: title, content: content });

// Render
ReactDOM.render(element, document.getElementById('research'));

// Functions 
function getAuthorsJSX(namesString) {
  var names = namesString.split(', ');
  return names.map(function (name, i) {
    return name == 'Chanhee Park' ? React.createElement(
      'strong',
      { className: 'my_name', key: 'my_name' },
      name + ', '
    ) : name + (i != names.length - 1 ? ', ' : '');
  });
}

function getFileName(paper) {
  return paper['year'] + '-' + paper['short_conf'] + '-' + paper['id'];
}