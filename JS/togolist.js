function addDestination() {
    let selectBox = document.getElementById("destinationSelect");
    let selectedDestination = selectBox.value;

    if (!selectedDestination) {
        alert("Please select a destination!");
        return;
    }

    let toGoList = document.getElementById("toGoList");

    // Create Accordion Item
    let accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Create Header
    let header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `
        <span>${selectedDestination}</span>
        <button class="remove-btn" onclick="removeDestination(this)">✖</button>
    `;

    // Create Content
    let content = document.createElement("div");
    content.classList.add("accordion-content");
    content.innerHTML = `Plan your visit to <b>${selectedDestination}</b> soon!`;

    // Toggle Accordion
    header.addEventListener("click", function () {
        accordionItem.classList.toggle("active");
    });

    // Append to Accordion
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);
    toGoList.appendChild(accordionItem);
}

// Remove Destination
function removeDestination(btn) {
    btn.closest(".accordion-item").remove();
}
