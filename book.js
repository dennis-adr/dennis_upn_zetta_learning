function bookPurchasing(book, discountPercentage, taxPercentage) {
    const result = 0
    if (book.price > 5000) {
        const discount = book.price * (discountPercentage / 100);
        const DiscountPrice = book.price - discount;
        const tax = DiscountPrice * (taxPercentage / 100);
        const FinalPrice = DiscountPrice + tax;

        console.log('Price       = Rp.', book.price);
        console.log('Discount    = ', discountPercentage, '%');
        console.log('Tax         = ', taxPercentage, '%');
        console.log('Amount of discount   = Rp.', discount);
        console.log('Price after discount = Rp.', DiscountPrice);
        console.log('Amount of tax        = Rp.', tax);
        console.log('Price after tax      = Rp.', FinalPrice);
    }
    return result;
}
bookPurchasing({ title: 'Dennis Biography', price: 10000 }, 10, 10);