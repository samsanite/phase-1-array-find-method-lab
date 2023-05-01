// code your solution here
/*const superbowlWin = (record) =>{
    const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]}
const result = record.find((won) => {
    return won.result === "w";
    console.log(year);
})*/
function superbowlWin(record){
  let winner = record.find(function(element){
    if (element.result === "W"){
        return element
      }
    }
  )
  if (winner){
    return winner.year
  }
  else{
    return undefined
  }
  
}

