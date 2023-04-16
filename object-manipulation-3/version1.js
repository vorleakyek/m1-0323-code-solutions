console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Hannah',
    hand: []
  },
  {
    name: 'Jake',
    hand: []
  },
  {
    name: 'Timo',
    hand: []
  },
  {
    name: 'Emma',
    hand: []
  }
];

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

const shuffledCardsDeck = _.shuffle(cardsDeck);

_.forEach(players, function (player) {
  for (let i = 0; i < 2; i++) {
    const randomCard = _.sample(shuffledCardsDeck);
    player.hand.push(randomCard);
    console.log('randomcard', randomCard);
    _.pull(shuffledCardsDeck, randomCard);
  }
});

const scores = [];

_.forEach(players, function (player) {
  scores.push(score(player.hand[0].rank) + score(player.hand[1].rank));
  console.log(player.hand);
});

console.log('scores', scores);

const winningScore = _.max(scores);
const winningPlayer = players[_.indexOf(scores, winningScore)].name;
console.log('max score', winningScore);
console.log('indexof winningscore', _.indexOf(scores, winningScore));
console.log('winner', winningPlayer);

function score(rankValue) {
  switch (rankValue) {
    case 'Ace':
      return 11;
    case 'Jack':
    case 'Queen':
    case 'King':
      return 10;
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
