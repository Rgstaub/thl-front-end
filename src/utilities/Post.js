const Post = (url, data) => {

  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then( response => {
    //console.log('POST Response:\n', response.json());
    if (response.status === 200) {
      return response.json()
    } else return({err: {message: 'Non 200 status. fix this'}})
    
  })
}

export default Post;
