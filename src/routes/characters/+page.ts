type Character = {
    id: number;
    name: string,
    image: string,
    occupation: string
}

const API: string = 'https://bobsburgers-api.herokuapp.com'

export const load = async ({ fetch }) => {
    const response = await fetch(`${API}/characters`);
    const characters: Character[] = await response.json();

    return {
        characters
    }
};