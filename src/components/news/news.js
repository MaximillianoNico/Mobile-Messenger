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
  Card,
  CardItem,
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
  Fab,
  Tab,
  ScrollableTab,
  Tabs,
  TabHeading,
  DeckSwiper
} from "native-base";
import firebase from 'firebase';
import config from '../../api/firebase/config';

const user = require('../../asset/user.png');

const cards = [
  {
    text: 'Posting 1',
    name: 'One',
    image: require('../../asset/logofifa.jpg'),
  },
  {
    text: 'Pertandingan',
    name: 'One',
    image: require('../../asset/tanding1.jpg'),
  },
];

import fifa from '../../asset/logofifa.jpg';
import match from '../../asset/tanding1.jpg';

type Props = {};
export default class news extends Component<Props> {
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
        <Header hasTabs style={{backgroundColor:'#38A0CD'}}>
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
        <Tabs renderTabBar={()=> <ScrollableTab  style={{backgroundColor:'#6DC8F0'}}/>}>
          <Tab heading={
            <TabHeading style={{backgroundColor:'#38A0CD',color:'#FFFFFF'}}><Icon name="camera" /></TabHeading>
            } >
            {/* <Tab1 /> */}
            <View>
            <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>NativeBase</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:'#38A0CD'}}><Text>news</Text></TabHeading>
          }>
            {/* <Tab5 /> */}
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={fifa} />
                    <Body>
                      <Text>Fifa 2018</Text>
                      <Text note>GeekyAnts</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={fifa} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={match} />
                  <Body>
                    <Text>Match Inggris vs Swedia</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={match} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={fifa} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={fifa} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
            </Content>
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:'#38A0CD'}}><Text>#uidesign</Text></TabHeading>
          }>
            {/* <Tab2 /> */}
            <Text>tab2</Text>
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:'#38A0CD'}}><Text>#pilkada2018</Text></TabHeading>
          }>
            {/* <Tab3 /> */}
            <Text>tab3</Text>
          </Tab>
          <Tab heading={
              <TabHeading style={{backgroundColor:'#38A0CD'}}><Text>#pilpres2019</Text></TabHeading>
          }>
            {/* <Tab4 /> */}
            <Text>tab4</Text>
          </Tab>
        </Tabs>
        <Footer style={{backgroundColor:'#38A0CD'}}>
          <FooterTab style={{backgroundColor:'#38A0CD'}}>
            <Button badge vertical 
                onPress={()=>{this.props.navigation.navigate('dashboard')}}>
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
