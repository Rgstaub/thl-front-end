const Get = (url) => {
  
  return fetch(`https://thl-back-end.herokuapp.com/${url}`, {
    //body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      'access-control-allow-origin': 'https://thl-back-end.herokuapp.com/'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      return ({error: 'Server error'})
    }
  })
}

export default Get;