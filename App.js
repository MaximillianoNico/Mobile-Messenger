/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  // Button
} from 'react-native';
import { StackNavigator} from 'react-navigation';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Thumbnail,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";

import signin from './src/components/SignIn/signin';
import dashboard from './src/components/chatList/chatlist';
import chatRoom from './src/components/chatroom/chatroom';
import news from './src/components/news/news';
import firebase from 'firebase';
import config from './src/api/firebase/config';


firebase.initializeApp(config);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = StackNavigator(
  {
    signIn:{
      screen:signin
    },
    dashboard:{
      screen:dashboard
    },
    chatRoom:{
      screen:chatRoom
    },
    news:{
      screen:news
    }
  },{
    initialRouteName:'signIn',
  }
)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<RootStack/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
