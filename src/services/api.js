const API_BASE_URL = 'http://3.83.232.183:8000';

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/evaluate/file`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed, status code ${response.status}`);
  }

  return response.json();
}
