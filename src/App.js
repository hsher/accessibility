import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';
import avatar5 from './images/avatar5.jpg';
import avatar6 from './images/avatar6.jpg';
import avatar7 from './images/avatar7.jpg';
import avatar8 from './images/avatar8.jpg';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.toggleClass= this.toggleClass.bind(this);
      this.state = {
          active: false,
      };
  }

  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  render() {
    return (
      <React.Fragment>
        <header className="Section Section--zircon">
          <div className="Section-content">
            <nav
              className={"SiteNavigation" + (this.state.active ? ' isActive' : '')}
              onClick={this.toggleClass}
            >
              <button className="SiteNavigation-button">
                <span className="Button">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
              <ul className="SiteNavigation-list">
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
                  <span className="SiteNavigation-link u-p-0 d-flex">
                    <a href="/" className="Button">
                      Sign In
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="Page-content">
          <div className="Section">
            <div className="Section-content">
              <div className="row">
                <div className="col-lg-9">
                  <nav className="Breadcrumb" aria-label="Breadcrumb">
                    <ol className="Breadcrumb-list">
                      <li>
                        <a href="/" className="Breadcrumb-link">
                          Index
                        </a>
                        <span className="Breadcrumb-separator">
                          >
                        </span>
                      </li>
                      <li>
                        <a href="/pg2" className="Breadcrumb-link">
                          Second Page
                        </a>
                        <span className="Breadcrumb-separator">
                          >
                        </span>
                      </li>
                      <li>
                        <a href="/pg2/this-pg" aria-current="page" className="Breadcrumb-link">
                          This Page
                        </a>
                      </li>
                    </ol>
                  </nav>

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
                          <img className="Image" alt="" src={avatar1}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar2}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar5}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar8}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>

                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar3}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar6}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar7}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                    <li className="col-md-3 col-6 u-pb-20">
                      <div className="CrewGroup">
                        <div className="CrewGroup-image">
                          <img className="Image" alt="" src={avatar4}/>
                        </div>
                        <p className="Typography Typography--heading3">Some persone</p>
                        <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="Typography Typography--heading2 u-pb-20">Second level page heading</h2>

                  <div className="row u-pb-50">
                    <div className="col-md-4">
                      <h3 className="Typography Typography--heading3 u-pb-20">Third level heading for first column</h3>
                      <p className="Typography Typography--body2">
                        Some great information in first column.
                        Information in this column also is very interesting.
                      </p>
                    </div>

                    <div className="col-md-4">
                      <h3 className="Typography Typography--heading3 u-pb-20">Third level heading for second column</h3>
                      <p className="Typography Typography--body2">
                        Some great information in second column
                      </p>
                    </div>

                    <div className="col-md-4">
                      <h3 className="Typography Typography--heading3 u-pb-20">Third level heading for third column</h3>
                      <p className="Typography Typography--body2">
                        Some great information in third column
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                  <aside className="Typography Typography--body0 u-pt-10">
                    <p className="u-pb-20">
                      Some sidebar in {"<aside>"} tag
                    </p>

                    <span className="Typography Typography--body1">
                      This is ordered list
                    </span>

                    <ol>
                      <li>
                        First item in ordered list
                      </li>
                      <li>
                        Second item in ordered list
                      </li>
                      <li>
                        Third item in ordered list
                      </li>
                    </ol>
                  </aside>
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
}

export default App;
