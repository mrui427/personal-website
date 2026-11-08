import { databaseRoadmap } from './databaseRoadmap'
import { databaseLessons } from './databaseLessons'

export function searchDatabase(query: string) {
  const terms = query.normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean)
  return databaseRoadmap.map((stage, number) => ({ stage, number, lesson: databaseLessons[number] }))
    .filter(({ stage, lesson, number }) => {
      const text = [number + 1, ...stage.module, ...stage.topics, ...stage.goal,
        ...lesson.explanation, ...lesson.takeaway, lesson.code].join(' ').normalize('NFKC').toLowerCase()
      return terms.every((term) => text.includes(term))
    })
}
