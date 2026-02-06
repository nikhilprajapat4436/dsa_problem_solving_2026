/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
let asteroidCollision = function(asteroids) {
    let stack=[];
    for(let curr of asteroids){
        let currAlive=true;
        while (currAlive && stack.length>0 && stack[stack.length-1]>0 && curr<0)
        {
            if (Math.abs(stack[stack.length-1])<Math.abs(curr))
            {
             stack.pop();
            }
            else if(Math.abs(stack[stack.length-1])==Math.abs(curr))
            {
             stack.pop();
             currAlive = false;
            }
            else{
                currAlive = false;
            }

        }
        if(currAlive){
            stack.push(curr);
        }
    }
return stack;
};