// import data from '../../../public/data.json'
const contentCarosell = document.querySelector(".tns-carousell")
let container_btnClose = document.querySelector(".container-icon-close")
let title= document.querySelector(".accordion-container__btn-acc")
let description = document.querySelector(".accordion-container__panel")
const btn_close = document.querySelector(".close-btn")

const close = () => {
		
		let item = document.querySelector(".tns-controls");
		let selectItem = document.querySelector(".tns-select");
		selectItem.classList.remove("tns-select")
		container_btnClose.style.display = "none";
		const panel = document.querySelector(".accordion-container__panel");
		item.style.pointerEvents= "auto";
		contentCarosell.style.pointerEvents = "auto";
		// btns_controls.style.pointerEvents = "auto"
		panel.style.maxHeight = null;
}
const accordion = () => {
const
	d = document,
	acc = document.getElementsByClassName("tns-carousell__content");
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {

		jsonParce(this);
		
		this.classList.toggle("active");
		this.classList.add("tns-select");
		let item = document.querySelector(".tns-controls");
		contentCarosell.style.pointerEvents = "none";
		item.style.pointerEvents = "none"
		container_btnClose.style.display = "block";

		const panel = document.querySelector(".accordion-container__panel");
			if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			} else {

			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}
};

function generateInfo(data,item){
	console.log(item,item.id,data)
	if(item){
		title.innerHTML= `
		<h1>${data.item_netfl[item.id].title}</h1>
		`;
		description.innerHTML=`
		<p>${data.item_netfl[item.id].Descripcion}</p>
		`;
	}
};

function jsonParce(item){
	fetch("./data.json")
.then(response => {
return response.json();
})
.then(data =>  generateInfo(data,item));}



btn_close.addEventListener("click", close)
export default accordion
