//using promises
const doSometingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('first data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second Data');
    }, 1000);
});

//run task doSometingPromise
//doSometingPromise
//    .then(data => console.log(data));

//run task doSometingPromise
//doSometingPromise
//    .then(data => {
//        console.log(data);
//        return doOtherThingPromise
//    })
//    .then(data2 => console.log(data2))
//    .catch(error => console.log('Ops', error));

doSometingPromise
    .then(data => {
        console.log(data);
        return doOtherThingPromise;
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));

//Promise all
Promise.all([doSometingPromise, doOtherThingPromise]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

//Pending
//Fulfilled
//Rejected

//Using callback
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doAnotherThing(callback) {
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

/*
function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');

            try {
                doAnotherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            } catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();
*/