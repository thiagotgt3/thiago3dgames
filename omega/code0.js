gdjs.menuCode = {};
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDNewTiledSprite2Objects1= [];
gdjs.menuCode.GDNewTiledSprite2Objects2= [];
gdjs.menuCode.GDLargeExitButtonObjects1= [];
gdjs.menuCode.GDLargeExitButtonObjects2= [];
gdjs.menuCode.GDzeta1Objects1= [];
gdjs.menuCode.GDzeta1Objects2= [];
gdjs.menuCode.GDzeta2Objects1= [];
gdjs.menuCode.GDzeta2Objects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargeExitButton"), gdjs.menuCode.GDLargeExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDLargeExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDLargeExitButtonObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDLargeExitButtonObjects1[k] = gdjs.menuCode.GDLargeExitButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDLargeExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zeta1"), gdjs.menuCode.GDzeta1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDzeta1Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDzeta1Objects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDzeta1Objects1[k] = gdjs.menuCode.GDzeta1Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDzeta1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zeta2"), gdjs.menuCode.GDzeta2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDzeta2Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDzeta2Objects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDzeta2Objects1[k] = gdjs.menuCode.GDzeta2Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDzeta2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.menuCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects1.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects2.length = 0;
gdjs.menuCode.GDzeta1Objects1.length = 0;
gdjs.menuCode.GDzeta1Objects2.length = 0;
gdjs.menuCode.GDzeta2Objects1.length = 0;
gdjs.menuCode.GDzeta2Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
