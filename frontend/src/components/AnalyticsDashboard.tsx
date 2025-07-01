import React from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="analytics-dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <div className="header-actions">
          <button className="btn-secondary">Export Data</button>
          <button className="btn-primary">Generate Report</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <div className="stat-value">2,847</div>
            <div className="stat-change positive">+12.5%</div>
          </div>
          
          <div className="stat-card">
            <h3>Revenue</h3>
            <div className="stat-value">$48,392</div>
            <div className="stat-change positive">+8.2%</div>
          </div>
          
          <div className="stat-card">
            <h3>Conversion Rate</h3>
            <div className="stat-value">3.42%</div>
            <div className="stat-change negative">-2.1%</div>
          </div>
          
          <div className="stat-card">
            <h3>Avg. Session</h3>
            <div className="stat-value">4m 23s</div>
            <div className="stat-change positive">+5.7%</div>
          </div>
        </div>

        <div className="charts-section">
          <div className="chart-container">
            <h3>User Growth</h3>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{height: '60%'}}></div>
                <div className="bar" style={{height: '75%'}}></div>
                <div className="bar" style={{height: '45%'}}></div>
                <div className="bar" style={{height: '85%'}}></div>
                <div className="bar" style={{height: '92%'}}></div>
                <div className="bar" style={{height: '78%'}}></div>
                <div className="bar" style={{height: '65%'}}></div>
              </div>
              <div className="chart-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </div>

          <div className="chart-container">
            <h3>Traffic Sources</h3>
            <div className="pie-chart-placeholder">
              <div className="traffic-source">
                <span className="source-dot direct"></span>
                <span>Direct: 42%</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot organic"></span>
                <span>Organic Search: 31%</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot social"></span>
                <span>Social Media: 17%</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot referral"></span>
                <span>Referral: 10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="data-table-section">
          <h3>Recent Activity</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sarah Johnson</td>
                <td>Purchase</td>
                <td>2024-07-01</td>
                <td>$127.99</td>
              </tr>
              <tr>
                <td>Michael Chen</td>
                <td>Sign Up</td>
                <td>2024-07-01</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Emma Wilson</td>
                <td>Purchase</td>
                <td>2024-06-30</td>
                <td>$89.50</td>
              </tr>
              <tr>
                <td>David Rodriguez</td>
                <td>Download</td>
                <td>2024-06-30</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Lisa Anderson</td>
                <td>Purchase</td>
                <td>2024-06-30</td>
                <td>$256.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sidebar-widgets">
          <div className="widget">
            <h4>Top Performing Pages</h4>
            <ul className="page-list">
              <li>/dashboard <span>1,247 views</span></li>
              <li>/products <span>892 views</span></li>
              <li>/pricing <span>654 views</span></li>
              <li>/about <span>432 views</span></li>
            </ul>
          </div>

          <div className="widget">
            <h4>System Alerts</h4>
            <div className="alert-item">
              <span className="alert-dot warning"></span>
              High memory usage detected
            </div>
            <div className="alert-item">
              <span className="alert-dot success"></span>
              Backup completed successfully
            </div>
            <div className="alert-item">
              <span className="alert-dot info"></span>
              New feature update available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;