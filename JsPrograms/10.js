function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
  
  return dynamicKey;
    //   console.log(drone[dynamicKey]);
    //   console.log(Math.random())
  }
  console.log(testBracketsDynamicAccess());
  var drone = {
    speed: 15,
    color: "orange"
  }
  console.log(testBracketsDynamicAccess(drone));