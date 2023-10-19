'use client';
import styles from './List.module.css';
import Image from 'next/image';
import { IVehicle } from '@/lib/types';

interface IProps {
  vehicles: IVehicle[];
}

export default function VehiclesList({ vehicles }: IProps) {
  console.log(vehicles[0]);

  return (
    <div className={styles.list}>
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.title}
          className={styles.item}
          // style={{ backgroundColor: vehicle.nation.color }}
        >
          <div className={styles.top}>
            <div className={styles.topInfo}>
              <Image
                className={styles.topImage}
                src={`https:${vehicle.type.icons.default}`}
                width={27}
                height={27}
                alt={vehicle.type.name}
              />
              <div className={styles.topLevel}>{vehicle.level}</div>
            </div>

            <Image
              className={styles.nationImage}
              src={`https:${vehicle.nation.icons.large}`}
              width={694}
              height={426}
              alt={vehicle.nation.name}
            />

            <Image
              className={styles.image}
              src={`https:${vehicle.icons.medium}`}
              width={435}
              height={256}
              alt={vehicle.title}
            />
          </div>

          <div className={styles.info}>
            <div>Название: {vehicle.title}</div>
            <div>Класс: {vehicle.type.title}</div>
            <div>Нация: {vehicle.title}</div>
            <div>{vehicle.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
