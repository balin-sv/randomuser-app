export default class ApiService {
  constructor() {
    this._urlBase = "https://randomuser.me/api";
  }

  async getResourse(url) {
    const res = await fetch(`${this._urlBase}${url}`);
    if (!res.ok) {
      throw new Error("error" + res.status);
    }
    return await res.json();
  }
}
