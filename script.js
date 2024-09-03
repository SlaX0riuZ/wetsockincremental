var wetsocks = 0
var socks = 0
function incrementPoints() {
    if (socks > 0) {
        wetsocks = wetsocks + 1;
        socks = socks - 1;
    }
    document.getElementById("drysocknum").innerText = "You have " + socks + " socks.";
    document.getElementById("wetsocknum").innerText = "You have " + wetsocks + " wet socks."; 
    // finding element in page, .innerText sets the text inside the element ^
}
function incrementSocks() {
        socks += 1;
        document.getElementById("drysocknum").innerText = "You have " + socks + " socks.";
}
function hideDiv(name) {
    document.getElementById(name).style.display = "none"; // hide the display with name "name"
}
function showDiv(name) {
    document.getElementById(name).style.display = "inline-block"; // show the display with name "name"
}
function resetPoints() {
    points = 0;
    document.getElementById("wetsocknum").innerText = "You have " + wetsocks + " wet socks.";
}