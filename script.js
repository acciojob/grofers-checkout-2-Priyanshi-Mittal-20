//your code here
let priceArr=document.querySelectorAll(".price")
let sum=0
for(let i of priceArr)
	{
		sum=sum+Number(i.innerText)
	}
let table=document.querySelector("table")
let row=document.createElement("tr")
let data=document.createElement("td")
data.innerText=sum
data.setAttribute("data-ns-test","grandTotal")
data.setAttribute("colspan","2")
row.appendChild(data)
table.appendChild(row)