const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export async function getAll() {
    const res = await fetch(`${BASE_URL}/?limit=10`, options);
    if (res.ok) return res.json();
    throw new Error("Bad Request");
}
