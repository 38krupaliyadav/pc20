function isTouching(object1,object2){   //object1 and object2 will be parameters which will be arguments
    if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2){
        return true;
    }
  
    else {
        return false;
    }
  }