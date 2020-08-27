import orderBy from 'lodash/orderBy';

export function orderList(list: any) {
  return orderBy(list, ['name'], ['asc']);
}
