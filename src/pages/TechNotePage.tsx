import { useState } from 'react'
import { Link } from 'react-router-dom'
import { filterTechLessons } from '../data/techLessons'
import type { TechSkill } from '../data/techSkills'
import { useLanguage } from '../i18n/context'
import './TechNotes.css'

function TechNotePage({ skill }: { skill: TechSkill }) {
  const [query, setQuery] = useState('')
  const { language } = useLanguage()
  const chinese = language === 'zh'
  const index = chinese ? 1 : 0
  const lessons = filterTechLessons(skill.slug, query)

  return (
    <main className="tech-note-page" key={skill.slug}>
      <Link to="/notes" className="tech-back">{chinese ? '← 所有笔记' : '← All notes'}</Link>
      <header className="tech-note-heading">
        <p>{skill.category[index]} · {chinese ? '学习笔记' : 'Learning notes'}</p>
        <h1>{skill.title}</h1>
        <p className="tech-note-intro">{skill.summary[index]}</p>
      </header>
      <div className="tech-note-search">
        <label htmlFor="tech-lesson-search">{chinese ? '检索模块内容' : 'Search this module'}</label>
        <div className="tech-search-control">
          <input id="tech-lesson-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={chinese ? '搜索概念、关键词或代码' : 'Search concepts, keywords or code'} />
          {query && <button type="button" onClick={() => setQuery('')}>{chinese ? '清除' : 'Clear'}</button>}
        </div>
        <p role="status">{chinese ? `显示 ${lessons.length} / 3 个主题` : `Showing ${lessons.length} / 3 topics`}</p>
      </div>
      <p className="tech-example-note">{chinese ? '示例用于学习，部分片段假设相关导入、服务或数据表已配置。' : 'Examples are for learning; some snippets assume the relevant imports, services or tables are configured.'}</p>
      {lessons.length === 0 && <p className="tech-empty">{chinese ? '未找到匹配内容，请尝试其他关键词。' : 'No matches. Try another keyword.'}</p>}
      {lessons.map(lesson => (
        <details className="tech-lesson" key={`${skill.slug}-${lesson.title[0]}`}>
          <summary>{lesson.title[index]}<span aria-hidden="true">+</span></summary>
          <div className="tech-lesson-body">
            <h2>{chinese ? '核心概念' : 'Core concepts'}</h2>
            <p>{lesson.explanation[index]}</p>
            <h2>{chinese ? '示例' : 'Example'}</h2>
            <pre><code>{lesson.code}</code></pre>
            <p className="tech-practice"><strong>{chinese ? '练习目标：' : 'Practice: '}</strong>{lesson.practice[index]}</p>
          </div>
        </details>
      ))}
      {skill.slug === 'postgresql' && <Link className="tech-related" to="/notes/database">{chinese ? '继续阅读：Database · 22 阶段学习路线 →' : 'Continue reading: Database · 22-stage learning roadmap →'}</Link>}
      <footer className="tech-note-footer">
        <a href={skill.reference} target="_blank" rel="noreferrer">{chinese ? '官方参考文档 ↗' : 'Official reference documentation ↗'}</a>
        <Link to="/notes">{chinese ? '探索其他技能 →' : 'Explore other skills →'}</Link>
      </footer>
    </main>
  )
}

export default TechNotePage
