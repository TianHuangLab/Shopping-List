var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelector("li");
// var deleteBtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create list and new delete button
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	// add class to delete button
	delBtn.classList.add("delete");
	// add new list with the input value at the end of the unordered list
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("text");
	// execute this fucntion when click on list item
	li.addEventListener("click",overClick);
	// clean input value
	input.value = "";
	// change the HTML content of delete button and add it at the end of li tag
	delBtn.innerHTML = "Delete"
	li.appendChild(delBtn);
	// remove the whole list item when clcik on it
	delBtn.addEventListener("click",removeItem);
}

// createa a remove list function
function removeItem(){
	this.parentNode.remove();
}

// cclick on a list item and it strikethroughs the text
function overClick() {
	this.classList.toggle("done")
}

// a function for entering the input by click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

 // a function for entering the input by keypress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//click on a list item and it strikethroughs the text
// function strikeThrough(e) {
// 	if (e.target.tagName === "li") {
// 		e.target.classList.toggle("Done");
// 	}
// }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("click", strikeThrough);
