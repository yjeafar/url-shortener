import axios from 'axios';

export default class UrlService {
  constructor() {
    const baseURL = 'http://localhost:5000';
    axios.defaults.baseURL = baseURL;
  }

  async getAllUrl() {
    this.response = await axios.get('api/urls/');
    return this.response;
  }

  async postShortenUrl(longUrl) {
    this.response = await axios.put('api/urls/shortenUrl', { url: longUrl });
    return this.response;
  }
}
