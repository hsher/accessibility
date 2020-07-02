import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Contacts extends React.Component {
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
                  <a href="/" className="SiteNavigation-link">
                    Main
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a href="/contacts" className="SiteNavigation-link isActive" aria-current="page">
                    Contacts
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
              <nav className="Breadcrumb" aria-label="Breadcrumb">
                <ol className="Breadcrumb-list">
                  <li>
                    <a href="/" className="Breadcrumb-link">
                      Main
                    </a>
                    <span className="Breadcrumb-separator">
                      >
                    </span>
                  </li>
                  <li>
                    <a href="/contacts"  aria-current="page" className="Breadcrumb-link">
                      Contacts
                    </a>
                  </li>
                </ol>
              </nav>

              <h1 className="Typography Typography--heading1 u-pb-20">Contacts</h1>

              <div className="row">
                <div className="col-md-6">
                  <form className="Form">
                    <div className="u-pb-10">
                      <label htmlFor="name" className="Form-label">
                        Name:
                      </label>
                      <input type="text" id="name" className="Form-field" />
                    </div>

                    <div className="u-pb-10">
                      <label htmlFor="email" className="Form-label">
                        Email:
                      </label>
                      <input type="email" id="email" className="Form-field" />
                    </div>

                    <div className="u-pb-10">
                      <label htmlFor="message" className="Form-label">
                        Message:
                      </label>
                      <textarea type="text" id="message" className="Form-field" rows="5" />
                    </div>

                    <button type="submit" className="Button">
                      Send
                    </button>
                  </form>
                </div>

                <div className="col-md-6">
                  <p>
                    Please fill the form to make it filled.
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
}

export default Contacts;
