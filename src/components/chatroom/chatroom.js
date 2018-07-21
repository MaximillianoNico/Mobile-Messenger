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

import firebase from 'firebase';
import config from '../../api/firebase/config';
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
          active:'false',
          contentChat:[],
          text:''
        }
      }

      componentDidMount(){
        var getChat = firebase.database().ref(`messenger/${this.props.navigation.state.params.idChat}/`);
        getChat.on('value',snapshot=>{
          this.setState({
              contentChat:snapshot.val().chat
          })
        })
      }

      _handleMessege =(res)=>{
        this.setState({
          text:res
        })
      }

      postMessege=()=>{
        var idchat = this.props.navigation.state.params.idChat;
        var id = this.props.navigation.state.params.uid;
        var name = this.props.navigation.state.params.name;

        var addChat = firebase.database().ref(`messenger/${idchat}/chat/${this.state.contentChat.length}`)
        addChat.set({
            _idUser:id,
            content:this.state.text,
            name:name,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`
        })
      }
  render() {
    const chatting = this.state.contentChat.map((value,key)=>{
      if(this.props.navigation.state.params.uid === value._idUser){
        return(
            <View style={styles.right}>
              <Text>{value.content}</Text>
            </View>
        )
      }
      else{
        return(
          <View style={styles.left}>
            <Text>{value.content}</Text>
          </View>
        )
      }
    })
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
          {chatting}
        </Content>
        <Footer style={{backgroundColor:'#F5FCFF'}}>    
            <Input placeholder=" Chatting"
                  onChangeText={
                    this._handleMessege
                  } 
                  style={styles.inputText}/>
            {/* <Button rounded><Text>+</Text></Button> */}
            <Button 
              block style={styles.btnMessengge}
              onPress={()=>{
                this.postMessege()
              }}>
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
  right:{
    backgroundColor:'#FFFFFF',
    marginLeft:210, 
    width:200, 
    margin:10, 
    padding:20, 
    borderRadius:12
  },
  left:{
    backgroundColor:'#8ACDCD', 
    width:200, 
    margin:10, 
    padding:10, 
    borderRadius:12
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
  inputText:{
    color:'#5D5A5A',
    backgroundColor:'#FFFFFF',
    margin:5, 
    borderRadius:50, 
    borderBottomColor:'#6F6F6F'
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
  },
  btnMessengge:{
    margin:5, borderRadius:50, 
    backgroundColor:'#4AB8E9'
  }
});
