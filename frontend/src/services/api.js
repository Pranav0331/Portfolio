const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitContact(payload) {
  const res = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Request failed');
  }

  return res.json();
}
