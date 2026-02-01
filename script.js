const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const proposal = document.getElementById("proposal");
const loveMessage = document.getElementById("loveMessage");
const hearts = document.getElementById("hearts");

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button 💖
yesBtn.addEventListener("click", () => {
  proposal.style.display = "none";
  loveMessage.style.display = "block";
  createHearts();
});

// Floating hearts animation ❤️
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);
}
