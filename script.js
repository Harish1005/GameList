//selecting popup overlay, popup and plus button 

var popupoOverlay = document.querySelector(".popup-overlay")
var popup = document.querySelector(".popup")
var addPopup = document.getElementById("add-popup")

//add click handler to plus button

addPopup.addEventListener("click", function(){
  popupoOverlay.style.display = "block"
  popup.style.display = "block"
})

//selecting cnacel button

var cancelGame = document.getElementById("cancel-game")

//add click handler to cancel button
cancelGame.addEventListener("click",function(event){
  event.preventDefault()
  popupoOverlay.style.display= "none"
  popup.style.display = "none"
})

//selectinh container, addgame button, game name input, game developer and game decscription

var container = document.querySelector(".container")
var addGame = document.getElementById("add-game")
var gameName = document.getElementById("game-name")
var gameDevelop = document.getElementById("game-develop")
var gameDescrip = document.getElementById("game-descrip")

// add click handler to add button

addGame.addEventListener("click", function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "game-container")
  div.innerHTML = `<h2>${gameName.value}</h2>
  <h4>${gameDevelop.value}</h4>
  <p>${gameDescrip.value}</p>
  <button onclick = "deleteGame(event)">Delete</button>`
  container.append(div)
  popupoOverlay.style.display= "none"
  popup.style.display = "none"
})

function deleteGame(event){
  event.target.parentElement.remove()
}