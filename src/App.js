import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';

import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';
import avatar5 from './images/avatar5.jpg';
import avatar6 from './images/avatar6.jpg';
import avatar7 from './images/avatar7.jpg';
import avatar8 from './images/avatar8.jpg';

const images = [avatar1, avatar2, avatar3, avatar4, avatar5];


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
                <span className="Button" aria-label="Menu">
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
                  <a href="/contacts" className="SiteNavigation-link">
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

        <div className="Page-content">
          <div className="Section">
            <div className="Section-content">
              <div className="row">
                <div className="col-lg-9">
                  <main>
                    <h1 className="Typography Typography--heading1 u-pb-20 u-pt-50">Доступность сайта (accessibility)</h1>

                    <p className="Typography Typography--body2 u-pb-10">
                      Сейчас отсутствие доступа к интернету (а соответственно и к интернет-сайтам) вызывает большее удивление чем его наличие.<br/>
                      Очень часто для взаимодействия с сайтом используется компьютер, в частности: монитор, мышь и клавиатура.<br/>
                      Основная масса пользователей использует клавиатуру для ввода текстовой информации (например для заполнения формы или же для ввода адреса в адресную строку браузера).<br/>
                      Из-за доступности самих компьютеров и интернета количество пользователей огромно.<br/>
                      И среди множества этих пользователей можно выделить группы, которые взаимодействуют с сайтом несколько иначе.<br/>
                      Для примера можно упомянуть людей у которых:<br/>
                      - проблемы со зрением (полное или почти полное отсутсвие зрения, нарушение цветовосприятия, ...)<br/>
                      - проблемы с моторикой (из-за заболеваний или же травм)
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      Поскольку сама проблема не является новой - методы решения уже существуют и продолжают улучшаться.<br/>
                      Для тех, у кого отсутствует зрение есть "скирн ридеры" - программы или плагины для озвучивания контента на странице, например, ChromeVox Classic Extension.<br/>
                      Для тех у кого проблемы с цветовосприятием тоже есть плагины, корректирующие цвета на странице сайта, например, High Contrast и Change Page Colors.<br/>
                      Для тех, у кого проблемы с моторикой и им тяжело пользоваться мышкой - навигация при помощи клавиатуры.
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      Вариантов с особенностями цветовых схем очень много. Поэтому единственное чем можно улучшить свой сайт для подобных людей - поддерживать контрастность цветов. А уже сами пользователи при помощи плагинов добавят недостающее именно для них.<br/>
                      Тем, у кого затруднения со зрением, - просто дать возможность нормально увеличивать и уменьшать страницу средствами самого браузера (респонсивная верстка, отстутствие фиксированной высоты у текстовых блоков).<br/>
                      Те, у кого затруднения с моторикой и кто воспринимают сайт на слух - используют клавиатуру для навигации по сайту.
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      С одной стороны - проблемы разные и решения этих проблем тоже выглядят разными, но, если присмотреться, - эти проблемы решаются "сторонними сервисами".<br/>
                      И, впринципе, при разработке сайта необходимо просто "не мешать" этим сервисам работать.
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      Для того, чтобы сайт корректно отображался в браузере при увеличении в 500% достаточно просто самой обычной респонсивной верстки с отсутствием фиксированных ширин и высот, с самыми обычными пересыпаниями блоков.
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      С навигацией клавиатурой и использованием скрин-ридеров все немного хитрее, но, действительно, всего лишь "немного".
                    </p>

                    <p className="Typography Typography--body2 u-pb-10">
                      На примере <a href="https://www.chromevox.com/keyboard_shortcuts.html#:~:text=For%20ChromeVox%20Classic%20on%20Chrome,modifier%20keys%20are%20Cmd%20%2B%20Ctrl.">ChromeVox Classic Extension</a> можно заметить, что подобные плагины ориентрируются на html тэги.<br/>
                      Присутствует навигация по заголовкам, спискам, таблицам, кнопкам и т.д.<br/>
                      Соответствуенно, для того, чтобы подобные плагины корректно отрабатывали нам нужно... просто делать нормальную разметку на странице.<br/>
                      Для навигации использовать тег {"<nav>"}, для списков {"<ul>"} и {"<ol>"}, пусть таблица будет {"<table>"}, а заголовок - {"<h1>, <h2>..."}.<br/>
                      И особых трудозатрат данное условие не требует.<br/>
                      Немного внимательности и все.
                    </p>

                    <p className="Typography Typography--body2 u-pb-50">
                      Не всегда мы не используем "нативные" тэги из-за лени или какой-то внутренней "злобности".<br/>
                      Иногда у нас возникает необходимость реализовать "кастомные" элементы: чекбоксы, радиобатоны, селекты, дропдауны и прочее.<br/>
                      В таком случае "родной" элемент, который tag, - скрывается, а его функции на себя берут другие элементы, которые со стороны html не являются тем, чем они выглядят для пользователя.<br/>
                      И в таком случае нам на помощь приходят всевозможные <a href="https://www.w3.org/WAI/PF/aria-1.1/states_and_properties">"aria"</a> аттрибуты.<br/>
                      С их помощью мы можем обозначить наши "кастомные" элементы теми html тэгами, которыми они "должны" быть изначально.<br/>
                      Пример можно увидить на странице <a href="/contacts">Contacts</a><br/>
                    </p>

                    <ul className="row u-pb-50">
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar1}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar2}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar5}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar8}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>

                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar3}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar6}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar7}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
                          <p className="Typography Typography--body2 u-opacity-6">Some position</p>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar4}/>
                          </div>
                          <p className="Typography Typography--heading3">Some person</p>
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

                    <h2 className="Typography Typography--heading2 u-pb-20">Default slider</h2>
                    <Slider
                      className="Slider--base"
                      options={{
                        autoPlay: false,
                        prevNextButtons: true,
                        wrapAround: true,
                        fullscreen: true,
                        adaptiveHeight: true,
                        pageDots: true,
                      }}
                    >
                      {images.map((image, index) => (
                        <div style={{ width: '100%', height: '183px', textAlign: 'center' }} key={index}>
                          <div className="ScreenReaderOnly">
                            Slide {index + 1}
                          </div>
                          <img src={image} alt="" />
                        </div>
                      ))}
                    </Slider>
                    <div className="u-pb-50"></div>

                    <h2 className="Typography Typography--heading2 u-pb-20">Slider with some accessibility features</h2>
                    <Slider
                      options={{
                        autoPlay: false,
                        prevNextButtons: false,
                        wrapAround: true,
                        fullscreen: true,
                        adaptiveHeight: true,
                        pageDots: false,
                      }}
                      images={images}
                    >
                      {images.map((image, index) => (
                        <div style={{ width: '100%', height: '183px', textAlign: 'center' }} key={index}>
                          <div className="ScreenReaderOnly">
                            Slide {index + 1}
                          </div>
                          <img src={image} alt="" />
                        </div>
                      ))}
                    </Slider>

                    <div className="u-pb-50"></div>
                  </main>
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                  <aside className="u-sticky u-pt-10">
                    <h1 className="Typography Typography--heading3 u-pb-20">
                      Some sidebar in {"<aside>"} tag
                    </h1>

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
        </div>

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
