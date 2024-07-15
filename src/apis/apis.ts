import querystring from 'querystring'


export const result = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let res = await response.json();
    return [...res]
}

export const getProductsList = async (query:string) => {
    const response = await fetch(`http://localhost:3001/products${query}`)
    const result = await response.json();
    return result;
}
