// Write your solution in this file
let driver = {}
let newDriver = {
    
}
function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = {}
    newDriver = Object.assign({}, driver);
    newDriver[key] = value;
    return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
  
  
}
function deleteFromDriverByKey(driver, key) {
    
    newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}
  
  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}