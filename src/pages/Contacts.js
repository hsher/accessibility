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

  toggleCheckbox(e) {
    if (e.currentTarget.querySelector('.jsCeckboxSource').checked) {
      e.currentTarget.querySelector('.jsCeckboxSource').checked = false
    } else {
      e.currentTarget.querySelector('.jsCeckboxSource').checked = true
    }

    let checkboxChecked = e.currentTarget.querySelector('.jsCeckboxSource').checked;

    e.currentTarget.setAttribute('aria-checked', checkboxChecked);
  }

  toggleCheckboxKey(e) {
    if (e.key === " ") {
      e.currentTarget.click();
    }
  }

  toggleRadio(e) {
    let radioChecked = e.currentTarget.querySelector('.jsRadioSource').checked;

    e.currentTarget.setAttribute('aria-checked', radioChecked);
  }

  toggleRadioKey(e) {
    if (e.key === " ") {
      e.currentTarget.click();
    }
  }

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
                <span className="Button" aria-label="Menu">
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

              <p className="u-pb-20">
                Please fill the form to make it filled.
              </p>

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

                    <div className="d-flex u-pb-10">
                      <label
                        className="Checkbox Checkbox--medium"
                        tabIndex="0"
                        role="checkbox"
                        aria-checked="false"
                        aria-labelledby="checkboxLabel"
                        onClick={this.toggleCheckbox}
                        onKeyPress={this.toggleCheckboxKey}
                      >
                        <input type="checkbox" className="jsCeckboxSource Checkbox-source" />
                        <span className="Checkbox-result"></span>
                        <span className="Checkbox-caption" id="checkboxLabel">Agree</span>
                      </label>
                    </div>

                    <div className="d-flex u-pb-10">
                      <label
                        className="Radio Radio--medium u-pr-10"
                        tabIndex="0"
                        role="radio"
                        aria-checked="false"
                        aria-labelledby="radioLabel"
                        onClick={this.toggleRadio}
                        onKeyPress={this.toggleRadioKey}
                      >
                        <input type="Radio" name="radiogroup1" className="jsRadioSource Radio-source" />
                        <span className="Radio-result"></span>
                        <span className="Radio-caption" id="radioLabel">Radio1</span>
                      </label>

                      <label
                        className="Radio Radio--medium"
                        tabIndex="0"
                        role="radio"
                        aria-checked="false"
                        aria-labelledby="radioLabel"
                        onClick={this.toggleRadio}
                        onKeyPress={this.toggleRadioKey}
                      >
                        <input type="Radio" name="radiogroup1" className="jsRadioSource Radio-source" />
                        <span className="Radio-result"></span>
                        <span className="Radio-caption" id="radioLabel">Radio2</span>
                      </label>
                    </div>

                    <button type="submit" className="Button">
                      Send
                    </button>
                  </form>
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
