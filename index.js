let input = document.querySelectorAll(".number");
let value = document.querySelector(".value");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");
const delet = document.querySelector(".delete");
const evale = document.querySelector(".eval");
let [temp,d] = [1,1];

function reset(){
	value.style.display="block";
	result.style.fontSize='1.3rem'
}

clear.addEventListener("click",()=>{
	temp=1;
	d=1;
	result.innerText = 0;
	value.innerHTML = 0;
	reset()
})

input.forEach((el)=>{
	el.addEventListener("click",(e)=>{
	reset()
		temp +=  e.target.value;
		try{
			if(d==1){
			value.innerText = temp.slice(1,temp.length)
			result.innerText = eval(value.innerText);
			d==2;
			}else{
				value.innerText = temp;
				result.innerText = eval(value.innerText);
			}
		}	catch{
		}	
	})
})

delet.addEventListener("click",()=>{
	reset()
	d=3
	temp  = value.innerText.slice(0,-1);
	value.innerText = temp;
	if(value.innerText.length == 0){
		temp = 0;
	}
	try{
		result.innerText = eval(temp);
		value.innerText = temp
	}	catch{
	}	
})


evale.addEventListener("click",()=>{
	value.style.display="none"
	result.style.fontSize="3rem"
})