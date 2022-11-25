import { StatusBar } from 'expo-status-bar';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './src/views/Login';

import TelaCadastroEmail from './src/views/TelaCadastroEmail';

import ConfirmarCodigo from './src/views/ConfirmarCodigo';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    TelaCadastroEmail,
    ConfirmarCodigo
  })
)

export default function App() {
  return <Routes/>
}

