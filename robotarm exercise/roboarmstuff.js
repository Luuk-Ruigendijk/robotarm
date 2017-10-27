<script>
  var canvas = document.getElementById("canvas");
  var robotArm = new RobotArm(canvas);

  robotArm.loadLevel("exercise 1");

  // Je eigen code plaats je hier.
//robotArm.moveRight()
//robotArm.moveLeft()
//robotArm.grab()
//robotArm.drop()
//robotArm.scan()
  
  robotArm.grab()
  robotArm.moveRight()
  robotArm.drop()


  robotArm.run();
</script>