import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';

const useFetchProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'Products')).then((querySnapshot) => {
      setProductsData([]);
      querySnapshot.forEach((el) =>
        setProductsData((prev) => [...prev, el.data()])
      );
      setProductsData((prev) => prev.sort((a, b) => b.discount - a.discount));
    });
  }, []);

  return productsData;
};

export default useFetchProducts;
