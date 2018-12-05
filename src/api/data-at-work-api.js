import axios from 'axios';

// Constants foe API
const API_ROOT = "http://api.dataatwork.org/v1";
const QUERY_PARAMATERS = {
    "START": 'begins_with',
    "ANYWHERE": 'contains',
    "END": 'ends_with',
}

const getTitleBasedOnString = (position,term) => {
    console.log(position,term);
    
    return axios({
        method: 'get',
        url: `${API_ROOT}/jobs/autocomplete?${QUERY_PARAMATERS[position]}="${term}"`,
    })
}

export const DAW_API = {
    AUTOCOMPLETE: getTitleBasedOnString
}