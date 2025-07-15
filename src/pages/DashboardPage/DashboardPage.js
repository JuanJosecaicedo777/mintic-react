import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase';


function DashboardPage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };


  
  return (
    <div className='gradient'>


            <header className="p-3 border-bottom">

                <div className="container">
                  <nav class="navbar">
                    <div class="container-fluid">
                      <a class="navbar-brand ">SportGlam</a>
                      <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                      </form>
                      <button onClick={handleLogout} className="btn btn-primary">Cerrar Sesión</button>
                    </div>
                  </nav>
            
                </div>
            </header>

            <div className="d-flex justify-content-center align-items-center vh-100">
                <p className="fs-1 text-primary fw-bold">Bienvenido a SportGlam</p>
            </div>


        </div>
    );
}



export default DashboardPage;
