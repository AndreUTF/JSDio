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

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async() => {
    const data = await asyncTimer();
    const dataJSON = await fetch('js/data.json').then(resStream =>
        resStream.json()
    );
    return dataJSON;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })


const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('user Logged', { user: 'Andre Ferriani' })
    }
}

const users = new Users();
users.on('User logges', data => {
    console.logd(data);
});

Users.userLogged({ user: 'Andre ferriani' })