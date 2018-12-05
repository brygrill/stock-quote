import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

const pcLoadLetter = 'https://media.giphy.com/media/E7TjVOF3MoRFu/giphy.gif';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h3>not found</h3>
        <Image src={pcLoadLetter} />
      </div>
    );
  }
}
