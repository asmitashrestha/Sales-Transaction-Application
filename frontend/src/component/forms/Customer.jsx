import React from 'react';
import Navbar from '../Header/Navbar';

const Customer = () => {
  return (
    <>
    <Navbar/>
     <div className="bg-img1 h-screen bg-cover bg-center relative flex items-center justify-center">
     
      <div className="max-w-md md:max-w-lg lg:max-w-xl shadow-gray-950 py-12 px-16 rounded-md shadow-2xl">
        <h2 className="text-3xl text-center mb-6 text-white">Add Customer Details</h2>
        <form action="">
          <div className="border border-white rounded-sm p-6 md:p-9">
            <div className="mb-4">
              <input type="text" placeholder='Customer name' className="w-full placeholder-white text-white outline-none bg-transparent p-3 focus:outline-none focus:border-blue-500" />
              <hr className='md:w-[300px]' />
            </div>
            <div className="mb-4">
              <input type="email" placeholder='Enter Customer Email' className="w-full text-white outline-none bg-transparent placeholder-white p-3 focus:outline-none focus:border-blue-500" />
              <hr className='md:w-[300px]' />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder='Enter Customer number' className="w-full text-white outline-none bg-transparent placeholder-white p-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4 mt-3">
            <input type="checkbox" id="accept" name='accept' value='accept' className="mr-2" />
            <label htmlFor="accept" className='text-white bg-transparent'>I accept the terms of Use</label>
          </div>
          <div className="text-center">
            <button type='submit' className="w-full px-4 py-2 bg-orange-700 text-white rounded-sm hover:bg-orange-600 focus:outline-none focus:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
   
  );
}

export default Customer;

