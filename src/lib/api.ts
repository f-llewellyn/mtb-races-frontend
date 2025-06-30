export async function getData<T>(
  endpoint: string,
  reqOptions?: RequestInit,
): Promise<T> {
  try {
    const fullEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
    const res = await fetch(fullEndpoint, reqOptions);
    return res.json();
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}`, { cause: error });
    throw Error();
  }
}
