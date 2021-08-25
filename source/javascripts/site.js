function copyrightDate() {
	const d = new Date();
	const curr_year = d.getFullYear();
	const dateString = "&copy;" + " " + curr_year + " ";
	//return dateString
	document.write(dateString);
}
