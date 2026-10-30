
// Update footer year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Make the Calculator project card clickable
document.querySelectorAll(".project-card").forEach((card) => {
    const heading = card.querySelector("h3");

    if (heading && heading.textContent.trim() === "Calculator") {
        card.style.cursor = "pointer";

        card.addEventListener("click", () => {
            window.location.href = "./calculator/";
        });
    }
});

// Intro animation
const intro = document.querySelector(".intro");

if (intro) {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
        intro.style.opacity = "1";
    }, 100);
}

// Back to Top button
const topButton = document.createElement("button");

topButton.textContent = "↑ Back to Top";
topButton.id = "backToTop";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 18px";
topButton.style.cursor = "pointer";

document.body.appendChild(topButton);

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
