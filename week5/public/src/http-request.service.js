function _get(url) {
    return fetch(url, {
      method: 'GET'
    });
  }

  function getCommonHeaders(){
      return {
          'Content-Type': 'application/json'
      }
  }
  
  function _post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: getCommonHeaders(),
      body: JSON.stringify(data)
    });
  }
  
  function _put(url, data) {
    return fetch(url, {
      method: 'PUT',
      headers: getCommonHeaders(),
      body: JSON.stringify(data)
    });
  }