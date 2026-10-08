const PLACEHOLDER = "/images/placeholder.svg";

export const members = [
  {
    id: 1,
    nombre: "Percy",
    foto: PLACEHOLDER,
    categoria: "Fundador",
    descripcion: "Descripción de ejemplo para Percy.",
    gustos: ["Lectura", "Tecnología"],
    frase: "Frase de ejemplo.",
  },
  {
    id: 2,
    nombre: "Alex",
    foto: PLACEHOLDER,
    categoria: "Integrante",
    descripcion: "Descripción de ejemplo para Alex.",
    gustos: ["Cine", "Música"],
    frase: "Otra frase de ejemplo.",
  },
  {
    id: 3,
    nombre: "Sam",
    foto: PLACEHOLDER,
    categoria: "Integrante",
    descripcion: "Descripción de ejemplo para Sam.",
    gustos: ["Cocina", "Viajes"],
    frase: "Una frase corta de placeholder.",
  },
  {
    id: 4,
    nombre: "Riley",
    foto: PLACEHOLDER,
    categoria: "Integrante",
    descripcion: "Descripción de ejemplo para Riley.",
    gustos: ["Deportes", "Fotografía"],
    frase: "Placeholder de frase personal.",
  },
];

export function getMemberById(id) {
  return members.find((member) => member.id === Number(id));
}
