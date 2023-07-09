import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import NavLinks from './NavLinks';
import ProductList from './ProductList';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import Unauthorized from './Unauthorized';
import AddFurniture from './AddFurniture';
import { useState, useEffect } from 'react';
import { AuthStatus } from './AuthStatus';
import Footer from './footer';


function App() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/furniture')
      .then(resp => resp.json())
      .then(data => setFurniture(data))
      .catch(error => console.error(error));
  }, []);

  const [logged, setLogged] = useState({
    name: '',
    status: false
  })
  const navigate = useNavigate()
  function loginUser(user) {
    fetch('http://127.0.0.1:5555/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => {
      return res.json()
    }).then(data => {
      if (data.username) {
        console.log(data);
        console.log('success');
        setLogged({ name: data.username, status: true })
        navigate('/products')
      } else {
        console.log('failure');
        navigate('/denied')
      }
    })
  }

  const addFurniture = (furniture) => {
    fetch('http://127.0.0.1:5555/furniture', {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(furniture),
    }).then((res) => console.log(res))
  }

  function editFurniture(furniture) {
    fetch(`http://127.0.0.1:5555/furniture${furniture.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(furniture),
    })
  }

  function deleteFurniture(id) {
    fetch(`http://127.0.0.1:5555/furniture/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setFurniture((furniture) =>
          furniture.filter((furn) => furn.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting furniture:', error);
        // Handle the error or provide fallback behavior
      });
  }

  return (
    <>
      <NavLinks />
      <AuthStatus.Provider value={{ logged, setLogged }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList furniture={furniture} deleteFurniture={deleteFurniture} editFurniture={editFurniture} />} />
          <Route path='/login' element={<Login loginUser={loginUser} />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/denied' element={<Unauthorized />} />
          <Route path='/addFurniture' element={<AddFurniture addFurniture={addFurniture} />} />
        </Routes>
      </AuthStatus.Provider>
      <Footer />
    </>
  );
}

export default App;
