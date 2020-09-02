let submit = document.querySelector('input[type="submit"]');
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let institution = document.getElementById("institution-name");
let grade = document.querySelector("#grade");
let attach = document.querySelector(".attach");
let form = document.querySelector("form");

submit.addEventListener('click', addEducation);

function addEducation(event) {
    event.preventDefault();
    let format = `<div class="mt-5">
    <h4> <span class="firstname">${firstname.value}</span> <span class="lastname">${lastname.value}</span> </h4>
    <p class="mb-0 institution">${institution.value}</p>
    <p class="mt-0 pt-0">Grade: <span class="text-muted grade">${grade.value}</span></p>
    </div>`
    attach.innerHTML += format;
    firstname.value = ''
    lastname.value = ''
    grade.value = ''
    institution.value = ''
    form.style.display = "none"
    attach.innerHTML += `<div class="col-md-4 mt-3">
    <input value="Add Education" class="form-control btn-primary" id="Add">
</div>`
}

let add = document.querySelector("#Add")

add.addEventListener("click", function () {
    form.style.display = "block"
})