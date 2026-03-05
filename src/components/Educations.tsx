import type { Education } from '../types/portfolio';

interface Props {
  educations: Education[];
}

function Educations({ educations }: Props) {
  return (
    <ul className="items">
      {educations.map((education) => (
        <li key={education.id}>
          <span className="status">
            {education.degree}, {education.major}
          </span>
          <span className="whereiwas">{education.school}</span>
          <span className="period">
            {education.period.start} -{' '}
            {education.period.end === 'current' ? '재학 중' : education.period.end}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Educations;
