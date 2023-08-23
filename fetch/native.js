import AsyncStorage from '@react-native-async-storage/async-storage';
import delay from '../utils/delay';
import fruit from '../utils/fruit';

const passage = { delay, ...fruit };

const url = 'http://192.168.0.100:3050/api/app'; //local
const timer = 10000;
let suspensionActive = false;

//If there's a body, convert it. If it throws an error, then it didn't have a body.
const convertBody = (res) => res.json().catch(() => res);

//This is the fetch function that will be called by the API call functions.
const callFetch = async (path, method, body, token, { retries } = { retries: 0 }) => {
    const controller = new AbortController();
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
                passage.banana(`retrying ${path}`);
                return callFetch(path, method, body, token, { retries: retries - 1 });
            }
            return convertBody(res);
        })
        .catch((error) => {
            if (retries > 0) {
                return callFetch(path, method, body, token, { retries: retries - 1 });
            }
            return error;
        });
};

/*  This is to refresh the access token as needed. This is separate from the API 
calls because when calling a refresh token, the callAPI function will also try to 
retrieve a token with its backup method of an expiring token. This makes us call 
two tokens which creates an issue with AsyncStorage trying to save the same key twice 
but with different values. This is a workaround to that issue. */
const refreshAccess = async (refresh) => {
    return await callFetch('/user/token', 'POST', { refresh });
};

//This is the main API call function.
const callAPI = async (path, method, body, retries) => {
    const rightMeow = Date.now();
    let token, response;

    //Hold off on the other potential calls until this goes through.
    if (suspensionActive) {
        await passage.delay(750);
    }

    //After potential suspension, now get the latest expire time.
    try {
        const twentyFiveMinutes = rightMeow + 1500000; //1500000 = 25 minutes
        const values = await AsyncStorage.multiGet(['act', 'act_exp', 'rft']);
        const expiresIn = values[1][1];
        const refresh = values[2][1];
        token = values[0][1];

        //If our access is expiring, retrieve a new one before we hit the desired API call.
        if (refresh && expiresIn && rightMeow > parseInt(expiresIn)) {
            suspensionActive = true; //suspend other simultaneous calls
            response = await refreshAccess(refresh);

            //If we receive what we want, store it.
            if (response.tokens) {
                await AsyncStorage.multiSet([
                    ['ps_act', response.tokens.access],
                    ['ps_act_exp', twentyFiveMinutes.toString()],
                ]);
                token = response.tokens.access;
            }
        }
    } catch (error) {
        error;
    } finally {
        suspensionActive = false;
    }

    //Call the desired API
    response = await callFetch(path, method, body, token, retries);

    if (response.error || !response.ok) {
        return response?.error || response?.message || response?.statusText || response?.status || response;
    }

    return response;
};

export { refreshAccess, callAPI };
