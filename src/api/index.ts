export const fetchData = async (endpoint: string) => {
  const appId = '5ffa46e8ff4678e04b237407';
  const baseUrl = 'https://dummyapi.io/data/api';

  const response = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      'app-id': appId,
    },
  });

  return response.json();
};
