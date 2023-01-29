let count = 0;
let countEl = document.getElementById("count-el");
let entryEl = document.getElementById("entry-el");
let exitEl = document.getElementById("exit-el");
let totalEl = document.getElementById("totalSum");

function countUp() {
  count += 1;
  countEl.textContent = count; // textContent is better than innerText
}

function countDown() {
  if (count === 0) {
    alert("Sorry, there is no passenger.")  
  } else {
    count -= 1;
    countEl.textContent = count;
  }
}

function entry() {
  let countPlus = count + " + ";
  entryEl.textContent += countPlus;
  totalEl.textContent = parseInt(totalEl.textContent) + count;
  countEl.textContent = 0;
  count = 0;
}

function exited() {
  if (count > parseInt(totalEl.textContent)) {
    alert("Sorry, Exit Number can't be greater than Total Number.");
    countEl.textContent = 0;
    count = 0;
  } else {
    let countMinus = count + " - ";
    exitEl.textContent += countMinus;
    totalEl.textContent = parseInt(totalEl.textContent) - count;
    countEl.textContent = 0;
    count = 0;    
  }
}

function resetAll() {
  countEl.textContent = 0;
  count = 0;
  entryEl.textContent = entryEl.textContent.substring(0, 12);
  exitEl.textContent = exitEl.textContent.substring(0, 11);
  document.getElementById("totalSum").textContent = 0;
}
