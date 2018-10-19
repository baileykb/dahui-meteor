import React from 'react';
import { Container, Menu, Image, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless id={"topmenu"}>
          <Container centered={'true'} grid={'true'}>
            <Menu.Item><Image src={'images/logo.png'} id="logo"/></Menu.Item>
            <Menu.Item id="text1">Home</Menu.Item>
            <Menu.Item id="text">Company</Menu.Item>
            <Menu.Item id="text">Events</Menu.Item>
            <Menu.Item id="text">Dahui Wax Riders</Menu.Item>
            <Menu.Item id="text">Dahui Wax Riders</Menu.Item>
            <Menu.Item id="text">Team</Menu.Item>
            <Menu.Item id="text">Blog</Menu.Item>
            <Menu.Item id="text">Contact</Menu.Item>
            <Menu.Item position={'right'} id="text2">Shop <Icon id='text2' name='shop'></Icon></Menu.Item>
            <Menu.Item><Icon id='text' name={'vimeo'}></Icon></Menu.Item>
            <Menu.Item><Icon id='text' name={'instagram'}></Icon></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
