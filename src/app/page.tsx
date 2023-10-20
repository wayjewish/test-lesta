import styles from './page.module.css';
import { ApolloQueryResult } from '@apollo/client';
import { client } from '@/api/client';
import VehiclesList from '@/components/vehicles/list/List';
import { IVehicle } from '@/api/types';
import { queryVehicles } from '@/api/query';

async function getData(): Promise<ApolloQueryResult<{ vehicles: IVehicle[] }>> {
  return await client.query({
    query: queryVehicles,
  });
}

export default async function Home() {
  const { data, error } = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Корабли</h1>
        {error && `Error! ${error.message}`}
        {data && <VehiclesList vehicles={data.vehicles} />}
      </div>
    </main>
  );
}
