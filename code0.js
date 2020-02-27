gdjs.NewSceneCode = {};
gdjs.NewSceneCode.stopDoWhile3 = false;

gdjs.NewSceneCode.GDlogoObjects1= [];
gdjs.NewSceneCode.GDlogoObjects2= [];
gdjs.NewSceneCode.GDlogoObjects3= [];
gdjs.NewSceneCode.GDpersonObjects1= [];
gdjs.NewSceneCode.GDpersonObjects2= [];
gdjs.NewSceneCode.GDpersonObjects3= [];
gdjs.NewSceneCode.GDmessageObjects1= [];
gdjs.NewSceneCode.GDmessageObjects2= [];
gdjs.NewSceneCode.GDmessageObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};


gdjs.NewSceneCode.eventsList0x6d7a24 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6d7a24
gdjs.NewSceneCode.eventsList0x67d79c = function(runtimeScene) {

{



}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(61));
}}

}


{



}


{


gdjs.NewSceneCode.stopDoWhile3 = false;
do {gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(61));
}
{ //Subevents: 
gdjs.NewSceneCode.eventsList0x6d7a24(runtimeScene);} //Subevents end.
}
} else gdjs.NewSceneCode.stopDoWhile3 = true; 
} while ( !gdjs.NewSceneCode.stopDoWhile3 );

}


{



}


{


{
{gdjs.evtTools.network.sendHttpRequest("", "data.json", "data", "get", "", runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.network.sendHttpRequest("https://swapi.co/", "api/planets/" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))) + "/", "planet", "GET", "", runtimeScene.getVariables().getFromIndex(1));
}}

}


{



}


{


{
gdjs.NewSceneCode.GDpersonObjects1.createFrom(runtimeScene.getObjects("person"));
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getVariables().getFromIndex(2));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)), runtimeScene.getVariables().getFromIndex(5));
}{for(var i = 0, len = gdjs.NewSceneCode.GDpersonObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDpersonObjects1[i].setString("NAME: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("title")) + gdjs.evtTools.string.newLine() + "GENDER: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("gender")) + gdjs.evtTools.string.newLine() + "HOMEWORLD: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5).getChild("name")));
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x67d79c
gdjs.NewSceneCode.eventsList0x6a705c = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6a705c
gdjs.NewSceneCode.eventsList0x6ce244 = function(runtimeScene) {

{



}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(61));
}}

}


{



}


{


gdjs.NewSceneCode.stopDoWhile3 = false;
do {gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(61));
}
{ //Subevents: 
gdjs.NewSceneCode.eventsList0x6a705c(runtimeScene);} //Subevents end.
}
} else gdjs.NewSceneCode.stopDoWhile3 = true; 
} while ( !gdjs.NewSceneCode.stopDoWhile3 );

}


{



}


{


{
{gdjs.evtTools.network.sendHttpRequest("", "data.json", "data", "get", "", runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.network.sendHttpRequest("https://swapi.co/", "api/planets/" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))) + "/", "planet", "GET", "", runtimeScene.getVariables().getFromIndex(1));
}}

}


{



}


{


{
gdjs.NewSceneCode.GDpersonObjects1.createFrom(runtimeScene.getObjects("person"));
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getVariables().getFromIndex(2));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)), runtimeScene.getVariables().getFromIndex(5));
}{for(var i = 0, len = gdjs.NewSceneCode.GDpersonObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDpersonObjects1[i].setString("NAME: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("title")) + gdjs.evtTools.string.newLine() + "GENDER: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild("gender")) + gdjs.evtTools.string.newLine() + "HOMEWORLD: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5).getChild("name")));
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6ce244
gdjs.NewSceneCode.eventsList0xb4be0 = function(runtimeScene) {

{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0;");
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x67d79c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.condition0IsTrue_1.val = false;
gdjs.NewSceneCode.condition1IsTrue_1.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.NewSceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.NewSceneCode.condition1IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7034988);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6ce244(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4be0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDlogoObjects1.length = 0;
gdjs.NewSceneCode.GDlogoObjects2.length = 0;
gdjs.NewSceneCode.GDlogoObjects3.length = 0;
gdjs.NewSceneCode.GDpersonObjects1.length = 0;
gdjs.NewSceneCode.GDpersonObjects2.length = 0;
gdjs.NewSceneCode.GDpersonObjects3.length = 0;
gdjs.NewSceneCode.GDmessageObjects1.length = 0;
gdjs.NewSceneCode.GDmessageObjects2.length = 0;
gdjs.NewSceneCode.GDmessageObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
