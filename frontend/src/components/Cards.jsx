import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get to know our world</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='characters_pic.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Characters'
              path='/characters'
            />
            <CardItem
              src='planets_pic.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Planets'
              path='/planets'
            />
            <CardItem
              src='starships_pic.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Starships'
              path='/starships'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;