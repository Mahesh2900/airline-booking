document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure").value;
    const passengers = document.getElementById("passengers").value;

    // Generate booking confirmation message
    const confirmationMessage = `
        You have booked a flight from ${origin} to ${destination}.
        Departure Date: ${departureDate}
        Number of Passengers: ${passengers}
    `;

    // Display confirmation message
    document.getElementById("confirmation-details").textContent = confirmationMessage;
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("booking-form").reset();
});

function resetForm() {
    document.getElementById("confirmation").style.display = "none";
}
