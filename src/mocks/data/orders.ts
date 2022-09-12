import { Order } from "components/tables/BaseTable/utils/interfaces"

export const orders: Order[] = [{
  id: 1,
  customer: 1,
  ref: 'RAN000000',
  order_date: '2020-09-18T21:39:14.00000Z',
  shipment_date: '2020-09-18T21:39:14.00000Z',
  products: [{ product: 1, quantity: 100 }, { product: 2, quantity: 200 }, { product: 3, quantity: 300 }],
  total_price: 100

}, {
  id: 2,
  name: 'Apple1',
  ref: 'RAN000001',
  price: 34.1,
},]