import sendRequest from './send-request';

const BASE_URL = '/api/exercises?page=1&limit=3';

 export function getAll() {
   return sendRequest(BASE_URL);
 }
