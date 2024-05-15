const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export async function getAll() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error("Could not fetch exercises");
}
