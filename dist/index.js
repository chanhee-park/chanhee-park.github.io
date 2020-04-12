function getListContent(list_item) {
  return React.createElement(
    'ul',
    { className: 'items' },
    ' ',
    list_item
  );
}

function getSectionJSX(param) {
  var title = param['title'];
  var content = param['content'];
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'h2',
      { className: 'section_title' },
      title
    ),
    content
  );
}