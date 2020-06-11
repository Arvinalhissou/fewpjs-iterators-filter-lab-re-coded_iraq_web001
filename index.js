// Code your solution here
    
  function findMatching(drivers,stringName){
  return drivers.filter(name =>{
    return name.toUperCase === stringName.toUperCase;
  })
}
function fuzzyMatch(drivers,string){
  let nameLength = name.length;
  return drivers.filter(letter=>{
     return letter.slice(0, nameLength) === name;
  })
}

function matchName(drivers,string){
  
}