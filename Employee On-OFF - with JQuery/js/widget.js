$(document).ready(function () {
	var url = "../data/employees.json"
	$.getJSON(url, function(response) {
		var statusHTML = '<ul class="bulleted">';
	  $.each(response, function(index,employee) {
	  		if (employee.inoffice === true) {
	  			statusHTML += '<li class="in">';
	  		} else {
	  			statusHTML += '<li class="out">';
	  		}
	  		statusHTML += employee.name + '</li>';
	  });
	  statusHTML += '</ul>';
	  $('#employeeList').html(statusHTML);
	}); // end getJSON

	//for the meeting room
	var url2 = "../data/rooms.json"
	$.getJSON(url2, function(response) {
		var statusHTML = '<ul class="bulleted">';
	  $.each(response, function(index,room) {
	  		if (room.available === true) {
	  			statusHTML += '<li class="in">';
	  		} else {
	  			statusHTML += '<li class="out">';
	  		}
	  		statusHTML += room.name + '</li>';
	  });
	  statusHTML += '</ul>';
	  $('#roomList').html(statusHTML);
	}); // end getJSON

}); //end ready