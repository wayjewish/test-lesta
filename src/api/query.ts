import { gql } from '@apollo/client';

export const queryVehicles = gql`
  query {
    vehicles {
      title
      description
      level
      icons {
        medium
      }
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        icons {
          large
        }
      }
    }
  }
`;
