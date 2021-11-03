
class Api {
  constructor(authToken) {
    this.authToken = authToken;
  }

  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  BASE_URL =
    "/api/articles";

  createHeaders() {
    return this.authToken
      ? {
          ...this.headers,
          Authorization: "Bearer " + this.authToken,
        }
      : this.headers;
  }

  async getAll() {
    return await fetch('http://blogspringbootmysqlkotlin-env.eba-vpdedufk.ap-southeast-2.elasticbeanstalk.com/api/articles/', {
      method: "GET",
      mode: "no-cors",
      headers: this.createHeaders(),
    });
  }

  async getById(id) {
    return await fetch(`${this.BASE_URL}/${id}`, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async delete(id) {
    return await fetch(`${this.BASE_URL}/${id}`, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
  }

  async update(item) {
    return await fetch(`${this.BASE_URL}/${item.id}`, {
      method: "PUT",
      headers: this.createHeaders(),
      body: JSON.stringify(item),
    });
  }

  async create(item) {
    return await fetch(this.BASE_URL, {
      method: "POST",
      headers: this.createHeaders(),
      body: JSON.stringify(item),
    });
  }
}

export default Api;
