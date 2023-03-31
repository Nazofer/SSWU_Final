import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/cartSlice';

const useFetchProducts = () => {
  const [productsData, setProductsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  console.log(productsData);
  useEffect(() => {
    getDocs(collection(db, 'Products'))
      .then((querySnapshot) => {
        setIsLoading(true);
        setProductsData([]);
        querySnapshot.forEach((el) =>
          setProductsData((prev) =>
            [...prev, el.data()].sort((a, b) => b.discount - a.discount)
          )
        );
      })
      .then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // console.log(productsData);
      dispatch(addProducts(productsData));
    }
  }, [isLoading]);

  return productsData;
};

export default useFetchProducts;
