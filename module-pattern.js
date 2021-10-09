const fightMode = (function () {
  function fight(player1, player2) {
    const score1 = Math.floor(Math.random() * player1.length);
    const score2 = Math.floor(Math.random() * player2.length);
    return score1 > score2 ? `${player1} wins!` : `${player2} wins`;
  }

  return {
    fight: fight,
  };
})();
