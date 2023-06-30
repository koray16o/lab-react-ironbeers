import Header from './Header';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeers(response.data);
      } catch (error) {
        console.log('Error getting beers', error);
      }
    };
    getBeers();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>All The Awesomeness In One Place</h1>

        {beers &&
          beers.map(beer => (
            <div key={beer._id}>
              <div>
                <div>
                  <img src={beer.image_url} alt="beer" width={100} />
                </div>
                <div>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </>
  );
};

export default Beers;
