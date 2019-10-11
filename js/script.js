console.log('learning loops');

/*
for (initial value; final value; increment/decrement){

}
*/


// When you say 'i++', it means 'i=i+1'
for (var i=0; i<10; i++) {
	document.getElementById('result').textContent += i + ' ';
}
for (var i=10; i>0; i--) {
	document.getElementById('result').textContent += i + ' ';
}
for (var i=0; i<25; i++) {
	document.getElementById('myName').textContent += 'Russell '
}

for (var i=1; i<15; i++) {
	for (var j=0; j<i; j++) {
		document.getElementById('halfXmasTree').innerHTML += '*';
	}
	document.getElementById('halfXmasTree').innerHTML += '</br>';
}

for (var i=1; i<15; i++) {
	for (var j=0; j<i; j++) {
		document.getElementById('xmasTree').innerHTML += '*';
	}
	document.getElementById('xmasTree').innerHTML += '</br>'
}

// While Loop
var egi = 0;
while (egi < 5) {
	document.getElementById('whileLoopExample').innerHTML += i;
	i++;
}