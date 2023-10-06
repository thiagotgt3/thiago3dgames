gdjs.GameOverCode = {};
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects3= [];
gdjs.GameOverCode.GDPlayerNameInputObjects1= [];
gdjs.GameOverCode.GDPlayerNameInputObjects2= [];
gdjs.GameOverCode.GDPlayerNameInputObjects3= [];
gdjs.GameOverCode.GDRestartButtonObjects1= [];
gdjs.GameOverCode.GDRestartButtonObjects2= [];
gdjs.GameOverCode.GDRestartButtonObjects3= [];
gdjs.GameOverCode.GDMainMenuButtonObjects1= [];
gdjs.GameOverCode.GDMainMenuButtonObjects2= [];
gdjs.GameOverCode.GDMainMenuButtonObjects3= [];
gdjs.GameOverCode.GDScoresButtonObjects1= [];
gdjs.GameOverCode.GDScoresButtonObjects2= [];
gdjs.GameOverCode.GDScoresButtonObjects3= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDGameOverObjects3= [];
gdjs.GameOverCode.GDSubmitButtonObjects1= [];
gdjs.GameOverCode.GDSubmitButtonObjects2= [];
gdjs.GameOverCode.GDSubmitButtonObjects3= [];
gdjs.GameOverCode.GDMonsterObjects1= [];
gdjs.GameOverCode.GDMonsterObjects2= [];
gdjs.GameOverCode.GDMonsterObjects3= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects2[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")));
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (( gdjs.GameOverCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().get("PlayerName").setString((( gdjs.GameOverCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects2[0].getString()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2e66ecc2-822b-4860-ae21-80d274657f1d", true);
}}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{gdjs.evtTools.window.openURL("index.html", runtimeScene);
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRestartButtonObjects1[k] = gdjs.GameOverCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.GameOverCode.GDMainMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDMainMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDMainMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDMainMenuButtonObjects1[k] = gdjs.GameOverCode.GDMainMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDMainMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDSubmitButtonObjects1[k] = gdjs.GameOverCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("2e66ecc2-822b-4860-ae21-80d274657f1d");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects3.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverCode.GDMainMenuButtonObjects1.length = 0;
gdjs.GameOverCode.GDMainMenuButtonObjects2.length = 0;
gdjs.GameOverCode.GDMainMenuButtonObjects3.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects1.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects2.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects3.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects3.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects1.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects2.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects3.length = 0;
gdjs.GameOverCode.GDMonsterObjects1.length = 0;
gdjs.GameOverCode.GDMonsterObjects2.length = 0;
gdjs.GameOverCode.GDMonsterObjects3.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
