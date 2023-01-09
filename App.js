
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './src/views/Login';

import CadastroUsuario from './src/views/CadastroUsuario';
import ConfirmarEmail from './src/views/RecuperarSenha/ConfirmarEmail';
import NovoCodigo from './src/views/RecuperarSenha/NovoCodigo';
import Atualizar from './src/views/RecuperarSenha/Atualizar';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    CadastroUsuario,
    ConfirmarEmail,
    NovoCodigo,
    Atualizar
  })
)

export default function App() {
  return <Routes/>
}

