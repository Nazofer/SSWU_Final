import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/productsSlice';

const useFetchProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Products'));
        const products = querySnapshot.docs.map((doc) => doc.data());
        setProductsData(products.sort((a, b) => b.discount - a.discount));
        dispatch(addProducts(products));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  return productsData;
};

export default useFetchProducts;
