var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7f34f932-af44-4e55-8143-00cabff0d50e","8cee1721-abe4-4cd4-b933-6b2fdda4837a","8da5d7a3-4e4d-48b9-98ad-426e65dfcb73","e6d3bb3a-12c6-4139-a8cf-fc6b8d3bab59","96c5f21d-6ab3-4117-a64b-a0dda0ea9227","e651b7d4-552a-4821-a91c-e979a8242a1d","844766e6-2fac-4319-8016-f042c38e2ee3","b9644270-101c-4a25-a812-55719d733fb2","728c3daa-2fd1-4383-8df1-15b0c38af789","e72d1c93-e39c-4ce2-89ed-6a21e3c37483","fe53d306-4c3d-440a-815d-fbe29776a247","a79ee194-454c-4c0e-a1b8-9a0e20538499","184c5103-15dd-4521-9fe6-d3df30c86c44","7a6b1772-e73c-4e23-a858-5d00bcc0a3ed","9a4a60d9-354b-42d1-b6dc-23e3cd5e19b2","bd5f82c1-f0f5-4625-931b-d06619d6cb1b","4bff8753-62f4-4294-a66b-fbaae472d99c","53a5a207-25ff-472a-bf6f-8fe6658adb3b"],"propsByKey":{"7f34f932-af44-4e55-8143-00cabff0d50e":{"name":"playerShip2_green_1","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"oMXkfFRcmSwEpX_hODh.5Gu8Sf2Pz_W1","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"7f34f932-af44-4e55-8143-00cabff0d50e.png"},"8cee1721-abe4-4cd4-b933-6b2fdda4837a":{"name":"enemyBlue5_1","sourceUrl":"enemyBlue5.png","frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"Qw5yoM0bthgiqcEVqNRzqtYoXp1Rpzaf","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"enemyBlue5.png"},"8da5d7a3-4e4d-48b9-98ad-426e65dfcb73":{"name":"h","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"KeeBfsEFlySmBicfcTcanozVKXB39W1M","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"8da5d7a3-4e4d-48b9-98ad-426e65dfcb73.png"},"e6d3bb3a-12c6-4139-a8cf-fc6b8d3bab59":{"name":"h1","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"y8SqUACAhucUIc1NWTpWlG468cZTSQTJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"e6d3bb3a-12c6-4139-a8cf-fc6b8d3bab59.png"},"96c5f21d-6ab3-4117-a64b-a0dda0ea9227":{"name":"h2","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"SNOXT24NTtGPigu3gIR03bJM_ui5KlKc","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"96c5f21d-6ab3-4117-a64b-a0dda0ea9227.png"},"e651b7d4-552a-4821-a91c-e979a8242a1d":{"name":"h3","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"uvuyLai88mdyeRe3mlKuumJZGlcqZ9Fr","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"e651b7d4-552a-4821-a91c-e979a8242a1d.png"},"844766e6-2fac-4319-8016-f042c38e2ee3":{"name":"h4","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"iKd6m4WIDOY.kZedgeYelD0xDFt6sKJM","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"844766e6-2fac-4319-8016-f042c38e2ee3.png"},"b9644270-101c-4a25-a812-55719d733fb2":{"name":"h5","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"Mr9RK6IJdqtpLNk6k088fmvebXbk9il.","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"b9644270-101c-4a25-a812-55719d733fb2.png"},"728c3daa-2fd1-4383-8df1-15b0c38af789":{"name":"h6","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"qC0xc.LuYFYk7fRLByZxSn4tQpdl6MCc","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"728c3daa-2fd1-4383-8df1-15b0c38af789.png"},"e72d1c93-e39c-4ce2-89ed-6a21e3c37483":{"name":"h7","sourceUrl":null,"frameSize":{"x":96,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"u_oVUzr0Sgmbzmx4m5uHOXFZTFU6egjm","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":19},"rootRelativePath":"e72d1c93-e39c-4ce2-89ed-6a21e3c37483.png"},"fe53d306-4c3d-440a-815d-fbe29776a247":{"name":"enemyBlack1_1","sourceUrl":"enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"enemyBlack1.png"},"a79ee194-454c-4c0e-a1b8-9a0e20538499":{"name":"enemyRed2_1","sourceUrl":"enemyRed2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"y82GNNH81yUtd5CvauyCDOnSukBzaIAP","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"enemyRed2.png"},"184c5103-15dd-4521-9fe6-d3df30c86c44":{"name":"nail_1","sourceUrl":null,"frameSize":{"x":52,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"3hp0ZjMc33ZLL57BOKjXxpIgOyf1ae92","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":68},"rootRelativePath":"184c5103-15dd-4521-9fe6-d3df30c86c44.png"},"7a6b1772-e73c-4e23-a858-5d00bcc0a3ed":{"name":"enemyRed2_2","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"6VsXsbC7yq_UaZXBTnxUj9ccUqv.HZOl","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"7a6b1772-e73c-4e23-a858-5d00bcc0a3ed.png"},"9a4a60d9-354b-42d1-b6dc-23e3cd5e19b2":{"name":"playerShip3_blue_1","sourceUrl":"playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"kHBflH2AV9LS4aCF.ls8EFSVLMWVS4V0","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"playerShip3_blue.png"},"bd5f82c1-f0f5-4625-931b-d06619d6cb1b":{"name":"enemyGreen2_1_copy_1","sourceUrl":"enemyGreen2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"HmEdMW8OcdHcZ9V2HAzDdwYOGq5pZpc_","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"enemyGreen2.png"},"4bff8753-62f4-4294-a66b-fbaae472d99c":{"name":"playerShip3_red_1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"6K6X1uxxsUJ6jMT8kXxUaXR.fKirqbgI","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"4bff8753-62f4-4294-a66b-fbaae472d99c.png"},"53a5a207-25ff-472a-bf6f-8fe6658adb3b":{"name":"playerShip3_orange_1","sourceUrl":null,"frameSize":{"x":150,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"OkhmsgFdtqgRKYjPF_SJrWFcBVTRuHaA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":116},"rootRelativePath":"53a5a207-25ff-472a-bf6f-8fe6658adb3b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("progression.mp3", true);
var enemy = createSprite(randomNumber(20,380), -5000);
enemy.setAnimation("enemyRed2_2");
var w=0
var sprite = createSprite(200, 330);
sprite.setAnimation("playerShip3_blue_1");
var sprite1 = createSprite(200, 50);
sprite1.setAnimation("enemyBlue5_1");

var a=3

var r=10
var a1=[]
var a2=[]
var a3=[]
var a4=[]
var a5=[]
var a6=[]

for (var i = 0; i < 20; i++) {
a1[i]=createSprite(-50000,200,3,15)  
a1[i].shapeColor="green"
a2[i]=createSprite(-50000,200,3,15)
a2[i].shapeColor="green"
a3[i]=createSprite(-50000,200,3,15)
a3[i].shapeColor="green"
a4[i]=createSprite(-50000,200,3,15)
a4[i].shapeColor="green"
a5[i]=createSprite(-50000,200,3,15)
a5[i].shapeColor="green"
a6[i]=createSprite(-50000,200,3,15)
a6[i].shapeColor="green"
}
var boss = createSprite(200, -10000);
boss.setAnimation("playerShip3_orange_1");

var sprite2 = createSprite( randomNumber(20,380),-50);
sprite2.setAnimation("enemyBlack1_1");

var x=0
var shot = [];

var shott = createSprite(sprite2.x,sprite2.y+20,5,30)
shott.shapeColor="red"
var j = 0;
var health = createSprite(350, 385);
health.setAnimation("h");
var shealth = 7;
for (var i = 0; i < 20; i++) {
  shot[i] = createSprite(500000, 200, 5, 15);
shot[i].shapeColor="blue"
}
var laser=[]
var laser1=[]
for (var i = 0; i < 20; i++) {
  laser[i] = createSprite(500000, 200, 5, 15);
laser[i].shapeColor="skyblue"
}
for (var i = 0; i < 20; i++) {
  laser1[i] = createSprite(500000, 200, 5, 15);
laser1[i].shapeColor="skyblue"
}
var sprite3 = createSprite(sprite.x, -30000);
sprite3.setAnimation("enemyRed2_1");


var sprite3h=7
//var e1=createSprite(0,)
//var e2
var gamestate="serve"
fill("black")

//function setup(){
//  createCanvas(400,400)
//}
function draw() {
  background("white");
   textSize(20)
  text("Score:"+x, 170, 390);
 //createEdgeSprites();
 textSize(30)
if (gamestate==="serve") {
 x=0

 text("Press Space to Play", 100, 200);
  text("Press Arrows for Movement", 10, 250);
  text("Space for Attack", 100, 300);
}

//sprite.bounceOff(edges)

if (keyDown("space")&&gamestate==="serve") {
gamestate="play"
shott.velocityY=7 
 sprite2.velocityY=1
 sprite1.velocityY=2  
sprite3.velocityY=5
enemy.velocityY=5
 boss.velocityY=3
}
if (enemy.y>400) {
 enemy.x=randomNumber(20,380)
 enemy.y=-300
}
  

 if (keyDown("left")) {
    sprite.velocityX = -8;
  } else if ((keyDown("right"))) {
    sprite.velocityX = 8;
  } else {
    sprite.velocityX = 0;
  }
  if (sprite1.y>420) {
   sprite1.y=-30
   sprite1.x=randomNumber(20,380)
  }
  if (sprite2.y>420) {
   sprite2.y=-30 
    sprite2.x=randomNumber(20,380)
  }
  
   if (sprite3.y>420) {
   sprite3.y=-100 
    
  }
  if (keyWentDown("space")&&gamestate==="play") {
    shot[j].x = sprite.x;
    shot[j].y = sprite.y-40;
    shot[j].velocityY = -8;
    playSound("air_explode_bonus_6.mp3", false);
  j=j+1
  }
 
 if (keyWentDown("space")&&enemy.y>-100) { 
    laser[w].x = enemy.x+40;
    laser[w].y = enemy.y+40;
    laser[w].velocityY = 10;
    
    laser1[w].x = enemy.x-40;
    laser1[w].y = enemy.y+40;
    laser1[w].velocityY = 10;
    w = w+1;
    
    
  } 
  if (w>19) {
   w=0 
  }
  
sprite3.x=sprite.x
for (var i = 0; i < 20; i++) {
    if (a1[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a1[i]).x = -5000;
    a1[i].y = 200;
  }
  if (a2[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a2[i]).x = -5000;
    (a2[i]).y = 200;
  }
  if (a3[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a3[i]).x = -5000;
    (a3[i]).y = 200;
  }
  if (a4[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a4[i]).x = -5000;
    (a4[i]).y = 200;
  }
  if (a5[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a5[i]).x = -5000;
    (a5[j]).y = 200;
  }
  if (a6[i].isTouching(sprite)) {
    shealth = shealth-1;
    (a6[i]).x = -5000;
    (a6[i]).y = 200;
  }
   
   }
  for (var i = 0; i < 20; i++) {
   if (shot[i].isTouching(boss)) {
       r=r-1 
       shot[i].x=-500
       shot[i].y=200
        }
if (boss.y>400) {
    boss.y=-10000           
             }
                          
      }
 if (r===0) {
     boss.x=200
     boss.y=-10000
     x=x+1000
     r=20
     
          }
                   
 
  
  
  
  if (j>19) {
    j = 0;
  }
if (sprite.isTouching(shott)) {
  shealth=shealth-1
  shott.x=sprite2.x
  shott.y=sprite2.y+20
}
if (shott.y>400) {
  shott.x=sprite2.x
  shott.y=sprite2.y+20  
}
  for (var i = 0; i < 20; i++) {
    if (shot[i].y<0) {
    shot[i].x=500
    shot[i].y=200 
    }
  }
for (var i = 0; i < 20; i++) {
if (sprite.isTouching(laser[i])) {
  shealth=shealth-1
  laser[i].x=500
  laser[i].y=200
}
if (sprite.isTouching(laser1[i])) {
  shealth=shealth-1
  laser1[i].x=500
  laser1[i].y=200
}
   
}


 
for (var i = 0; i < 20; i++) {
  if (sprite1.isTouching(shot[i])) {
  sprite1.x=randomNumber(20,380)
  sprite1.y=-30
  shot[i].x=500
  shot[i].y=200
  x=x+10
  playSound("8bit_explosion.mp3", false);
 }
 
}
if(sprite.isTouching(sprite3)){
  sprite3.x=sprite.x
  sprite3.y=-500
  shealth=shealth-3
}





 for (var i = 0; i < 20; i++) {
  if (enemy.isTouching(shot[i])) {
  a=a-1
  
  shot[i].x=500
  shot[i].y=200
  x=x+100
  playSound("8bit_explosion.mp3", false);
 }
 } 
 
 if (a===0){
   enemy.x=randomNumber(20,380)
   enemy.y=-300
   enemy.velocityY=5  
   a=3
 }
 for (var i = 0; i < 20; i++) {
  if (sprite2.isTouching(shot[i])) {
  sprite2.x=randomNumber(20,380)
  sprite2.y=-50
  shot[i].x=500
  shot[i].y=200
  x=x+30
  playSound("8bit_explosion.mp3", false);
 } 
 } 
  for (var i = 0; i < 20; i++) {
  if (sprite3.isTouching(shot[i])) {
  sprite3h=sprite3h-1
  shot[i].x=500
  shot[i].y=200
  playSound("drop_3.mp3", false);
 
 } 
 }
 if (sprite3h===0) {
  sprite3.y=-500 
  sprite3h=7
  x=x+200
  playSound("8bit_explosion.mp3", false);
 }
 
 
if (sprite.isTouching(sprite3)) {
 shealth=shealth-3
 }  
 
 if (sprite3.y>400) {
 sprite3.y=-300
 }  
 
 for (var i = 0; i < 20; i++) {
  if (shott.isTouching(shot[i])) {
  shott.x=sprite2.x
  shott.y=sprite2.y+20
  shot[i].x=500
  shot[i].y=200
 } 
 } 
if (keyWentDown("space")&&boss.y>-150) {
 a1[j].x=boss.x-50
 a1[j].y=boss.y+15
 a1[j].velocityY=10
  a2[j].x=boss.x-57
 a2[j].y=boss.y+10
 a2[j].velocityY=10
  a3[j].x=boss.x-65
 a3[j].y=boss.y+5
 a3[j].velocityY=10
  a4[j].x=boss.x+50
 a4[j].y=boss.y+15
 a4[j].velocityY=10
  a5[j].x=boss.x+57
 a5[j].y=boss.y+10
 a5[j].velocityY=10
  a6[j].x=boss.x+65
 a6[j].y=boss.y+5
 a6[j].velocityY=10
 j=j+1
} 
  
 
  if (j>19) {
    j = 0;
  }
 
  if (shealth===7) {
    health.setAnimation("h");
  }
 
  if (shealth===6) {
    health.setAnimation("h1");
  }
  if (shealth===5) {
    health.setAnimation("h2");
  }
  if (shealth===4) {
    health.setAnimation("h3");
  }
  if (shealth===3) {
    health.setAnimation("h4");
  }
  if (shealth===2) {
    health.setAnimation("h5");
  }
  if (shealth===1) {
    health.setAnimation("h6");
  }
  if (shealth<0.5) {
    health.setAnimation("h7");
    textSize(30);
    text("YOU Lose", 140, 200);
    sprite1.y=-50
    sprite2.y=-50
    sprite1.velocityY=0
    sprite2.velocityY=0
    for (var i = 0; i < 20; i++) {
    shot[i].velocityY=0 
    shot[i].x=500
    shot[i].y=200
    }
    sprite3.y=-10000
    sprite3.velocityY=0
    shott.x=sprite2.x
    shott.y=sprite2.y+20      
    shott.velocityY=0
    sprite.x=200
    sprite.velocityY=0
  for (var i = 0; i < 20; i++) {
     laser[i].velocityY=0
    laser1[i].velocityY=0
    laser[i].x=500
    laser[i].y=200
    laser1[i].x=500
    laser1[i].y=200  
    }
      
    
   
    gamestate="over"
    enemy.x=randomNumber(20,380)
    enemy.y=-3000
    enemy.velocityY=0
    
    boss.x=200
    boss.y=-10000
    boss.velocityY=0
    a1[j].x=-5000
    a1[j].y=200
    a1[j].velocityY=0
     a2[j].x=-5000
    a2[j].y=200
    a2[j].velocityY=0
     a3[j].x=-5000
    a3[j].y=200
    a3[j].velocityY=0
     a4[j].x=-5000
    a4[j].y=200
    a4[j].velocityY=0
     a5[j].x=-5000
    a5[j].y=200
    a5[j].velocityY=0
     a6[j].x=-5000
    a6[j].y=200
    a6[j].velocityY=0
  }
  if (gamestate==="over") {
 text("Press Space to start over", 100, 230);
  
       
  }
 if (keyDown("space")&&gamestate==="over") {
    shealth=7
    gamestate="serve"
  }
   
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
