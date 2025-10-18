// Character count

const nameInput = document.getElementById("name")
nameInput.addEventListener("input", () => {
    console.log("Name characters:", nameInput.value.length);
})

const emailInput = document.getElementById("email")
emailInput.addEventListener("input", () => {
    console.log("Email characters:", emailInput.value.length)
})

const commentsInput = document.getElementById("comments")
commentsInput.addEventListener("input", () => {
    console.log("Comments Characters:", commentsInput.value.length)
})

// Display tooltips

nameInput.addEventListener("mouseover", () => showTooltip());
nameInput.addEventListener("mouseout", () => hideTooltip());

emailInput.addEventListener("mouseover", () => showTooltip());
emailInput.addEventListener("mouseout", () => hideTooltip());

commentsInput.addEventListener("mouseover", () => showTooltip());
commentsInput.addEventListener("mouseout", () => hideTooltip());

function showTooltip(nameInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "block";
}
function hideTooltip(nameInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "none";
}

function showTooltip(emailInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "block";
}
function hideTooltip(emailInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "none";
}

function showTooltip(commentsInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "block";
}
function hideTooltip(commentsInput) {
    const tooltip = document.querySelector(".tooltiptext");
    tooltip.style.display = "none";
}

