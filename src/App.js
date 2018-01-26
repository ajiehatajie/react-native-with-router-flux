/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Home from './Components/Home'
import About from './Components/About'
import BlackScreen from './Components/BlackScreen';
import BlueScreen from './Components/BlueScreen';
import TabView from './TabView';
import FontAwesome from 'react-native-fontawesome';
import { Icons } from 'react-native-fontawesome';

const TabIcon = ({ selected, title,iconName,menuName }) => {
  return (
    <View style={styles.container}>
         <Text style={{color: selected ? 'red' :'black'}}>
      <FontAwesome style={{fontSize: 25}}>
          {Icons[iconName]}
      </FontAwesome>
      
    </Text>
    <Text>{menuName}</Text>
    </View>
   
  );
}

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>

        <Tabs
                  key="tabbar"
                  showLabel={false}
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor="rgb(75,102,234)"
                  inactiveBackgroundColor="rgb(255, 255,255)"
                  tabBarPosition={'bottom'}
                >
                  <Stack
                    key="tab_1"
                    title="Tab #1"
                    tabBarLabel="TAB #1"
                    inactiveBackgroundColor="#FFF"
                    activeBackgroundColor="#DDD"
                    navigationBarStyle={styles.navBar}
                    titleStyle={{ color: 'red', alignSelf: 'center' }}
                  >
                    <Scene
                      key="tab_1_1"
                      component={Home}
                      title="Tab #1_1"
                      onRight={() => alert('Right button')}
                      rightTitle="Right"
                      icon={TabIcon} 
                      iconName="home"
                    />
                     <Scene
                      key="home"
                      component={Home}
                      navigationBarStyle={styles.navBar}
                      titleStyle={styles.title}
                    />
                     <Scene
                      key="about"
                      component={About}
                      navigationBarStyle={styles.navBar}
                      titleStyle={styles.title}
                    />


                  
                  </Stack>
                  <Scene key="tab_2_1" component={About} title="Tab #4"  menuName="Home"  navigationBarStyle={styles.navBar} iconName="gear" icon={TabIcon} />
                  <Scene key="tab_3_1" component={About} title="Tab #4"  menuName="File" navigationBarStyle={styles.navBar} iconName="file" icon={TabIcon} />
                  <Scene key="tab_4_1" component={About} title="Tab #4"  menuName="User" navigationBarStyle={styles.navBar}  iconName="user" icon={TabIcon}/>
                  <Scene key="tab_5_1" component={About} title="Tab #4"  menuName="Setting" navigationBarStyle={styles.navBar}  iconName="gear" icon={TabIcon} />
                 
                
                </Tabs>
        
        </Stack>
       
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
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
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
  navBar: {
    backgroundColor: 'rgb(75,102,234)',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  title: {
    color: 'white',
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
  }

});
