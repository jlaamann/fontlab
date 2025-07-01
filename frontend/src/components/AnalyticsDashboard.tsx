import React from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="analytics-dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <div className="header-actions">
          <button className="btn-secondary">Export Detailed Analytics Report</button>
          <button className="btn-primary">Generate Comprehensive Report</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Active Users</h3>
            <div className="stat-value">2,847,592</div>
            <div className="stat-change positive">↗ +12.5% increase from last quarter</div>
            <p className="stat-description">Monthly active users across all platforms including web, mobile, and desktop applications</p>
          </div>

          <div className="stat-card">
            <h3>Monthly Recurring Revenue</h3>
            <div className="stat-value">$1,248,392</div>
            <div className="stat-change positive">↗ +8.2% growth month-over-month</div>
            <p className="stat-description">Total revenue from subscription services and premium features</p>
          </div>

          <div className="stat-card">
            <h3>Conversion Rate Performance</h3>
            <div className="stat-value">3.42%</div>
            <div className="stat-change negative">↘ -2.1% decrease from previous month</div>
            <p className="stat-description">Percentage of visitors who complete the desired action or purchase</p>
          </div>

          <div className="stat-card">
            <h3>Average Session Duration</h3>
            <div className="stat-value">4m 23s</div>
            <div className="stat-change positive">↗ +5.7% improvement in engagement</div>
            <p className="stat-description">Average time users spend actively engaging with the platform</p>
          </div>
        </div>

        <div className="charts-section">
          <div className="chart-container">
            <h3>User Growth Analytics - Monthly Active Users Progression</h3>
            <p className="chart-description">Comprehensive overview of user acquisition and retention metrics across all channels and platforms</p>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '75%' }}></div>
                <div className="bar" style={{ height: '45%' }}></div>
                <div className="bar" style={{ height: '85%' }}></div>
                <div className="bar" style={{ height: '92%' }}></div>
                <div className="bar" style={{ height: '78%' }}></div>
                <div className="bar" style={{ height: '65%' }}></div>
              </div>
              <div className="chart-labels">
                <span>January 2024</span>
                <span>February 2024</span>
                <span>March 2024</span>
                <span>April 2024</span>
                <span>May 2024</span>
                <span>June 2024</span>
                <span>July 2024</span>
              </div>
            </div>
          </div>

          <div className="chart-container">
            <h3>Traffic Sources & Channel Performance</h3>
            <p className="chart-description">Detailed breakdown of visitor acquisition channels and conversion rates</p>
            <div className="pie-chart-placeholder">
              <div className="traffic-source">
                <span className="source-dot direct"></span>
                <span>Direct Traffic: 42% (1,248,592 visitors)</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot organic"></span>
                <span>Organic Search Results: 31% (920,384 visitors)</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot social"></span>
                <span>Social Media Platforms: 17% (504,728 visitors)</span>
              </div>
              <div className="traffic-source">
                <span className="source-dot referral"></span>
                <span>Referral Links: 10% (296,892 visitors)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="data-table-section">
          <h3>Recent Customer Activity & Transaction History</h3>
          <p className="section-description">Real-time monitoring of user interactions, purchases, and engagement metrics across all platforms</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Action Type</th>
                <th>Transaction Date</th>
                <th>Purchase Value</th>
                <th>Product Category</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sarah Johnson Martinez</td>
                <td>Premium Subscription Purchase</td>
                <td>July 1, 2024 14:32</td>
                <td>$127.99</td>
                <td>Professional Tools</td>
                <td>San Francisco, CA</td>
              </tr>
              <tr>
                <td>Michael Chen Wong</td>
                <td>New Account Registration</td>
                <td>July 1, 2024 13:45</td>
                <td>Free Trial Started</td>
                <td>Getting Started</td>
                <td>Vancouver, BC</td>
              </tr>
              <tr>
                <td>Emma Wilson Thompson</td>
                <td>Enterprise License Purchase</td>
                <td>June 30, 2024 16:22</td>
                <td>$89.50</td>
                <td>Business Solutions</td>
                <td>London, UK</td>
              </tr>
              <tr>
                <td>David Rodriguez Silva</td>
                <td>Educational Resource Download</td>
                <td>June 30, 2024 11:18</td>
                <td>Complimentary Access</td>
                <td>Learning Materials</td>
                <td>Madrid, Spain</td>
              </tr>
              <tr>
                <td>Lisa Anderson Mitchell</td>
                <td>Multi-License Team Purchase</td>
                <td>June 30, 2024 09:45</td>
                <td>$256.00</td>
                <td>Team Collaboration</td>
                <td>Austin, TX</td>
              </tr>
              <tr>
                <td>Robert Kim Johnson</td>
                <td>API Integration Upgrade</td>
                <td>June 29, 2024 15:30</td>
                <td>$345.99</td>
                <td>Developer Tools</td>
                <td>Seoul, South Korea</td>
              </tr>
              <tr>
                <td>Maria Garcia Rodriguez</td>
                <td>Custom Font Library Purchase</td>
                <td>June 29, 2024 12:15</td>
                <td>$189.50</td>
                <td>Creative Assets</td>
                <td>Mexico City, Mexico</td>
              </tr>
              <tr>
                <td>Alexander Petrov Volkov</td>
                <td>Professional Typography Suite</td>
                <td>June 29, 2024 08:22</td>
                <td>$429.99</td>
                <td>Advanced Design Tools</td>
                <td>Moscow, Russia</td>
              </tr>
              <tr>
                <td>Jennifer Williams Brown</td>
                <td>Educational Institution License</td>
                <td>June 28, 2024 16:45</td>
                <td>$899.00</td>
                <td>Academic Licensing</td>
                <td>Chicago, IL</td>
              </tr>
              <tr>
                <td>Hiroshi Tanaka Yamamoto</td>
                <td>Font Conversion Service</td>
                <td>June 28, 2024 14:30</td>
                <td>$67.50</td>
                <td>Conversion Services</td>
                <td>Tokyo, Japan</td>
              </tr>
              <tr>
                <td>Sophie Dubois Laurent</td>
                <td>Multi-Language Font Package</td>
                <td>June 28, 2024 11:18</td>
                <td>$312.00</td>
                <td>International Fonts</td>
                <td>Paris, France</td>
              </tr>
              <tr>
                <td>Ahmed Hassan Al-Rashid</td>
                <td>Arabic Typography Extension</td>
                <td>June 27, 2024 20:45</td>
                <td>$156.75</td>
                <td>Language Extensions</td>
                <td>Dubai, UAE</td>
              </tr>
              <tr>
                <td>Caroline Miller Jackson</td>
                <td>Brand Identity Font Bundle</td>
                <td>June 27, 2024 13:22</td>
                <td>$278.99</td>
                <td>Branding Solutions</td>
                <td>Toronto, ON</td>
              </tr>
              <tr>
                <td>Francesco Rossi Romano</td>
                <td>Web Font Optimization Service</td>
                <td>June 27, 2024 09:30</td>
                <td>$95.00</td>
                <td>Web Development</td>
                <td>Rome, Italy</td>
              </tr>
              <tr>
                <td>Priya Sharma Gupta</td>
                <td>Devanagari Script Collection</td>
                <td>June 26, 2024 17:15</td>
                <td>$198.50</td>
                <td>Script Collections</td>
                <td>Mumbai, India</td>
              </tr>
              <tr>
                <td>Klaus Mueller Schmidt</td>
                <td>Technical Documentation Fonts</td>
                <td>June 26, 2024 14:40</td>
                <td>$134.25</td>
                <td>Technical Writing</td>
                <td>Berlin, Germany</td>
              </tr>
              <tr>
                <td>Ana Beatriz Silva Santos</td>
                <td>Print Publishing License</td>
                <td>June 26, 2024 10:55</td>
                <td>$567.00</td>
                <td>Publishing Rights</td>
                <td>São Paulo, Brazil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sidebar-widgets">
          <div className="widget">
            <h4>Top Performing Pages & Content Analytics</h4>
            <p className="widget-description">Most visited pages and their performance metrics over the last 30 days</p>
            <ul className="page-list">
              <li>/analytics-dashboard <span>1,247,892 page views</span></li>
              <li>/product-catalog-browser <span>892,456 unique visitors</span></li>
              <li>/pricing-plans-comparison <span>654,321 conversion views</span></li>
              <li>/company-about-information <span>432,198 engagement sessions</span></li>
              <li>/documentation-resources <span>387,654 help searches</span></li>
              <li>/contact-support-center <span>298,743 support tickets</span></li>
              <li>/user-account-settings <span>245,892 profile updates</span></li>
              <li>/feature-requests-feedback <span>189,567 feature votes</span></li>
            </ul>
          </div>

          <div className="widget">
            <h4>System Status & Operational Alerts</h4>
            <p className="widget-description">Real-time monitoring of system health, performance metrics, and operational status</p>
            <div className="alert-item">
              <span className="alert-dot warning"></span>
              High memory usage detected on server cluster 3 - investigating performance optimization opportunities
            </div>
            <div className="alert-item">
              <span className="alert-dot success"></span>
              Daily automated backup completed successfully - all data secured and verified
            </div>
            <div className="alert-item">
              <span className="alert-dot info"></span>
              New feature update available: Enhanced analytics dashboard with improved visualization tools
            </div>
            <div className="alert-item">
              <span className="alert-dot error"></span>
              Temporary API rate limiting in effect due to increased traffic - scaling resources automatically
            </div>
            <div className="alert-item">
              <span className="alert-dot success"></span>
              SSL certificate renewal completed successfully - secure connections maintained
            </div>
            <div className="alert-item">
              <span className="alert-dot info"></span>
              Scheduled maintenance window: Server optimization planned for July 5th 2:00 AM UTC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;