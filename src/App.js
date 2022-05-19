import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import ToDo from './Components/Pages/ToDo/ToDo';
import MangeTask from './Components/Pages/ManageTask/MangeTask';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todoapp" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        }
        />
        <Route path="/managetask" element={
          <RequireAuth>
            <MangeTask />
          </RequireAuth>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
