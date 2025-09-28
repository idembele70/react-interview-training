import { useSearchParams } from 'react-router-dom';
import React from 'react';

export default function() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [pending, startTransition] = React.useTransition();
  const [products, setProducts] = React.useState([]);
  const q = React.useMemo(() => {
    return searchParams.get('q')
  }, [searchParams]);

  const fetchProducts = async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    let data;
    if (!response.ok) data = { products: [] };
    else data = await response.json();
    return data.products;
  }
    
  const loadProducts = async function(isMounted) {
      const products = await fetchProducts(q);
        if (isMounted)
          return products;
      return [];
   } 

  React.useEffect(() => {
    const isMounted = true;
    const products = loadProducts(isMounted);
    startTransition(() => setProducts(products));
    return () => {   isMounted = false }
  },[q])

  function handleChange(e) {
    const { value } = e.target;
    setSearchParams({ q: value });
    const products = loadProducts();
    startTransition( () => setProducts(products));
  }

  const productItems = React.useMemo(() => products.map(p => <li key={p.id}>{p.title}</li>), [products]);

 return (
  <div>
    <input type='search' name='search' value={q} onChange={handleChange} placeholder='Search a product' />
    {pending
      ? <h2>Loading...</h2>
      : !products.length ? <h2>No products found</h2>
      : <ul>{productItems}</ul>
    }
  </div>
 )
}
