import { LOGOUT_SUCCESS } from "./Type/logintype"

const baseurl = `https://react-gnjfdf.stackblitz.io/api`
export const CALL_API = 'CALL_API';

// const response=await fetch("https://lms-dev.webileapps.io/api/users/admin/login")


const DEFAULT_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

async function invokeAPI({ endpoint, config, headerContent, contentType }) {

    const headers = DEFAULT_HEADERS;
    const updatedConfig = {
        ...config,
        headers: { ...headers, ...headerContent },
    }

    // console.log("config---->?", updatedConfig);
    const url = `${baseurl}${endpoint}`;

    // console.log("endpoints----->", endpoint)
    const response = await fetch(url, updatedConfig)
    // console.log(response)
  
    let result;
    if (typeof contentType === 'undefined') {
        result = await response.json();
        console.log("Result ---->", result.token);
        console.log(result);
        return { data: result };
    } else if (contentType === 'application/pdf') {
        result = await response.blob();
        console.log("Result ---->", result);
        return { data: result };
    }
}


export const middleWareDispatch = (store) => (next) => async (action) => {
    if (typeof action[CALL_API] === 'undefined') {
        return next(action);
    }
    const { silent = false } = action[CALL_API];
    try {
        const { url, body, method = 'POST', json, contentType } = action[CALL_API];
        console.log("body = ", body);
        const { token } = store.getState();

        const headerContent = {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...DEFAULT_HEADERS,
        };
        const payload = {
            endpoint: url,

            headerContent,
            config: {
                method,
                body: JSON.stringify(body),
            },
            json,
            contentType,
        };
        const { data } = await invokeAPI(payload);
        // console.log(url)
        return data;
    } catch (error) {
        console.log(error);

    }
};