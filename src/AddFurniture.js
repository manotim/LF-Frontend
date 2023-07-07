import React from 'react'
import { useState } from 'react'

function AddFurniture({ addFurniture }) {
  const [furniture, setFurniture] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0.0,
    image: '',
   category: '',
  })

  const handleChange = (e) => {
    const input = e.target.id
    const value = e.target.value

    setFurniture((prev) => {
      return { ...prev, [input]: value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addFurniture(furniture)
  }
  return (
    <div>
      <form className='form-container' id='container-form' onSubmit={handleSubmit}>
        <legend>Sell Your Furniture Now:</legend>
        <label htmlFor='id'>ID:</label>
        <input
          type='number'
          value={furniture.id}
          id='id'
          name='id'
          placeholder='Enter your ID'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          value={furniture.name}
          id='name'
          name='name'
          placeholder='Enter Furniture name'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='description'>Description:</label>
        <input
          type='text'
          name='description'
          value={furniture.description}
          id='description'
          placeholder='Describe your furniture abit.'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='price'>Price:</label>
        <input
          type='number'
          name='price'
          value={furniture.price}
          id='price'
          placeholder='Enter Furniture Price'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='image'>Image URL:</label>
        <input
          type='text'
          name='image'
          value={furniture.image}
          id='image'
          placeholder='Enter Image Link'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='category'>Furniture Category:</label>
        <input
          type='text'
          name='category'
          value={furniture.category}
          id='category'
          placeholder='Enter Furniture Category'
          onChange={handleChange}
          required
        />
        <br />
        <button className='submit' type='submit'>
          Add To Website
        </button>
      </form>
    </div>
  )
}

export default AddFurniture