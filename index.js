function getFirstSelector(selector) {

  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested .target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  const numbers = document.querySelector('.ranked-list')
}

  for (let i = 0; i < numbers.length; i++) {
    let numbersChildren = numbers[i].children

    for (let j = 0; j < numberChildren; j++) {
      numberChildren[j].innerHTML = parseInt(numberChildren[j].innerHTML) + n
    }
}
