/*jshint esversion: 6 */
function bookPurchasing(book, discountPercentage, taxPercentage, stock, purchase, credit) {
    let result = 0;
    let outputcicilan = [];
    let index = 0;
    for (let i = 0; i < purchase; i++) {
        if (purchase < stock) {
            const discount = book.price * (discountPercentage / 100);
            const DiscountPrice = book.price - discount;
            const tax = DiscountPrice * (taxPercentage / 100);
            const FinalPrice = DiscountPrice + tax;
            stockremaining = stock - purchase;
            result += FinalPrice;
            outputdiscount = discount;
            oututdiscountprice = DiscountPrice;
            outputtax = tax;
            outputfinalprice = FinalPrice;
        } else {
            console.log('Sorry "', book.title, '" Out Of Stock');
            console.log('');
            break;
        }
    }
    if (result != 0) {
        console.log(book.title);
        console.group();
        console.log('Price       = Rp.', book.price);
        console.log('Discount    = ', discountPercentage, '%');
        console.log('Tax         = ', taxPercentage, '%');
        console.log('Amount of discount @   = Rp.', outputdiscount);
        console.log('Price @ after discount = Rp.', oututdiscountprice);
        console.log('@ Amount of tax        = Rp.', outputtax);
        console.log('Price @ after tax      = Rp.', outputfinalprice);
        console.log('Amount Buy = Rp.', purchase);
        console.log('Total      = Rp.', result);
        console.log('Stock Remaining =', stockremaining);
        if (stockremaining > purchase) {
            console.log('You can buy again.');
        } else {
            console.log("Sorry, You can't buy again");
        }
        console.groupEnd();
        let cicilanperbulan = result / credit;
        let sisaresult = result;
        console.log('Credit for', credit, 'times,', credit / 12, 'year(s). ', cicilanperbulan, 'per month');
        while (index < credit) {
            sisaresult = sisaresult - cicilanperbulan;
            outputcicilan.push({
                creditonmonth: index + 1,
                amount: cicilanperbulan,
                creditleft: sisaresult,
            });
            index++;
        }
        console.group();
        console.log(Array.from(outputcicilan));
        console.groupEnd();
        console.log('');
    }


    return result;
}
bookPurchasing({ title: 'Dennis Biography', price: 10000 }, 10, 10, 100, 10, 24);
bookPurchasing({ title: 'cant let it has more', price: 10000 }, 10, 10, 11, 10, 12);
bookPurchasing({ title: 'Think Simple', price: 10000 }, 10, 10, 100, 101, 3);