'use strict';
document.addEventListener('DOMContentLoaded', function(){
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

      }
    }
    return point;
  }
  context.fillStyle = '#000';
  context.fillRect(0,0, canvas.width, canvas.height);
});
