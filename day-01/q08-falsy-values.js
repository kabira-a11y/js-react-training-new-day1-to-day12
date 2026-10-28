function isFalsy(value) {
    if(
        value === false ||
        value === 0 ||
        value === -0 ||
        value === 0n ||
        value === "" ||
        value === null ||
        value === undefined ||
        Number.isNaN(value)
    ){
        return true;
    }
    else{
        return false;
    }
}