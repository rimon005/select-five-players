function playerName(event){
    const playerElement  = document.getElementById(event).innerText;
    const playersContainer = document.getElementById('player-container');
    const li = document.createElement('li');
    li.innerText = playerElement;
    li.classList.add('player')
    playersContainer.appendChild(li);
    
}

function disabledBtn(myBtn) {
     document.getElementById(myBtn).disabled = true;
  }

  function costField (costEvent){

    const costInput = document.getElementById(costEvent);
    const cost = parseFloat(costInput.value);
    costInput.value = '';
    return cost;
  }