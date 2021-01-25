/*
fetch('js/data.json').then(responseStream => {
    console.log(responseStream);
});
*/

/*
fetch('js/data.json')
    .then(responseStream => {
        responseStream.json().then(data => {
            console.log(data);
        });
    });
*/


fetch('js/data12.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });