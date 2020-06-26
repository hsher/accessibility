import React from 'react';
import './App.scss';
import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';
import avatar5 from './images/avatar5.jpg';
import avatar6 from './images/avatar6.jpg';

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
        <div className="Section">
          <div className="Section-content u-pt-50">
            <h1 className="Typography Typography--heading1 u-pb-20">Awesome page title</h1>

            <p className="Typography Typography--body2 u-pb-50">
              Start of great and short page description.<br/>
              Second sentence with interesting information.<br/>
              Third sentence.<br/>
              Final part of great page description.
            </p>

            <ul className="row u-pb-50">
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar1}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar2}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar5}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar4}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>

              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar3}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar6}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar2}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
              <li className="col-md-3 col-6 u-pb-20">
                <div className="CrewGroup">
                  <div className="CrewGroup-image">
                    <img className="Image" alt="Some persone" src={avatar1}/>
                  </div>
                  <p className="Typography Typography--heading3">Some persone</p>
                  <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                </div>
              </li>
            </ul>

            <h2 class="Typography Typography--heading2 u-pb-20">Second level page heading</h2>

            <div class="row u-pb-50">
              <div class="col-md-4">
                <h3 class="Typography Typography--heading3 u-pb-20">Third level heading for first column</h3>
                <p class="Typography Typography--body2">
                  Some great information in first column.
                  Information in this column also is very interesting.
                </p>
              </div>

              <div class="col-md-4">
                <h3 class="Typography Typography--heading3 u-pb-20">Third level heading for second column</h3>
                <p class="Typography Typography--body2">
                  Some great information in second column
                </p>
              </div>

              <div class="col-md-4">
                <h3 class="Typography Typography--heading3 u-pb-20">Third level heading for third column</h3>
                <p class="Typography Typography--body2">
                  Some great information in third column
                </p>
              </div>
            </div>
          </div>
        </div>
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
