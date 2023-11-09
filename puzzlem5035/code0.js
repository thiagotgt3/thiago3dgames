gdjs.orange1Code = {};
gdjs.orange1Code.GDNewSpriteObjects1= [];
gdjs.orange1Code.GDNewSpriteObjects2= [];
gdjs.orange1Code.GDNewSprite2Objects1= [];
gdjs.orange1Code.GDNewSprite2Objects2= [];
gdjs.orange1Code.GDNewSprite3Objects1= [];
gdjs.orange1Code.GDNewSprite3Objects2= [];
gdjs.orange1Code.GDNewSprite4Objects1= [];
gdjs.orange1Code.GDNewSprite4Objects2= [];
gdjs.orange1Code.GDNewSprite5Objects1= [];
gdjs.orange1Code.GDNewSprite5Objects2= [];
gdjs.orange1Code.GDNewSprite6Objects1= [];
gdjs.orange1Code.GDNewSprite6Objects2= [];
gdjs.orange1Code.GDNewSprite7Objects1= [];
gdjs.orange1Code.GDNewSprite7Objects2= [];
gdjs.orange1Code.GDNewSprite8Objects1= [];
gdjs.orange1Code.GDNewSprite8Objects2= [];
gdjs.orange1Code.GDPlayObjects1= [];
gdjs.orange1Code.GDPlayObjects2= [];
gdjs.orange1Code.GDNewSprite9Objects1= [];
gdjs.orange1Code.GDNewSprite9Objects2= [];


gdjs.orange1Code.mapOfGDgdjs_9546orange1Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.orange1Code.GDNewSpriteObjects1});
gdjs.orange1Code.mapOfGDgdjs_9546orange1Code_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.orange1Code.GDPlayObjects1});
gdjs.orange1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.facebookInstantGames.showInterstitialAd(gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.showRewardedVideo(gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.orange1Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.orange1Code.mapOfGDgdjs_9546orange1Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8376124);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://thiago3dgames.site", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.facebookInstantGames.loadInterstitialAd("592088802911620_597972248989942", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadRewardedVideo("592088802911620_644284554358711", gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.orange1Code.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.orange1Code.mapOfGDgdjs_9546orange1Code_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.orange1Code.GDPlayObjects1 */
{for(var i = 0, len = gdjs.orange1Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs.orange1Code.GDPlayObjects1[i].hide();
}
}}

}


};

gdjs.orange1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.orange1Code.GDNewSpriteObjects1.length = 0;
gdjs.orange1Code.GDNewSpriteObjects2.length = 0;
gdjs.orange1Code.GDNewSprite2Objects1.length = 0;
gdjs.orange1Code.GDNewSprite2Objects2.length = 0;
gdjs.orange1Code.GDNewSprite3Objects1.length = 0;
gdjs.orange1Code.GDNewSprite3Objects2.length = 0;
gdjs.orange1Code.GDNewSprite4Objects1.length = 0;
gdjs.orange1Code.GDNewSprite4Objects2.length = 0;
gdjs.orange1Code.GDNewSprite5Objects1.length = 0;
gdjs.orange1Code.GDNewSprite5Objects2.length = 0;
gdjs.orange1Code.GDNewSprite6Objects1.length = 0;
gdjs.orange1Code.GDNewSprite6Objects2.length = 0;
gdjs.orange1Code.GDNewSprite7Objects1.length = 0;
gdjs.orange1Code.GDNewSprite7Objects2.length = 0;
gdjs.orange1Code.GDNewSprite8Objects1.length = 0;
gdjs.orange1Code.GDNewSprite8Objects2.length = 0;
gdjs.orange1Code.GDPlayObjects1.length = 0;
gdjs.orange1Code.GDPlayObjects2.length = 0;
gdjs.orange1Code.GDNewSprite9Objects1.length = 0;
gdjs.orange1Code.GDNewSprite9Objects2.length = 0;

gdjs.orange1Code.eventsList0(runtimeScene);

return;

}

gdjs['orange1Code'] = gdjs.orange1Code;
