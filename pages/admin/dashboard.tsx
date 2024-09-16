import AdminSidebar from '../../components/AdminSidebar';

const Dashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <h1>Admin Dashboard</h1>
        <div className="stats">
          <div className="stat-box">
            <h3>Total Users</h3>
            <p>123</p>
          </div>
          <div className="stat-box">
            <h3>Total Posts</h3>
            <p>456</p>
          </div>
        </div>
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
        .stats {
          display: flex;
          gap: 20px;
        }
        .stat-box {
          background: #ecf0f1;
          padding: 20px;
          border-radius: 8px;
          width: 200px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
