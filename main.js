let LENGTH = 6;
let iCard = 0;
$(document).ready(function(){
	getCharacters();
});

function getCharacters(){
	row();
	$.ajax({
		url: "https://rickandmortyapi.com/api/character",
		success: function(data){
			let numberRow = LENGTH / 3;
			for (let i = 1;i <= numberRow;i++){
				let row = $("#row" + i);
				for (let j = 0;j < 3;j++){
					row.append(card(data.results[iCard]));
					iCard++;
				}
			}
		},
		error: function(){
			console.log("error: No se encuentran datos");
		}
	});
}

function row(){
	let cardsGroup = $("#cards_group");
	let numberRow = LENGTH / 3;
	for (let i = 0;i <= numberRow;i++){
		cardsGroup.append("<div class = 'row' id = 'row" + i + "'></div>");
	}
}

function card(character){
	return "<div class='card mr-4 my-5 text-white' style='background-color:#0d602c'>" +
		"<img src= " + character.image +">"+
		"<div class = 'card-body'>"+
			"<h5 class ='card-title'>ID:</h5>" +
			"<p class='card-text'>"+character.id + "</p>" +

			"<h5 class ='card-title'>Status:</h5>" +
			"<p class='card-text'>"+character.status + "</p>" +

			"<h5 class ='card-title'>Species</h5>" +
			"<p class='card-text'>"+character.species + "</p>" +

			"<h5 class ='card-title'>Type:</h5>" +
			"<p class='card-text'>"+character.type + "</p>" +

			"<h5 class ='card-title'>Gender:</h5>" +
			"<p class='card-text'>"+character.gender + "</p>" +
		"</div>" +
	"</div>"

}
