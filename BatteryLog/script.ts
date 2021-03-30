type logEntry = {
	brand?: "Enegyzer" | "duraCell" | "Eneloop";
	type?: "NiMH";
	size?: "AAAA" | "AAA" | "AA" | "A" | "B" | "C" | "D";
	group?: "A" | "B" | "C" | "D";
	log?: Array<{
		date?: Date | string;
		v?: number | "?";
		mAh?: number | "?";
		mΩ?: number | "?";
		note?: string;
	}>
};
const log: {
	[key: number]: logEntry
} = {
	1: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			v: 0,
			mAh: "?",
			mΩ: "?"
		}, {
			date: "2021-01-14T20:14:54",
			v: 0.09,
			mAh: 16,
			mΩ: 217
		}, {
			date: "2021-01-15T00:14:54",
			v: 1.39,
			mAh: 1905,
			mΩ: 1070
		}
		]
	},
	2: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			v: "?",
			mAh: 51,
			mΩ: "?"
		}
		]
	},
	3: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			v: "?",
			mAh: 15,
			mΩ: "?"
		}
		]
	},
	4: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			mAh: 1150,
			mΩ: 2000
		}
		]
	},
	5: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			mAh: 1397,
			mΩ: 4000
		}
		]
	},
	6: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			mAh: 1435,
			mΩ: "?"
		}, {
			date: "2021-01-12T18:14:54",
			mAh: 1115,
			mΩ: 2025
		}
		]
	},
	7: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1299,
			mΩ: 1495
		}
		]
	},
	8: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 2063,
			mΩ: 1094
		}
		]
	},
	9: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 341,
			mΩ: 948
		}
		]
	},
	10: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1452,
			mΩ: 1055
		}
		]
	},
	11: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1245,
			mΩ: 606
		}
		]
	},
	12: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: 0.5,
			mAh: 1465,
			mΩ: 389
		}
		]
	},
	13: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 1978,
			mΩ: 239
		}
		]
	},
	14: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T6:14:54",
			v: 0,
			mAh: 16,
			mΩ: 185
		}, {
			date: "2021-01-13T9:14:54",
			v: 1.35,
			mAh: 1944,
			mΩ: 7108
		},
		]
	},
	15: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1732,
			mΩ: 160
		}
		]
	},
	16: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			v: 0,
			date: "2021-01-13T18:14:54",
			mAh: 16,
			mΩ: "?"
		}, {
			v: 0,
			date: "2021-01-13T20:14:54",
			mAh: 16,
			mΩ: 714
		}
		]
	},
	17: {
		brand: "duraCell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T8:14:54",
			v: 1.29,
			mAh: 1633,
			mΩ: 846
		}
		]
	},
	18: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T8:14:54",
			v: 0.58,
			mAh: 969,
			mΩ: 1751
		}
		]
	},
	19: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T8:14:54",
			v: 0.8,
			mAh: 348,
			mΩ: 1245
		}, {
			date: "2021-01-14T16:14:54",
			v: 1.42,
			mAh: 1707,
			mΩ: 1133
		}
		]
	},
	20: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T15:14:54",
			v: 0.8,
			mAh: 13,
			mΩ: 1879
		}, {
			date: "2021-01-14T19:14:54",
			v: "?",
			mAh: 1715,
			mΩ: 1709
		}
		]
	},
	21: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: "?",
			mAh: "?",
			mΩ: "?",
			note: "missing"
		}
		]
	},
	22: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.02,
			mAh: 1739,
			mΩ: 56,
			note: ""
		}
		]
	},
	23: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.15,
			mAh: 1825,
			mΩ: 57,
			note: ""
		}
		]
	},
	24: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.15,
			mAh: 1815,
			mΩ: 50,
			note: ""
		}
		]
	},
	25: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "B",
		log: [{
			date: "2021-15-19T15:09:00",
			v: 1.18,
			mAh: 1922,
			mΩ: 50,
			note: ""
		}
		]
	},
	26: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "B",
		log: [{
			date: "2021-15-19T15:09:00",
			v: 1.18,
			mAh: 1922,
			mΩ: 51,
			note: ""
		}
		]
	},
	27: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "C",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.2,
			mAh: 1843,
			mΩ: 53,
			note: ""
		}
		]
	},
	28: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "C",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.2,
			mAh: 1833,
			mΩ: 53,
			note: ""
		}
		]
	},
	29: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "D",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.35,
			mAh: 1959,
			mΩ: 50,
			note: ""
		}
		]
	},
	30: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "D",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.35,
			mAh: 1926,
			mΩ: 54,
			note: ""
		}
		]
	}
}

function makeTable(width: number, height: number, start: number, count: number) {
	const end = start + count;
	const thead = document.getElementById("thead");

	const tr_date = document.createElement("tr");
	const tr_data = document.createElement("tr");
	while (thead.firstChild) {
		thead.removeChild(thead.firstChild);
	}

	makeHeaderColumn(tr_date, tr_data,
		"#",
		"Brand",
		"Size"
	);
	for (let i = 0; i < width; i++) {
		makeColumn("th", tr_date, tr_data,
			"DATE",
			0,
			0,
			0
		);
	}
	thead.append(tr_date);
	thead.append(tr_data);

	const tbody = document.getElementById("tbody");
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}
	Object.entries(log).forEach(([key, value]) => {
		const i = parseInt(key);
		if(start <= i && i < end)
			makeRow(tbody, key, value, width)
	});

	while ((tbody.childElementCount / 2) < count) {
		makeRow(tbody, (tbody.childElementCount / 2) + start, {
			log: []
		}, width)
	}
}
function makeRow(
	tbody: HTMLElement,
	key: string | number, value: logEntry, width
) {

	const tr_date = document.createElement("tr");
	const tr_data = document.createElement("tr");
	makeHeaderColumn(tr_date, tr_data,
		key + (value.group || ""),
		value.brand || " ",
		value.size || " "
	);

	const entryLog = [...value.log];
	for (let i = entryLog.length; i < width; i++) {
		entryLog.push({});
	}
	entryLog.forEach(l => {
		makeColumn("td", tr_date, tr_data,
			l.date,
			l.v,
			l.mAh,
			l.mΩ
		);
	});

	tbody.append(tr_date);
	tbody.append(tr_data);
}
function makeHeaderColumn(
	tr_date: HTMLTableRowElement,
	tr_data: HTMLTableRowElement,
	numberText: string,
	brandText: string,
	typeText: string
) {
	const th = document.createElement("th");
	th.innerText = numberText;
	th.rowSpan = 2;
	tr_date.appendChild(th);
	const th_brand = document.createElement("th");
	th_brand.innerText = brandText;
	tr_date.appendChild(th_brand);
	const th_type = document.createElement("th");
	th_type.innerText = typeText;
	tr_data.appendChild(th_type);
}
function makeColumn(
	type: "th" | "td",
	tr_date: HTMLTableRowElement,
	tr_data: HTMLTableRowElement,
	dateText: Date | string,
	vText: number | "?",
	mAhText: number | "?",
	mΩText: number | "?"
) {
	const td_date = document.createElement(type);
	td_date.colSpan = 3;
	td_date.innerText = dateText as string || "";
	tr_date.appendChild(td_date);

	const td_v = document.createElement(type);
	td_v.innerHTML = "V<sub>0</sub>" + (type === "td" ? ": " + (vText || "") : "");
	tr_data.appendChild(td_v);

	const td_mAh = document.createElement(type);
	td_mAh.innerText = "mAh" + (type === "td" ? ": " + (mAhText || "") : "");
	tr_data.appendChild(td_mAh);

	const td_mΩ = document.createElement(type);
	td_mΩ.innerText = "mΩ" + (type === "td" ? ": " + (mΩText || "") : "");
	tr_data.appendChild(td_mΩ);
}
let tableWidth: number;
let tableHeight: number; /* printing tables across multiple pages is still wonky 😒*/
let tableStart: number;
let tableCount: number;
function fn() {
	const selectWidth = document.getElementById("selectWidth") as HTMLInputElement;
	tableWidth = parseInt(selectWidth.value);
	selectWidth.addEventListener("change", (e) => {
		tableWidth = parseInt(((e as any as InputEvent).target as HTMLInputElement).value);
		makeTable(tableWidth, tableHeight, tableStart, tableCount);
	});
	/*const selectHeight = document.getElementById("selectHeight") as HTMLInputElement;
	tableHeight = parseInt(selectHeight.value);
	selectHeight.addEventListener("change", (e) => {
		tableHeight = parseInt(((e as any as InputEvent).target as HTMLInputElement).value);
		makeTable(tableWidth, tableHeight, tableStart, tableCount);
	});*/
	const selectStart = document.getElementById("selectStart") as HTMLInputElement;
	tableStart = parseInt(selectStart.value);
	selectStart.addEventListener("change", (e) => {
		tableStart = parseInt(((e as any as InputEvent).target as HTMLInputElement).value);
		makeTable(tableWidth, tableHeight, tableStart, tableCount);
	});
	const selectCount = document.getElementById("selectCount") as HTMLInputElement;
	tableCount = parseInt(selectCount.value);
	selectCount.addEventListener("change", (e) => {
		tableCount = parseInt(((e as any as InputEvent).target as HTMLInputElement).value);
		makeTable(tableWidth, tableHeight, tableStart, tableCount);
	});
	makeTable(tableWidth, tableHeight, tableStart, tableCount);
}
window.addEventListener("load", fn);