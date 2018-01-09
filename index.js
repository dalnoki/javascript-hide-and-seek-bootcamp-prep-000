function getFirstSelector(selector) {

  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested .target');
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}

function increaseRankBy(n) {
  var numbers = document.querySelector('.ranked-list');

  for (var i = 0; i < numbers.length; i++) {
    var numbersChildren = numbers[i].children;

    for (var j = 0; j < numbersChildren.length; j++) {
      numbersChildren[j].innerHTML = parseInt(numbersChildren[j].innerHTML) + n
    }
}
}
