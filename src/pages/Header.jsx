import { Link } from 'react-router-dom';
import img from '../assets/header.png';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src={img} alt="header" />
      </Link>
    </div>
  );
};

export default Header;
