// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){return arrayOfDrivers.slice(0,2)}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(arrayOfDrivers){return arrayOfDrivers.slice(-2)}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
selectingDrivers[0];
selectingDrivers[1];

function createFareMultiplier(a) {
    return function(){return a*a }
}
createFareMultiplier(5);

function fareDoubler(Fare) {
    return 2*Fare;
}
fareDoubler(10);

function fareTripler(Fare) {
    return 3*Fare
}
fareTripler(10);

function selectDifferentDrivers(arrayOfDrivers,func){
    return func(arrayOfDrivers);
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers);

