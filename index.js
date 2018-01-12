var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  var greeting = `Welcome, ${newName}. You are number ${katzDeliLine.length+1} in line.`
  return greeting;
}

function nowServing() {
  var serving;
  if (katzDeliLine.length === 0) {
    serving = "There is nobody waiting to be served!";
  }
  else {
    serving = katzDeliLine[0];
  }
  katzDeliLine.shift();
  return serving;
}

function currentLine() {
  var line = "The line is currently";
  if (katzDeliLine.length === 0) {
    line = line + " empty.";
  }
  else {
    line = line + ": "
    for (i = 0; i<katzDeliLine.length; i++) {
      line = line + `${i+1}. ${katzDeliLine[i]},`;
    }
  }
  return line;
}