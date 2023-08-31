const browserFruit = require('../fruit/browser');
const nodeFruit = require('../fruit');

let configuration = {
    baseURL: '',
    timer: 10000,
    environment: 'browser',
};

const configureFetch = (data) => {
    configuration = {
        ...configuration,
        baseURL: data?.baseURL || '',
        timer: data?.timer || 10000,
        environment: data?.environment || 'browser',
    };
};

//If there's a body, convert it. If it throws an error, then it didn't have a body.
const convertBody = (res) => res.json().catch(() => res);

//This is where the actual fetch call is made.
const callFetch = async (path, method, body, token, { retries } = { retries: 0 }) => {
    const controller = new AbortController();
    const fruit = configuration.environment === 'browser' ? browserFruit : nodeFruit;
    const url = configuration.baseURL;
    const timer = configuration.timer;

    //If the timer runs out, abort the call.
    setTimeout(() => controller.abort(), timer);

    return fetch(url + path, {
        headers: {
            Authorization: token,
            'Content-type': 'application/json',
        },
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
    })
        .then((res) => {
            if (res.ok) {
                return convertBody(res);
            }
            if (retries > 0) {
                fruit.banana(`retrying ${path}`);
                return callFetch(path, method, body, token, { retries: retries - 1 });
            }
            return convertBody(res);
        })
        .catch((error) => {
            fruit.cherror('callFetch', error);
            if (retries > 0) {
                return callFetch(path, method, body, token, { retries: retries - 1 });
            }
            return error;
        });
};

module.exports = { callFetch, configureFetch };
