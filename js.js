
  // Получаем элемент canvas и его контекст
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


  // Устанавливаем начальные значения для красного квадрата
  var player = {
   x: 50,
   y: 50,
   width: 20,
   height: 20,
   speed: 5
  };

  // Создаем массив для синих прямоугольников (стен)
  var walls = [
   {x: 0, y: 0, width: canvas.width, height: 10},
   {x: 0, y: canvas.height-10, width: canvas.width, height: 10},
   {x: 0, y: 0, width: 10, height: canvas.height},
   {x: canvas.width-10, y: 0, width: 10, height: canvas.height},
   {x: 0, y: 100, width: 100, height: 100},
   {x: 200, y: 100, width: 500, height: 100},
   {x: 0, y: 300, width: 500, height: 300},
   {x: 500, y: 300, width: 100, height: 200},
   {x: 500, y: 500, width: 200, height: 100},
   {x: 700, y: 100, width: 100, height: 200}
  ];

  // Функция для рисования красного квадрата
  function drawPlayer() {
   ctx.fillStyle = "red";
   ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  // Функция для рисования прямоугольников (стен)
  function drawWalls() {
   ctx.fillStyle = "#fff999";
   for (var i = 0; i < walls.length; i++) {
    ctx.fillRect(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
   }
  }

  // Функция для обновления позиции красного квадрата
  function updatePlayerPosition() {
   canvas.addEventListener("mousemove", function(event) {
    player.x = event.clientX - canvas.offsetLeft - player.width/2;
    player.y = event.clientY - canvas.offsetTop - player.height/2;
   });
  }

  // Функция для проверки столкновений красного квадрата и стен
  function checkCollisions() {
   for (var i = 0; i < walls.length; i++) {
    var w = walls[i];
    if (player.x < w.x + w.width && player.x + player.width > w.x && player.y < w.y + w.height && player.y + player.height > w.y) {
     player.speed = 0;
    } else {
     player.speed = 5;
    }
   }
  }

  // Функция для обновления игрового экрана
  function update() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawPlayer();
   drawWalls();
   checkCollisions();
   updatePlayerPosition();
   requestAnimationFrame(update);
  }

  update();

function updatePlayerPosition() {
   canvas.addEventListener("mousemove", function(event) {
    player.x = event.clientX - canvas.offsetLeft - player.width/2;
    player.y = event.clientY - canvas.offsetTop - player.height/2;
   });
   for (var i = 0; i < walls.length; i++) {
    var w = walls[i];
    if (player.x < w.x + w.width && player.x + player.width > w.x && player.y < w.y + w.height && player.y + player.height > w.y) {
     player.x = 50;
     player.y = 50;
    }
   }
}



function update() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawPlayer();
   drawWalls();
   checkCollisions();
   updatePlayerPosition();
   requestAnimationFrame(update);
   for (var i = 0; i < walls.length; i++) {
    var w = walls[i];
    if (player.x < w.x + w.width && player.x + player.width > w.x && player.y < w.y + w.height && player.y + player.height > w.y) {
     player.x = 50;
     player.y = 50;
     canvas.removeEventListener("mousemove", updatePlayerPosition);
     canvas.addEventListener("click", function() {
      canvas.addEventListener("mousemove", updatePlayerPosition);
     });
    }
   }
  }

  // Метод для остановки отслеживания позиции мыши и требования клика для начала игры
  function stopGame() {
    canvas.removeEventListener("mousemove", updatePlayerPosition);
    canvas.addEventListener("click", function() {
      canvas.addEventListener("mousemove", updatePlayerPosition);
    });
  }

  // Функция для обновления позиции красного квадрата
  function updatePlayerPosition() {
   player.speed = 5;
   canvas.addEventListener("mousemove", function(event) {
    player.x = event.clientX - canvas.offsetLeft - player.width/2;
    player.y = event.clientY - canvas.offsetTop - player.height/2;
   });
   for (var i = 0; i < walls.length; i++) {
    var w = walls[i];
    if (player.x < w.x + w.width && player.x + player.width > w.x && player.y < w.y + w.height && player.y + player.height > w.y) {
     player.speed = 0;
     stopGame();
    }
   }
  }
  update();
