//your JS code here. If required.
document.querySelector('input[typr="button"]').addEventListener("click", function(){
	const colorSelect = document.getElementById("colorSelect");

	const selectedOption = colorSelect.options[colorSelect.selectedIndex];

	if(selectedOption){
		colorSelect.remove(colorSelect.selectedIndex);
	}
});