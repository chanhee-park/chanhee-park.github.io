import type { Experience } from '../types/portfolio';

interface Props {
  experiences: Experience[];
}

function Experiences({ experiences }: Props) {
  return (
    <ul className="items">
      {experiences.map((experience) => (
        <li key={experience.id}>
          <a
            className="whereiwas"
            href={experience.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!experience.link) {
                e.preventDefault();
                alert('현재 회사 홈페이지 이용이 불가능합니다. 죄송합니다.');
              }
            }}
          >
            {experience.company}
          </a>
          <span className="status">{experience.role}</span>
          <span className="period">
            {experience.period.start} -{' '}
            {experience.period.end === 'current' ? '재직 중' : experience.period.end}
          </span>
          <p>{experience.description.join(' ')}</p>
        </li>
      ))}
    </ul>
  );
}

export default Experiences;
