import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className={'footer-background'}>
          <Menu borderless id={'footermenu'}>
            <Menu.Item id={'text3'}>DAHUI SURF @ 2014</Menu.Item>
            <Menu.Item><Icon id={'text3'} name={'vimeo'}></Icon></Menu.Item>
            <Menu.Item><Icon id={'text3'} name={'instagram'}></Icon></Menu.Item>
            <Menu.Item id={'text3'}>MEDIA</Menu.Item>
            <Menu.Item id={'text3'}>FAQ</Menu.Item>
            <Menu.Item id={'text3'}>FRIENDS OF DAHUI</Menu.Item>
            <Menu.Item id={'text3'}>POLICY & TERMS</Menu.Item>
          </Menu>
        </div>
    );
  }
}
