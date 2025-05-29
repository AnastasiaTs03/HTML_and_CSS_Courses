
//level 1

//Change Background color
let backgroundColor = document.querySelector('.backgroundColor');

backgroundColor.addEventListener('click', () => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
});


//Change text color
let headline = document.getElementById('headline');
let changeHeadlineColor = document.getElementById('changeHeadlineColor');

changeHeadlineColor.addEventListener('click', () => {
    headline.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;

});


//Hide element
let hideHeadline = document.getElementById('hideHeadline');
hideHeadline.addEventListener('click', () => {
    if (headline.style.display === 'block') {
        headline.style.display = 'none';
    } else {
        headline.style.display = 'block';
    }

});


//reset
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    document.body.style.backgroundColor = '';
    headline.style.color = '';
});


//Counter
let counterP = document.getElementById('counter');
let countButton = document.getElementById('count');

countButton.addEventListener('click', () => {
    let counter = parseInt(counterP.textContent);
    counter += 1;

    counterP.textContent = counter;
});


//Form
function submitForm(event) {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const output = document.getElementById('output');
    output.innerHTML = `<p>Ім'я: ${name}</p><p>Email: ${email}</p>`;

}


const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', function () {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
});




//To do list
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    let task = document.getElementById('task').value.trim();
    addTask(task);

});

function addTask(tasktext) {
    const li = document.createElement('li');
    li.textContent = tasktext;


    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
}



//search name
const nameInput = document.getElementById('nameInput');
const nameListItems = document.querySelectorAll('#nameList li');

nameInput.addEventListener('input', function () {
    const lowerText = nameInput.value.toLowerCase();

    nameListItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(lowerText)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
});



//age sort
const users = [
    { name: "Оля", age: 25 },
    { name: "Андрій", age: 32 },
    { name: "Ірина", age: 20 },
    { name: "Максим", age: 29 }
];

let sortDirection = true; // true = зростання, false = спадання

tbody = document.querySelector('#userTable tbody');
function renderTable(data) {
    tbody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;

        const ageCell = document.createElement('td');
        ageCell.textContent = user.age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);

        tbody.appendChild(row);
    });
}

function sortUsers(direction) {
    users.sort((a, b) => {
        return direction ? a.age - b.age : b.age - a.age;
    });

    renderTable(users)
}



const up = document.getElementById('up');
up.addEventListener('click', () => {
    sortUsers(true);
});

const down = document.getElementById('down');
down.addEventListener('click', () => {
    sortUsers(false);
});

renderTable(users)