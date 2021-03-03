const baseURL = process.env.REACT_APP_API_URL;

export const fetchSinToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') return fetch(url);

    return fetch(url, {
          method,
          body: JSON.stringify(data),
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
          },
      }
    );
};


export const fetchConToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') return fetch(url);

    return fetch(url, {
          method,
          body: JSON.stringify(data),
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
              'x-token': token
          },
      }
    );
};
