const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');
const modal = document.querySelector('.modal')
const modalDialog = document.querySelector('.modal-dialog')
const newTitle = document.querySelector('h2')
const changeForm = document.forms.changeTodo
const changeTnpt = changeForm.querySelector('input')
const modalBtnClose = document.querySelector('[data-close]')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = document.getElementById('before');
    const ageInput = document.getElementById('after');
    const name = nameInput.value;
    const age = Number(ageInput.value);

    if (name && !isNaN(age)) {
        const birthYear = new Date().getFullYear() - age;

        const newRow = document.createElement('tr');
        const numberCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const birthCell = document.createElement('td');
        const actionsCell = document.createElement('td');
        const editingIcon = document.createElement('img');
        const garbageIcon = document.createElement('img');

        numberCell.innerHTML = '';
        numberCell.textContent = tableBody.children.length + 1;
        nameCell.innerHTML = name;
        nameCell.id = 'name';
        ageCell.innerHTML = age;
        ageCell.id = 'age';
        birthCell.innerHTML = birthYear;
        birthCell.id = 'birth';
        actionsCell.innerHTML = '';
        actionsCell.id = 'actions';
        actionsCell.classList.add('edit_garbage');
        editingIcon.classList.add('editing');
        editingIcon.setAttribute('src', './img/1976055_edit_edit document_edit file_edited_editing_icon.svg');
        garbageIcon.classList.add('garbage');
        garbageIcon.setAttribute('src', './img/3844425_can_trash_icon.svg');

        newRow.append(numberCell, nameCell, ageCell, birthCell, actionsCell);
        actionsCell.append(editingIcon, garbageIcon);
        tableBody.append(newRow);
        nameInput.value = '';
        ageInput.value = '';

        garbageIcon.onclick = () => {
            const row = garbageIcon.closest('tr');
            if (confirm('Are you sure you?')) {
                tableBody.removeChild(row)
                const rows = tableBody.querySelectorAll('tr');
                for (let i = 0; i < rows.length; i++) {
                    rows[i].querySelector('td:first-child').innerHTML = i + 1;
                }
            }
        }
    }
    else {
        alert('Введите корректные данные.');
    }
})


