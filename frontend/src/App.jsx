import React from 'react'
import Customer from './component/forms/Customer'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-customer' element={<Customer/>}/>
    </Routes>
  )
}

export default App
