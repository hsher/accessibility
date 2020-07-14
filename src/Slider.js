import React from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flickityReady: false,
    };

    this.refreshFlickity = this.refreshFlickity.bind(this);
    this.slidePrev = this.slidePrev.bind(this);
    this.slideNext = this.slideNext.bind(this);
  }

  componentDidMount() {
    this.flickity = new Flickity(this.flickityNode, this.props.options || {});

    this.setState({
      flickityReady: true,
    });

    this.flickity.on('change', function(index) {
      this.element.blur();
      this.element.focus();
    });
  }

  refreshFlickity() {
    this.flickity.reloadCells();
    this.flickity.resize();
    this.flickity.updateDraggable();
  }

  slidePrev() {
    this.flickity.previous()
  }

  slideNext() {
    this.flickity.next()
  }

  componentWillUnmount() {
    this.flickity.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    const flickityDidBecomeActive = !prevState.flickityReady && this.state.flickityReady;
    const childrenDidChange = prevProps.children.length !== this.props.children.length;

    if (flickityDidBecomeActive || childrenDidChange) {
      this.refreshFlickity();
    }
  }

  renderPortal() {
    if (!this.flickityNode) {
      return null;
    }

    const mountNode = this.flickityNode.querySelector('.flickity-slider');

    if (mountNode) {
      return ReactDOM.createPortal(this.props.children, mountNode);
    }
  }

  render() {
    return [
      <div className="Slider">
        <div
          key="flickityBase"
          ref={node => (this.flickityNode = node)}
          tabIndex="0"
        />

        <div className="Slider-actions">
          <div className="Slider-action Slider-action--prev">
            <button
              className="Button"
              onClick={this.slidePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className="ScreenReaderOnly">Previos</span>
            </button>
          </div>

          <div className="Slider-action Slider-action--next">
            <button
              className="Button"
              onClick={this.slideNext}
            >
              <span className="ScreenReaderOnly">Next</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>,
      this.renderPortal(),
    ].filter(Boolean);
  }
}
