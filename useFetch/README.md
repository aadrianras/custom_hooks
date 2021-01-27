# useFetch

Realiza una petición fetch y cambia el estado de loading a false la recibir la respuesta.

Ejemplo:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```