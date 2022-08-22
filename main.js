
function playerName(){
    const playerElement  = document.getElementById('palyer-name').innerText;

    const itemsContainer = document.getElementById('item-container');

    const li = document.createElement('li');
    li.innerText = playerElement;
    li.classList.add('item')
    itemsContainer.appendChild(li)
}
