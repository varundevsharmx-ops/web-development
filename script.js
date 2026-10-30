
// ===== WELCOME MESSAGE =====

console.log("Welcome to Varun Dev's Web Development Projects!");

// ===== CURRENT YEAR IN FOOTER =====

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `Created by Varun Dev | ${new Date().getFullYear()}`;
}

// ===== PROJECT CARD INTERACTION =====

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        const projectName = card.querySelector("h3").textContent;

        alert("You selected: " + projectName);

    });

});

// ===== WELCOME ANIMATION =====

const intro = document.querySelector(".intro");

if (intro) {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.transition = "opacity 1s ease";
        intro.style.opacity = "1";
    }, 200);
}

// ===== BACK TO TOP BUTTON =====

const topButton = document.createElement("button");

topButton.textContent = "↑ Back to Top";

topButton.id = "backToTop";

topButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 18px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    topButton.style.display =
        window.scrollY > 300 ? "block" : "none";
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
