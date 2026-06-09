dialogueText = document.getElementById("dialogue-text");

q1 = document.getElementById("q1");
q2 = document.getElementById("q2");
 q3 = document.getElementById("q3");
 q4 = document.getElementById("q4");

dateButton = document.getElementById("date-button");
rejectButton = document.getElementById("reject-button");

q3.style.display = "none";
q4.style.display = "none";
dateButton.style.display = "none";
rejectButton.style.display = "none";

q1.onclick = function () {
    dialogueText.innerHTML = "Asher: I start projects and never finish them.";
    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q2.onclick = function () {
    dialogueText.innerHTML = "Asher: I fell in love with a painting once. It didn’t work out.";
    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q3.onclick = function () {
    dialogueText.innerHTML = "Asher: Someone who understands my 20 page interpretation of this breadstick.";
    q3.style.display = "none";
    q4.style.display = "none";

    dateButton.style.display = "inline-block";
    rejectButton.style.display = "inline-block";
};

q4.onclick = function () {
    dialogueText.innerHTML = "Asher: I paint using completely organic pigments I crafted myself.";
    q3.style.display = "none";
    q4.style.display = "none";

    dateButton.style.display = "inline-block";
    rejectButton.style.display = "inline-block";
};

dateButton.onclick = function () {
  window.open("date.html")
  
};

rejectButton.onclick = function () {
  window.open("menu.html")
  
};

