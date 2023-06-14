let frist = [];
let last = [];
let rdm;
let number = 0;

for (let i = 0; i < 16; i++) {
  frist[i] = i + 1;
}

function generateRandomNumbers() {
  for (let i = 0; i < 16; i++) {
    rdm = Math.floor(Math.random() * frist.length);
    last[i] = frist[rdm];
    frist.splice(rdm, 1);
  }
}

function table() {
    let tbl = document.getElementById("tbl");
    let data = "";
  
    for (let i = 0; i < 4; i++) {
      data += "<tr>";
  
      for (let j = 0; j < 4; j++) {
        data += `<td onclick="handleCellClick(this)">${last[number]}</td>`;
        number++;
      }
      data += "</tr>";
    }
    tbl.innerHTML = data;
    startTimer();
  }
  




let selectedNumber = 1; 
let timer;

function handleCellClick(cell) {
  let cellValue = parseInt(cell.textContent);
  
  if (cellValue === selectedNumber) {
    cell.classList.add("green"); 
    selectedNumber++; 
  }

  if (selectedNumber > 16) {
    clearTimeout(timer);
    showMessage("Təbriklər!");
  }
}

function startTimer() {
    let timeLeft = 10;
  
    function updateTimer() {
      document.getElementById("timer").textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearTimeout(timer);
        showMessage("Vaxt bitdi.");
      } else {
        timeLeft--;
        timer = setTimeout(updateTimer, 1000);
      }
    }
  
    updateTimer();
  }

  function showMessage(message) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.display = "block";
  }



generateRandomNumbers();
table();



  