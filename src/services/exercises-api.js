import sendRequest from './send-request';

const BASE_URL = '/api/exercises?limit=10';

 export function getAll() {
   return sendRequest(BASE_URL);
 }
