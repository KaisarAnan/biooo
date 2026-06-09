// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");
const content = document.getElementById("content");

setTimeout(() => {

loader.classList.add("hide");

content.classList.add("show");

}, 2600);

});

// REVEAL

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

reveals.forEach(el=>{
observer.observe(el);
});

// BACK TO TOP

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// RIPPLE EFFECT

document.querySelectorAll(".link-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

ripple.style.width = size + "px";
ripple.style.height = size + "px";

ripple.style.left =
e.clientX - rect.left - size/2 + "px";

ripple.style.top =
e.clientY - rect.top - size/2 + "px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.6)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{
ripple.remove();
},600);

});

});

// ripple css

const style = document.createElement("style");

style.innerHTML = `
@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}
`;

document.head.appendChild(style);

// PARALLAX

window.addEventListener("scroll",()=>{

const scrolled = window.pageYOffset;

document.querySelectorAll(".doodle").forEach((item,index)=>{

const speed = (index + 1) * 0.08;

item.style.transform =
`translateY(${scrolled * speed}px)`;

});

});