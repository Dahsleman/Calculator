const grid = document.getElementById("grid");
const grid_2 = document.getElementById("grid_2");
const grid_answer = document.getElementById("grid_answer");
const grid_container = document.getElementById("grid_container");
const numbers_array = [];
let numbers_str = "";
let result = "";
let operator_str = "";

function results(val){
    let val_float = parseFloat(val);
    if (result.length == 0){
        result = val_float;
    } else {
        if (operator_str === "+"){
            result += val_float;
        } else if (operator_str === "-"){
            result = result - val_float;
        } else if (operator_str === "*"){
            result = result * val_float;
        } else if (operator_str === "/"){
            if(val_float===0){
                result = "Owwww thats a big number bro!!";
            } else {
                result = result / val_float;
            }
            
        } 
    }
    return result;
}

function appendGrid_2ChildNodes(val) { 
    let number_node = document.createTextNode(val);
    grid_2.appendChild(number_node);
};

function divChildNodes(val){ 
    let count = grid_2.childNodes.length;
    if (count>0){
        removeAllChildNodes(grid_2);
    }
    appendGrid_2ChildNodes(val);
    if (val !== "Owwww thats a big number bro!!"){
        let div_node = document.createTextNode("/");
        grid_2.appendChild(div_node);
    }
    operator_str = "/";
};

function mulChildNodes(val){ 
    let count = grid_2.childNodes.length;
    if (count>0){
        removeAllChildNodes(grid_2);
    }
    appendGrid_2ChildNodes(val);
    if (val !== "Owwww thats a big number bro!!"){
        let mul_node = document.createTextNode("*");
        grid_2.appendChild(mul_node);
    }
    operator_str = "*";
};

function subChildNodes(val){ 
    let count = grid_2.childNodes.length;
    if (count>0){
        removeAllChildNodes(grid_2);
    }
    appendGrid_2ChildNodes(val);
    if (val !== "Owwww thats a big number bro!!"){
        let sub_node = document.createTextNode("-");
        grid_2.appendChild(sub_node);
    }
    operator_str = "-";
};

function addChildNodes(val){ 
    let count = grid_2.childNodes.length;
    if (count>0){
        removeAllChildNodes(grid_2);
    }
    appendGrid_2ChildNodes(val);
    if (val !== "Owwww thats a big number bro!!"){
        let add_node = document.createTextNode("+");
        grid_2.appendChild(add_node);
    }
    operator_str = "+";
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function getAllChildNodes(parent){
    if (parent.childNodes.length == 0){
        if (operator_str==="*" || operator_str==="/" ){
            numbers_str=1;
        } else {
            numbers_str=0;
        }
    } else{
        while(parent.firstChild){   
            numbers_array.push(parent.firstChild.nodeValue);
            parent.removeChild(parent.firstChild);
        }
    
        if (numbers_str.length >0){
            numbers_str = "";
        }
    
        numbers_str = numbers_array.join("")
        while (numbers_array.length >0){
            numbers_array.pop()
        }
    }
    return numbers_str;
}

const equalBtn = document.getElementById("=");
equalBtn.addEventListener('click', function(){
    if (grid.childNodes.length>0 || grid_2.childNodes.length>0){
        let grid_nodes = getAllChildNodes(grid);
        result = results(grid_nodes);
        removeAllChildNodes(grid);
        removeAllChildNodes(grid_2);
        let answer_node = document.createTextNode(result);
        grid_answer.appendChild(answer_node);
        result = "";
        operator_str="";
    }
});

const divBtn = document.getElementById("/");
divBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    if (operator_str == ""){
        operator_str = "/";
    }
    result = results(grid_nodes);
    divChildNodes(result);
});

const mulBtn = document.getElementById("*");
mulBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    if (operator_str == ""){
        operator_str = "*";
    }
    result = results(grid_nodes);
    mulChildNodes(result);
});

const subBtn = document.getElementById("-");
subBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    if (operator_str == ""){
        operator_str = "-";
    }
    result = results(grid_nodes);
    subChildNodes(result);
});

const addBtn = document.getElementById("+");
addBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    if (operator_str == ""){
        operator_str = "+";
    }
    result = results(grid_nodes);
    addChildNodes(result);
    
});

const perBtn = document.getElementById("%");
perBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    let percentage = grid_nodes/100;
    appendGridChildNodes(percentage);
});

function appendGridChildNodes(val) { 
    let number_node = document.createTextNode(val);
    grid.appendChild(number_node);
    
};

const dotBtn = document.getElementById(".");
dotBtn.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let grid_nodes = getAllChildNodes(grid);
    let dot = 0;
    for (var i = 0; i < grid_nodes.length; i++) {
        if(grid_nodes.charAt(i) ==="."){
            dot += 1;
        }
      }
    if (dot === 0){
        appendGridChildNodes(grid_nodes);
        let val = ".";
        appendGridChildNodes(val);
    } else {
        appendGridChildNodes(grid_nodes);
    }
});

const btn_1 = document.getElementById("1");
btn_1.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "1";
    appendGridChildNodes(val);
});

const btn_2 = document.getElementById("2");
btn_2.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "2";
    appendGridChildNodes(val);
});

const btn_3 = document.getElementById("3");
btn_3.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "3";
    appendGridChildNodes(val);
});

const btn_4 = document.getElementById("4");
btn_4.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "4";
    appendGridChildNodes(val);
});

const btn_5 = document.getElementById("5");
btn_5.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "5";
    appendGridChildNodes(val);
});

const btn_6 = document.getElementById("6");
btn_6.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "6";
    appendGridChildNodes(val);
});

const btn_7 = document.getElementById("7");
btn_7.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "7";
    appendGridChildNodes(val);
});

const btn_8 = document.getElementById("8");
btn_8.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "8";
    appendGridChildNodes(val);
});

const btn_9 = document.getElementById("9");
btn_9.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "9";
    appendGridChildNodes(val);
});

const btn_0 = document.getElementById("0");
btn_0.addEventListener('click', function(){
    if (grid_answer.childNodes.length>0){
        removeAllChildNodes(grid_answer);
    }
    let val = "0";
    appendGridChildNodes(val);
});

const Back = document.getElementById("Back");
Back.addEventListener('click', function(){  
    grid.removeChild(grid.lastChild);
});

const Clear = document.getElementById("Clear");
Clear.addEventListener('click', function(){  
    removeAllChildNodes(grid);
    removeAllChildNodes(grid_2);
    removeAllChildNodes(grid_answer);
    result = "";
    operator_str="";
});
