import sendRequest from './send-request';

const BASE_URL = '/api/exercises';

 export function getSubset(params, abortControllerSignal) {
   return sendRequest(BASE_URL, undefined, undefined, params, abortControllerSignal);
 }
