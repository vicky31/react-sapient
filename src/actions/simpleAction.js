export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const API_URL = `https://api.spaceXdata.com/v3/launches?limit=100`;
export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});
export const requestPosts = () => ({
    type: REQUEST_POSTS,
});
export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json,
});
export function fetchData(body = {}) {
    let url = API_URL ;
    if (body.launch) {
        url += `&launch_success=${body.launch}`;
    }
    if (body.landing) {
        url += `&land_success=${body.landing}`;
    }
    if (body.year) {
        url += `&launch_year=${body.year}`;
    }
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedPosts(json));
            });
    };
}