
function car (){
    const this.accelerateUp = function(){
        accelerateUp();
    };
    const this.accelerateDown = function(){
        accelerateDown();

    }
    const this.breakUp = function(){
        breakUp();
    };
    const this.breakDown = function(){
        breakDown();
    };
    const this.wheelLeft = function(){
        wheelLeft();
    };
    const this.wheelRight = function(){
        wheelRight();
    };
    const this.statusGet = function(){
        return statusGet();
    };
    let accelerate_pos = 0;
    let break_pos = 0;
    let wheel_pos = 0;
    const accelerate_limit = 100;
    const break_limit = 100;
    const wheel_limit = 100;
    const accelerateUp = function(){
        if(accelerate_pos>0)
             accelerate_pos--;
    };
    const accelerateDown = function(){
        if(accelerate_limit > accelerate_pos)
             accelerate_pos++;
    };
    const breakUp = function(){
        if(break_pos>0)
             break_pos--;
    };
    const breakDown = function(){
        if(break_limit > break_pos)
             break_pos++;
    };
    const breakDown = function(){
        break_pos='break';
    };
    const wheelLeft = function(){
        if(wheel_pos > (wheel_limit * -1))
            wheel_pos--;
    };
    const wheelRight = function(){
        if(wheel_limit > wheel_pos)
            wheel_pos++;
    };
    const statusGet = function(){
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
