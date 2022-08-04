
import data from './../data';
export const getDiscounts = (product) => {
    let itemDiscount = 0;
    data.discounts.map(discount => {
        if (discount.products.includes(product.id)) {
            itemDiscount += discount.calc(product);
        } return true;
    });
    return itemDiscount;
}