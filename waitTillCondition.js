{
    // implementation 1
    const pause = (milliseconds) => {
        var d = new Date();
        while ((new Date()) - d <= milliseconds) { /* nothing */ }
    }
    function waitTill(condition) {
        const index = 0;
        const millisInLoop = 100;
        while(condition() === false) {
            pause(millisInLoop);
        }
    }
    // Test - implementation 1
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

{
    // implementation 2
    async function pauseUsingPromise(milliseconds) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, milliseconds);
        });
    } 
    async function waitTillWithPromise(condition) {
        const index = 0;
        while(condition() === false) {
            await pauseUsingPromise(100);
        }
    }
    // Test - implementation 1
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







