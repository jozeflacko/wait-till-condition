// implementation 1 using while in pause
{    
    function waitTill(condition) {
        const pause = (milliseconds) => {
            var d = new Date();
            while ((new Date()) - d <= milliseconds) { /* nothing */ }
        };
        const millisInLoop = 100;
        while(condition() === false) {
            pause(millisInLoop);
        }
    }
    // Test
    var index = 0;
    function conditionToGetOutOfWait(){ 
        index++; 
        console.log("Waiting "+index+"00ms");
        return index > 3; 
    };
    console.log("START TEST 1 for pause with while");
    waitTill(conditionToGetOutOfWait);
    console.log("END TEST 1. We sucessfully postponed execution by 400ms");
};

// ----------------------------------------------------

// implementation 2 using promise in pause    
{
    async function waitTillWithPromise(condition) {
        async function pauseUsingPromise(milliseconds) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, milliseconds);
            });
        }
        while(condition() === false) {
            await pauseUsingPromise(100);
        }
    }
    // Test
    var index = 0;
    function conditionToGetOutOfWait(){ 
        index++; 
        console.log("Waiting "+index+"00ms");
        return index > 3; 
    };
    console.log("START TEST 2 for pause with promise");
    await waitTillWithPromise(conditionToGetOutOfWait);
    console.log("END TEST 2. We sucessfully postponed execution by 400ms");
};







