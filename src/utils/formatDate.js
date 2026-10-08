export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
