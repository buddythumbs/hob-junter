import axios from 'axios';

// Constants foe API
const API_ROOT = "http://api.dataatwork.org/v1";
const QUERY_PARAMATERS = {
    "START": 'begins_with',
    "ANYWHERE": 'contains',
    "END": 'ends_with',
}

const getTitleBasedOnString = async (position,term) => {
    let titles = await axios({
        method: 'get',
        url: `${API_ROOT}/jobs/autocomplete`,
        params: {
            [QUERY_PARAMATERS[position]]: term
        }
    })

    console.log(titles);

    return titles;
    
}

export const DAW_API = {
    AUTOCOMPLETE: getTitleBasedOnString
}