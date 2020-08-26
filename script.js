
function OpenLinkedin() { 
    window.open( 
      "https://www.linkedin.com/in/nisarg-patel-50a1b4197/", "_blank"); 
} 

function OpenInstagram() { 
    window.open( 
      "https://www.instagram.com/nisarg22_patel/", "_blank"); 
} 

function OpenFacebook() { 
    window.open( 
      "https://www.facebook.com/nisarg.patel.7/", "_blank"); 
} 

function play(){
    document.getElementById("play").style.display = "none";
    document.getElementById("start_screen").style.display = "none";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  if (typeof window.orientation !== 'undefined') { 
    document.getElementById("play").innerText = "mobile version not implmented"
    document.getElementById("play").onclick = ""
   }

 

  // snake game 
  const cvs = document.getElementById("snake");
  const ctx = cvs.getContext("2d");
  
 
  // create the unit
  const box = 32;
  
  // load images
  
  const ground = new Image();
  ground.src = "images/ground.png";
  
  const foodImg = new Image();
  foodImg.src = "images/food.png";
  
  // load audio files
  
  let dead = new Audio();
  let eat = new Audio();
  let up = new Audio();
  let right = new Audio();
  let left = new Audio();
  let down = new Audio();
  
  dead.src = "audio/dead.mp3";
  eat.src = "audio/eat.mp3";
  up.src = "audio/up.mp3";
  right.src = "audio/right.mp3";
  left.src = "audio/left.mp3";
  down.src = "audio/down.mp3";
  
  // create the snake
  
  let snake = [];

  
  snake[0] = {
      x : 9 * box,
      y : 10 * box
  };
  
  // create the food
  
  let food = {
      x : Math.floor(Math.random()*17+1) * box,
      y : Math.floor(Math.random()*15+3) * box
  }
  
  // create the score var
  
  let score = 0;
  
  //control the snake
  
  let d;
  
  document.addEventListener("keydown",direction);
  
  function direction(event){
      let key = event.keyCode;
      if( key == 37 && d != "RIGHT"){
          left.play();
          d = "LEFT";
      }else if(key == 38 && d != "DOWN"){
          d = "UP";
          up.play();
      }else if(key == 39 && d != "LEFT"){
          d = "RIGHT";
          right.play();
      }else if(key == 40 && d != "UP"){
          d = "DOWN";
          down.play();
      }
  }
  
  // cheack collision function
  function collision(head,array){
      for(let i = 0; i < array.length; i++){
          if(head.x == array[i].x && head.y == array[i].y){
              return true;
          }
      }
      return false;
  }
  
  // draw everything to the canvas
  
  function draw(){
      
      ctx.drawImage(ground,0,0);
      
      for( let i = 0; i < snake.length ; i++){
          ctx.fillStyle = ( i == 0 )? "green" : "white";
          ctx.fillRect(snake[i].x,snake[i].y,box,box);
          
          ctx.strokeStyle = "red";
          ctx.strokeRect(snake[i].x,snake[i].y,box,box);
      }
      
      ctx.drawImage(foodImg, food.x, food.y);
      
      // old head position
      let snakeX = snake[0].x;
      let snakeY = snake[0].y;
      
      // which direction
      if( d == "LEFT") snakeX -= box;
      if( d == "UP") snakeY -= box;
      if( d == "RIGHT") snakeX += box;
      if( d == "DOWN") snakeY += box;
      
      // if the snake eats the food
      if(snakeX == food.x && snakeY == food.y){
          score++;
          eat.play();
          food = {
              x : Math.floor(Math.random()*17+1) * box,
              y : Math.floor(Math.random()*15+3) * box
          }
          // we don't remove the tail
      }else{
          // remove the tail
          snake.pop();
      }
      
      // add new Head
      
      let newHead = {
          x : snakeX,
          y : snakeY
      }
      
      // game over
      
      if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
          clearInterval(game);
          dead.play();
      }
      
      snake.unshift(newHead);
      
      ctx.fillStyle = "white";
      ctx.font = "45px Changa one";
      ctx.fillText(score,2*box,1.6*box);
  }
  
  // call draw function every 100 ms
  
  let game = setInterval(draw,200);
  

  

// clash api get request





// window.addEventListener("load", function() {
// //     const xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.clashroyale.com/v1/locations/57000047/rankings/players',true);
// // xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmYjEyNDI0LWIwODEtNDMwNC05MWQ0LTlkNjIyYmEwN2M5OSIsImlhdCI6MTU5MjIzNDk3MSwic3ViIjoiZGV2ZWxvcGVyLzBlZjM4ZDg5LWI1MjItYThhMC01YWE2LTQ1OGZlNjZmMTM4ZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC4yMzUuMjEwLjc2Il0sInR5cGUiOiJjbGllbnQifV19.aCOBc9Gg2fyKCcd4GiyO3kKvG5tPWp52vWWLdJ_L8e_8WB9WVAorbx3fTiej3dfIbIK7rCKveNVwTUdWCLBJ3w');

// // xhr.send();

// var request = new XMLHttpRequest();
//     var params = "UID=CORS&name=CORS";
//     console.log("ITS WOFKGIN")
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     };

//     request.open('POST', 'https://cors-anywhere.herokuapp.com/https://api.clashroyale.com/v1/locations/57000047/rankings/players', true);
//     request.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmYjEyNDI0LWIwODEtNDMwNC05MWQ0LTlkNjIyYmEwN2M5OSIsImlhdCI6MTU5MjIzNDk3MSwic3ViIjoiZGV2ZWxvcGVyLzBlZjM4ZDg5LWI1MjItYThhMC01YWE2LTQ1OGZlNjZmMTM4ZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC4yMzUuMjEwLjc2Il0sInR5cGUiOiJjbGllbnQifV19.aCOBc9Gg2fyKCcd4GiyO3kKvG5tPWp52vWWLdJ_L8e_8WB9WVAorbx3fTiej3dfIbIK7rCKveNVwTUdWCLBJ3w');
    
//     request.send(params);

    
//  });

// window.addEventListener("load", function() {
//     // const myRequest = new Request('https://cors-anywhere.herokuapp.com/https://api.clashroyale.com/v1/locations/57000047/rankings/players', {
//     //     method: 'GET',
//     //     crossDomain: true,
//     //     headers:{
//     //     "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmYjEyNDI0LWIwODEtNDMwNC05MWQ0LTlkNjIyYmEwN2M5OSIsImlhdCI6MTU5MjIzNDk3MSwic3ViIjoiZGV2ZWxvcGVyLzBlZjM4ZDg5LWI1MjItYThhMC01YWE2LTQ1OGZlNjZmMTM4ZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC4yMzUuMjEwLjc2Il0sInR5cGUiOiJjbGllbnQifV19.aCOBc9Gg2fyKCcd4GiyO3kKvG5tPWp52vWWLdJ_L8e_8WB9WVAorbx3fTiej3dfIbIK7rCKveNVwTUdWCLBJ3w" 
//     //      },
        
//     // });
    
//     // fetch(myRequest)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //     console.log(data);
//     //     });
    
//     $(document).ready(function(){
//         e.preventDefault();
              
//         $.ajax({
//         type: "GET",
//         url: "https://api.clashroyale.com/v1/locations/57000047/rankings/players",
//         data: {
//         key:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmYjEyNDI0LWIwODEtNDMwNC05MWQ0LTlkNjIyYmEwN2M5OSIsImlhdCI6MTU5MjIzNDk3MSwic3ViIjoiZGV2ZWxvcGVyLzBlZjM4ZDg5LWI1MjItYThhMC01YWE2LTQ1OGZlNjZmMTM4ZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC4yMzUuMjEwLjc2Il0sInR5cGUiOiJjbGllbnQifV19.aCOBc9Gg2fyKCcd4GiyO3kKvG5tPWp52vWWLdJ_L8e_8WB9WVAorbx3fTiej3dfIbIK7rCKveNVwTUdWCLBJ3w",
//         format:"json"
//         },
//         dataType: "jsonp",
//         jsonpCallback: "jsonp_callback",
//         crossDomain: true,
//         success: function(result) {
//         alert(result);
//         },
//         error: function(result) {
//         alert('error');
//         }
//         });
        
//         });
        
//         function jsonp_callback(json){
//         alert(json.cityName);
//         }
// });






