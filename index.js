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
  var liNum = document.querySelector('.ranked-list li');

  for (var i = 0; i < liNum.length; i++) {
liNum[i].innerHTML=parseInt(liNum[i].innerHTML)+n;
    }
}

