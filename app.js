// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "S";
    break;
    default:
    rover.direction = "N";
    break;
  }
}
function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction){
    case "N":
    if(rover.y != 0){
      rover.y--;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "S":
    if(rover.y != 9){
      rover.y++;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "W":
    if(rover.x != 0){
      rover.x--;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "E":
    if(rover.x != 9){
      rover.x++;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    default:
    console.log("Unknown move, sorry");
  }
  
}
function moveBackward(rover){
  console.log("moveBackward was called!");
  switch(rover.direction){
    case "N":
    if(rover.y != 9){
      rover.y++;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "S":
    if(rover.y != 0){
      rover.y--;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "W":
    if(rover.x != 9){
      rover.x++;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    case "E":
    if(rover.x != 0){
      rover.x--;
    }else{
      console.log("Cannot move rover, it will fall off Mars!");
    }
    break;
    default:
    console.log("Unknown move, sorry");
  }

}
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
    default:
    rover.direction = "N";
    break;
  }
}
function giveCommands(commands){
  var commandSize = commands.length;
  var iterate = 0;
  while(iterate < commandSize){
    switch(commands[iterate]){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      console.log("Error, command given is not valid");
      break;
    }
   rover.travelLog.push("Location:  " + rover.x + ", " + rover.y);
    iterate++;
  }
  for(let i = 0; i < rover.travelLog.length; i++){
    console.log(rover.travelLog[i]);
  }
}


