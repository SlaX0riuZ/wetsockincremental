var points = 0
function incrementPoints() {
    // comment
    points += 1;
    document.getElementById("wetsocknum").innerText = "You have " + points + " wet socks."; 
    // finding element in page, .innerText sets the text inside the element ^
}
function hideDiv(name) {
    document.getElementById(name).style.display = "none"; // hide the display with name "name"
}
function showDiv(name) {
    document.getElementById(name).style.display = "block"; // show the display with name "name"
}
function resetPoints() {
    points = 0;
    document.getElementById("wetsocknum").innerText = "You have " + points + " wet socks.";
}