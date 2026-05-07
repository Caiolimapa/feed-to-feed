import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/home';
import Categorias from './pages/categorias';
import OngDetalhe from './pages/OngDetalhe';

const isLoggedIn = () => !!localStorage.getItem('ajudaai_user');

function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/categoria/:id" element={<ProtectedRoute><Categorias /></ProtectedRoute>} />
        <Route path="/ong/:id" element={<ProtectedRoute><OngDetalhe /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}