import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black text-white p-2'>
      <nav>
        <ul>
          <Link to="/" className='text-2xl mr-40 p-4 font-semibold hover:text-cyan-200'>SaleSync</Link>
          <Link to={'/add-customer'}>Add Customer</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
