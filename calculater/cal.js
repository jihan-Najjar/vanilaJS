const display = document.getElementById('displays');
const button = Array.from(document.getElementsByClassName('buttons'));
console.log(button);


// map

// const butt=button.map(function (butt){
//     return butt.value;
// });
// console.log(butt);
// console.log(button.map(butt=> {return butt.value}));
button.map(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.value);
        switch (e.target.value) {
            case 'AC':
                display.value = "";
                break;
            case 'DE':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value=eval(display.value);
                } catch  {
                    display.value="Error!";
                }

                break;
            default:
                display.value +=e.target.value;
                break;
        }




    })


}





);