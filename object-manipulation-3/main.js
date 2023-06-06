console.log('Lodash is loaded:', typeof _ !== 'undefined');

// The function's parameters should be an array of players and the number of cards per hand.
function cardGame(playersNameArr, numCardsPerHand) {

  // Create an array of Object that represent players. Each player has a unique name and a hand to hold cards in.
  const playersArrObj = [];
  _.forEach(playersNameArr, function (playerName) { playersArrObj.push(createPlayerObj(playerName)); });
  console.log(playersArrObj);

  /** Create a collection of fifty-two objects that represent a standard 52-card deck.
  Each card should have a rank (Ace, 2, 3, ... King) and a suit (clubs, diamonds, hearts, spades).**/
  const cardsDeck = createCardsDeck();
  // console.log(cardsDeck);

  // Shuffle the deck.
  const shuffledCardsDeck = _.shuffle(cardsDeck);
  // console.log(shuffledCardsDeck);

  // Deal a number of cards to each player. No two players should be able to receive the same card.
  assignCards(playersArrObj, numCardsPerHand, shuffledCardsDeck);
  addTotalScoretoEachPlayer(playersArrObj, numCardsPerHand, assignScore);
  // console.log(playersArrObj);

  /** Find the player with the highest score. Each card is worth a specific point value.
   Aces are worth 11 points, face ranks (Jack, Queen, King) are worth 10 points,
   and number ranks are worth their value (2, 3, ... 10).**/
  const playersLeftArr = winningPlayersArr(playersArrObj, maxScore);
  console.log(playersLeftArr);

  //  In the case of a tie, run a tie-breaker between the "winners" until there is one winning player remaining.
  if (playersLeftArr.length === 1) {
    const result = 'The winner is: ' + playersLeftArr[0];
    console.log(result);
    return result;
  } else {
    cardGame(playersLeftArr, numCardsPerHand);
  }
}

cardGame(['Edwin Hoffman', 'Stewart Powers', 'Jake Gildon', 'Michael Newton'], 3);

/** *********************** Reference functions to the cardGame main function ******************************/
function createPlayerObj(playerName) {
  const playerObj = {};
  playerObj.name = playerName;
  playerObj.hand = [];
  return playerObj;
}

function createCardsDeck() {
  const rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  const cardsDeck = [];

  for (let i = 0; i < 4; i++) {
    _.forEach(rank, function (value) {
      const obj = {};
      obj.rank = value;
      obj.suit = suit[i];
      cardsDeck.push(obj);
    });
  }

  return cardsDeck;
}

function assignCards(playersArrObj, numCardsPerHand, shuffledCardsDeck) {
  _.forEach(playersArrObj, function (player) {
    for (let i = 0; i < numCardsPerHand; i++) {
      const randomCard = _.sample(shuffledCardsDeck);
      player.hand.push(randomCard);
      _.pull(shuffledCardsDeck, randomCard);
    }
  });
  // console.log(shuffledCardsDeck);
}

function addTotalScoretoEachPlayer(playersArrObj, numCardsPerHand, assignScore) {
  _.forEach(playersArrObj, function (player) {
    let totalScore = 0;
    for (let i = 0; i < numCardsPerHand; i++) {
      totalScore += assignScore(player.hand[i].rank);
    }
    player.totalScore = totalScore;
  });
}

function assignScore(rankValue) {
  switch (rankValue) {
    case 'Ace':
      return 11;
    case 'Jack':
    case 'Queen':
    case 'King':
    case 10:
      return 10;
    case 9:
      return 9;
    case 8:
      return 8;
    case 7:
      return 7;
    case 6:
      return 6;
    case 5:
      return 5;
    case 4:
      return 4;
    case 3:
      return 3;
    case 2:
      return 2;
  }
}

function maxScore(playersArrObj) {
  const scores = [];

  _.forEach(playersArrObj, function (player) {
    scores.push(player.totalScore);
  });
  return _.max(scores);
}

function winningPlayersArr(playersArrObj, maxScore) {
  const winningPlayers = [];
  const maxScoreNum = maxScore(playersArrObj);
  _.forEach(playersArrObj, function (player) {
    if (player.totalScore === maxScoreNum) {
      winningPlayers.push(player.name);
    }
  });
  return winningPlayers;
}
