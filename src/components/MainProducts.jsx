import React, { useState } from 'react';
import Products from './Products';
import { useQueryClient } from 'react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  const client = useQueryClient(); // client정보 가져오기

  return (
    <main className='container'>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(['products']);
          // client.invalidateQueries(['products', false]);
        }}
      >
        정보가 업데이트 되었음~~
      </button>
    </main>
  );
}
