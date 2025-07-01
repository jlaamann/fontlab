import React from 'react';
import './NewsSite.css';

const NewsSite: React.FC = () => {
  return (
    <div className="news-site">
      <header className="news-header">
        <div className="news-header-content">
          <div className="logo-section">
            <h1 className="site-logo">GlobalNews</h1>
            <span className="tagline">Breaking News & In-Depth Analysis</span>
          </div>
          <nav className="main-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">World</a>
            <a href="#" className="nav-link">Politics</a>
            <a href="#" className="nav-link">Technology</a>
            <a href="#" className="nav-link">Business</a>
            <a href="#" className="nav-link">Sports</a>
            <a href="#" className="nav-link">Opinion</a>
          </nav>
          <div className="header-actions">
            <button className="subscribe-btn">Subscribe</button>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </header>

      <div className="news-content">
        <main className="main-content">
          <section className="hero-section">
            <article className="featured-article">
              <div className="article-image">
                <div className="image-placeholder">Breaking News Image</div>
                <span className="category-badge breaking">Breaking News</span>
              </div>
              <div className="article-content">
                <h2 className="article-title">Major Climate Summit Reaches Historic Agreement on Carbon Emissions Reduction</h2>
                <p className="article-excerpt">
                  World leaders from 195 countries have unanimously agreed to implement unprecedented measures to combat climate change, 
                  setting ambitious targets for carbon neutrality by 2030. The comprehensive agreement includes binding commitments 
                  for renewable energy transition, forest conservation, and sustainable development initiatives across all participating nations.
                </p>
                <div className="article-meta">
                  <span className="author">By Sarah Johnson, Climate Correspondent</span>
                  <span className="publish-date">Published 2 hours ago</span>
                  <span className="read-time">5 min read</span>
                </div>
              </div>
            </article>
          </section>

          <section className="latest-news">
            <h3 className="section-title">Latest Headlines</h3>
            <div className="news-grid">
              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Tech News</div>
                  <span className="category-badge tech">Technology</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Artificial Intelligence Breakthrough: New Language Model Demonstrates Human-Level Reasoning</h4>
                  <p className="card-excerpt">
                    Researchers at leading technology institutes have unveiled a revolutionary AI system capable of complex logical reasoning 
                    and contextual understanding that rivals human cognitive abilities.
                  </p>
                  <div className="card-meta">
                    <span className="author">Michael Chen</span>
                    <span className="time">4 hours ago</span>
                  </div>
                </div>
              </article>

              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Business</div>
                  <span className="category-badge business">Business</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Global Markets Surge Following Unexpected Economic Recovery Indicators</h4>
                  <p className="card-excerpt">
                    Stock markets worldwide experienced significant gains as new economic data reveals stronger-than-expected growth 
                    across multiple sectors, signaling potential end to recession concerns.
                  </p>
                  <div className="card-meta">
                    <span className="author">Emma Rodriguez</span>
                    <span className="time">6 hours ago</span>
                  </div>
                </div>
              </article>

              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Sports</div>
                  <span className="category-badge sports">Sports</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Championship Final Sets New Viewership Records Across All Demographics</h4>
                  <p className="card-excerpt">
                    Last night's championship game broke all previous viewing records with over 120 million global viewers, 
                    making it the most-watched sporting event in television history.
                  </p>
                  <div className="card-meta">
                    <span className="author">David Martinez</span>
                    <span className="time">8 hours ago</span>
                  </div>
                </div>
              </article>

              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Politics</div>
                  <span className="category-badge politics">Politics</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">International Trade Negotiations Yield Breakthrough Agreement on Digital Commerce</h4>
                  <p className="card-excerpt">
                    After months of intensive negotiations, major economic powers have reached a comprehensive agreement 
                    on digital trade regulations, cryptocurrency standards, and cross-border data protection policies.
                  </p>
                  <div className="card-meta">
                    <span className="author">Lisa Thompson</span>
                    <span className="time">10 hours ago</span>
                  </div>
                </div>
              </article>

              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Health</div>
                  <span className="category-badge health">Health</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Medical Research Breakthrough: Revolutionary Gene Therapy Shows Promise for Rare Diseases</h4>
                  <p className="card-excerpt">
                    Clinical trials for an innovative gene therapy treatment have shown remarkable success rates in treating 
                    previously incurable genetic disorders, offering hope to millions of patients worldwide.
                  </p>
                  <div className="card-meta">
                    <span className="author">Dr. Robert Kim</span>
                    <span className="time">12 hours ago</span>
                  </div>
                </div>
              </article>

              <article className="news-card">
                <div className="card-image">
                  <div className="image-placeholder small">Science</div>
                  <span className="category-badge science">Science</span>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Space Exploration Milestone: First Successful Mars Colony Establishment Program Announced</h4>
                  <p className="card-excerpt">
                    Space agencies from multiple countries have jointly announced the successful establishment of sustainable 
                    infrastructure for long-term human habitation on Mars, marking a new era in space colonization.
                  </p>
                  <div className="card-meta">
                    <span className="author">Dr. Maria Gonzalez</span>
                    <span className="time">14 hours ago</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="opinion-section">
            <h3 className="section-title">Opinion & Analysis</h3>
            <div className="opinion-grid">
              <article className="opinion-card">
                <div className="opinion-content">
                  <h4 className="opinion-title">The Future of Work: How Remote Technologies Are Reshaping Global Employment</h4>
                  <p className="opinion-excerpt">
                    As companies worldwide embrace permanent remote work policies, we're witnessing a fundamental shift 
                    in how businesses operate and how employees balance professional and personal responsibilities.
                  </p>
                  <div className="opinion-meta">
                    <span className="author">Editorial Board</span>
                    <span className="category">Analysis</span>
                  </div>
                </div>
              </article>

              <article className="opinion-card">
                <div className="opinion-content">
                  <h4 className="opinion-title">Digital Privacy in the Modern Age: Balancing Innovation with Personal Rights</h4>
                  <p className="opinion-excerpt">
                    The ongoing debate over data privacy regulations continues to evolve as technology companies 
                    and governments seek to balance innovation opportunities with fundamental privacy rights.
                  </p>
                  <div className="opinion-meta">
                    <span className="author">Tech Policy Institute</span>
                    <span className="category">Opinion</span>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        <aside className="sidebar">
          <div className="trending-widget">
            <h4 className="widget-title">Trending Now</h4>
            <ul className="trending-list">
              <li className="trending-item">
                <span className="trend-number">1</span>
                <span className="trend-title">Climate Summit Agreement Reactions</span>
              </li>
              <li className="trending-item">
                <span className="trend-number">2</span>
                <span className="trend-title">AI Breakthrough Technical Details</span>
              </li>
              <li className="trending-item">
                <span className="trend-number">3</span>
                <span className="trend-title">Market Recovery Analysis</span>
              </li>
              <li className="trending-item">
                <span className="trend-number">4</span>
                <span className="trend-title">Championship Game Highlights</span>
              </li>
              <li className="trending-item">
                <span className="trend-number">5</span>
                <span className="trend-title">Trade Agreement Impact Assessment</span>
              </li>
            </ul>
          </div>

          <div className="newsletter-widget">
            <h4 className="widget-title">Daily Newsletter</h4>
            <p className="newsletter-description">
              Get the most important news stories delivered directly to your inbox every morning with our comprehensive daily digest.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="email-input" />
              <button type="submit" className="subscribe-button">Subscribe Now</button>
            </form>
          </div>

          <div className="weather-widget">
            <h4 className="widget-title">Weather Update</h4>
            <div className="weather-content">
              <div className="current-weather">
                <span className="temperature">72°F</span>
                <span className="condition">Partly Cloudy</span>
              </div>
              <div className="weather-details">
                <span className="detail">Humidity: 65%</span>
                <span className="detail">Wind: 8 mph NW</span>
                <span className="detail">UV Index: 6 (High)</span>
              </div>
            </div>
          </div>

          <div className="social-widget">
            <h4 className="widget-title">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link twitter">Twitter: @GlobalNews</a>
              <a href="#" className="social-link facebook">Facebook: GlobalNews Official</a>
              <a href="#" className="social-link instagram">Instagram: @globalnews_official</a>
              <a href="#" className="social-link youtube">YouTube: GlobalNews Channel</a>
            </div>
          </div>
        </aside>
      </div>

      <footer className="news-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h5 className="footer-title">About GlobalNews</h5>
            <p className="footer-text">
              Delivering accurate, unbiased news coverage and in-depth analysis from around the world since 1995.
            </p>
          </div>
          <div className="footer-section">
            <h5 className="footer-title">Categories</h5>
            <ul className="footer-links">
              <li><a href="#">World News</a></li>
              <li><a href="#">Politics & Government</a></li>
              <li><a href="#">Technology & Innovation</a></li>
              <li><a href="#">Business & Finance</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-links">
              <li><a href="#">Contact Editorial Team</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GlobalNews. All rights reserved. Independent journalism for the digital age.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsSite;