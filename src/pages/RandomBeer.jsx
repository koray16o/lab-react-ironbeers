import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );

      setRandomBeer(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!randomBeer) {
    return (
      <>
        <div>
          <Header />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div>
        <h2>Random Beer</h2>
        <div>
          <div>
            <div>
              <img src={randomBeer.image_url} alt="randombeer" width={100} />

              <p>
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.attenuation_level}</h3>
              </p>
              <p>
                {randomBeer.tagline}
                {randomBeer.first_brewed}
              </p>

              <p>{randomBeer.description}</p>
              <p>{randomBeer.contributed_by}</p>
            </div>
          </div>
        </div>
        <button onClick={fetchRandomBeer}>Random Beer</button>
      </div>
    </>
  );
};

export default RandomBeer;
