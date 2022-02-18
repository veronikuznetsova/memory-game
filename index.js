let library = {
    dogs: [
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1544568100-847a948585b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1597633425046-08f5110420b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1581888227599-779811939961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8MHx8fDE2NDUxNzUwMDA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxM3x8ZG9nfGVufDB8MHx8fDE2NDUxNzUwMDA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwzfHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw0fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw2fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1544568100-847a948585b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw4fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1597633425046-08f5110420b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw5fHxkb2d8ZW58MHwwfHx8MTY0NTE3NTAwMA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1581888227599-779811939961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxMHx8ZG9nfGVufDB8MHx8fDE2NDUxNzUwMDA&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxM3x8ZG9nfGVufDB8MHx8fDE2NDUxNzUwMDA&ixlib=rb-1.2.1&q=80&w=1080'
    ],
    cats: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE2NDUxNzU4ODk&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTY0NTE3NTg4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg4OTh8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE2NDUxNzU4ODk&ixlib=rb-1.2.1&q=80&w=1080'
    ]
  }
  
  let images = [];
  let tempElt1 = "";
  let tempElt2 = "";
  let click = -1;
  let win = 0;
  let score = 0;
  let time = 0;
  let clickCommon = 0;
  let topResults = [];
  
  let preElt = document.querySelector("#pre");
  let themesElt = document.querySelector("#themes");
  let boxElts = document.getElementsByClassName("box");
  let mainElt = document.querySelector(".main");
  let timeElt = document.querySelector("#time");
  let scoreElt = document.querySelector("#score");
  let postElt = document.querySelector("#post");
  let finalElt = document.querySelector("#final");
  let againElt = document.querySelector("#again");
  let scoreboard = document.getElementById("scoreboard");
  

  themesElt.addEventListener("click", function(e) {
    if (e.target.classList.contains("themes")) {
      activateTheme(e.target.id);
      preElt.classList.add("hidden");
    }
  });
  
  
  function activateTheme(theme) {
    for (let i = 0; i < 20; i++) {images.push(library[theme][i]);}  
    for (let i = 0; i < 20; i++) {
      let rand = Math.floor(Math.random() * (images.length - 1));
      boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
      images.splice(rand, 1);
    }
  }
  
  mainElt.addEventListener("click", gameLogic);
  
  function gameLogic(e) {
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");
      if (click < 1) {
        tempElt1 = e.target;
        clickCommon++
        if (click === -1) {
          time = setInterval(function() {
            time++;
            timeElt.innerHTML = time;
          }, 1000);
        }
        click = 1;
      }
  
      else if (e.target !== tempElt1) {
        tempElt2 = e.target;
  
        if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
          mainElt.removeEventListener("click", gameLogic);
          setTimeout( function() {
            tempElt1.firstChild.classList.add("hidden");
            tempElt2.firstChild.classList.add("hidden");
            mainElt.addEventListener("click", gameLogic);
          }, 400);
          if (score > 0) {
            score -= 2;
          }
          scoreElt.innerHTML = score;
        }
  
        else {
          score += 10;
          win += 2;
          tempElt1.firstChild.classList.add("outlined");
          tempElt2.firstChild.classList.add("outlined");
          tempElt1.classList.remove("play");
          tempElt2.classList.remove("play");
          scoreElt.innerHTML = score;
  
          if (win === 20) {
            clearInterval(time);
            finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds. <br> And you click " + clickCommon + " times.";
            postElt.classList.remove("hidden");
            topResults.push({
                score: score,
                time: time,
                clickCommon: clickCommon
              })
            localStorage.topResults = JSON.stringify(topResults);
            defaultPage()
          }
        }
        click = 0;
      }
    }
  }

  
  againElt.addEventListener("click", resetGame);
  
  function resetGame() {
    tempElt1 = "";
    tempElt2 = "";
    click = -1;
    win = 0;
    score = 0;
    time = 0;
    clickCommon = 0;
    postElt.classList.add("hidden");
    preElt.classList.remove("hidden");
    for (let i = 0; i < 20; i++) {
      boxElts[i].classList.add("play");
      boxElts[i].firstChild.classList.add("hidden");
    }
    timeElt.textContent = time;
    scoreElt.textContent = score;
  }

  function defaultPage() {
    if (localStorage.topResults) {
      let text = "";
      topResults = JSON.parse(localStorage.topResults);
      topResults.sort(function (a,b) {
        return b.score - a.score;
      })
      for (let i = 0; i < topResults.length; i++) {
          text += `
            <div class="scores">
            <p>Score: ${topResults[i].score}. Time: ${topResults[i].time}. Click: ${topResults[i].clickCommon}</p>
            </div>
          `;
      }
      scoreboard.innerHTML = text;
    }
  }

  defaultPage()
  