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
    dialogueText.innerHTML = "Lynn: Social media, I have a personal account, a professional account, an inspirational quote account, and I’ve just started my onlyslugs.";
    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q2.onclick = function () {
    dialogueText.innerHTML = "Lynn: I like to take pictures to post on slugstagram, and slugchat and rate peoples outfits";


    q1.style.display = "none";
    q2.style.display = "none";

    q3.style.display = "inline-block";
    q4.style.display = "inline-block";
};

q3.onclick = function () {
    dialogueText.innerHTML = "Lynn:Nobody can keep up with my skincare routine";
    q3.style.display = "none";
    q4.style.display = "none";

    dateButton.style.display = "inline-block";
    rejectButton.style.display = "inline-block";
};

q4.onclick = function () {
    dialogueText.innerHTML = "Lynn: Only if they are photogenic ";
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
