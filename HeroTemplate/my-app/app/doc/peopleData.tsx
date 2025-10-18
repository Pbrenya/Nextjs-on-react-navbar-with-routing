// app/doc/data/peopleData.ts

type Person = {
  id: number
  name: string
  role: string
  avatar: string
}

/**
 * Example mock data for demonstration.
 */
const people: Person[] = [
  {
    id: 1,
    name: "Prosper Brenya",
    role: "Pharmacy Student",
    avatar: getAvatarUrl("Prosper Brenya"),
  },
  {
    id: 2,
    name: "Ama Kusi",
    role: "Pharmacist",
    avatar: getAvatarUrl("Ama Kusi"),
  },
]

/**
 * Returns a list of all people.
 */
export function getAllPeople(): Person[] {
  return people
}

/**
 * Generates a placeholder avatar URL based on the person’s name.
 * You can replace this with a real image service (like DiceBear, UI Avatars, etc.)
 */
export function getAvatarUrl(name: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=7e22ce&color=fff`
}
