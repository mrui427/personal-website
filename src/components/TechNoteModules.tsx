import { useState } from 'react'
import { Link } from 'react-router-dom'
import { techSkills } from '../data/techSkills'
import { useLanguage } from '../i18n/context'
import '../pages/TechNotes.css'

function TechNoteModules() {
  const [query, setQuery] = useState('')
  const { language } = useLanguage()
  const chinese = language === 'zh'
  const index = chinese ? 1 : 0
  const terms = query.normalize('NFKC').trim().toLowerCase().split(/\s+/).filter(Boolean)
  const skills = techSkills.filter(skill => {
    const text = [skill.title, ...skill.category, ...skill.summary].join(' ').normalize('NFKC').toLowerCase()
    return terms.every(term => text.includes(term))
  })
  return (
    <section className="tech-modules" aria-labelledby="tech-modules-title">
      <div className="tech-modules-heading">
        <h2 id="tech-modules-title">{chinese ? '技术学习模块' : 'Tech learning modules'}</h2>
        <span>{chinese ? '对应首页的 12 项技能' : '12 skills from the home page'}</span>
      </div>
      <label className="tech-search-label" htmlFor="tech-module-search">{chinese ? '查找技能模块' : 'Find a skill module'}</label>
      <div className="tech-search-control">
        <input id="tech-module-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={chinese ? '搜索技能、分类或简介' : 'Search skills, categories or summaries'} />
        {query && <button type="button" onClick={() => setQuery('')}>{chinese ? '清除' : 'Clear'}</button>}
      </div>
      <p className="tech-result-count" role="status">{chinese ? `${skills.length} 个模块` : `${skills.length} modules`}</p>
      <div className="tech-module-grid">
        {skills.map(skill => <Link className="tech-module-card" to={`/notes/${skill.slug}`} key={skill.slug}>
          <span>{skill.category[index]}</span>
          <h3>{skill.title}<span aria-hidden="true">↗</span></h3>
          <p>{skill.summary[index]}</p>
          <small>{chinese ? '3 个主题 · 概念 / 示例 / 练习' : '3 topics · Concepts / Examples / Practice'}</small>
        </Link>)}
      </div>
      {skills.length === 0 && <p className="tech-empty">{chinese ? '未找到匹配模块。' : 'No matching modules.'}</p>}
    </section>
  )
}

export default TechNoteModules
