const api = "https://aplicativos.consule.com.br/public/api/jad/apostolos";
const apiGerais = "https://aplicativos.consule.com.br/public/api/jad/apostolosGerais";

const headers = {
    'Content-type': 'application/json',
}

export const GetDadosApostolos = async () => {
    return fetch((`${api}`), {
        method: "GET",
        headers: {
            ...headers,
        },
    }).then(res => res.json());
}


export const GetDadosGerais = async () => {
    return fetch((`${apiGerais}`), {
        method: "GET",
        headers: {
            ...headers,
        },
    }).then(res => res.json());
}
