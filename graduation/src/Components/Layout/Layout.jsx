import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
export default function Layout({cart}) {
  return (
    <>
      <Navbar cart={cart} />
      <Outlet />
    </>
  )
}
