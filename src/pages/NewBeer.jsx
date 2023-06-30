import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(null);
  const [contributedBy, setContributedBy] = useState('');
  const navigate = useNavigate();

  const handleName = event => {
    setName(event.target.value);
  };

  const handleTagline = event => {
    setTagline(event.target.value);
  };

  const handleDescription = event => {
    setDescription(event.target.value);
  };

  const handleFirstBrewed = event => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewersTips = event => {
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevel = event => {
    setAttenuationLevel(event.target.value);
  };

  const handleContributedBy = event => {
    setContributedBy(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      first_brewed: firstBrewed,
      description: description,
      attenuation_level: attenuationLevel,
      brewers_tips: brewersTips,
      contributed_by: contributedBy
    };

    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      );
      navigate('/beers');
    } catch (error) {
      console.log('Error', error);
    }

    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel(null);
    setContributedBy('');
  };

  return (
    <>
      <Header />
      <div>
        <h1>Add a new Beer</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">
              <b>Name:</b>
            </label>
            <input
              type="text"
              name="title"
              value={name}
              onChange={handleName}
            />
          </div>

          <div>
            <label htmlFor="image">
              <b>Tagline:</b>
            </label>
            <input
              type="text"
              name="image"
              value={tagline}
              onChange={handleTagline}
            />
          </div>

          <div>
            <label htmlFor="image">
              <b>Description:</b>
            </label>
            <input
              type="text"
              name="image"
              value={description}
              onChange={handleDescription}
            />
          </div>

          <div>
            <label htmlFor="image">
              <b>First Brewed:</b>
            </label>
            <input
              type="text"
              name="image"
              value={firstBrewed}
              onChange={handleFirstBrewed}
            />
          </div>

          <div>
            <label htmlFor="image">
              <b> Brewers Tips:</b>
            </label>
            <input
              type="textarea"
              name="image"
              value={brewersTips}
              onChange={handleBrewersTips}
            />
          </div>

          <div>
            <label htmlFor="price">
              <b>Attenuation Level:</b>
            </label>
            <input
              type="number"
              name="price"
              value={attenuationLevel}
              onChange={handleAttenuationLevel}
            />
          </div>

          <div>
            <label htmlFor="image">
              <b>Contributed By:</b>
            </label>
            <input
              type="text"
              name="image"
              value={contributedBy}
              onChange={handleContributedBy}
            />
          </div>

          <button type="submit">
            <b>Create Awesome Beer!</b>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
