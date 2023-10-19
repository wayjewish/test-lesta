import styles from './page.module.css';
import { gql } from '@apollo/client';
import { client } from '@/lib/client';
import VehiclesList from '@/components/vehicles/List';
import { IVehicle } from '@/lib/types';

async function getData(): Promise<IVehicle[]> {
  const { data } = await client.query({
    query: gql`
      query {
        vehicles {
          title
          description
          icons {
            large
            medium
          }
          level
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
            color
            icons {
              small
              medium
              large
            }
          }
        }
      }
    `,
  });

  return data.vehicles;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Корабли</h1>
        <VehiclesList vehicles={data} />
      </div>
    </main>
  );
}
