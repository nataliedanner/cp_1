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

// Prevent submission if fields are empty

document.querySelector(".submission").addEventListener("click", (e) => {
    e.preventDefault();
    let name = nameInput.textContent;
    let email = emailInput.textContent;
    let comments = commentsInput.textContent;
    if (!name || !email|| !comments) {
        alert("All fields required.");
        e.stopPropagation();
    }
});

document.querySelector(".submission").addEventListener("click", () => {
    alert("Form submitted!")
})


// Append valid feedback entries

let feedbackDisplay = document.getElementById("feedback-display")

document.querySelector(".submission").addEventListener("click", (e) => {
    const entry = document.createElement("div");
    entry.textContent = `${name} (${email}), ${comments}`;
    feedbackDisplay.appendChild(entry);
    e.stopPropagation();
})