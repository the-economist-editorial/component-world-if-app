import React from 'react';
import StickyMasthead from '@economist/component-stickymasthead';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';

export default class WorldIfApp extends React.Component {

  static get propTypes() {
    return {
      routeHandler: React.PropTypes.node,
    };
  }

  static get defaultProps() {
    return {
      routeHandler: this.defaultRouteHandler || React.DOM.div,
    };
  }

  static setDefaultRouteHandler(routeHandler) {
    this.defaultRouteHandler = routeHandler;
  }

  render() {
    return (
      <div className="WorldIfApp">
        <StickyMasthead className="WorldIfApp--header">
          <a className="WorldIfApp--header-menu WorldIfApp--header-button">
            <Icon icon="hamburger" color="white" background="none"/>
          </a>
          <a href="/" className="WorldIfApp--header-logo StickyMasthead--hidden">
            <h1 className="WorldIfApp--header-logo-title">The World</h1>
            <Icon icon="worldif" className="WorldIfApp--header-logo-icon" size="70px"/>
          </a>
          <div className="WorldIfApp--header-sharebar StickyMasthead--visible">
            <ShareBar/>
            <a href="/" className="WorldIfApp--header-sharebar-home">
              <Icon icon="home" color="white" background="rgb(51, 189, 235)" size="25px"/>
            </a>
          </div>
        </StickyMasthead>
        {this.props.routeHandler}
      </div>
    );
  }

}
