var endFlipFoxkeh = function(){
	//機能の定義
　　 var foxkeh = document.querySelector("#slidein-foxkeh img");
	//#slidein-foxkeh img画像を表示する
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
    //
	foxkeh.setAttribute("class", "");
};


var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "flip");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
