let numButtonClicks = 0;

function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Amount of times I've loved and cared about myself: " + numButtonClicks;
        if (numButtonClicks > 25) {
            document.getElementById("mainDiv").textContent =
            "Always love yourself, believe in yourself and you'll achive greatness.";
        }
}


