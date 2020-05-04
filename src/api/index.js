export const callApi = async (search = ``) => {
    const response = await fetch(`http://localhost:7070/api/services/${search}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}