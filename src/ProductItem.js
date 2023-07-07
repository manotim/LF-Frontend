import { useState } from "react";
import React from 'react';
import UpdateFurniture from "./UpdateFurniture";
import { FiEdit } from 'react-icons/fi';

function ProductItem({ id, name, description, price, image, category, deleteFurniture, editFurniture }) {
  const [toggleEditDetails, setEditDetails] = useState(false);

  const handleEditDetails = () => {
    setEditDetails(!toggleEditDetails);
  };

  const handleDelete = () => {
    deleteFurniture(id);
  };

  return (
    <div className='item'>
      <div className="item-header">
        <h3>{name}</h3>
        
      </div>
      <img src={image} alt='' className='furniture-image' />
      <h5>Category: {category}</h5>
      <p>{description}</p>
      <h3>${price}</h3>
      {toggleEditDetails ? (
        <UpdateFurniture
          name={name}
          description={description}
          price={price}
          category={category}
          editFurniture={editFurniture}
          id={id}
        />
      ) : null}
      <button className='btn' id={`delete${id}`} onClick={handleDelete}>
        Remove
      </button>
      <div className="edit-icon-container">
          <FiEdit className="edit-icon" onClick={handleEditDetails} />
        </div>
    </div>
  );
}

export default ProductItem;
