
function car (){
    function this.accelerateUp(){
        accelerateUp();
    };
    function this.accelerateDown(){
        accelerateDown();

    }
    function this.breakUp(){
        breakUp();
    };
    function this.breakDown(){
        breakDown();
    };
    function this.wheelLeft(){
        wheelLeft();
    };
    function this.wheelRight(){
        wheelRight();
    };
    function this.statusGet(){
        return statusGet();
    };
    let accelerate_pos = 0;
    let break_pos = 0;
    let wheel_pos = 0;
    const accelerate_limit = 100;
    const break_limit = 100;
    const wheel_limit = 100;
    function accelerateUp(){
        if(accelerate_pos>0)
             accelerate_pos--;
    };
    function accelerateDown(){
        if(accelerate_limit > accelerate_pos)
             accelerate_pos++;
    };
    function breakUp(){
        if(break_pos>0)
             break_pos--;
    };
    function breakDown(){
        if(break_limit > break_pos)
             break_pos++;
    };
    function wheelLeft(){
        if(wheel_pos > (wheel_limit * -1))
            wheel_pos--;
    };
    function wheelRight(){
        if(wheel_limit > wheel_pos)
            wheel_pos++;
    };
    function statusGet(){
        return {
            accelerate_pos,
            break_pos,
            wheel_pos,
        };
    };
}

const player_one = new car();
console.log(player_one.statusGet());
