import React from 'react'
import { Home, AddMovie } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Home></Home>}>
              
            </Route>
            <Route path='add_movie/' element={
              <AddMovie></AddMovie>
            }></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App