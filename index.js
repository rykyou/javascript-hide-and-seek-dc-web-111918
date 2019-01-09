function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedListNumbers = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rankedListNumbers.length; i++) {
    rankedListNumbers[i].innerHTML =
      (parseInt(rankedListNumbers[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.firstElementChild;

  while (nextNode) {
    node = nextNode;
    nextNode = node.firstElementChild;
  }

  return node;
}
