export async function fetchFromWordPress(endpoint: string) {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const res = await fetch(`${baseUrl}/${endpoint}?_embed`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}
