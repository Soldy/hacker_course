
function breakDown(){
    return 'hoops';
}

function car (){
    this.accelerateUp = function(){
        accelerateUp();
    };
    this.accelerateDown = function(){
        accelerateDown();

    }
    this.breakUp = function(){
        breakUp();
    };
    this.breakDown = function(){
        breakDown();
    };
    this.wheelLeft = function(){
        wheelLeft();
    };
    this.wheelRight = function(){
        wheelRight();
    };
    this.statusGet = function(){
        return statusGet();
    };
    let accelerate_pos = 0;
    let break_pos = 0;
    let wheel_pos = 0;
    const accelerate_limit = 100;
    const break_limit = 100;
    const wheel_limit = 100;
    const accelerateUp = ()=>{
        if(accelerate_pos>0)
             accelerate_pos--;
    };
    const accelerateDown = ()=>{
        if(accelerate_limit > accelerate_pos)
             accelerate_pos++;
    };
    const breakUp = ()=>{
        if(break_pos>0)
             break_pos--;
    };
    const breakDown = ()=>{
        if(break_limit > break_pos)
             break_pos++;
    };
    const wheelLeft = ()=>{
        if(wheel_pos > (wheel_limit * -1))
            wheel_pos--;
    };
    const wheelRight = ()=>{
        if(wheel_limit > wheel_pos)
            wheel_pos++;
    };
    const statusGet = ()=>{
        return {
            accelerate_pos,
            break_pos,
            wheel_pos,
        };
    };
}

const player_one = new car();
console.log(player_one.statusGet());
console.log(typeof breakDown);
console.log(typeof player_one.breakDown());
console.log(player_one.statusGet());
