function getDayType(day) {
    switch (day.toLowerCase()) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "Weekday";

        case "saturday":
        case "sunday":
            return "Weekend";

        default:
            throw new Error("Invalid day name!");
    }
}

