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
    dialogueText.innerHTML = "Jake: I got it babe. I lifted three dumbbells today. I'm basically rich";
    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q2.onclick = function () {
    dialogueText.innerHTML = "Jake: Lifting weights, lifting rocks, lifting smaller slugs if you know what I mean heh";


    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q3.onclick = function () {
    dialogueText.innerHTML = "Jake: The gym is my first love.";
    q3.style.display = "none";
    q4.style.display = "none";

    dateButton.style.display = "inline-block";
    rejectButton.style.display = "inline-block";
};

q4.onclick = function () {
    dialogueText.innerHTML = "Jake: I carry all the groceries in one trip.";
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
