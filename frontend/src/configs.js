// const URI_USER_SVC = process.env.URI_USER_SVC || 'http://localhost:8000';
// const URI_MATCHING_SVC = process.env.URI_MATCHING_SVC || 'http://localhost:8001';
// const URI_COMM_SVC = process.env.URI_COMM_SVC || 'http://localhost:8002';
// const URI_COLLAB_SVC = process.env.URI_COLLAB_SVC || 'http://localhost:8003';
const URI_SVC = process.env.URI_SVC || 'http://localhost:8080';

const PREFIX_USER_SVC = '/api/user-service';
const PREFIX_MATCHING_SVC = '';
const PREFIX_COMM_SVC = '';
const PREFIX_COLLAB_SVC = '';

export const URL_USER_SVC = URI_SVC + PREFIX_USER_SVC;
export const URL_MATCHING_SVC = URI_SVC + PREFIX_MATCHING_SVC;
export const URL_COMM_SVC = URI_SVC + PREFIX_COMM_SVC;
export const URL_COLLAB_SVC = URI_SVC + PREFIX_COLLAB_SVC;
