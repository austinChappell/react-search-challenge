export const fetchData = async (endpoint: string) => {
  const appId = '5ffa46e8ff4678e04b237407';
  const baseUrl = 'https://dummyapi.io/data/api';

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'app-id': appId,
      },
    });

    if (response.status >= 400) {
      throw new Error('Unable to fetch.');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
