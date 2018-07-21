import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  // Button
} from 'react-native';

import firebase from 'firebase';
import config from '../../api/firebase/config';
// firebase.initializeApp(config);
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
export default class chatlist extends Component<Props> {
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
          userMessenger:[],
          totalChat:[],
          name:'',
          uid:''
        }
      }
    componentDidMount(){
      firebase.auth.onAuthStateChanged((user)=>{
        if(user){           
          this.setState({
              uid:user.uid
          })
          this.OnStateAuth();
          // this.setIdChat();
          alert("Welcome to WebChat");

          var dbUser = firebase.database().ref(`user/${this.props.uid}/`);
          dbUser.on('value', snapshot =>{
              this.setState({
                  userMessenger:snapshot.val(),
                  totalChat:snapshot.val().chat,
                  name:snapshot.val().name
              });
          })
          
        }else{
            alert("Please Sign In before use WebChat");
            this.props.navigation.navigate('signIn');
        }
      })
    }
  render() {
    return (
      <Container 
        style={styles.container}
        >
        <Header style={{backgroundColor:'#38A0CD'}}>
          <Left>
            <Button transparent>
              <Thumbnail small source={user}/>            
            </Button>
          </Left>
          <Body>
            <Title>Maximilliano</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
              onPress={()=>{
                this.props.navigation.navigate('chatRoom')
              }}>
              <Left>
                <Thumbnail source={user}/>
              </Left>
              <Body>
                <Text>Simon Mignolet</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text note>6:10 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        
        <Footer style={{backgroundColor:'#38A0CD'}}>
          <FooterTab style={{backgroundColor:'#38A0CD'}}>
            <Button badge vertical 
              onPress={()=>{
                this.props.navigation.navigate('dashboard')}}
                >
              <Badge><Text>3</Text></Badge>
              <Icon name="chatbubbles" />
              {/* <Text>Chat</Text> */}
            </Button>
            <Button vertical 
              onPress={()=>{this.props.navigation.navigate('news')}}>
              <Icon name="search" />
              {/* <Text>News</Text> */}
            </Button>
            <Button vertical>
              <Icon name="person" />
              {/* <Text>Me</Text> */}
            </Button>
          </FooterTab>
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
    backgroundColor: '#FFFFFF',
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
