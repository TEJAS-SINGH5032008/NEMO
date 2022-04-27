import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/homeScreen";
import OrderScreen from "./screens/orderScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App(){
  return (
    <HomeScreen/>,
    <ProfileScreen/>,
    <OrderScreen/>
  );
}
export default App;