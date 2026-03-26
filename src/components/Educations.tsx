import type { Education } from '../types/portfolio';

interface Props {
  educations: Education[];
}

function Educations({ educations }: Props) {
  return (
    <ul className="items">
      {educations.map((education) => (
        <li key={education.id}>
          <span className="whereiwas">
            {education.degree}, {education.major}
          </span>
          <span className="status">{education.school}</span>
          <span className="period">
            {education.period.start} -{' '}
            {education.period.end === 'current' ? '재학 중' : education.period.end}
          </span>
          {education.description && <p>{education.description.join(' ')}</p>}
        </li>
      ))}
    </ul>
  );
}

export default Educations;
