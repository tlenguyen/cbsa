/* eslint-env jquery */

$(".mSelectAll").click(function(){
	var a = $("input[type='checkbox'].mChild");
	if($(this).is(":checked")){
		a.prop("checked", true);
	}
	else{
		a.prop("checked", false);
	}
});

$("input[type='checkbox'].mChild").change(function(){
	var a = $("input[type='checkbox'].mChild");
	if(a.length == a.filter(":checked").length){
		$(".mSelectAll").prop("checked", true);
	}
	else{
		$(".mSelectAll").prop("checked", false);
	}
});

$(".rSelectAll").click(function(){
	var a = $("input[type='checkbox'].rChild");
	if($(this).is(":checked")){
		a.prop("checked", true);
	}
	else{
		a.prop("checked", false);
	}
});

$("input[type='checkbox'].rChild").change(function(){
	var a = $("input[type='checkbox'].rChild");
	if(a.length == a.filter(":checked").length){
		$(".rSelectAll").prop("checked", true);
	}
	else{
		$(".rSelectAll").prop("checked", false);
	}
});

$(".pSelectAll").click(function(){
	var a = $("input[type='checkbox'].pChild");
	if($(this).is(":checked")){
		a.prop("checked", true);
	}
	else{
		a.prop("checked", false);
	}
});

$("input[type='checkbox'].pChild").change(function(){
	var a = $("input[type='checkbox'].pChild");
	if(a.length == a.filter(":checked").length){
		$(".pSelectAll").prop("checked", true);
	}
	else{
		$(".pSelectAll").prop("checked", false);
	}
});

$(".sSelectAll").click(function(){
	var a = $("input[type='checkbox'].sChild");
	if($(this).is(":checked")){
		a.prop("checked", true);
	}
	else{
		a.prop("checked", false);
	}
});

$("input[type='checkbox'].sChild").change(function(){
	var a = $("input[type='checkbox'].sChild");
	if(a.length == a.filter(":checked").length){
		$(".sSelectAll").prop("checked", true);
	}
	else{
		$(".sSelectAll").prop("checked", false);
	}
});

$(document).ready(function(){
	var a = $("input[name='master']");
	var b = $("input[name='cbsaChild']");

	a.on("change", function(){
		var string = b.filter(":checked").map(function(){
			return this.value;
		}).get().join("|");
		$("#output").val(string);
	});
    
	b.on("change", function(){
		var string = b.filter(":checked").map(function(){
			return this.value;
		}).get().join("|");
		$("#output").val(string);
	});
});

var b1 = $("#btn1");
var b2 = $("#btn2");

var copyValues = function(){
	$("textarea").select();
	document.execCommand("copy");
};

var resetAll = function(){
	document.getElementById("output").value = "";
	var a = $("input[type='checkbox']");
	a.prop("checked", false);
};

b1.on("click", copyValues);
b2.on("click", resetAll);
