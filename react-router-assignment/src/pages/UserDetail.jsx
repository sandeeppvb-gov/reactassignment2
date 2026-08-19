import { Link, useNavigate, useParams } from 'react-router-dom';
import { users } from './Users';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <section className="page">
        <div className="card not-found">
          <h1>User Not Found</h1>

          <p>
            The user with ID {id} does not exist.
          </p>

          <button
            className="btn"
            onClick={() => navigate('/users')}
          >
            Back to Users
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="user-detail-card">
        <div className="large-avatar">
          {user.name.charAt(0)}
        </div>

        <h1>{user.name}</h1>

        <div className="user-info">
          <p>
            <strong>User ID:</strong> {user.id}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>City:</strong> {user.city}
          </p>
        </div>

        <div className="button-group">
          <button
            className="btn"
            onClick={() => navigate('/users')}
          >
            Go Back
          </button>

          <Link to="/" className="btn secondary-btn">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UserDetail;