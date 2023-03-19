// Code your solution here
const findMatching = (driver,drivers) => driver.filter(driver => driver.toLowerCase() === drivers.toLowerCase())


const fuzzyMatch = (driver,drivers) => driver.filter(driver => driver.charAt(0) === drivers.charAt(0))


const matchName = (driver,drivers) => driver.filter(driver => driver.name === drivers)