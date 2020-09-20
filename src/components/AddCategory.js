import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState('');

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(cat => [category, ...cat]);
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add category"
        value={category}
        onChange={handleCategory}
      />
    </form>
  )
}