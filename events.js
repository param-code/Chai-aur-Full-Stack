// document.getElementById('girl').onclick = () => alert('girl');
document.getElementById('girl').addEventListener('click',()=>alert('girlie'));
document.querySelector("#images").addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // e.stopPropagation();
    console.log(e.target.parentNode);
    let remove = e.target.parentNode;
    // remove.remove();
    if(e.target.tagName === "IMG"){
        e.target.parentNode.remove();
    }
})