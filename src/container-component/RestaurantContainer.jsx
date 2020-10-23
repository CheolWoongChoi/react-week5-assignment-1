import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../actions';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { selectedOption, regions, restaurants } = useSelector((state) => ({
    selectedOption: state.selectedOption,
    regions: state.option.regions,
    restaurants: state.restaurants,
  }));

  const { region, category } = selectedOption;

  useEffect(() => {
    if (region > 0 && category > 0) {
      const { name } = regions.find((r) => r.id === region);
      dispatch(loadRestaurants({ region: name, categoryId: category }));
    }
  }, [selectedOption]);

  return (
    <ul>
      {
        restaurants.map((r) => (
          <li key={r.id}>
            {r.name}
          </li>
        ))
      }
    </ul>
  );
}
