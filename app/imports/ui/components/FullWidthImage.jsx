import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src={'images/full-image.jpg'}></Image>
    );
  }
}
