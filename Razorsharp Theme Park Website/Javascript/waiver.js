// variables for elements on DOM
let first_name = document.getElementById("first_name")
let last_name = document.getElementById("last_name")
let phone_num = document.getElementById("phone_num")
let acknowledge_checkbox = document.getElementById("acknowledge_checkbox")
let information_checkbox = document.getElementById("information_checkbox")
let DOB_checkbox = document.getElementById("DOB_checkbox")
let form_errors = document.getElementById("formErrors")


// error IDs
let first_name_error= document.getElementById("first_name_error")
let last_name_error = document.getElementById("last_name_error")
let phone_num_error = document.getElementById("phone_num_error")
let acknowledge_checkbox_error = document.getElementById("acknowledge_checkbox_error")
let information_checkbox_error = document.getElementById("information_checkbox_error")
let DOB_checkbox_error = document.getElementById("DOB_checkbox_error")



/* checkForm function reads in the values of the form and verifies they meet
    the minimum valid requirements */
function checkForm() {

    let error_in_form = false

    form_errors.classList.add("hide")
    form_errors.innerHTML = ""
 
 
    // create unordered list
    let list = document.createElement("ul")
    list.setAttribute("id", "error_list")
    form_errors.appendChild(list)


    // Regex form checks
    let re_fname = /^[a-zA-Z ]+$/
    let retest_fname = re_fname.test(first_name.value)

    let re_lname = /^[a-zA-Z ]+$/
    let retest_lname = re_lname.test(last_name.value)

    let re_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    let retest_phone = re_phone.test(phone_num.value)

    // first name check
   if (retest_fname) {
    first_name.classList.remove("error")
    try {
       first_name_error.remove()
    } catch (error) {
       
    }
    }
    else {
        error_in_form = true
        let add_error = document.createElement("li")
        add_error.setAttribute("id", "first_name_error")
        add_error.appendChild(document.createTextNode("First name must be longer than 1 character"))
        list.appendChild(add_error)
        first_name.classList.add("error")
     }

    // last name check
   if (retest_lname) {
        last_name.classList.remove("error")
        try {
            last_name_error.remove()
        } catch (error) {
            
        }
    }
    else {
        error_in_form = true
        let add_error = document.createElement("li")
        add_error.setAttribute("id", "last_name_error")
        add_error.appendChild(document.createTextNode("Last name must be longer than 1 character"))
        list.appendChild(add_error)
        last_name.classList.add("error")
     }


    // phone check
   if (retest_phone) {
    phone_num.classList.remove("error")
    try {
       phone_num_error.remove()
    } catch (error) {
       
    }
    }
    else {
        error_in_form = true
        let add_error = document.createElement("li")
        add_error.setAttribute("id", "phone_num_error")
        add_error.appendChild(document.createTextNode("Invalid number"))
        list.appendChild(add_error)
        phone_num.classList.add("error")
     }



    // DOB checkbox
    if (DOB_checkbox.checked) {
        DOB_checkbox.classList.remove("error")
    try {
        DOB_checkbox_error.remove()
    } catch (error) {
        
    }
    }
    else {
    error_in_form = true
    let add_error = document.createElement("li")
    add_error.setAttribute("id", "DOB_checkbox_error")
    add_error.appendChild(document.createTextNode("Please acknowledge that you are 18 or older"))
    list.appendChild(add_error)
    DOB_checkbox.classList.add("error")
    }


     // acknowledge and information checkboxes
     if (acknowledge_checkbox.checked) {
        acknowledge_checkbox.classList.remove("error")
        try {
           acknowledge_checkbox_error.remove()
        } catch (error) {
           
        }
     }
     else {
        error_in_form = true
        let add_error = document.createElement("li")
        add_error.setAttribute("id", "acknowledge_checkbox_error")
        add_error.appendChild(document.createTextNode("Please acknowledge that you've read the above warnings"))
        list.appendChild(add_error)
        acknowledge_checkbox.classList.add("error")
     }

    // acknowledge and information checkboxes
    if (information_checkbox.checked) {
        information_checkbox.classList.remove("error")
        try {
            information_checkbox_error.remove()
        } catch (error) {
            
        }
        }
    else {
        error_in_form = true
        let add_error = document.createElement("li")
        add_error.setAttribute("id", "information_checkbox_error")
        add_error.appendChild(document.createTextNode("Please verify you have entered all infomation correctly"))
        list.appendChild(add_error)
        information_checkbox.classList.add("error")
    }


    // Confirm alert HERE
    if (!error_in_form) {
        confirm("Are you sure all you agree to ALL the terms?")
    }


}

const submit_btn = document.getElementById("submit_waiver")
// Overrides the default submit and validates form via checkForm function
submit_btn.addEventListener("click", function(event) {
    checkForm()   
    event.preventDefault()
 })