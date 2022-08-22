
function playerName(event){
    const playerElement  = document.getElementById(event).innerText;
    const playersContainer = document.getElementById('player-container');
    const li = document.createElement('li');
    li.innerText = playerElement;
    li.classList.add('item')
    playersContainer.appendChild(li)

    if(playersContainer.length > 5){
        alert('You can not add more player')
        return;
    }
}

function disabledBtn(myBtn) {
     document.getElementById(myBtn).disabled = true;

  }
  document.getElementById('player-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('player-1').addEventListener('click' , function(){
    const player1 = playerName('frist-palyer-name');
    disabledBtn('player-1')
})

document.getElementById('player-2').addEventListener('click' ,function(){
    const player2 = playerName('second-player-name');
    disabledBtn('player-2')
})
document.getElementById('player-3').addEventListener('click' , function(){
    const player1 = playerName('third-player-name');
    disabledBtn('player-3')
})

document.getElementById('player-4').addEventListener('click' ,function(){
    const player2 = playerName('fourth-player-name');
    disabledBtn('player-4')
})
document.getElementById('player-5').addEventListener('click' , function(){
    const player1 = playerName('fifth-palyer-name');
    disabledBtn('player-5')
})

document.getElementById('player-6').addEventListener('click' ,function(){
    const player2 = playerName('sixth-player-name');
    disabledBtn('player-6')
})



