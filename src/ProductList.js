import React from 'react'
import { useContext, useEffect } from 'react'
import { AuthStatus } from './AuthStatus'
import { useNavigate } from 'react-router-dom'
import ProductItem from './ProductItem'
function ProductList({furniture, deleteFurniture, editFurniture}) {
  const {logged} = useContext(AuthStatus)
  const navigate = useNavigate()
  useEffect(() => {
    if (logged.status === false) {
      navigate('/login')
    }
  }
    
  )
  
  return (
    <>
    <h3>Products for {logged.name}</h3>
    <div className='container'>
      {furniture.map((furn) => (
        <ProductItem {...furn} key={furn.id} deleteFurniture={deleteFurniture} editFurniture={editFurniture}/>
      ))}
    </div>
    </>
  )
}

export default ProductList
