'use client';
import styles from './Item.module.css';
import Image from 'next/image';
import { IVehicle } from '@/lib/types';

interface IProps {
  vehicle: IVehicle;
}

export default function VehiclesItem({ vehicle }: IProps) {
  return (
    <div
      key={vehicle.title}
      className={styles.item}
      // style={{ backgroundColor: vehicle.nation.color }}
    >
      <div className={styles.head}>
        <div className={styles.headTop}>
          <Image
            className={styles.typeImage}
            src={`https:${vehicle.type.icons.default}`}
            width={27}
            height={27}
            alt={vehicle.type.name}
          />
          <div className={styles.headLevel}>{vehicle.level}</div>
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

        <div className={styles.headBot}>
          <div className={styles.type}>{vehicle.type.title}</div>
          <div className={styles.title}>{vehicle.title}</div>
        </div>
      </div>

      <div className={styles.description}>{vehicle.description}</div>
    </div>
  );
}
