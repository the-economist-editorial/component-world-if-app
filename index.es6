import React from 'react';
import { Locations, Location, NotFound } from 'react-router-component';
import CaptureClicks from 'react-router-component/lib/CaptureClicks';
import StickyMasthead from '@economist/component-stickymasthead';
import ShareBar from '@economist/component-sharebar';
import Icon from '@economist/component-icon';
import MoreMenu from '@economist/component-moremenu';
import ArticlePage from '@economist/component-articletemplate';
import HomePage from '@economist/component-storytiles';

class NotFoundPage extends React.Component {
  render() {
    return (
      <article>
        <h1>Oops 404</h1>
        <Link to="home">Back home</Link>
      </article>
    );
  }
}

export default class WorldIfApp extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      scripts: React.PropTypes.object,
      styles: React.PropTypes.object,
      inlineScripts: React.PropTypes.array,
      inlineStyles: React.PropTypes.array,
    };
  }

  renderInlineStyles() {
    return (this.props.inlineStyles || []).map((css) => (
      <style dangerouslySetInnerHTML={{
          __html: css,
      }}/>
    ));
  }

  renderStyles() {
    return Object.keys(this.props.styles || {}).map((key) => (
      <link rel="stylesheet" href={`/assets/${this.props.styles[key]}`} data-style-name={key}/>
    ));
  }

  renderInlineScripts() {
    return (this.props.inlineScripts || []).map((js) => (
      <script dangerouslySetInnerHTML={{
          __html: js,
      }}/>
    ));
  }

  renderScripts() {
    return Object.keys(this.props.scripts || {}).map((key) => (
      <script src={`/assets/${this.props.scripts[key]}`} data-script-name={key}></script>
    ));
  }

  renderMetaTags() {
    // {{#each content.attributes.metaTags}}<meta {{#each this}}{{@key}}="{{this}}"{{/each}}/>{{/each}}
  }

  render() {
    return (
      <html className="no-js">
        <head>
          <meta charSet="utf-8"/>
          {this.renderInlineStyles()}
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="apple-touch-icon" href="assets/apple-touch-icon.png"/>
          <title>{this.props.title}</title>
          {this.renderMetaTags()}
          {this.renderStyles()}
        </head>
        <body>
          <div className="WorldIfApp touch">
            <CaptureClicks>
              <StickyMasthead className="WorldIfApp--header">
                <MoreMenu/>
                <a href="/" className="WorldIfApp--header-logo StickyMasthead--hidden">
                  <h1 className="WorldIfApp--header-logo-title">The World</h1>
                  <Icon
                    icon="worldif"
                    className="WorldIfApp--header-logo-icon"
                    background="none"
                    size="67px"
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
                      size="25px"
                    />
                  </a>
                </div>
              </StickyMasthead>
              <div className="WorldIfApp--content" role="main">
                <Locations ref="router" path={this.props.path || '/'}>
                  <Location path="/" handler={HomePage} />
                  <Location path="/article/:id" handler={ArticlePage} />
                  <NotFound handler={NotFoundPage}/>
                </Locations>
              </div>
            </CaptureClicks>
          </div>
          {this.renderInlineScripts()}
          {this.renderScripts()}
        </body>
      </html>
    );
  }

}
