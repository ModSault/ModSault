var advancedMode = false;
var toolTipTimer = null;
var tooltipDiv = null;
var GameVersion = 0; // 0 = USA, 1 = Japan, 2 = PAL

// ---------------------------- General Changeing Game Versions --------------------------

function changeGameVersion(object) {
    GameVersion = object.value;
}

// ---------------------------- Advanced Mode --------------------------

function toggleAdvanced() {
    button = document.getElementById("AdvancedModeButton");
    if (advancedMode == true) {
        button.style.backgroundColor = "var(--red-button)";
    } else {
        button.style.backgroundColor = "var(--green-button)";
    }
    advancedMode = !advancedMode
    document.getElementById("AdvancedModeCheckMark").checked = advancedMode;
    // ShowDetailsOfCurrentlySelectedSpawn(document.getElementById(currentSelected));
}

// ---------------------------- That one tooltip logic  --------------------------

function hoverToolTipStart(object) {
    if (tooltipDiv != null) { tooltipDiv.remove(); }
    tooltipDiv = document.createElement('div');
    tooltipDiv.classList.add('tooltip');
    tooltipDiv.style.left = (object.getBoundingClientRect().left - 25) + 'px';
    tooltipDiv.style.top = object.offsetHeight + object.offsetTop + 'px';
    document.body.appendChild(tooltipDiv);

    //need fade class after element is added to page. Best method I could get (.then didn't work)
    toolTipTimer = setTimeout(function () {
        tooltipDiv.classList.add('fade');
    }, 300);
}
function hoverToolTipEnd() {
    clearTimeout(toolTipTimer);
    if (tooltipDiv != null) {
        tooltipDiv.classList.remove('fade');
        tooltipDiv.remove();
    }
}