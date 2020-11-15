export const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

export const numberOfDays = (month, year) => (new Date(year, month + 1, 0)).getDate()

export function findMoodsByDay(moods, date) {
  const result = moods.filter(mood => {
    let createdAt = mood.created_at instanceof Date ? mood.created_at : new Date(mood.created_at)
    return (createdAt.getFullYear() === date.getFullYear() &&
      createdAt.getMonth() === date.getMonth() &&
      createdAt.getDate() === date.getDate())
  })

  return result
}

export function findMoodsByMonth(moods, date) {
  const result = moods.filter(mood => {
    let createdAt = mood.created_at instanceof Date  ? mood.created_at : new Date(mood.created_at)
    return (createdAt.getFullYear() === date.getFullYear() &&
      createdAt.getMonth() === date.getMonth())
  })

  return result
}