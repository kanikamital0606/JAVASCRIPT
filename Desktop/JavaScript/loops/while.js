let cliff_end = 10;
let x = 0;

while(x<cliff_end){
    x = x+1;
    console.log("taking 1 stepreaching : ", x);
}
console.log("Final X: ", x);

if(x==cliff_end){
    console.log("We are standing at cliff edge !");
}
else if(x>cliff_end){

console.log("Falling from the cliff ! ");
}

//taking 1 more step