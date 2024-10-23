/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
let  spacecraft = {
  velocity : 10000, // velocity (km/h)
  acceleration : 3, // acceleration (m/s^2)
  durationInSeconds : 3600, // seconds (1 hour)
  initDistance : 0, // distance (km)
  remainingFuel : 5000, // remaining fuel (kg)
  fuelBurnRate : 0.5, // fuel burn rate (kg/s)
  calcNewVelocity : () => {
    const newVelocityMS = (spacecraft.acceleration * spacecraft.durationInSeconds)
    // 'this.' seems to be giving me problems so for now 'spacecraft.' will be used inside the method
    return spacecraft.velocity + (newVelocityMS * 3.6) // m/s^2 to km/h conversion
  } 
}

const velocity2 = spacecraft.calcNewVelocity() //calculates new velocity based on acceleration
const distance2 = spacecraft.initDistance + (spacecraft.velocity * (spacecraft.durationInSeconds/60/60)) //calcultes new distance (km/h)
spacecraft.remainingFuel -= spacecraft.fuelBurnRate*spacecraft.durationInSeconds //calculates remaining fuel

console.log(`Corrected New velocity: ${velocity2} km/h`);
console.log(`Corrected New Distance: ${distance2} km`);
console.log(`Corrected Remaining Fuel: ${spacecraft.remainingFuel} kg`);
