export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api"
  );
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
) {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  const payload = (await response.json()) as T & {
    error?: string;
  };

  if (!response.ok) {
    throw new Error(
      payload.error || "Request failed.",
    );
  }

  return payload;
}
