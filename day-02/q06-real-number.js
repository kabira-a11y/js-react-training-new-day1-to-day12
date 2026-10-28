function isRealNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
        return true;
    }
    else {
        return false;
    }
}