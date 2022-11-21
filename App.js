import { StatusBar } from 'expo-status-bar';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './src/views/Login';

import TelaCadastroEmail from './src/views/TelaCadastroEmail';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    TelaCadastroEmail
  })
)

export default function App() {
  return <Routes/>
}

