var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  return ++katsDeliLine.length;
}

function nowServing() {
  var serving;
  if (katsDeliLine.length === 0) {
    serving = "There is nobody waiting to be served!";
  }
  else {
    serving = katsDeliLine[0];
  }
  katsDeliLine.shift();
  return serving;
}