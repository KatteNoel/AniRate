const ENDPOINT = 'https://63432edbba4478d478497a6d.mockapi.io/anime';

class API {
    get = async () => {
        try {
            const response = await fetch(ENDPOINT);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log("error fetching resource", e);
        }
    }

    put = async (resource, id) => {
        try {
            const response = await fetch(`${ENDPOINT}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resource)
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log("error updating resource", e);
        }
    }

    create = async (resource) => {
        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resource)
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log("error creating resource", e);
        }
    }

    delete = async (id) => {
        try {
            const response = await fetch(`${ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log("error deleting resouce", e);
        }
    }
}

export const api = new API();