import UserForm from 'components/Userform';
import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>

      {/* Renderização apenas do App Routes, para haver o controle de rotas */}
      {/* <AppRoutes /> */}
      <UserForm />
    </>
  );
}

export default App;
