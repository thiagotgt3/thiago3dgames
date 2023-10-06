gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDStartButtonObjects1= [];
gdjs.MainMenuCode.GDStartButtonObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MainMenuCode.GDStartButtonObjects1});
gdjs.MainMenuCode.asyncCallback10541748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback10541748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10541484);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;

gdjs.MainMenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
