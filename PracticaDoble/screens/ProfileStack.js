import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../screens/profile';
import Detalles from '../screens/detalles';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Perfil" 
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Detalles" 
        component={Detalles}
        options={{ title: "Detalles de Usuario" }}
      />
    </Stack.Navigator>
  );
}
