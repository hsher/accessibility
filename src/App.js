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

                    <h2 className="Typography Typography--heading2 u-pb-20">Пример скписка сотрудников</h2>

                    <p className="Typography Typography--body2 u-pb-30">
                      Пример списка изображений с подписями. Часто подобную конструкцию можно встретить в списке сотрудников компании, так же похожая конструкция характерна для товаров интернет-магазина. Со стороны верстки - это самый обычный {"<ul>"} список. Затруднения могут возникнуть с альтернативным текстом для изображения. В данном случае, поскольку под самим изображением идет описание "сотрудника" (его имя и должность) - то в разметке страницы вместо {"alt"} текста картинки использовалась ссылка на описание ({"aria-labelledby"}). В таком случае, когда скрин ридер сфокусируется на элементе списка - он просто "прочитает" имя и должность. Подробнее про alt тексты можно прочитать: <a href="https://webaim.org/techniques/alttext/">alttext</a>
                    </p>

                    <ul className="row u-pb-50">
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar1} aria-labelledby="avatar1"/>
                          </div>
                          <div id="avatar1">
                            <p className="Typography Typography--heading3">Мистер аватар</p>
                            <p className="Typography Typography--body2 u-opacity-6">Первый в списке</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar2} aria-labelledby="avatar2"/>
                          </div>
                          <div id="avatar2">
                            <p className="Typography Typography--heading3">Аанг</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar5} aria-labelledby="avatar5"/>
                          </div>
                          <div id="avatar5">
                            <p className="Typography Typography--heading3">Джейк Салли</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар Томми Салли</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar8} aria-labelledby="avatar8"/>
                          </div>
                          <div id="avatar8">
                            <p className="Typography Typography--heading3">Корра</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар</p>
                          </div>
                        </div>
                      </li>

                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar3} aria-labelledby="avatar3"/>
                          </div>
                          <div id="avatar3">
                            <p className="Typography Typography--heading3">Аанг</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar6} aria-labelledby="avatar6"/>
                          </div>
                          <div id="avatar6">
                            <p className="Typography Typography--heading3">Нейтири</p>
                            <p className="Typography Typography--body2 u-opacity-6">Представитель на’ви</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar7} aria-labelledby="avatar7"/>
                          </div>
                          <div id="avatar7">
                            <p className="Typography Typography--heading3">Корра</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар</p>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-3 col-6 u-pb-20">
                        <div className="CrewGroup">
                          <div className="CrewGroup-image">
                            <img className="Image" alt="" src={avatar4} aria-labelledby="avatar4"/>
                          </div>
                          <div id="avatar4">
                            <p className="Typography Typography--heading3">Аанг</p>
                            <p className="Typography Typography--body2 u-opacity-6">Аватар</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <h2 className="Typography Typography--heading2 u-pb-20">Заголовок второго уровня</h2>

                    <div className="row u-pb-50">
                      <div className="col-md-4">
                        <h3 className="Typography Typography--heading3 u-pb-20">Тестовый заголовок третьего уровня</h3>
                        <p className="Typography Typography--body2">
                          Это пример контента с колонками.<br/>
                          У данного контента соблюдена структура заголовков, что облегчает навигацию по ним при помощи скрин ридера.<br/>
                          Так же при уменьшении ширины экрана сохраняется порядок контента.<br/>
                          Этот абзац как был раньше того, что справа, так и на мобильной ширине данный абзац будет идти перед "Второй абзац".
                        </p>
                      </div>

                      <div className="col-md-4">
                        <h3 className="Typography Typography--heading3 u-pb-20">Второй абзац</h3>
                        <p className="Typography Typography--body2">
                          Это второй абзац и в "десктопной" ширине он находится во второй колонке, то визуально "ставит" данный текст после первой колонки.<br/>
                          В мобильной ширине все три колонки схлопнутся в одну, но порядок текста не изменится: текст из первой колонки как был раньше - так и будет раньше.
                        </p>
                      </div>

                      <div className="col-md-4">
                        <h3 className="Typography Typography--heading3 u-pb-20">Слишком очевидный пример</h3>
                        <p className="Typography Typography--body2">
                          Данный пример с порядком контента может показаться чересчур очевидным, но только применительно к тексту.<br/>
                          Текст с дальнейшим объяснением в следующем абзаце.
                        </p>
                      </div>
                    </div>

                    <p className="Typography Typography--body2 u-pb-20">
                      Менее очевидным он становится для контактной формы в одной колонке и текстовой информации или информационной картинки в другой колонке.<br/>
                      В какой из колонок стоит разместить текст/картинку, а в какой саму форму?<br/>
                      Для "десктопа", где у нас две колонки, - выбор не кажется сколь-нибудь важным, но, если учесть что в мобильной версии эти колонки "схлопнутся" в одну, - то повод немного задуматься уже возникает.<br/>
                      Технически есть способы менять колонки местами, но именно от этого нынешнее accessibility и "просит" воздержаться. Можно придумать некий слоган для направления accessibility, что-то вроде: "пусть все выглядит тем, чем и является" (не совсем в теме, может нечто уже придумано).<br/>
                      Другими словами, если наш текст или изображение идет перед контактной формой - то и на мобиле пусть этот порядок сохраняется.<br/>
                      Эта информация, наверное, более актуальна для дизайнеров.<br/>
                      Из практических примеров с изменением порядка блоков на ум приходит блок покупки товара.<br/>
                      Тот блок, в котором находится изображение товара, его название, цена и кнопка "купить".<br/>
                      Очень часто десктопный вариант этого блока сильно "корежит" на мобильной версии.
                    </p>

                    <h2 className="Typography Typography--heading2 u-pb-20">Слайдер "из коробки"</h2>

                    <p className="Typography Typography--body2 u-pb-20">
                      Вот пример <a href="https://flickity.metafizzy.co/">flickity</a> слайдера. Довольно хороший слайдер, который по функционалу удовлетворит почти всему, что может понадобится в проекте от слайдера. Из минусов - у него нет вертикальных слайдов и вертикальной навигации для них. Так что если возникнет в них необходимость - придется дописывать ручками.<br/>
                      Еще он платный, так что перед отправкой проекта с этим слайдером в релиз - нужно убедиться, что с лицензией все хорошо.<br/>
                      Ниже можно увидить сами слайдеры. Их для примера сделано 2 штуки.<br/>
                      Первый, как и указано в заголовке, идет с настройками "по-умолчанию": в нем родные элементы навигации (пердыдущий и следующий слайды и точечки для переключания между слайдами).
                    </p>
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

                    <h2 className="Typography Typography--heading2 u-pb-20">Доработанный слайдер</h2>

                    <p className="Typography Typography--body2 u-pb-20">
                      По факту, это тот же слайдер, но в угоду accessibility в нем были сделаны некоторые улучшения.<br/>
                      Дабы легче было использовать этот слайдер со скрин ридерером мы вынесли элементы управления (следующий/предыдущий слайд и точечки) из самого слайдера.<br/>
                      Таким образом они не будут каждый раз озвучиваться, когда фокус попадет на слайдер.<br/>
                      Ну, а сами точечки оформили в виде списка, чтобы опять же облегчить доступ к ним при помощи скрин ридера (у скрин ридеров есть возможность переключаться между заголовками, списками, элементами списка - поэтому для них так важна "структурность" разметки).
                    </p>

                    <p className="Typography Typography--body2 u-pb-20">
                      Для лучшей навигации при помощи скрин-ридера по странице можно оставлять "невидимые" пояснительные тексты.<br/>
                      Для обычного пользователя они будут скрыты, но при навигации с клавиатуры эти элементы будут попадать в фокус и, соответственно, скрин-ридеры будут озвучивать их контент.<br/>
                      Стили для такой скрытой подсказки:

                      <pre>{
`.ScreenReaderOnly {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}`
                      }</pre>

                      А в качестве примера можно обратить внимание на слайды: в каждом слайде есть такая скрытая подсказка.
                    </p>

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

                    <h3 className="Typography Typography--heading3 u-pt-20 u-pb-10">Html структура "доработанных" элементов слайдера</h3>
                    <p className="Typography Typography--body2">
                      Стрелки следующий/предыдущий слайд:
                      <pre>{
`<div class="Slider-actions">
  <div class="Slider-action Slider-action--prev">
    <button class="Button">
      <svg></svg>

      <span class="ScreenReaderOnly">
        Previos
      </span>
    </button>
  </div>

  <div class="Slider-action Slider-action--next">
    <button class="Button">
      <span class="ScreenReaderOnly">
        Next
      </span>

      <svg></svg>
    </button>
  </div>
</div>`
                      }</pre>

                      <br/>
                      <br/>
                      Список с точечками слайда:
                      <pre>{
`<ol class="Slider-navigation">
  <li class="Slider-navigationItem">
    <button class="Slider-navigationAction isActive" data-slide="0">
      <span class="ScreenReaderOnly">Slide 1</span>
    </button>
  </li>

  <li class="Slider-navigationItem">
    <button class="Slider-navigationAction" data-slide="1">
      <span class="ScreenReaderOnly">Slide 2</span>
    </button>
  </li>
  ...
</ol>`
                      }</pre>
                    </p>

                    <div className="u-pb-50"></div>

                    <p className="Typography Typography--body2">
                      Итог: accessibility относится к разметке, а соответственно к верстке.<br/>
                      Верстка завязана на дизайн.<br/>
                      Чтобы сайт в итоге получился нормальным по accessibility нужны усилия этих сторон.<br/>
                      Дизайн должен иметь "контрастные" цвета и прямой порядок блоков.<br/>
                      Верстка должна использовать правильные теги (или же эмулировать их при помощи соответствующих атрибутов).<br/>
                      Затраты для минимального соответствия нормам accessibility (т.е. достаточно, чтобы проходить различные валидаторы, тот же Chrome Lighthouse Accessibility) - минимальны.<br/>
                      <br/>
                      Как и в любом другом деле - нет предела совершенству.<br/>
                      Улучшать доступность сайта можно до бесконечности.<br/>
                      Здесь уже возникает вопрос целесообразности.<br/>
                      Если у сайта предполагается целевая аудитория с какими-либо особенностями - нужно просто брать и "затачивать" сайт под конкретную аудиторию.<br/>
                      Делать подобное с каждым проектом, лично на мой взгляд, кажется излишним (достаточно хеленых секторов в валидаторах).
                    </p>

                    <div className="u-pb-50"></div>
                  </main>
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                  <aside className="u-sticky u-pt-10">
                    <h1 className="Typography Typography--heading3 u-pb-20">
                      Заголовок для плавающего {"<aside>"} блока
                    </h1>

                    <span className="Typography Typography--body1">
                      Я не придумал что можно написать в этом блоке.<br/>
                      Но, поскольку, в дизайнах подобный прием переодически встречается, я тоже решил сделать такой блок.<br/>
                      Его особенностью является то, что он "вынесен" из основного контента.<br/>
                      И для этих вариантов есть соответствующие теги:<br/>
                      Основной контент мы заварачиваем в {"<main>"} тэг, а подобные огрызки в {"<aside>"}.<br/>
                    </span>
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
