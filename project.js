function checkVoter() {
    let userName = prompt("Enter your name:");
    let userAge = prompt("Enter your age:");
    userAge = parseInt(userAge);

    if (isNaN(userAge) || userAge <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    let eligibility = (userAge >= 18) ? "Can Vote ✅" : "Cannot Vote ❌";

    let table = document.getElementById("voterTableBody");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerText = userName;
    cell2.innerText = userAge;
    cell3.innerText = eligibility;

    document.getElementById("message").innerText =
        (userAge >= 18)
        ? "You are eligible to vote! 🗳️"
        : "Sorry, you are not eligible to vote yet.";
}

// Auto-run once on page load
checkVoter();
