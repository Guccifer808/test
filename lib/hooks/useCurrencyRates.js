import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const db = getDatabase();
        const dbRef = ref(db, 'currencyRates');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setCurrencyRates(snapshot.val());
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, []);

  const mapCurrencyToRate = (currencyCode) => {
    if (currencyRates.hasOwnProperty(currencyCode)) {
      return currencyRates[currencyCode];
    } else {
      return null;
    }
  };

  return { currencyRates, mapCurrencyToRate };
};

export default useCurrencyRates;
