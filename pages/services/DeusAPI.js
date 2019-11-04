const api = "https://aplicativos.consule.com.br/public/api/jad/deus";

const headers = {
    'Content-type': 'application/json',
}

export const GetDados = async () => {
    return fetch((`${api}`), {
        method: "GET",
        headers: {
            ...headers,
        },
    }).then(res => res.json());
}

