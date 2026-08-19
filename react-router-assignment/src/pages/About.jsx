import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="page">
      <div className="card">
        <h1>About This App</h1>

        <p>
          This application demonstrates how to create multiple pages in React
          using React Router DOM.
        </p>

        <p>
          The application includes Home, About, Users and User Detail pages.
          Users can navigate between pages without reloading the website.
        </p>

        <h3>Technologies Used</h3>

        <ul className="tech-list">
          <li>React</li>
          <li>React Router DOM</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>Vite</li>
        </ul>

        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default About;