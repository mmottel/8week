var bubble = {
  x:300,
  y: 200,
  display:function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y,24,24);
  },
  move: function() {
      this.x = this.x + random(-4,4);
  this.y = this.y + random(-4,4);
  
  var bubble2 = {
  x:400,
  y: 300,
  display:function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y,20,20);
  },
  move: function() {
      this.x = this.x * random(-1,1);
  this.y = this.y * random(-1,1);
}
  }
  }
}


function setup() {
  createCanvas (600,400);
  
}

function draw() {
  background (0);
  bubble.move();
  bubble.display();
}


 

