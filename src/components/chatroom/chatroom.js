import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  // Button
} from 'react-native';

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
  Footer,
  FooterTab,
  Right,
  Icon,
  Form,
  Text,
  Badge,
  List,
  ListItem,
  Subtitle,
  Fab
} from "native-base";

const cover = require('../../asset/logo.png');
const facebook = require('../../asset/facebook1.png');
const google = require('../../asset/google.png');
const twitter = require('../../asset/twitter.png');
const user = require('../../asset/user.png');


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class chatroom extends Component<Props> {
    // MainScreenNavigator = TabNavigator({
    //   jhonChat:{screen:}
    // })
    static navigationOptions = {
        header:null
      };
      constructor(){
        super();
        this.state={
          active:'false'
        }
      }
  render() {
    return (
      <Container 
        style={styles.container}
        >
        <Header style={{backgroundColor:'#6DC8F0'}}>
          <Left>
            <Button transparent
              onPress={()=>{
                this.props.navigation.navigate('dashboard')
              }}
              >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Maximilliano</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:10, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
            <View style={{backgroundColor:'#8ACDCD', width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>woy lu dimn bro?</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginLeft:210, width:200, margin:10, padding:20, borderRadius:12}}>
                <Text>ada apa njeng? sene kumpul yok</Text>
            </View>
        </Content>
        <Footer style={{backgroundColor:'#F5FCFF'}}>    
            <Input placeholder=" Chatting" style={{color:'#5D5A5A',backgroundColor:'#FFFFFF',margin:5, borderRadius:50, borderBottomColor:'#6F6F6F'}}/>
            {/* <Button rounded><Text>+</Text></Button> */}
            <Button block style={{margin:5, borderRadius:50, backgroundColor:'#4AB8E9'}}>
              <Icon name="send" />
              {/* <Text>News</Text> */}
            </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listStyle:{
    marginTop:'13%',
    // width:'90%'
    textAlign:'center'
  },
  logo:{
    marginTop:'39%',
    width:200,
    height:200
  },
  btnProviderFacebook:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#FFFFFF', 
    marginLeft:5,
    marginRight:5
  },
  btnSignIn:{
    margin: 15,
    marginTop: 50,
    borderRadius:50,
    width:200,
    backgroundColor:'#4AB8E9'
  }
});
