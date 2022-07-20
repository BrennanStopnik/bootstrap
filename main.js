

let ul = $(".list-group");

let myArr = ["Yes", "No", "Maybe", "Hi", "Test"];
let bsColors = ["success", "secondary", "warning", "danger", "info", "light", "dark"];
// Variables for iterating over the above lists.
let i = 0;
let j = 0;

let bsButton = $(".btn-primary");

bsButton.on('click', () => {
    let li = $(`<li class="list-group-item list-group-item-${bsColors[j]}">${myArr[i]}</li>`);
    ul.append(li);

    // counter for myArr
    i++;
    if(i === myArr.length){
        i = 0;
    }
    // counter for bsColor
    j++;
    if(j === bsColors.length){
        j = 0;
    }
});