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
    dialogueText.innerHTML = "Spencer:  Statistically speaking it’s better to split the bill, this way we minimize financial inequality.";
    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q2.onclick = function () {
    dialogueText.innerHTML = "Spencer:  It’s scary to even talk about it now but..one time I got a 98 on a test.";


    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q3.onclick = function () {
    dialogueText.innerHTML = "Spencer: Actually yes. I'm attending a lecture after this on “Why are we so slimy” ";
    q3.style.display = "none";
    q4.style.display = "none";

    dateButton.style.display = "inline-block";
    rejectButton.style.display = "inline-block";
};

q4.onclick = function () {
    dialogueText.innerHTML = "Spencer: I once corrected someone's grammar on valentines day.";
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
