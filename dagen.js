var days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

var DagenVanDeWeek = document.getElementById("dagenVanDeWeek");
var Werkdagen = document.getElementById("werkdagen");
var Weekenddagen = document.getElementById("weekenddagen");
var DagenVanDeWeekReverse = document.getElementById("dagenVanDeWeekReverse");
var WerkdagenReverse = document.getElementById("werkdagenReverse");
var WeekenddagenReverse = document.getElementById("weekenddagenReverse");

for(i = 0; i < 7; i++){
	DagenVanDeWeek.innerHTML += days[i] + ", ";
}

for (i = 0; i < 5; i++){
	Werkdagen.innerHTML += days[i] + ", ";
}

for (i = 5; i < 7; i++){
	Weekenddagen.innerHTML += days[i] + ", ";
}

for(i = 6; i >= 0; i--){
	DagenVanDeWeekReverse.innerHTML += days[i] + ", ";
}

for (i = 4; i >= 0; i--){
	WerkdagenReverse.innerHTML += days[i] + ", ";
}

for (i = 6; i >= 5; i--){
	WeekenddagenReverse.innerHTML += days[i] + ", ";
}










