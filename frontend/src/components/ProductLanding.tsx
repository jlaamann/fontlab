import React from 'react';
import './ProductLanding.css';

const ProductLanding: React.FC = () => {
  return (
    <div className="product-landing">
      <header className="landing-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">CloudFlow</span>
          </div>
          <nav className="header-nav">
            <a href="#features" className="nav-item">Features</a>
            <a href="#pricing" className="nav-item">Pricing</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="login-btn">Sign In</button>
            <button className="cta-btn">Start Free Trial</button>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Workflow with Intelligent Cloud Automation
            </h1>
            <p className="hero-subtitle">
              CloudFlow revolutionizes how teams collaborate, automate repetitive tasks, and scale operations 
              with AI-powered workflow management. Increase productivity by 300% while reducing operational costs.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime Guarantee</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Expert Support</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="primary-cta">Start Your Free 30-Day Trial</button>
              <button className="secondary-cta">Watch Live Demo</button>
            </div>
            <p className="trial-note">
              No credit card required • Full access to all features • Cancel anytime
            </p>
          </div>
          <div className="hero-visual">
            <div className="product-showcase">
              <div className="showcase-header">
                <span className="showcase-title">CloudFlow Dashboard</span>
                <div className="showcase-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div>
              <div className="showcase-content">
                <div className="workflow-item">
                  <span className="workflow-icon">⚡</span>
                  <span className="workflow-text">Automated Data Processing</span>
                  <span className="workflow-status active">Running</span>
                </div>
                <div className="workflow-item">
                  <span className="workflow-icon">🔄</span>
                  <span className="workflow-text">Customer Onboarding Sequence</span>
                  <span className="workflow-status complete">Complete</span>
                </div>
                <div className="workflow-item">
                  <span className="workflow-icon">📊</span>
                  <span className="workflow-text">Weekly Analytics Report</span>
                  <span className="workflow-status pending">Scheduled</span>
                </div>
                <div className="workflow-item">
                  <span className="workflow-icon">🔔</span>
                  <span className="workflow-text">Team Notification System</span>
                  <span className="workflow-status active">Running</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="features-content">
          <div className="section-header">
            <h2 className="section-title">Powerful Features Built for Modern Teams</h2>
            <p className="section-subtitle">
              Everything you need to streamline operations, enhance collaboration, and drive results
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Automation</h3>
              <p className="feature-description">
                Leverage machine learning algorithms to automatically optimize workflows, predict bottlenecks, 
                and suggest improvements based on your team's patterns and performance metrics.
              </p>
              <ul className="feature-benefits">
                <li>Smart task prioritization and assignment</li>
                <li>Predictive analytics for resource planning</li>
                <li>Automated quality assurance checks</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3 className="feature-title">Seamless Integrations</h3>
              <p className="feature-description">
                Connect with over 500+ popular tools and services. Native integrations with Slack, Microsoft Teams, 
                Salesforce, HubSpot, and all major cloud platforms for unified workflow management.
              </p>
              <ul className="feature-benefits">
                <li>One-click setup for popular services</li>
                <li>Custom API endpoints for proprietary tools</li>
                <li>Real-time data synchronization</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Advanced Analytics</h3>
              <p className="feature-description">
                Comprehensive reporting and analytics dashboard with customizable metrics, performance tracking, 
                and actionable insights to continuously improve your operational efficiency.
              </p>
              <ul className="feature-benefits">
                <li>Real-time performance monitoring</li>
                <li>Custom KPI tracking and alerts</li>
                <li>Detailed audit trails and compliance reports</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                Bank-level security with end-to-end encryption, SSO integration, advanced access controls, 
                and compliance with SOC 2, GDPR, and HIPAA regulations for complete peace of mind.
              </p>
              <ul className="feature-benefits">
                <li>Multi-factor authentication (MFA)</li>
                <li>Role-based access control (RBAC)</li>
                <li>Regular security audits and certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-content">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "CloudFlow transformed our operations completely. We've reduced manual work by 80% and 
                  our team productivity has never been higher. The AI suggestions are incredibly accurate."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Sarah Chen</span>
                    <span className="author-title">VP of Operations, TechCorp Inc.</span>
                  </div>
                  <div className="company-logo">TC</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The integration capabilities are outstanding. We connected all our tools in minutes, 
                  and the unified dashboard gives us visibility we never had before."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Michael Rodriguez</span>
                    <span className="author-title">CTO, StartupFlow</span>
                  </div>
                  <div className="company-logo">SF</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "ROI was immediate. CloudFlow paid for itself within the first month through 
                  automation savings alone. Now it's an essential part of our infrastructure."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Emily Johnson</span>
                    <span className="author-title">COO, Global Solutions Ltd.</span>
                  </div>
                  <div className="company-logo">GS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-content">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your team size and requirements. All plans include core features.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Starter</h3>
                <p className="plan-description">Perfect for small teams getting started</p>
              </div>
              <div className="plan-pricing">
                <span className="price">$29</span>
                <span className="price-period">per user/month</span>
              </div>
              <ul className="plan-features">
                <li>Up to 100 automated workflows</li>
                <li>10 team members included</li>
                <li>Basic integrations (50+ apps)</li>
                <li>Standard support</li>
                <li>Basic analytics dashboard</li>
              </ul>
              <button className="plan-cta">Start Free Trial</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Professional</h3>
                <p className="plan-description">Ideal for growing businesses and teams</p>
              </div>
              <div className="plan-pricing">
                <span className="price">$79</span>
                <span className="price-period">per user/month</span>
              </div>
              <ul className="plan-features">
                <li>Unlimited automated workflows</li>
                <li>50 team members included</li>
                <li>Premium integrations (500+ apps)</li>
                <li>Priority support + phone</li>
                <li>Advanced analytics + AI insights</li>
                <li>Custom workflow templates</li>
                <li>API access included</li>
              </ul>
              <button className="plan-cta featured">Start Free Trial</button>
            </div>
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Enterprise</h3>
                <p className="plan-description">Advanced features for large organizations</p>
              </div>
              <div className="plan-pricing">
                <span className="price">Custom</span>
                <span className="price-period">contact for pricing</span>
              </div>
              <ul className="plan-features">
                <li>Everything in Professional</li>
                <li>Unlimited team members</li>
                <li>Custom integrations + white-label</li>
                <li>Dedicated success manager</li>
                <li>Advanced security features</li>
                <li>On-premise deployment option</li>
                <li>SLA guarantees</li>
              </ul>
              <button className="plan-cta">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
          <p className="cta-subtitle">
            Join thousands of teams who have already revolutionized their operations with CloudFlow. 
            Start your free trial today and experience the difference intelligent automation can make.
          </p>
          <div className="cta-actions">
            <button className="cta-primary">Start Your Free Trial Now</button>
            <button className="cta-secondary">Schedule a Personal Demo</button>
          </div>
          <div className="cta-features">
            <span className="cta-feature">✓ 30-day free trial</span>
            <span className="cta-feature">✓ No setup fees</span>
            <span className="cta-feature">✓ Cancel anytime</span>
            <span className="cta-feature">✓ 24/7 support</span>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">CloudFlow</span>
              <p className="footer-description">
                Intelligent workflow automation for modern teams. Transform the way you work 
                with AI-powered solutions that scale with your business.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">Product</h4>
                <ul className="footer-list">
                  <li><a href="#">Features Overview</a></li>
                  <li><a href="#">Integration Marketplace</a></li>
                  <li><a href="#">API Documentation</a></li>
                  <li><a href="#">Security & Compliance</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-title">Resources</h4>
                <ul className="footer-list">
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Video Tutorials</a></li>
                  <li><a href="#">Best Practices Guide</a></li>
                  <li><a href="#">Community Forum</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press Kit</a></li>
                  <li><a href="#">Contact Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <span>&copy; 2024 CloudFlow Technologies. All rights reserved.</span>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductLanding;