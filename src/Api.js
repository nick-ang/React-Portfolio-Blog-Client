
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
    return await fetch('/api/', {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async getById(id) {
    return await fetch(
      `/api/${id}`,
      {
        method: "GET",
        headers: this.createHeaders(),
      }
    );
  }

  async delete(id) {
    return await fetch(`/api/${id}`, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
  }

  async update(item) {
    return await fetch(`/api/${item.id}`, {
      method: "PUT",
      headers: this.createHeaders(),
      body: JSON.stringify(item),
    });
  }

  async create(item) {
    return await fetch('/api/', {
      method: "POST",
      headers: this.createHeaders(),
      body: JSON.stringify(item),
    });
  }
}

export default Api;
