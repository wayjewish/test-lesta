'use client';
import styles from './Filters.module.css';
import { useState } from 'react';

export interface IFilters {
  level: string;
  nation: string;
  type: string;
}

export interface IFiltersOptions {
  level: string[];
  nation: string[];
  type: string[];
}

interface IProps {
  options: IFiltersOptions;
  filtering: (filters: IFilters) => void;
}

const labels: {
  [key in keyof IFilters]: {
    label: string;
    defaultText: string;
  };
} = {
  level: {
    label: 'Уровень',
    defaultText: 'Любой',
  },
  nation: {
    label: 'Нация',
    defaultText: 'Любая',
  },
  type: {
    label: 'Класс',
    defaultText: 'Любой',
  },
};

export default function VehiclesList({ options, filtering }: IProps) {
  const [filters, setFilters] = useState<IFilters>({
    level: '',
    nation: '',
    type: '',
  });

  const changeSelectHandler = (name: keyof IFilters, newValue: string) => {
    const newFilter = { ...filters };
    newFilter[name] = newValue;
    setFilters(newFilter);
    filtering(newFilter);
  };

  return (
    <div className={styles.filters}>
      {Object.keys(options).map((key) => {
        const keyFilter = key as keyof IFilters;
        return (
          <label key={key}>
            {labels[keyFilter].label}:
            <select
              name={key}
              value={filters[keyFilter]}
              onChange={(e) => changeSelectHandler(keyFilter, e.target.value)}
            >
              <option value=''>{labels[keyFilter].defaultText}</option>
              {options[keyFilter].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        );
      })}
    </div>
  );
}
