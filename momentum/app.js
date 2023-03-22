

// const a =5; 
// const b =2;
// let myname ="junjoy";


// console.log(a*b);
// console.log(a+b);
// console.log(a/b);
// console.log("hello"+ myname);

// myname = "junbo";

// console.log("yournewname" + myname);

document.title = "hello , js"
const anmIFat = null;
let something;
console.log(anmIFat);
console.log(something);

const mon = "mon";
const wed = "wed";
const fri = "fri";

const week = [mon , wed , fri];
const nonsense = [1,2,"hello",false,null,true,undefined,"junjoy"];
console.log(week);


//add one more day to the array

week.push("sun");

console.log(week);


const player = {
    name:"junjoy",
    points:1000,
    fat: true

};

console.log(player);

console.log(player.name);

console.log(player["points"]);

player.fat = false;


console.log(player);

player.lastname="sim";
player.points = player.points + 10;


console.log(player);

function sayhello(nameofperson,age){
    console.log("hello" + nameofperson+age);

}

sayhello("junjoy",10);
sayhello("ho" , 21);


function plus(a,b){
    console.log(a + b);
}

function devide(a,b){
    console.log(a/b);
}

devide(10,3);

plus(5,6);


const play = {
    name : "nico",
    sayhello :function(other){
        console.log("hello " + other);

    }

}

console.log(play.name);
play.sayhello("junbo");


const calculator = {
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    times:function(a,b){
        return a*b;
    } ,
    divide:function(a,b){
        alert(a/b);
    } ,
    power:function(a,b){
        console.log(a ** b);

    }
}

const plusresult = calculator.plus(2,3);
const minusresult = calculator.minus(plusresult,10);

const timesresult = calculator.times(10,minusresult);

calculator.divide(10,2);
calculator.minus(5,3);



const age = 96;

function calculatekrage(ageofforeigner){
    return ageofforeigner + 2;


}

const krage = calculatekrage(age);

console.log(krage);




// isNaN 이라는 function

const ages = parseInt(prompt("how old are you?"));
// console.log(isNaN(ages));

if(isNaN(ages) || ages<0){
    console.log("please write a number");

} else if (ages<18){
    console.log("you are too young");

} else if (ages >= 18 && ages <= 50) {
    console.log("you can drink");
} else {
    console.log("please caution")


}


// title이라는 변수에서 title id에 들어있는 것을 가지고 온다.
const title = document.getElementById("title");

// 정보를 뽑아낸다
// console.log(title)


// title.innerText ="COT YOU"

// console.log(title.id);


const hellos = document.getElementsByClassName('hello');



//queryselector 역할 -> 큰 클래스이름 다음에 오는 태그를 가져와
//줄 수 있다. : .class이름  태그이름 형식으로 

const titles = document.querySelector("div.gi:first-child h1");



console.dir(titles);


// getElementById , querySelector를 많이 사용할 것이다.
// 지금까지 한 것은 , html에서 무언가를 가지고 오는 것이다.

//on으로 되어있는 것이 event


//지금부터는 style을 바꿔보는 작업을 해보겠다.


function handleTitleClick(){
    titles.style.color = "red";
 

}


titles.addEventListener("click" , handleTitleClick);
//titles.addEventListener("click" , handleTitleClick()); 이렇게
// 할 경우에는 , 사용자가 클릭을 했을때 작동하는 것이 아니다.

