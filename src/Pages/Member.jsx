function Member(){
    return(
        import React, { useState } from 'react';
import './Member.css'; // Assume your styles are here

export default function Member() {
  const [activePage, setActivePage] = useState('dashboard');

  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Smart Library System</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => showPage('dashboard')}>
              <span className="nav-icon">🏠</span> Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activePage === 'profile' ? 'active' : ''}`} onClick={() => showPage('profile')}>
              <span className="nav-icon">👤</span> My Profile
            </button>
          </li>
          {/* Add other nav items similarly */}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div></div>
          <div className="user-profile" onClick={() => showPage('profile')}>
            <div className="user-avatar">J</div>
            <span>John</span>
          </div>
        </header>

        {/* Dashboard Page */}
        {activePage === 'dashboard' && (
          <div className="page active">
            <div className="content-area">
              <h1 className="page-title">Membership Dashboard</h1>
              <p className="page-subtitle">Welcome back, John! Here's your membership overview.</p>

              <div className="dashboard-grid">
                <div className="dashboard-card">
                  <div className="card-header">
                    <h3 className="card-title">Membership Status</h3>
                    <div className="card-icon">✅</div>
                  </div>
                  <div className="card-value">Active</div>
                  <div className="card-subtitle">
                    Plan: Student Premium<br />
                    Expires: Dec 31, 2025<br />
                    Member ID: #LIB2025001
                  </div>
                </div>
                {/* Add other dashboard cards */}
              </div>
            </div>
          </div>
        )}

        {/* Profile Page */}
        {activePage === 'profile' && (
          <div className="page active">
            <div className="content-area">
              <h1 className="page-title">My Profile</h1>
              <p className="page-subtitle">Manage your personal information and preferences.</p>
              <div className="dashboard-card">
                <h3>Profile Information</h3>
                <p>Name: John Doe</p>
                <p>Email: john.doe@email.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Member Since: January 2024</p>
                <button className="action-button">Edit Profile</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

    );
}
export default Member;