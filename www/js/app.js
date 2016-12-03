
$(document).ready(function() {
	
 $.ajax({
type: 'GET',
		url: 'http://swapi.co/api/planets/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
				alert(erro.responseText);
		},
		success: function(data) {
			var divPlanet = document.querySelector("#contPlanet");
			divPlanet.innerHTML = ""
	
	$.each(data.results,function(i,obj){ 
			//divPlanet.innerHTML +="<a href = javascript:mostrarPlanet('" + obj.url + "')" + obj.name + "</a><br/>";
			
			divPlanet.innerHTML    += " "  + obj.name + "<br/> <br/>"; 
			});
			
		}
		
	});
	
});
	

$('.mostrarPlanet').on('click', function() {
	var planeta = document.querySelector("#planetas");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/' + planeta.value ,
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPlanet");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Rotação: " + data.rotation_period + "<br/>Orbital.: " + data.orbital_period +
 "<br/>População: " + data.population + "<br/>";
}});
});




