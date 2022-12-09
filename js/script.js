
//variable

var add_todoapp = document.querySelector(".add_todoapp");
var add_element = document.querySelector(".add_element")
var add_new_task = document.querySelector(".add_new_task");
var box_of_lists = document.querySelector(".box_of_lists")
var edit_element = document.querySelector(".edit_element")
var remove_all = document.querySelector(".remove_all")
var box = document.querySelector(".box")





add_element.addEventListener('click', function(e) {

	if(add_new_task.value != '') {

	e.preventDefault();


	//for common div
	var new_lists = document.createElement("div")

    new_lists.classList.add("d-flex");
	new_lists.classList.add("justify-content-between");
	new_lists.classList.add("align-items-center");
	new_lists.classList.add("mt-4");
    new_lists.classList.add("div_styles");

    //for p and icon divs

	var list_element = document.createElement("div");
	var list_element_icons = document.createElement("div");
	var list_element_icons_edit = document.createElement("div");
	var list_element_icons_delete = document.createElement("div");


    //for p element
	var list_element_value = document.createElement("p");
	list_element_value.classList.add("f_w");
	list_element_value.classList.add("f_s");


	list_element_value.style.display = "inline"

	//creating icons
	var list_edit = document.createElement("i");
	var list_delete = document.createElement("i");


	//adding some classes for icons
	list_edit.classList.add("fa-solid");
	list_edit.classList.add("fa-marker");

	list_delete.classList.add("fa-sharp");
	list_delete.classList.add("fa-solid");
	list_delete.classList.add("fa-trash");

    list_element_icons_edit.classList.add("div_icons");
    list_element_icons_delete.classList.add("div_icons");

    list_element_icons_edit.style.backgroundColor = "#2C5F2D"
    list_element_icons_delete.style.backgroundColor = "#F95700FF"



    //appendChild methods
	var textnode = document.createTextNode(add_new_task.value);
    list_element_value.appendChild(textnode);


    box.appendChild(new_lists)

    new_lists.appendChild(list_element);
    new_lists.appendChild(list_element_icons);
    list_element.appendChild(list_element_value);

    list_element_icons_edit.appendChild(list_edit)
    list_element_icons_delete.appendChild(list_delete)


	list_element_icons.appendChild(list_element_icons_edit);
    list_element_icons.appendChild(list_element_icons_delete);


    //for hiding edit button
    edit_element.style.visibility = "hidden"

    //for delete button
    list_delete.addEventListener('click', function(){

	    this.parentElement.parentElement.parentElement.remove();
    	edit_element.style.visibility = "hidden"

})

    //for remove all lists
    remove_all.addEventListener('click', function(e){
    	e.preventDefault()
    	new_lists.remove()
    	edit_element.style.visibility = "hidden";
    	add_new_task.value = '';

    })


    //for editing lists
    list_edit.addEventListener('click', function(){


    	var edited_list = this.parentElement.parentElement.previousElementSibling.parentElement.children[0];

    	edit_element.style.visibility = "visible"


    	edit_element.addEventListener('click', function(e){

    		if(add_new_task.value != '') {

        	e.preventDefault();

	        list_element_value.innerText = add_new_task.value;
    		}

    	})


        })

}

});


