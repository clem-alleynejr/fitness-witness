import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null, params = null, abortControllerSignal = null) {
    // Convert params object to query string and append to URL
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      url += `?${queryString}`;
    }

  
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };

    if (abortControllerSignal) {
      options.signal = abortControllerSignal;
    }
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Great use case for the Logical OR assignment operator
        options.headers ||= {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer ' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;        
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set is not 2xx
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }