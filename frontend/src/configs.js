const URI_USER_SVC = process.env.URI_SVC || 'http://localhost:8080'
const URI_MATCHING_SVC = process.env.URI_SVC || 'http://localhost:8080'

const PREFIX_USER_SVC = '/api/user-service';
const PREFIX_MATCHING_SVC = '';

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;
export const URL_MATCHING_SVC = URI_MATCHING_SVC + PREFIX_MATCHING_SVC;
