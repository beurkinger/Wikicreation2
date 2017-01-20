const QueryHelper = class {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queryStr = '';
  }

  //Méthode privée, à ne pas utiliser en dehors de la classe
  _addPair (key, value) {
    if (key !== '' && value !== '') {
      this.queryStr += this.queryStr !== '' ? '&' : '';
      this.queryStr += key + '=' + value;
    }
  }

  addString(key, value) {
    if (!key || !value) return;
    key = String(key).trim();
    value = String(value).trim();
    this._addPair(key, value);
  }

  addArray(key, array) {
    if (!key || !array) return;
    key = String(key).trim();
    let value = '';
    for (let i = 0 ; i < array.length ; i++) {
      if (i > 0) value += ',';
      value += array[i].toString().trim();
    }
    this._addPair(key, value);
  }

  getUrl() {
    let url = this.baseUrl + (this.queryStr !== '' ? '?' + this.queryStr : '');
    return encodeURI(url);
  }
}

module.exports = QueryHelper;
