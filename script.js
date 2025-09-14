//your JS code here. If required.
const img_urls=["https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80","https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80","https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"]
const texts=["Explore the world","Wild Forest","Sunny Beach","City on Winter","Mountain Cloud"];

const container=document.querySelector(".container");
img_urls.forEach((url,index)=>{
	const div=document.createElement("div");
	div.className="panel";
	div.id=`panel-${index+1}`;
	if(index==0){
		div.classList.add("active");
	}
	div.style.backgroundImage=`url(${url})`;

	const textDiv = document.createElement("div");
    textDiv.className = "img-text";
    textDiv.innerText = texts[index];
	div.appendChild(textDiv);

	
	container.appendChild(div);

	div.addEventListener(("click"),(e)=>{
		changeAll();
		div.classList.add("active");
	})
})
function changeAll() {
	const imgs=document.querySelectorAll(".panel");
	for(let img of imgs){
		img.classList.remove("active");
	}
}
