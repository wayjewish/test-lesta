'use client';
import styles from './List.module.css';
import { IVehicle } from '@/lib/types';
import { useState } from 'react';
import Filters, { IFilters, IFiltersOptions } from '../filters/Filters';
import VehiclesItem from '../item/Item';

interface IProps {
  vehicles: IVehicle[];
}

const getFiltersOptions = (vehicles: IVehicle[]): IFiltersOptions => {
  const unicleFields: {
    [key in keyof IFilters]: { [key: string]: boolean };
  } = {
    level: {},
    nation: {},
    type: {},
  };

  for (const iterator of vehicles) {
    if (!unicleFields.level[iterator.level]) unicleFields.level[iterator.level] = true;
    if (!unicleFields.nation[iterator.nation.name])
      unicleFields.nation[iterator.nation.name] = true;
    if (!unicleFields.type[iterator.type.name]) unicleFields.type[iterator.type.name] = true;
  }

  return {
    level: Object.keys(unicleFields.level),
    nation: Object.keys(unicleFields.nation),
    type: Object.keys(unicleFields.type),
  };
};

export default function VehiclesList({ vehicles }: IProps) {
  const [vehiclesFiltred, setVehiclesFiltred] = useState<IVehicle[]>(vehicles);

  const filteringHandler = (filters: IFilters) => {
    const newVehiclesFiltred = vehicles.filter((vehicle) => {
      if (filters.level && String(vehicle.level) !== filters.level) return false;
      if (filters.nation && vehicle.nation.name !== filters.nation) return false;
      if (filters.type && vehicle.type.name !== filters.type) return false;
      return true;
    });

    setVehiclesFiltred(newVehiclesFiltred);
  };

  return (
    <>
      <Filters
        options={getFiltersOptions(vehicles)}
        filtering={(filters) => filteringHandler(filters)}
      />
      <div className={styles.list}>
        {vehiclesFiltred.map((vehicle) => (
          <VehiclesItem key={vehicle.title} vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}
