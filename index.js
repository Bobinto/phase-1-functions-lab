function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming 1 block = 264 feet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance <= 400) {
        farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}
