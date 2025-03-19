


// const superagent = require('superagent');

import { SuperAgentClient } from "./super-agent";


export const client = new SuperAgentClient({
    baseURL: process.env.BASE_URL,
    // defaultHeaders: {
    //   Authorization: `Bearer ${process.env.API_TOKEN || ''}`,
    //   'Content-Type': 'application/json',
    // },
});

