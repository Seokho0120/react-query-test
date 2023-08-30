import React, { useState } from 'react';
import useProducts from '../hooks/use-products';
// import { userQuery } from '@tanstack/react-query';
import { useQuery } from 'react-query';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', checked], async () => {
    console.log('..................fetching..................');
    return fetch(`data/${checked ? 'sale_' : ''}products.json`).then((res) =>
      res.json()
    );
  });

  // const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
