import type { Research } from '../types/portfolio';

interface Props {
  researches: Research[];
}

function Researches({ researches }: Props) {
  return (
    <ul className="items">
      {researches.map((research) => (
        <li key={research.id} className="researchItem">
          <div className="flex-outer">
            <div className="flex-8 text-zone">
              <h3 className="research_title">{research.title}</h3>
              <div className="authors">
                {research.authors.map((author, i) => (
                  <span
                    key={i}
                    className={author === 'Chanhee Park' ? 'name my-name' : 'name'}
                  >
                    {author + (i !== research.authors.length - 1 ? ', ' : '')}
                  </span>
                ))}
              </div>
              <div className="conf_title">
                {research.venue}, {research.year}.
              </div>
              <div className="materials">
                {research.materials
                  .filter((m) => m.visible)
                  .map((material) => (
                    <a
                      key={material.type}
                      href={material.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${material.type.toUpperCase()} 다운로드: ${research.title}`}
                    >
                      {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex-4 image-zone">
              {research.thumbnail && (
                <div className="paper_thumbnail">
                  <img
                    src={research.thumbnail}
                    alt={`${research.title} 논문 썸네일`}
                  />
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Researches;
