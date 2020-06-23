import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <header className="Section Section--zircon">
        <nav className="Section-content">
          <ul className="SiteNavigation">
            <li className="SiteNavigation-item">
              <a href="/" className="SiteNavigation-link isActive" aria-current="page">
                Main
              </a>
            </li>
            <li className="SiteNavigation-item">
              <a href="/" className="SiteNavigation-link">
                Page2
              </a>
            </li>
            <li className="SiteNavigation-item">
              <span className="SiteNavigation-link u-p-0">
                <a href="/" className="Button">
                  Sign In
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </header>

      <main className="Page-content">
      </main>

      <footer className="Section Section--zircon">
        <div className="Section-content">
          <br/>
          Awesome footer
          <br/><br/>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
