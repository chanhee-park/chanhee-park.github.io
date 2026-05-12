import Intro from './Intro';
import Projects from './Projects';
import Experiences from './Experiences';
import Educations from './Educations';
import Researches from './Researches';
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { educations } from '../data/educations';
import { researches } from '../data/researches';

function App() {
  return (
    <div>
      <a className="skip-to-content" href="#main">
        본문으로 건너뛰기
      </a>
      <nav className="navbar" id="nav" aria-label="주요 섹션">
        <div className="menu no-mobile">
          <a className="item" href="#experiences">
            Experiences
          </a>
          <a className="item" href="#projects">
            Projects
          </a>
          <a className="item" href="#educations">
            Education
          </a>
          <a className="item" href="#researches">
            Research
          </a>
        </div>
      </nav>
      <main id="main">
        <Intro />
        <section id="experiences" aria-labelledby="experiences-title">
          <div className="container">
            <h2 id="experiences-title" className="section_title">Work Experiences</h2>
            <div className="section_content">
              <Experiences experiences={experiences} />
            </div>
          </div>
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <div className="container">
            <h2 id="projects-title" className="section_title">Featured Projects</h2>
            <div className="section_content">
              <Projects projects={projects} />
            </div>
          </div>
        </section>
        <section id="educations" aria-labelledby="educations-title">
          <div className="container">
            <h2 id="educations-title" className="section_title">Education</h2>
            <div className="section_content">
              <Educations educations={educations} />
            </div>
          </div>
        </section>
        <section id="researches" aria-labelledby="researches-title">
          <div className="container">
            <h2 id="researches-title" className="section_title">Research</h2>
            <p className="section_description">
              데이터 시각화 분야에서 발표한 연구를 간략한 서지 형식으로 정리했습니다. Google
              Scholar에는 일부 논문만 색인되어 있습니다.
            </p>
            <p className="section_description">
              <a
                href="https://scholar.google.com/citations?user=yKKA0gYAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar 프로필 열기 (새 창)"
              >
                Google Scholar 보기
              </a>
            </p>
            <div className="section_content">
              <Researches researches={researches} />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p id="last_update">Last updated on 2026.03.20</p>
        <p id="copyright">© 2026 Chan-Hee Park</p>
      </footer>
    </div>
  );
}

export default App;
