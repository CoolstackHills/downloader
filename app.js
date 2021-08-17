/*
function download(file){
    var link = document.getElementById('downlink');
    link.setAttribute('download', file);
    link.click();
};
*/

const downurl = document.getElementById('down-url');
const submitBtn = document.querySelector('.download-btn');
var link = document.getElementById('downlink');

submitBtn.addEventListener('click', addItem);


function addItem(){
let value = downurl.value;
if(!value){
    alert("Enter download link!");
}
else{
    link.setAttribute('download', value);
    link.click();
    downurl.value = '';
}
}



