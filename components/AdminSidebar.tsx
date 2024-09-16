import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li className={router.pathname === '/admin/dashboard' ? 'active' : ''}>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
        <li className={router.pathname === '/admin/users' ? 'active' : ''}>
          <Link href="/admin/users">User Management</Link>
        </li>
        <li className={router.pathname === '/admin/settings' ? 'active' : ''}>
          <Link href="/admin/settings">Settings</Link>
        </li>
      </ul>
      <style jsx>{`
        .sidebar {
          width: 200px;
          background-color: #2c3e50;
          padding: 20px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          color: white;
        }
        h2 {
          color: white;
          margin-bottom: 20px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin-bottom: 10px;
        }
        ul li a {
          color: white;
          text-decoration: none;
        }
        ul li.active a {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;
