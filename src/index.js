function getListContent (list_item) {
  return <ul className="items"> {list_item}</ul>
}

function getSectionJSX (param) {
  const title = param['title'];
  const content = param['content'];
  return (
    <div className="container">
      <h2 className="section_title">{title}</h2>
      {content}
    </div>
  )
}
