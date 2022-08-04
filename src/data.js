import img from './img/fruits.png'

const data = {
  products: [
    {
      id: '1',
      name: 'Banana',
      price: 10,
      image: img,
    },
    {
      id: '2',
      name: 'Apple',
      price: 8,
      image: img,
    },
    {
      id: '3',
      name: 'Papaya',
      price: 10,
      image: img,
    },
  ],
  discounts: [
    {
      id: 1,
      name: 'discount name',
      desc: 'discount description',
      products: ["3"],
      calc: ({ qty }) => {
        const productsNumDiscount = 3;
        const discountValue = 5;
        return Math.floor(qty / productsNumDiscount) * discountValue;
      }
    }
  ]
};
export default data;
