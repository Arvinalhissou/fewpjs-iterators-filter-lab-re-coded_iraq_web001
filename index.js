// Code your solution here
    
  function findMatching(drivers,stringName){
  return drivers.filter(name =>{
    return name.toUperCase === stringName.toUperCase;
  })
}
