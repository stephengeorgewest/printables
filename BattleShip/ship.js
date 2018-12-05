function generateBoard(id) {
	var content = document.getElementById(id);
	var board = document.createElement("div");
	board.classList.add("board");
	content.appendChild(board);
	var gameNo = document.createElement("div");
	gameNo.classList.add("gameNo");
	var gameNoText = document.createElement("span");
	gameNoText.innerText = "Game Number:";
	gameNo.appendChild(gameNoText);
	board.appendChild(gameNo);
	
	var table = document.createElement("table");
	board.appendChild(table);
	
	var thead = document.createElement("thead");
	table.appendChild(thead);
	
	var tr_head = document.createElement("tr");
	thead.appendChild(tr_head);
	
	var td_head = document.createElement("td");
	tr_head.appendChild(td_head);
	
	var width = 10;
	for(var i = 1; i <= width; i++ ){
		var th_head = document.createElement("th");
		th_head.innerHTML = i;
		tr_head.appendChild(th_head);
	}
	
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	
	for(var i = 'A'.charCodeAt(0); i <= 'A'.charCodeAt(0)+ width; i++){
		var tr_body = document.createElement("tr");
		tbody.appendChild(tr_body);
		
		var th_body = document.createElement("th");
		th_body.innerHTML = String.fromCharCode(i);
		tr_body.appendChild(th_body);
		
		for(var j = 1; j <= width; j++){
			var td_body = document.createElement("td");
			tr_body.appendChild(td_body);
		}
	}
}

function generateLedger(offset){
	var ledger_body = document.getElementById("ledgerBody"+offset);
	//http://datagenetics.com/blog/december32011/index.html
	//60 turns may not be enough
	for(var i = 1+15*(offset%4); i< 15+15*(offset%4); i++){
		var tr = document.createElement("tr");
		ledger_body.appendChild(tr);
		
		var th = document.createElement("th");
		th.innerHTML = i;
		tr.appendChild(th);
		
		tr.appendChild(document.createElement("td"));
		tr.appendChild(document.createElement("td"));
		tr.appendChild(document.createElement("td"));
		tr.appendChild(document.createElement("td"));
	}
}