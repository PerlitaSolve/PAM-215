import { NavigationContainerStatusBar } from 'react-navigation/native';
import { CreateBottomTabNavigator } from '@react-navigator/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import home from '/screens/home';
import profile from '/screens/profile';
import settings from '/screens/settings';

const Tab= CreateBottomTabNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Tab.Navigator
      inirialRouteName="home"
      screensOptions={({ route})=> ({
        headerShown: false,
        tabBarIcon:({ color, size})=>{
          let iconName;
          if (route.name==='home'){
            iconName='home';
          }else if(route.name==='profile'){
            iconName='person';
          }elseif(route.name==='settings'){
            iconName='settings';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          paddingBottom: 5,
          height: 60,
        },
      })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={profile}/>
        <Tab.Screen name="Settings" component={settings}/>
      </Tab.Navigator>
    </NavigatorContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
