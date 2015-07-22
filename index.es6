import React from 'react';
import { Locations, Location, NotFound } from 'react-router-component';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';
import StickyMasthead from '@economist/component-stickymasthead';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
import MoreMenu from '@economist/component-moremenu';
import ArticlePage from '@economist/component-articletemplate';
import HomePage from '@economist/component-storytiles';
import FourOFourPage from '@economist/component-404';

// class NotFoundPage extends React.Component {
//   render() {
//     return (
//       <article>
//         <h1>Oops 404</h1>
//         <a to="home">Back home</a>
//       </article>
//     );
//   }
// }

export default class WorldIfApp extends React.Component {

  static get propTypes() {
    return {
      path: React.PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="WorldIfApp">
        <CaptureClicks>
          <StickyMasthead className="WorldIfApp--header">
            <MoreMenu/>
            <a href="/" className="WorldIfApp--header-logo StickyMasthead--hidden">
              <h1 className="WorldIfApp--header-logo-title">The World</h1>
              <Icon
                icon="worldif"
                className="WorldIfApp--header-logo-icon"
                background="none"
                size="100%"
              />
            </a>
            <div className="WorldIfApp--header-sharebar StickyMasthead--visible">
              <ShareBar
                useFX={true}
                fxDirection="flip-to-top"
                fxType="cube"
                background="#333333"
                fxDefaultStateBackground="#999999"
              />
              <a href="/" className="WorldIfApp--header-sharebar-home">
                <Icon
                  icon="home"
                  color="white"
                  background="rgb(51, 189, 235)"
                  size="100%"
                />
              </a>
            </div>
          </StickyMasthead>
          <div className="WorldIfApp--content" role="main">
            <Locations ref="router" path={this.props.path || '/'}>
              <Location path="/" handler={HomePage} />
              <Location path="/article/:id" handler={ArticlePage} />
              <NotFound handler={FourOFourPage}/>
            </Locations>
          </div>
        </CaptureClicks>
      </div>
    );
  }

}
