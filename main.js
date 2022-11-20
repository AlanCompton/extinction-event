let crossedList = document.querySelectorAll('#crossed li');

function striked(){
    for(let i = 0;i < crossedList.length;i++){
        crossedList[i].addEventListener('click',function(){
            crossedList[i].style.textDecoration = "line-through";

            console.log(`The list item ${crossedList[i].innerText} has been crossed out.`);
        });
    };
};

striked();


let fadedList = document.querySelector('#faded');

fadedList.addEventListener('click',function(event){
    let listItem = event.target;

    listItem.style.opacity = '0';
    console.log(`The list item ${listItem.innerText} has faded away.`);
});


let row = document.querySelector('#row');

row.addEventListener('click',function(event){
    let rowItem = event.target;
    rowItem.style.width = '0px';
});


let test = document.querySelector('#destroy-all');
let faded = document.querySelectorAll('#faded li');
let rows = document.querySelectorAll('#row img');

test.addEventListener('click',function(){
    console.log('Works')

    for(let i = 0;i < crossedList.length;i++){
        crossedList[i].style.textDecoration = "line-through";
    }

    for(let i = 0;i < faded.length;i++){
        faded[i].style.opacity = '0';
    }

    for(let i = 0;i < rows.length;i++){
        rows[i].style.width = '0px';
    }

        
})