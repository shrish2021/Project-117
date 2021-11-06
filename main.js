randomNumber = 0;
objectsToDraw = ["Birds", "Apple", "Arm", "Backpack","Banana","Band-aid", "Pencil", "Bike", "Nuts", "Tornado"];
randomNumber = Math.floor((Math.random()*objectsToDraw.length)+1);
quickDrawDataSet = objectsToDraw[randomNumber];
sketch = quickDrawDataSet;
document.getElementById("thingDraw").innerHTML = sketch;
console.log(sketch);

timerCounter = 0;
timerCheck = "";
drawnSkecth = "";
score = 0;