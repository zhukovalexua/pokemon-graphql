import React, { FC } from 'react';
import { ICreature } from '../../types/types';
import { CreatureItem } from '../CreatureItem/CreatureItem';

import './CreatureList.css';

interface CreatureProps {
  pokemons: ICreature[];
}

export const CreatureList: FC<CreatureProps> = ({ pokemons }) => {
  return (
    <div className='container'>
      {pokemons?.map((el) => (
        <CreatureItem creature={el} key={el.id} />
      ))}
    </div>
  );
};
