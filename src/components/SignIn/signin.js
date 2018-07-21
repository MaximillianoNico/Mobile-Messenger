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
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import firebase from 'firebase';
import config from '../../api/firebase/config';

const cover = require('../../asset/logo.png');
const facebook = require('../../asset/facebook1.png');
const google = require('../../asset/google.png');
const twitter = require('../../asset/twitter.png');


type Props = {};
export default class signin extends Component<Props> {
    static navigationOptions = {
        header:null
      };
      
      constructor(){
        super();
        this.state={
          username:'',
          password:''
        }
      }
      _handleUsername =(res)=>{
        this.setState({
          username:res
        })
      }
      _handlePassword =(res)=>{
        this.setState({
          password:res
        })
      }
      _handleSignInWithEmailandPassword =()=>{
        if(this.state.username===''&&this.state.password===''){
            alert('Please Input email and password')
        }else{
          // this.props.navigation.navigate('dashboard')
          firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((res)=>{
              alert("Success Access to Firebase Auth");
              this.props.navigation.navigate('dashboard',{
                title:"Dashboard",
                user:this.state.username,
              });
              this.changeStatus;
            })
            .catch((err)=> {
                // Handle Errors here.
                var errorCode = err.code;
                var errorMessage = err.message;
                if (errorCode == 'auth/wrong-password') {
                  alert('Wrong Password or Email.');
                } else {
                  alert(errorMessage);
                }
                console.log(err);
              });
        
        }
      }
  render() {
    
    
    return (
      <Container 
        style={styles.container}
        >
        <Image style={styles.logo} large source={cover} />
        <Content style={styles.formSignIn}>
          
          <Form>
            <Item>
              <Input placeholder="Username" style={{textAlign:'center'}} 
                type="email"
                onChangeText={
                  this._handleUsername
                }/>
            </Item>
            <Item>
              <Input placeholder="Password" style={{textAlign:'center'}} secureTextEntry 
               type="password"
               onChangeText={
                 this._handlePassword
               }/>
            </Item>
          </Form>
          <Button block style={styles.btnSignIn}
            onPress={()=>this._handleSignInWithEmailandPassword()}
            >
            <Text>Sign In</Text>
          </Button>
          <View small style={styles.ContainerProvider}>
            <Button block style={styles.btnProviderFacebook}>
              <Thumbnail style={{width:27, height:27}} source={facebook}/>
            </Button>
            <Button block style={styles.btnProviderFacebook}>
              <Thumbnail style={{width:30, height:30}} source={google}/>
            </Button>
            <Button block style={styles.btnProviderFacebook}>
              <Thumbnail style={{width:30, height:30}} source={twitter}/>
            </Button>
          </View>
          <Text style={{fontSize:15,textAlign:'center', paddingTop:20}}>Don't have an account ? Sign In</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  formSignIn:{
    marginTop:'13%',
    // width:'90%'
    // textAlign:'center'
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
  },
  ContainerProvider:{
    flex:1,
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
