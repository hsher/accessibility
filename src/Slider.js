import React from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flickityReady: false,
    };

    this.refreshFlickity = this.refreshFlickity.bind(this);
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

  onClick() {
    debugger
    this.flickity.select(0);
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
      <React.Fragment>
        <div
          className={'jsSlider test'}
          key="flickityBase"
          ref={node => (this.flickityNode = node)}
          tabIndex="0"
        />

        <div>
          <button onClick={this.onClick}>
            prev
          </button>

          <button>
            next
          </button>
        </div>
      </React.Fragment>,
      this.renderPortal(),
    ].filter(Boolean);
  }
}
