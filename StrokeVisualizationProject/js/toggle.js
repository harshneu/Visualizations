var checkbox = document.getElementById("chbx");
// if projection  == arcsD show this 
// else show checkbox_changed1

function symmetryToggleR()  {
    var toggleR = document.getElementById("switchtab1")
    var toggleD = document.getElementById("switchtab")

    if (changeView(projection,view,"arcsD")) {
        toggleR.style.display === "none";
    } else if (changeView(projection,view,"arcsR")) {
        toggleD.style.display === "none";
    }
    else {(toggleR.style.display === "none" && toggleD.style.display === "block")

}}
function checkbox_changed() {
    var data=globalDataStructures.fetchData()
    if (checkbox.checked == true)   {
        changeView(projection,'Symmetry',"arcsD")
    } else {
        changeView(projection,'Normal',"arcsD")
    }
}

var checkbox1 = document.getElementById("chbx1");

function checkbox_changed1() {
    var data=globalDataStructures.fetchData()
    if (checkbox1.checked == true)  {
        changeView(projection,'Symmetry',"arcsR")
    } else {
        changeView(projection,'Normal',"arcsR")
    }
}