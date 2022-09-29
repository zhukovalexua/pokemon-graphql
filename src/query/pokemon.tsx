import { gql } from '@apollo/client';

export const GET_ALL_DATA = gql`
  query getAllData {
    pokemons(first: 50) {
      id
      name
      image
      maxHP
      height {
        minimum
      }
      weight {
        minimum
      }
      types
      attacks {
        special {
          name
          type
        }
      }
    }
  }
`;
