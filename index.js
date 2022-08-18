// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("Walk")


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(Very='*'){
    return function lab(tellMe="special"){
        return `You are ${Very}${tellMe}${Very}!`
    }
}