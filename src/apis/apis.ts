 export const result = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        let res = await response.json();
        return [...res, ...res]
    }