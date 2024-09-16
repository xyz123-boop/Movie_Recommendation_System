import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Signup</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="signup-name">Name:</label></td>
                <td><input type="text" id="signup-name" name="name" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="signup-email">Email:</label></td>
                <td><input type="email" id="signup-email" name="email" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="signup-password">Password:</label></td>
                <td><input type="password" id="signup-password" name="password" required /></td>
              </tr>
              <tr>
                <td colSpan={2}><button type="submit">Signup</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
        }
        .form-wrapper {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 8px;
        }
        label {
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          border: none;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Signup;
