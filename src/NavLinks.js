import React from 'react'
import {
    NavLink,
  } from 'react-router-dom'

function NavLinks() {
  return (
    <div>
        <span className="website-name">LUXES-FURNITURE</span>
        <br/>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/products' activeClassName='active'>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/login' activeClassName='active'>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/logout' activeClassName='active'>
                Log out
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/addFurniture' activeClassName='active'>
                Post Your Furniture
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavLinks
