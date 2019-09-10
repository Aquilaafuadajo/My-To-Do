var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function inputspace(){
	return input.value;
}

function createListElement() {
	var li = document.createElement("li");
	text = input.value;
	li.appendChild(document.createTextNode(text));
	ul.appendChild(li);
	input.value = "";
	
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
	
	function toggle(){
		li.classList.toggle("done");
	}
	
	function deleteListItem(){
		ul.removeChild(li);
	}
	
	del.addEventListener("click", deleteListItem);
	li.addEventListener("click", toggle);
	li.addEventListener("click", toggle);

}

function addListAfterClick() {
	if (inputLength() > 0 && inputspace() != 8) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);