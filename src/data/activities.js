const PLACEHOLDER = "/images/placeholder.svg";

export const activities = [
  {
    id: 1,
    nombre: "Primera reunión de La Sociedad Kwai",
    fecha: "2026-01-12",
    descripcion: "Encuentro inicial para organizar el grupo y proponer ideas.",
    descripcionCompleta:
      "Reunión informal para presentarnos, definir el nombre del grupo y hablar de las primeras actividades. Este texto es un placeholder para la ficha completa.",
    imagen: PLACEHOLDER,
    galeria: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER],
  },
  {
    id: 2,
    nombre: "Tarde de juegos",
    fecha: "2026-02-08",
    descripcion: "Sesión de juegos de mesa y conversación.",
    descripcionCompleta:
      "Una tarde para jugar, compartir anécdotas y probar dinámicas nuevas. Más adelante aquí irá el recuento real de la actividad.",
    imagen: PLACEHOLDER,
    galeria: [PLACEHOLDER, PLACEHOLDER],
  },
  {
    id: 3,
    nombre: "Salida grupal",
    fecha: "2026-03-21",
    descripcion: "Paseo corto para tomar fotos y pasar el rato.",
    descripcionCompleta:
      "Placeholder de una salida al exterior. La galería y la descripción se reemplazarán cuando haya fotos reales.",
    imagen: PLACEHOLDER,
    galeria: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER],
  },
];

export function getActivityById(id) {
  return activities.find((activity) => activity.id === Number(id));
}
