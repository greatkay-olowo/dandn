"use strict";
const getInvoiceDate = () => {
	const date = document.getElementById("dateInput").value;
	const printDate = document.getElementById("invoiceDate");
	printDate.innerText = date;
};

const rate = 14.5;

const findDiffInDate = (start, end) => {
	const startTime = new Date(start);
	const endTime = new Date(end);
	const difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
	const resultInMinutes = Math.round(difference / 60000);
	return resultInMinutes;
};

const updateARow = () => {
	//input
	const date1 = document.getElementById("date1").value;
	if (date1 !== "") {
		document.getElementById("list1").classList.add("");
	}
	const site1 = document.getElementById("site1").value;
	const start1 = document.getElementById("start1").value;
	const end1 = document.getElementById("end1").value;
	const hours1 = document.getElementById("hours1").value;
	// result
	document.getElementById("date1copy").innerText = date1;
	document.getElementById("site1copy").innerText = site1;
	document.getElementById("start1copy").innerText = start1;
	document.getElementById("end1copy").innerText = end1;
	document.getElementById("end1copy").innerText = end1;
	document.getElementById("hours1copy").innerText = hours1;
	document.getElementById("amount1Copy").innerText = parseInt(hours1) * 14.5;
	document.getElementById("amount1").innerText = parseInt(hours1) * 14.5;
};

const print = () => {
	document.getElementById("subButton").addEventListener("click", () => {
		getInvoiceDate();
		updateARow();
		window.print();
	});
};
