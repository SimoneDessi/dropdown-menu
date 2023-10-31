const dropdownButton = document.querySelector('#dropdown-button')
const dropDownList = document.querySelector('.nav-links-container')

function toggle() {
  dropDownList.classList.toggle('hidden')
}

dropdownButton.addEventListener('click', toggle)