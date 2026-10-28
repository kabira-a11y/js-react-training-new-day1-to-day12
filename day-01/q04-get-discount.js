function getDiscount(price) {
    let discount = 0;
    if (price > 1000) {discount = 100;
}
return price - discount;
}