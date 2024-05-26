import {Product} from './interfaces/appState';

function calculateDiscountedPrice(price: number, quantity: number): number {
  const discountedPrice = price * quantity;
  return discountedPrice;
}

export function increasQty(array: Product[], id: number, preValue: number) {
  const updatedArray = array.map(item => {
    if (item?.id === id) {
      // Modify the specified field for the object with the matching ID
      return {...item, quantity: preValue + 1};
    }
    return item;
  });

  return updatedArray;
}

export function decreasQty(array: Product[], id: number, preValue: number) {
  const updatedArray = array.map(item => {
    if (item?.id === id) {
      // Modify the specified field for the object with the matching ID
      return {...item, quantity: preValue - 1};
    }
    return item;
  });

  return updatedArray;
}
