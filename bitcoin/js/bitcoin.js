/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("getInfo").innerHTML = jsonPretty;
        document.getElementById("getBlockchainInfo").innerHTML = jsonPretty;
        document.getElementById("getBitcoinpeerInfo").innerHTML = jsonPretty;
        document.getElementById("getBitcoinminingInfo").innerHTML = jsonPretty;

    }
};
xmlhttp.open("GET", "https://bitcoin.mubiz.com/info", true);
xmlhttp.open("GET", "https://bitcoin.mubiz.com/blockchaininfo", true);https://bitcoin.mubiz.com/blockchaininfo
xmlhttp.open("GET", "https://bitcoin.mubiz.com/peerinfo", true);//https://bitcoin.mubiz.com/peerinfo
xmlhttp.open("GET", "https://bitcoin.mubiz.com/mininginfo", true);//https://bitcoin.mubiz.com/mininginfo
xmlhttp.send();

*/





$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoinVersion').append(data.version);
		},

		error : function(xhr, status, err) {
			$('#bitcoinVersion').append(err+" N/A");
		}
	});
	/*
	$.ajax({
		url : "https://bitcoin.mubiz.com/blockchaininfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoinVersion').append(data.version);
		},

		error : function(xhr, status, err) {
			$('#bitcoinVersion').append(err+" N/A");
		}
	});
	$.ajax({
		url : "https://bitcoin.mubiz.com/peerinfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoinVersion').append(data.version);
		},

		error : function(xhr, status, err) {
			$('#bitcoinVersion').append(err+" N/A");
		}
	});
	$.ajax({
		url : "https://bitcoin.mubiz.com/mininginfo",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoinVersion').append(data.version);
		},

		error : function(xhr, status, err) {
			$('#bitcoinVersion').append(err+" N/A");
		}
	});
	*/
});










