var endSlideinFoxkeh = function(){
//endSlideinFoxkehが機能する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehはslidein-foxkeh imgとイコールである。
	foxkeh.setAttribute("class", "");
};//foxkehはclassという属性を追加する。

var startSlideinFoxkeh = function(){
//startSlideinFoxkehがが機能する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehは#slidein-foxkeh imgとイコールである。
	foxkeh.setAttribute("class", "slidein");
//setAttributeは新しいslideinという属性を追加する。指定の要素に存在する
//属性の値に変更する。
	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
};//foxkehはanimationedをanimationed(イベント)するとEventListenerが反応し
//endSlideinFoxkehという動作が機能する。このことにより1行目が機能し始める。

var slideinFoxkehButton = document.querySelector("slideinFoxkehButton");
//slideinFoxkehButtonはslideinFoxkehButtonとイコールである。
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//slideinFoxkehButtonをclick(イベント)するとEventListenerが反応し
//startSlideinFoxkehという動作が機能する。このことにより7行目が機能し始める。