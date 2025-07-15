import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPages/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/DashboardPage/DashboardPage';
import MyComponent from './pages/Playground/useState';
import MensajeCambio from './pages/Playground/useEffect';
import ClickTracker from './pages/Playground/useRef';

import NotFoundPage from './pages/Components/NotFoundPage';
import ProtectedRoute from './pages/Components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/MyComponent" element={<MyComponent />} />
        <Route path="/Contador" element={<MensajeCambio />} />
        <Route path="/click" element={<ClickTracker />} />

        {/* Ruta protegida con Firebase Auth */}
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

        {/* Ruta genérica para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
