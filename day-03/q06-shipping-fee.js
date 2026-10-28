function getShippingFee(total, isMember) {
    return (isMember || total >= 5000) ? 0 : 250;
}

console.log(getShippingFee(3000, true));  // 0
console.log(getShippingFee(6000, false)); // 0
console.log(getShippingFee(2000, false)); // 250