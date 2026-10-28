const januaryBuyers = [101, 102, 105, 108, 110];
const februaryBuyers = [102, 103, 108, 111, 110];

const febSet = new Set(februaryBuyers);

const commonBuyers = januaryBuyers.filter(id => {
    return febSet.has(id);
});

console.log(commonBuyers);