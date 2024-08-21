const callAPI = async (url: string) => {
    try{
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const response = await fetch(url, {
            method: 'GET',
            headers,
        });
        const total = await response.headers.get('X-Total-Count')
        const data = await response.json();
        return {
            data,
            total,
        }
    }catch(error){
        return {Error: error}
    }
}
export default callAPI;
