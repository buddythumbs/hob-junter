import axios from 'axios';

// Constants foe API
const API_ROOT = "http://api.dataatwork.org/v1";
const QUERY_PARAMATERS = {
    "START": 'begins_with',
    "ANYWHERE": 'contains',
    "END": 'ends_with',
}

const getTitleBasedOnString = (position,term) => {
    return axios({
        method: 'get',
        url: `${API_ROOT}/jobs/autocomplete?${QUERY_PARAMATERS[position]}="${term}"`,
    })
}

const getJobsBasedOnId = (id) => {
    return axios({
        method: 'get',
        url: `${API_ROOT}/jobs/${id}`,
    })
}

const getRelatedSkillsBasedOnJobId = (id) => {
    return axios({
        method: 'get',
        url: `${API_ROOT}/jobs/${id}/related_skills`,
    })
}

export const DAW_API = {
    AUTOCOMPLETE: getTitleBasedOnString,
    SEARCH_JOBS_BY_ID: getJobsBasedOnId,
    SEARCH_SKILLS_BY_JOB_ID: getRelatedSkillsBasedOnJobId

}