let toggles = document.getElementsByClassName('label');
let contentDiv = document.getElementsByClassName('content');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
        }
        else{
            contentDiv[i].style.height = "0px";
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
            }
        }
    });
}