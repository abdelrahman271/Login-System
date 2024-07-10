let arr3=JSON.parse(localStorage.getItem('item'));
let num=JSON.parse(localStorage.getItem('index'));
let massage=document.getElementById('content');
let out=document.getElementById('log');

massage.innerHTML=`
<h1 class="text-info">Welcome ${arr3[num].name}</h1>
`;

function move(){
    window.open('index.html','_self')
}

out.addEventListener('click',move)
