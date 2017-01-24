const httpRequestHelper = (url, success, fail) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      success(response);
      xhr = null;
    }
    else {
      fail(xhr.status + ':' + xhr.response);
      xhr = null;
    }
  }
  xhr.send(null);
};

module.exports = httpRequestHelper;
