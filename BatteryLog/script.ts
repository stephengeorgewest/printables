type logEntry = {
	brand?: "Enegyzer" | "Duracell" | "Eneloop" | "Tenergy" | "EBL";
	useNote?: string;
	type?: "NiMH";
	size?: "AAAA" | "AAA" | "AA" | "A" | "B" | "C" | "D";
	group?: "A" | "B" | "C" | "D" |"E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
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
		}]
	},
	2: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			v: "?",
			mAh: 51,
			mΩ: "?"
		}]
	},
	3: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		group: "F",
		useNote: "mouse",
		log: [{
			date: "2021-01-12T18:14:54",
			v: "?",
			mAh: 15,
			mΩ: "?"
		}, {
			date: "2021-03-30",
			v: 1.12,
			mAh: 10,
			mΩ: "?"
		}]
	},
	4: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			mAh: 1150,
			mΩ: 2000
		}]
	},
	5: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-12T18:14:54",
			mAh: 1397,
			mΩ: 4000
		}]
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
		}]
	},
	7: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1299,
			mΩ: 1495
		}]
	},
	8: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 2063,
			mΩ: 1094
		}, {
			date: "2021-10-06",
			v: 1.27,
		}]
	},
	9: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 341,
			mΩ: 948
		}, {
			date: "2021-10-06",
			v: 1.29,
		}]
	},
	10: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1452,
			mΩ: 1055
		}]
	},
	11: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		useNote: "mouse",
		group: "F",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1245,
			mΩ: 606
		}, {
			date: "2021-03-30",
			v: 1.18,
			mAh: 1926
		}]
	},
	12: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: 0.5,
			mAh: 1465,
			mΩ: 389
		}]
	},
	13: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			mAh: 1978,
			mΩ: 239
		}]
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
		}, {
			date: "2021-04-03",
			v: 1.17,
			mAh: 1778,
			mΩ: 435
		}]
	},
	15: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-13T18:14:54",
			v: "?",
			mAh: 1732,
			mΩ: 160
		}]
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
		}]
	},
	17: {
		brand: "Duracell",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T8:14:54",
			v: 1.29,
			mAh: 1633,
			mΩ: 846
		}]
	},
	18: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		log: [{
			date: "2021-01-14T8:14:54",
			v: 0.58,
			mAh: 969,
			mΩ: 1751
		}, {
			date: "2021-11-05",
			v: 0.50,
			mAh: 788,
			mΩ: 1080
		}]
	},
	19: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		useNote: "mouse",
		group: "E",
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
		}, {
			date: "2021-06-02",
			mAh: 905
		}]
	},
	20: {
		brand: "Enegyzer",
		type: "NiMH", size: "AA",
		group: "E",
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
		}, {
			date: "2021-06-02",
			mAh: 1319
		}]
	},
	21: {
		brand: "Eneloop",
		useNote: "lost",
		type: "NiMH", size: "AA",

		log: [{
			date: "2021-01-19T15:09:54",
			v: "?",
			mAh: "?",
			mΩ: "?"
		}]
	},
	22: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		useNote: "baby music toy",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.02,
			mAh: 1739,
			mΩ: 56
		}]
	},
	23: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.15,
			mAh: 1825,
			mΩ: 57
		}]
	},
	24: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "A",
		log: [{
			date: "2021-01-19T15:09:54",
			v: 1.15,
			mAh: 1815,
			mΩ: 50
		}]
	},
	25: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		useNote: "wii remote",
		group: "B",
		log: [{
			date: "2021-15-19T15:09:00",
			v: 1.18,
			mAh: 1922,
			mΩ: 50
		}]
	},
	26: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "B",
		log: [{
			date: "2021-15-19T15:09:00",
			v: 1.18,
			mAh: 1922,
			mΩ: 51
		}]
	},
	27: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		useNote: "wii remote",
		group: "C",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.2,
			mAh: 1843,
			mΩ: 53
		}, {
			date: "2021-7-6",
			mAh: 2170,
		}]
	},
	28: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "C",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.2,
			mAh: 1833,
			mΩ: 53
		}, {
			date: "2021-7-6",
			mAh: 2104,
		}]
	},
	29: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		useNote: "wii remote",
		group: "D",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.35,
			mAh: 1959,
			mΩ: 50
		}, {
			date: "2021-06-24",
			v: 0.89,
			mAh: 2357,
		}]
	},
	30: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "D",
		log: [{
			date: "2021-16-19T15:06:54",
			v: 1.35,
			mAh: 1926,
			mΩ: 54
		}, {
			date: "2021-06-24",
			v: 0.63,
			mAh: 2337,
		}]
	},
	31: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		useNote: "TV tuner Computer Keyboard",
		group: "G",
		log: [
		]
	},
	32: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		group: "G",
		log: [
		]
	},
	33: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		log: [
		]
	},
	34: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		log: [
		]
	},
	35: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		log: [
		]
	},
	36: {
		brand: "Eneloop",
		type: "NiMH", size: "AA",
		log: [
		]
	},
	37: {
		brand: "Tenergy",
		useNote:"Toy Tape Deck",
		type: "NiMH", size: "C",
		group: "H",
		log: [
		]
	},
	38: {
		brand: "Tenergy",
		type: "NiMH", size: "C",
		group: "H",
		log: [
		]
	},
	39: {
		brand: "Tenergy",
		type: "NiMH", size: "C",
		group: "H",
		log: [
		]
	},
	40: {
		brand: "Tenergy",
		type: "NiMH", size: "C",
		group: "H",
		log: [
		]
	},
	41: {
		brand: "EBL",
		useNote: "Lazer tag 1",
		type: "NiMH", size: "AAA",
		group: "I",
		log: [
		]
	},
	42: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "I",
		log: [
		]
	},
	43: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "I",
		log: [
		]
	},
	44: {
		brand: "EBL",
		useNote: "smart globe",
		type: "NiMH", size: "AAA",
		group: "J",
		log: [{
			date: "",
			v: 1.22,
			mAh: 1078,
			mΩ: "?"
		}]
	},
	45: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "J",
		log: [{
			date: "2021-15-19T15:09:00",
			v: 1.14,
			mAh: 1213,
			mΩ: "?"
		}]
	},
	46: {
		brand: "EBL",
		useNote: "Lazer tag 1",
		type: "NiMH", size: "AAA",
		group: "K",
		log: [
		]
	},
	47: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "K",
		log: [
		]
	},
	48: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "K",
		log: [
		]
	},
	49: {
		brand: "EBL",
		useNote: "Lazer tag 3?",
		type: "NiMH", size: "AAA",
		group: "L",
		log: [
		]
	},
	50: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "L",
		log: [
		]
	},
	51: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "L",
		log: [
		]
	},
	52: {
		brand: "EBL",
		useNote: "Lazer tag 4?",
		type: "NiMH", size: "AAA",
		group: "M",
		log: [
		]
	},
	53: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "M",
		log: [
		]
	},
	54: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "M",
		log: [
		]
	},
	55: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "N",
		log: [
		]
	},
	56: {
		brand: "EBL",
		type: "NiMH", size: "AAA",
		group: "N",
		log: [
		]
	},
	57: {
		brand: "Duracell",
		type: "NiMH", size: "AAA",
		group: "P",
		log: [{
			date: "2021-03-30T15:09:00",
			v: 0.52,
			mAh: 1922,
			mΩ: 51
		}]
	},
	58: {
		brand: "Duracell",
		type: "NiMH", size: "AAA",
		group: "P",
		log: [{
			date: "2021-03-30T15:09:00",
			v: 0.79,
			mAh: 6,
			mΩ: 51
		}]
	},
	59: {
		brand: "Duracell",
		type: "NiMH", size: "AAA",
		useNote: "Panasinoc trimmer",
		log: [{
			date: "2021-04-19",
			mAh: 1696,
			mΩ: 580
		}]
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
		"",
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
			makeRow(tbody, i, value, width)
	});

	while ((tbody.childElementCount / 2) < count) {
		makeRow(tbody, (tbody.childElementCount / 2) + start, {
			log: []
		}, width)
	}
}
function makeRow(
	tbody: HTMLElement,
	key: number, value: logEntry, width
) {

	const tr_date = document.createElement("tr");
	const tr_data = document.createElement("tr");
	makeHeaderColumn(tr_date, tr_data,
		key,
		value.group || "",
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
	number: number | "#",
	group: string,
	brandText: string,
	typeText: string
) {
	const th = document.createElement("th");
	th.innerHTML = number + "<sub>" + group + "</sub>";
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