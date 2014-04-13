'use strict';
/* jshint browser: true */

//window.requestAnimFrame = (function(){
//  return  window.requestAnimationFrame       ||
//          window.webkitRequestAnimationFrame ||
//          window.mozRequestAnimationFrame    ||
//          function( callback ){
//            window.setTimeout(callback, 1000 / 60);
//          };
//})();

document.addEventListener('DOMContentLoaded', function(){
  var point;
  var canvas = document.getElementById('canvas1');
  var context = canvas.getContext('2d');

  var Point = function(x, y){
    var point = {
      position: {
        x: x,
        y: y
      },
      velocity: {
        x: 0.0,
        y: 0.0
      },
      forces: [],
      drawPoint: function() {
        context.fillStyle = '#fff';
        context.fillRect(this.position.x, this.position.y, 2, 2);
      },
      updatePoint: function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        for(var i = 0; i < this.forces.length; i++) {
          this.velocity.x += this.forces[i].x;
          this.velocity.y += this.forces[i].y;
          this.forces[i].duration -= 1;
          if (this.forces[i].duration <= 0) {
            this.forces.splice(i, 1);
          }
        }
      }
    };
    return point;
  };

  var Force = function(x,y,d) {
    var force = {
      x: x,
      y: y,
      duration: d
    };
    return force;
  };

  var points = [];

  for(var i = 0; i < 100; i++) {
    point = new Point(Math.random() * canvas.width, Math.random() * canvas.height);
    point.forces.push(new Force(Math.random() - 0.5, Math.random() - 0.5, 1));
    points.push(point);
  }

  var start = null;

  function drawScreen(timestamp) {
    context.fillStyle = '#000';
    context.fillRect(0,0, canvas.width, canvas.height);
    for(var i = 0; i < points.length; i++) {
      points[i].drawPoint();
      points[i].updatePoint();
    }
    window.requestAnimationFrame(drawScreen);
  }

  window.requestAnimationFrame(drawScreen);
});
