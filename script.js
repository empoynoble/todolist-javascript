//SELECTORS

var inp = document.getElementById('userinput');
var ent = document.getElementById('enter');
var mainlist = document.querySelector('ul');
var listItems = document.getElementsByTagName('li');

//add item function

function createItem(){
	var crtli = document.createElement('li');
		crtli.innerHTML = inp.value;
		mainlist.appendChild(crtli);
		inp.value = "";
}


ent.addEventListener("click", function(){
	// console.log("click is working");

	if (inp.value.length > 0){
		createItem();
		createDelBtn();
	}
})

inp.addEventListener("keypress", function(){
	// console.log("click is working");

	if (inp.value.length > 0 && event.which == 13){
		createItem();
		createDelBtn();
	}
})

// strikethrough
mainlist.onclick = function(event){
	event.target.classList.toggle('done');
}

// delete button

function createDelBtn(){
	var delBtn = document.createElement('button');
	delBtn.innerHTML = "Delete";
	listItems[i].appendChild(delBtn);
	delBtn.onclick = delItem;
}


for (i = 0; i < listItems.length; i++){
	createDelBtn();
}

function delItem(evt){
	evt.target.parentNode.remove();
}