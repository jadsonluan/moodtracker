export const monthShortNames = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

export const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export const dayShortNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

export const numberOfDays = (month, year) => (new Date(year, month + 1, 0)).getDate()

const removeDuplicates = (tags) => {
  const tagsWithoutDuplicates = {}
  tags.forEach(tag => {
    tagsWithoutDuplicates[tag._id] = tag
  })
  return Object.values(tagsWithoutDuplicates)
}

export function mostFrequentTag(moods) {
  const frequency = {}
  const tags = moods.map(mood => mood.tag)
  tags.forEach(tag => frequency[tag.name] = frequency[tag.name] ? frequency[tag.name] + 1 : 1)
  if (Object.values(frequency).length !== 0) {
    const maxFrequency = Math.max(...Object.values(frequency))
    const mostFrequents = Object.keys(frequency).filter(key => frequency[key] == maxFrequency)
    const _tags = tags.filter(tag => mostFrequents.includes(tag.name))
    const uniqueTags = removeDuplicates(_tags)
    return uniqueTags
  }
  return []
}

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