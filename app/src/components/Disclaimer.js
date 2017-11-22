import React, { Component } from 'react';
import Media from 'react-media';
import { Popup, Icon } from 'semantic-ui-react';

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <span>
        Data provided for free by{' '}
        <a href="https://iextrading.com/developer/">IEX</a> |{' '}
      </span>
      <span>
        <a href="https://iextrading.com/api-exhibit-a/">IEX Disclaimer</a> |{' '}
      </span>
      <span>
        Search by <a href="https://www.algolia.com/">Algolia</a>
      </span>
    </div>
  );
};

export default class DisclaimerComponent extends Component {
  render() {
    return (
      <Media query={{ maxWidth: 737 }}>
        {matches =>
          matches ? (
            // Show icon popup with disclaimer on mobile
            <Popup
              inverted
              on="click"
              trigger={<Icon name="info circle" size="large" color="grey" />}
            >
              <Popup.Content>
                <Disclaimer />
              </Popup.Content>
            </Popup>
          ) : (
            <Disclaimer />
          )
        }
      </Media>
    );
  }
}
