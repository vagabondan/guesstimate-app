const DEV_API_KEY = 'XIOVIJJihFrKFeGH6KwxT3ve2Y1Bxnta'
const PRODUCTION_API_KEY = 'HXZO1nlg9qD4tfCcSSqdcjxq3pGaF0eU'
export const API_KEY = (__API_ENV__ === 'development') ? DEV_API_KEY : PRODUCTION_API_KEY
