const baseUrl = process.env.API_BASE_URL!;
const apiKey = process.env.API_KEY!;

export async function get<T>(
  endpoint: string,
  next: NextFetchRequestConfig,
): Promise<T> {
  const res = await request(endpoint, `Failed to fetch data from ${endpoint}`, {
    next,
  });
  return res.json();
}

async function request(
  endpoint: string,
  errorMessage: string,
  requestConfig: RequestInit,
): Promise<Response> {
  try {
    return await fetch(`${baseUrl}${endpoint}`, {
      method: requestConfig.method,
      body: requestConfig.body,
      headers: {
        ...requestConfig.headers,
        'X-API-KEY': apiKey,
      },
      next: requestConfig.next,
    });
  } catch (error) {
    console.error(errorMessage, {
      cause: error,
    });
    throw Error();
  }
}
