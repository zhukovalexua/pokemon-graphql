import React, { FC, useState } from 'react';
import { ICreature } from '../../types/types';

import './CreatureItem.css';

interface CreatureItemProps {
  creature: ICreature;
}

export const CreatureItem: FC<CreatureItemProps> = ({ creature }) => {
  const [showDescription, setShowDescription] = useState(true);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className='creature-container' onClick={handleShowDescription}>
      {showDescription ? (
        <div className='card-front'>
          <div className='creature-name'>
            <p>{creature.name}</p>
          </div>
          <div className='creature-img'>
            <img src={creature.image} alt='pokemon img' />
          </div>
        </div>
      ) : (
        <div className='creature-description'>
          <div className='creature-stats'>
            <p>Height: {creature.height.minimum}</p>
            <p>Weight: {creature.weight.minimum}</p>
            <p>Max HP: {creature.maxHP}</p>
          </div>

          <div className='creature-types'>
            <p> Type: {creature.types} </p>
          </div>
          <div className='creature-attacks'>
            <p> Special Attacks:</p>{' '}
            <div className='creature-attacks__description'>
              {creature.attacks.special.slice(0, 3).map((attack) => (
                <span>{attack.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
