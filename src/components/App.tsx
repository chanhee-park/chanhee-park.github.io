import Intro from './Intro';
import Experiences from './Experiences';
import Educations from './Educations';
import Researches from './Researches';
import { experiences } from '../data/experiences';
import { educations } from '../data/educations';
import { researches } from '../data/researches';

function App() {
  return (
    <div>
      <nav className="navbar" id="nav">
        <div className="menu no-mobile">
          <a className="item" href="#experiences">
            Experiences
          </a>
          <a className="item" href="#educations">
            Educations
          </a>
          <a className="item" href="#researches">
            Researches
          </a>
          <a className="item" href="assets/cv.pdf" target="_blank" rel="noreferrer">
            CV(PDF)
          </a>
          <a
            className="item"
            href="https://www.linkedin.com/in/chanhee-park"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>
      <main>
        <Intro />
        <section id="experiences">
          <div className="container">
            <h2 className="section_title">Work Experiences</h2>
            <div className="section_content">
              <Experiences experiences={experiences} />
            </div>
          </div>
        </section>
        <section id="educations">
          <div className="container">
            <h2 className="section_title">Educations</h2>
            <div className="section_content">
              <Educations educations={educations} />
            </div>
          </div>
        </section>
        <section id="researches">
          <div className="container">
            <h2 className="section_title">Researches</h2>
            <div className="section_content">
              <Researches researches={researches} />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p id="last_update">Last updated on 2022.09.09</p>
        <p id="copyright">© 2022 Chan-Hee Park</p>
      </footer>
    </div>
  );
}

export default App;
