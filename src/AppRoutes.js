import React, { Children } from 'react';
import {createBrowserRouter} from 'react-router-dom';

//Importar las vistas
import HomeScreen from './pages/home'
import ClientesScreen from './pages/clientes'
import PedidosScreen from './pages/pedidos'
import ProductosScreen from './pages/productos'
import CategoriasScreen from './pages/categorias'
import CategoriaClaseScreen from './pages/categorias/categorias-clase'
import LoginScreen from './pages/login'

//Importar los layouts
import MainLayout from './layouts/MainLayout'
import NuevoClienteScreen from './pages/clientes/nuevo';

// Lógica y manejo de estados del componente, aqui se escribe solo codigo javascript

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen/>
  },
  {
    path: '/',
    element : <MainLayout/>,
    children: [
      {path: 'dashboard',element: <HomeScreen/>},
      {path: 'categorias',element: <CategoriasScreen/>},
      {path: 'categorias-legacy',element: <CategoriaClaseScreen/>},
      {path: 'productos',element: <ProductosScreen/>},
      {path: 'pedidos',element: <PedidosScreen/>},
      {path: 'clientes',element: <ClientesScreen/>},
      {path: 'clientes/nuevo',element: <NuevoClienteScreen/>}
    ]
  }
])

export default router;


