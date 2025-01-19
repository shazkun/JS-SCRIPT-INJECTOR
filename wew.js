(function () {
    var userChoice = prompt('Enter "A" or "B" (A=1ST SEM, B=2ND SEM):').toUpperCase();
    var userNumber = prompt('Enter the value for SEMESTER YEAR EX "2324":');
    var h4Elements = document.getElementsByTagName("h4");
    var firstH4Text = h4Elements[0]?.textContent || h4Elements[0]?.innerText;
    var lastFourNumbersMatch = firstH4Text?.match(/\d{4}(?=\D*$)/);
    if (userChoice && (userChoice === "A" || userChoice === "B") && userNumber && !isNaN(userNumber)) {
        var id = lastFourNumbersMatch ? lastFourNumbersMatch[0] : "";
        var idstring = "TUPC-22-" + id;
        if (typeof openslip === "function") {
            openslip(idstring, userNumber, userChoice, "Cavite");
        } else {
            alert("openslip function not found!");
        }
    } else {
        alert("Invalid input.");
    }
})();
