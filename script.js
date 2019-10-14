//SELECTORS

var inp = document.getElementById('userinput');
var ent = document.getElementById('enter');
var mainlist = document.getElementById('todolist');
var listItems = document.getElementsByTagName('li');


//add item function with delete button
function createItem(){
	var crtli = document.createElement('li');
	crtli.innerHTML = inp.value;
	mainlist.appendChild(crtli);
	inp.value = "";

	var delBtn = document.createElement('button');
	delBtn.innerHTML = "&#215;";
	crtli.appendChild(delBtn);
	delBtn.onclick = delItem;
	delBtn.className = "btn btn-secondary deleteBtn btn-sm";
}

ent.addEventListener("click", function(){
	// console.log("click is working");
	if (inp.value.length > 0){
		createItem();
	}
})

inp.addEventListener("keypress", function(){
	// console.log("click is working");
	if (inp.value.length > 0 && event.which == 13){
		createItem();
	}
})

// strikethrough
mainlist.onclick = function(event){
	event.target.classList.toggle('done');
}

// delete button on the default items
function createDelBtn(){
	var delBtn = document.createElement('button');
	delBtn.innerHTML = "&#215;";
	listItems[i].appendChild(delBtn);
	delBtn.onclick = delItem;
	delBtn.className = "btn btn-secondary deleteBtn btn-sm";
}

for (i = 0; i < listItems.length; i++){
	createDelBtn();
}

//delete per item
function delItem(evt){
	evt.target.parentNode.remove();
}

//delete all
function delAll(){
	// mainlist.remove();
	while (mainlist.hasChildNodes()) {
    mainlist.removeChild(mainlist.firstChild);
  }
}
