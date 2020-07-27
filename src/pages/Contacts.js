import React from 'react';
import RRS from 'react-responsive-select';
import "react-responsive-select/dist/ReactResponsiveSelect.css";
import { CaretIcon } from "../CaretIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

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

  onChange = (newValue) => console.log('onChange', newValue);
  onSubmit = () => console.log('onSubmit');

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

                    <div className="u-pb-10">
                      <label htmlFor="message" className="Form-label">
                        City:
                      </label>
                      <RRS
                        name="make"
                        options={[
                          { text: 'City', value: 'city' },
                          { text: 'Town', value: 'town', markup: <span>Town</span> },
                          { text: 'Village', value: 'village', markup: <span>Village</span> }
                        ]}
                        selectedValue="oldsmobile"
                        caretIcon={<CaretIcon key="someUniqueKey" />}
                        onSubmit={this.onSubmit}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="u-pb-10">
                      <label htmlFor="message" className="Form-label">
                        Some dropdown:
                      </label>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="d-flex u-pt-30 u-pb-10">
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

                    <div className="d-flex u-pb-20">
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

                <div className="col-md-6">
                  <p className="Typography Typography--body2 u-pb-20">
                    Самая обычная форма, с самыми обычными лэйблами и инпутами. Единственное на что имеет смысл обратить внимание - реализация кастомного чекбокса и радиобатона. Потому что дропдаун и селект - взяты из сторонних библиотек без изменений.
                  </p>

                  <p className="Typography Typography--body2 u-pb-20">
                    Обычно дизайн кастомных чекбоксов и радиобатонов может быть реализован на чистом цсс.<br/>
                    Но с поддержкой ассесибилити требуется js для изменения состояния.
                    Примеры:
                  </p>

                  <h2 className="Typography Typography--heading3 u-pb-20">Чекбокс</h2>

                  <h3 className="Typography Typography--body2 u-weight-600">
                    html
                  </h3>
                  <pre>{
`<label
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
</label>`
                  }</pre>

                  <h3 className="Typography Typography--body2 u-weight-600 u-pt-20">
                    css
                  </h3>

                  <pre>{
`.Checkbox {
  align-items: center;
  display: inline-flex;
  cursor: pointer;

  &--medium {
    .Checkbox-source {
      &:checked {
        + .Checkbox-result {
          &::after {
            left: calc(100% + 1px);
          }
        }
      }
    }

    .Checkbox-result {
      border-width: 2px;
      height: 24px;
      width: 36px;

      &::after {
        border-width: 2px;
        height: 22px;
        left: -1px;
        top: -1px;
        width: 22px;
      }
    }
  }

  &-source {
    display: none;

    &:checked {
      + .Checkbox-result {
        background-color: #1089F5;
        border-color: #1089F5;

        &::after {
          background-color: #FFFFFF;
          border-color: #1089F5;
          left: calc(100% + 4px);
          transform: translate(-100%, 0);
        }
      }
    }
  }

  &-result {
    background-color: #FFFFFF;
    border: 4px solid #363636;
    border-radius: 18px;
    display: inline-block;
    height: 36px;
    position: relative;
    width: 54px;

    &::after {
      background-color: #FFFFFF;
      border: 4px solid #363636;
      border-radius: 50%;
      content: '';
      height: 36px;
      left: -4px;
      position: absolute;
      top: -4px;
      transition: all 0.3s;
      width: 36px;
      z-index: 1;
    }
  }

  &-caption {
    padding: 0 0 0 5px;
    transition: all 0.3s;
  }
}`
                  }</pre>

                  <h3 className="Typography Typography--body2 u-weight-600 u-pt-20">
                    js
                  </h3>

                <p className="Typography Typography--body2 u-pb-20">
                  На onChange меняем aria-checked. <br/>
                  С радиобатонами идея точно такая же.
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
