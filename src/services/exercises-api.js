import sendRequest from './send-request';

const BASE_URL = '/api/exercises';

 export function getAll() {
   return sendRequest(BASE_URL);
 }
