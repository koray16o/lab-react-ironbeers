import { Link } from 'react-router-dom';
import img1 from '../assets/beers.png';
import img2 from '../assets/random-beer.png';
import img3 from '../assets/new-beer.png';
import Header from './Header';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <img src={img1} alt="allBeers" />
        <Link to="/beers">
          <button>
            <p>All Beers</p>
          </button>
        </Link>
      </div>
      <div>
        <img src={img2} alt="randomBeers" />
        <Link to="/random-beer">
          <button>
            <p>Random Beer</p>
          </button>
        </Link>
      </div>
      <div>
        <img src={img3} alt="newBeers" />
        <Link to="/new-beer">
          <button>
            <p>New Beer</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
