export function getQueryParams(params) {
  const query = new URLSearchParams(params);
  return query.toString() ? `?${query.toString()}` : "";
}
