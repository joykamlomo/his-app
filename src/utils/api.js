const API_URL = 'https://example.com/api';

export const createPolicy = async (policy) => {
  try {
    const response = await fetch(`${API_URL}/policies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(policy),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
