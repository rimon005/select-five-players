
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
    const player3 = playerName('third-player-name');
    disabledBtn('player-3')
})

document.getElementById('player-4').addEventListener('click' ,function(){
    const player4 = playerName('fourth-player-name');
    disabledBtn('player-4')
})
document.getElementById('player-5').addEventListener('click' , function(){
    const player5 = playerName('fifth-palyer-name');
    disabledBtn('player-5')
})

document.getElementById('player-6').addEventListener('click' ,function(){
    const player6 = playerName('sixth-player-name');
    disabledBtn('player-6')
})


document.getElementById('claculate-btn').addEventListener('click' , function(){
    const playerExpense = costField('player-expense');
    console.log(playerExpense)
    const playerCostField =document.getElementById('total-palyerCost');
    const playerCost = parseFloat(playerCostField.innerText)

    const playerTotalCost = playerExpense * ( document.querySelectorAll('li').length); ;
    playerCostField.innerText = playerTotalCost;


})

