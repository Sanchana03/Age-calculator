// Define funtion to get calculated Age
function getDOB() {

	// Getting input from html input element
	let data =
		document.getElementById("inputDob").value;

	// Convert input data to usable format
	// as day,month and year
	let dob = new Date(data);
	let day = dob.getDate();
	let month = dob.getMonth();
	let year = dob.getFullYear();

	// Getting current date and calculating the difference
	let now =
		new Date(document.getElementById("cdate").value);
	console.log(now);
	let yearDiff = now.getFullYear() - year;
	let monthDiff = now.getMonth() - month;
	let dateDiff = now.getDate() - day;

	// Calculating the Age
	if (yearDiff < 0) console.log("invalid date");
	else if (monthDiff > 0) {
		console.log(yearDiff);
	} else if (monthDiff === 0 && dateDiff >= 0) {
		console.log(yearDiff);
	} else {
		yearDiff = yearDiff - 1;
		if (monthDiff <= 0)
			if (dateDiff > 0) monthDiff = 12 + monthDiff;
			else monthDiff = 11 - monthDiff;
	}
	if (dateDiff < 0) {
		dateDiff = 30 + dateDiff;
		monthDiff -= 1;
	}

	// Show calculated age as output
	// and invalid if wrong input is given
	if (yearDiff < 0)
		document.getElementById("currentAge").innerHTML = "Invalid Date";
	else
		document.getElementById("currentAge").innerHTML =
			"Your current Age is " + yearDiff + " years "
			+ monthDiff + " months " + dateDiff + " days";
}

// Function to provide default date value
function currentDate() {
	console.log(formatted());
	let d = document.getElementById("cdate");
	d.value = formatted();
}

function formatted(date = new Date()) {
	return [
		date.getFullYear(),
		short(date.getMonth() + 1),
		short(date.getDate()),
	].join("-");
}
function short(num) {
	return num.toString().padStart(2, "0");
}

// Calling current date function to set default date value
currentDate();
