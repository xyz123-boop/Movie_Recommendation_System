import AdminSidebar from '../../components/AdminSidebar';

const Settings = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <h1>Settings</h1>
        <form>
          <label>Site Title:</label>
          <input type="text" placeholder="Enter site title" />
          <br />
          <label>Admin Email:</label>
          <input type="email" placeholder="Enter admin email" />
          <br />
          <button type="submit">Save Settings</button>
        </form>
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
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-top: 10px;
          margin-bottom: 5px;
        }
        input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 10px 20px;
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

export default Settings;
