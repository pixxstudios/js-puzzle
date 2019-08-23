function init() {
    addGame();
    addButton();
}

function addGame() {
    const game = new Game();
}

function addButton() {
    const addBtn = document.createElement('button');
    addBtn.className = 'add-button';
    addBtn.textContent = 'Add New Board';
    addBtn.addEventListener('click', addGame);

    const btnContainer = document.querySelector('#js-puzzle .puzzle-container');
    btnContainer.appendChild(addBtn);
}