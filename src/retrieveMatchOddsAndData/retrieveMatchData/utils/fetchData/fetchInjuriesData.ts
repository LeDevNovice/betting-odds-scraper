const API_KEY = process.env.API_SPORTS_KEY;

if (!API_KEY) {
  throw new Error(
    'API Sports key is missing. Please set API_SPORTS_KEY in your environment variables.',
  );
}

const headers = {
  'x-apisports-key': API_KEY,
};

export async function fetchInjuriesData(matchId: number) {
  const response = await fetch(`https://v3.football.api-sports.io/injuries?fixture=${matchId}`, {
    headers,
  });
  const data = await response.json();
  return data.response;
}