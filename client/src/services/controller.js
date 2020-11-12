export default async function getUrl() {
  const response = await fetch('/api/shorten');
  return response;
}
