
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './src/views/Login';

import TelaCadastroEmail from './src/views/TelaCadastroEmail';

import ConfirmarCodigo from './src/views/ConfirmarCodigo';

import CadastroUsuario from './src/views/CadastroUsuario';
import ConfirmarEmail from './src/views/RecuperarSenha/ConfirmarEmail';
import NovoCodigo from './src/views/RecuperarSenha/NovoCodigo';
import Atualizar from './src/views/RecuperarSenha/Atualizar';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    TelaCadastroEmail,
    ConfirmarCodigo,
    CadastroUsuario,
    ConfirmarEmail,
    NovoCodigo,
    Atualizar
  })
)

export default function App() {
  return <Routes/>
}

