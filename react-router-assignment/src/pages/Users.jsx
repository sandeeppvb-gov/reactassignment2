import { Link } from 'react-router-dom';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543211',
    city: 'London',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '9876543212',
    city: 'Toronto',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '9876543213',
    city: 'Sydney',
  },
];

function Users() {
  return (
    <section className="page">
      <h1>Users List</h1>

      <p className="page-description">
        Click on a user to view their detailed information.
      </p>

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <Link to={`/users/${user.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export { users };
export default Users;