import * as React from 'react'
import Header from './components/Header'
import { Container } from '@mui/material'
import Login from './pages/Login'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'

export default function App() {
  return (
    <>
      <Header show={true}>Tienda de Artesania</Header>

      <menuitem></menuitem>

      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
    </>
  )
}
