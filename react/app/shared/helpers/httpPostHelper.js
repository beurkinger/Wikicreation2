const httpPostHelper = (url, data, success, fail) => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  // xhr.setRequestHeader("Content-type", "application/form-data");
  
  let formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }

  xhr.onload = function() {
    if (xhr.status === 200 && xhr.readyState === 4 && xhr.getResponseHeader('content-type') !== 'text/html') {
      let response = JSON.parse(xhr.responseText);
      if (success && typeof success === 'function') success(response);
      xhr = null;
    }
    else {
      if (fail && typeof fail === 'function') fail(xhr.status + ':' + xhr.response);
      xhr = null;
    }
  }
  xhr.onerror = function (e) {
    if (fail && typeof fail === 'function') fail(e.target.status);
    xhr = null;
  }
  xhr.send(formData);
};

module.exports = httpPostHelper;
