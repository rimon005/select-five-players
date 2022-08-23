function playerName(event){
  if(( document.querySelectorAll('li').length) >= 5){
    alert("You can't add more players");
    return;
  }
    const playerElement  = document.getElementById(event).innerText;
    const playersContainer = document.getElementById('player-container');
    const li = document.createElement('li');
    li.innerText = playerElement;
    li.classList.add('player')
    playersContainer.appendChild(li);
    
}

function disabledBtn(myBtn) {
    const btnDisabled =   document.getElementById(myBtn);
    btnDisabled.style.backgroundColor = '#ddd'
    btnDisabled.disabled = true;
    
  }

  function costField (costEvent){

    const costInput = document.getElementById(costEvent);
    const cost = parseFloat(costInput.value);
    costInput.value = '';
    return cost;
  }