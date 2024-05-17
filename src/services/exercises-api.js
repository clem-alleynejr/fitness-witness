import sendRequest from './send-request';

const BASE_URL = '/api/exercises';

 export function getAll(params) {
   return sendRequest(BASE_URL, undefined, undefined, params);
 }
