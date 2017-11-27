
//Global Variables
var Segments={}
var globalDataStructures
var data1

// Script to convert 3D projection to 2D projection ... orthographic projections.
function initializeView(){
promise=readdata()
promise.then(function(data) {

    //Define projection and view, view options are Normal,Symmetry and projection options are : back,top
    var viewspecs=new viewSpec("back","Normal")
    view=viewspecs.getView();
    projection=viewspecs.getProjection();

    data1=data

   //  //Define the global data access structures at one place and access them whererever they are required
    globalDataStructures=new defineGlobalAccessDataStructures(data,projection)


   // //  //drawArteries(getDataForScatterPlot(result),getDataforArteries(result))
     drawBrainMap(globalDataStructures)
   //
   //  //  //Drawing dendrograms
    drawDendrogram(globalDataStructures,view)
   //
   // // //Rectangular Dendogram
  //drawphlyogram(globalDataStructures,view)

});
}

//This function should be called for switching between arc and rectangular dendorgrams, for arc dendogram treetype=arcsD and for rectangular dendrogram treetype=arcsR , it will always load normal view of dendograms

function changeTree(treeType){

    var brainView="top"
    var dendrogramView="Normal"
    var viewspecs=new viewSpec(brainView,dendrogramView)
    var view=viewspecs.getView();
    var projection=viewspecs.getProjection();

    if(treeType=="arcsD"){
        drawDendrogram(globalDataStructures,view)
    }
    else{
        drawphlyogram(globalDataStructures,view)
    }

    // //  //drawArteries(getDataForScatterPlot(result),getDataforArteries(result))

}


//This function should be called for changing the brain projection, just pass the projection as brainview variable and it will work, den
function changeProjection(brainView){

    var dendrogramView="Normal"

    var data=globalDataStructures.fetchData()

    var viewspecs=new viewSpec(brainView,dendrogramView)
    var view=viewspecs.getView();
    var projection=viewspecs.getProjection();

    globalDataStructures.changeProjection(data,projection)


    // //  //drawArteries(getDataForScatterPlot(result),getDataforArteries(result))
    drawBrainMap(globalDataStructures)

}

//This function should be called for switching between normal and symmetry view for both arc and rectangular dendorgrams, dendogramView=Symmetry and for arc dendogram treetype=arcsD and for rectangular dendrogram treetype=arcsR
function changeView(brainView,dendrogramView,treeType){

    var data=globalDataStructures.fetchData()

    var viewspecs=new viewSpec(brainView,dendrogramView)
    var view=viewspecs.getView();
    var projection=viewspecs.getProjection();


    // //  //drawArteries(getDataForScatterPlot(result),getDataforArteries(result))
    if(treeType=="arcsD"){
        drawDendrogram(globalDataStructures,view)
    }
    else{
        drawphlyogram(globalDataStructures,view)
    }

}



initializeView()
