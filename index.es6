import React from 'react';
import StickyMasthead from '@economist/component-stickymasthead';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
import MoreMenu from '@economist/component-moremenu';

export default class WorldIfApp extends React.Component {


  static get propTypes() {
    return {
      children: React.PropTypes.node,
    };
  }

  render() {
    return (
      <div className="WorldIfApp touch">
        <StickyMasthead className="WorldIfApp--header">
          <MoreMenu/>
          <a href="/" className="WorldIfApp--header-logo StickyMasthead--hidden">
            <h1 className="WorldIfApp--header-logo-title">The World</h1>
            <Icon icon="worldif" className="WorldIfApp--header-logo-icon" background="none" size="67px"/>
          </a>
          <div className="WorldIfApp--header-sharebar StickyMasthead--visible">
            <ShareBar useFX={true}
            fxDirection="flip-to-top"
            fxType="cube"
            background="#333333"
            fxDefaultStateBackground="#999999" />
            <a href="/" className="WorldIfApp--header-sharebar-home">
              <Icon icon="home" color="white" background="rgb(51, 189, 235)" size="25px"/>
            </a>
          </div>
        </StickyMasthead>
        <div className="WorldIfApp--content" role="main">
          {this.props.children}
        </div>
      </div>
    );
  }

}
