import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Welcome to React Router App</h1>

        <p>
          This is a multi-page React application built using React Router.
          Explore different pages and view individual user details.
        </p>

        <div className="button-group">
          <Link to="/about" className="btn">
            About App
          </Link>

          <Link to="/users" className="btn secondary-btn">
            View Users
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;