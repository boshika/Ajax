var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="bulleted">';
		for(var i=0; i<employees.length; i++) {
			if (employees[i].inoffice === true) {
				statusHTML += '<li class="in">';
			} else {
				statusHTML += '<li class = "out">';
			}
			statusHTML += employees[i].name;
			statusHTML += '</li >';
		}
		statusHTML += '</ul>';
		document.getElementById('employeeList').innerHTML = statusHTML
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();

var roomrequest = new XMLHttpRequest();
roomrequest.onreadystatechange = function() {
	if(roomrequest.readyState === 4) {
		var rooms = JSON.parse(roomrequest.responseText);
		var statusHTML = '<ul class="rooms">';
		for(var i=0; i<rooms.length; i++) {
			if (rooms[i].available === true) {
				statusHTML += '<li class="empty">';
			} else {
				statusHTML += '<li class = "full">';
			}
			statusHTML += rooms[i].room;
			statusHTML += '</li >';
		}
		statusHTML += '</ul>';
		document.getElementById('roomList').innerHTML = statusHTML
	}
};
roomrequest.open('GET', 'data/rooms.json');
roomrequest.send();