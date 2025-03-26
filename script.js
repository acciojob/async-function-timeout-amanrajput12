//your JS code here. If required.
let value = document.querySelector("#text");
let delay =document.querySelector("#delay");
let btnsubmit = document.querySelector("#btn");
let output = document.querySelector("#output");



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btnsubmit.addEventListener("click",async()=>{
// alert(delay.value);
	let data = Number(delay.value)
	 await wait(data);
	output.innerHTML=value.value
	
	
})

// alert(typeof value)
// alert(typeof delay)
