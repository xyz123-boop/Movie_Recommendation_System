import AdminSidebar from '../../components/AdminSidebar';

const UserManagement = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <h1>User Management</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            {/* Add more users here */}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .admin-layout {
          display: flex;
        }
        .main-content {
          margin-left: 200px;
          padding: 20px;
          width: 100%;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        button {
          margin-right: 10px;
          padding: 5px 10px;
          background-color: #2980b9;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default UserManagement;
