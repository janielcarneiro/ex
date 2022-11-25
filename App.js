import { StatusBar } from 'expo-status-bar';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './src/views/Login';

import TelaCadastroEmail from './src/views/TelaCadastroEmail';

import ConfirmarCodigo from './src/views/ConfirmarCodigo';

import CadastroUsuario from './src/views/CadastroUsuario';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    TelaCadastroEmail,
    ConfirmarCodigo,
    CadastroUsuario,
  })
)

export default function App() {
  return <Routes/>
}

