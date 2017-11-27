/**
 * Created by aditeyapandey on 11/22/17.
 */

//Send the tree structure
function generateBloodFlow(treeStructure,startFlow)
{

    treeStructure.bloodFlow=startFlow;

    if(treeStructure.children != undefined){
        for(var i=0;i<treeStructure.children.length;i++){
            treeStructure.children[i]=generateBloodFlow(treeStructure.children[i],startFlow/2+((startFlow/5)*Math.random()))
        }
    }
    else{
        return treeStructure
    }


    return treeStructure

}
var blockageOccured=false
function generateBloodFlowWithBlockage(treeStructure,startFlow,randomVal)
{

    treeStructure.bloodFlow=startFlow;
    var blockageFound= false;
    var presentAsChild=false;
    if(treeStructure.childs != undefined){
        if(treeStructure.childs.indexOf(randomVal) !=-1){
            console.log("presentAsChild")
            console.log(randomVal)
            console.log(treeStructure)
            presentAsChild=true
        }
    }
    if((treeStructure.name == randomVal || presentAsChild) && !blockageOccured )
    {
        console.log("reaching here")
        blockageFound=true
        blockageOccured=true
    }
    console.log(blockageFound)
    if(treeStructure.children != undefined){
        for(var i=0;i<treeStructure.children.length;i++){
            if(blockageFound){
                console.log("I happended")
                treeStructure.children[i]=generateBloodFlowWithBlockage(treeStructure.children[i],startFlow/4-((startFlow/5)*Math.random()),randomVal)

            }else{
                treeStructure.children[i]=generateBloodFlowWithBlockage(treeStructure.children[i],startFlow/2-((startFlow/5)*Math.random()),randomVal)
            }
        }
    }
    else{
        return treeStructure
    }

    console.log(treeStructure)

    return treeStructure

}
