function getRamadanCountdown() {
    const currDate = new Date();
    let year = currDate.getFullYear();
    
    // Adjust year if Ramadan has already passed in the current year
    const ramadanDate = new Date(2025, 2, 1); // March 1st (0-based month index)
    if (currDate > ramadanDate) {
        year += 1;
    }

    const nextRamadan = new Date(2025, 2, 1);
    const diff = nextRamadan - currDate;

    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const monthsLeft = diff / (1000 * 60 * 60 * 24 * 30.44); // Approximate month length

    // Updating HTML content
    document.getElementById("ramadan-date").textContent = nextRamadan.toDateString();
    document.getElementById("current-date").textContent = currDate.toDateString();
    document.getElementById("days-left").textContent = daysLeft;
    document.getElementById("months-left").textContent = monthsLeft.toFixed(2);
}

// Call the function when the page loads
getRamadanCountdown();


