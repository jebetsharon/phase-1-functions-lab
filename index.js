// 1. Function to calculate the number of blocks from HQ
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  // Scuber headquarters is on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // 2. Function to calculate the number of feet from HQ
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Get the number of blocks
    return blocks * 264; // Each block is 264 feet
  }
  
  // 3. Function to calculate the number of feet traveled
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start); // Find the difference in blocks
    return blocks * 264; // Each block is 264 feet
  }
  
  // 4. Function to calculate the fare price based on distance
  function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination); // Get the total feet traveled
  
    // First 400 feet are free
    if (feetTraveled <= 400) {
      return 0;
    }
    // If distance is between 400 and 2000 feet, it's 2 cents per foot
    else if (feetTraveled > 400 && feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    }
    // If distance is between 2000 and 2500 feet, it's a flat $25
    else if (feetTraveled > 2000 && feetTraveled <= 2500) {
      return 25;
    }
    // If the distance is over 2500 feet, it's too far
    else {
      return 'cannot travel that far';
    }
  }
  