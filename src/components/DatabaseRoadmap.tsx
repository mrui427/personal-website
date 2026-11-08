import { useState } from 'react'
import { searchDatabase } from '../data/searchDatabase'
import { useLanguage } from '../i18n/context'
import './DatabaseRoadmap.css'

function DatabaseRoadmap() {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set())
  const entries = searchDatabase(query)
  const { language } = useLanguage()
  const index = language === 'zh' ? 1 : 0
  const chinese = language === 'zh'

  return (
    <section className="database-roadmap" aria-labelledby="database-roadmap-title">
      <div className="database-roadmap-heading">
        <h2 id="database-roadmap-title">{chinese ? '数据库学习路线' : 'Database learning roadmap'}</h2>
        <span>{chinese ? '22 / 22 阶段已完成' : '22 / 22 stages completed'}</span>
      </div>
      <p className="database-roadmap-intro">
        {chinese
          ? '从数据库与 SQL 基础，到表设计、性能、并发，再到 Prisma、缓存和生产环境。每个阶段都列出了学习内容和需要达到的目标。'
          : 'From database and SQL fundamentals to design, performance and concurrency, then Prisma, caching and production. Each stage lists the topics to learn and the practical goal.'}
      </p>
      <div className="database-search">
        <label htmlFor="database-search">{chinese ? '检索数据库笔记' : 'Search database notes'}</label>
        <div className="database-search-input">
          <input id="database-search" type="search" value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={chinese ? '搜索模块、概念或代码，例如：事务、JOIN、Prisma' : 'Search modules, concepts or code: transaction, JOIN, Prisma'}
            aria-describedby="database-search-results" />
          {query && <button type="button" onClick={() => setQuery('')}>{chinese ? '清除' : 'Clear'}</button>}
        </div>
        <p id="database-search-results" role="status" aria-live="polite">
          {chinese ? `显示 ${entries.length} / 22 个模块 · 支持中英文搜索` : `Showing ${entries.length} / 22 modules · Search in English or Chinese`}
        </p>
      </div>
      <details className="database-roadmap-disclosure">
        <summary>
          <span>{chinese ? `学习路线总览 · ${entries.length} 个阶段` : `Learning roadmap · ${entries.length} stages`}</span>
          <span className="roadmap-expand">{chinese ? '展开表格' : 'Expand table'}</span>
          <span className="roadmap-collapse">{chinese ? '收起表格' : 'Collapse table'}</span>
        </summary>
        <div className="database-roadmap-scroll" tabIndex={0} role="region" aria-label={chinese ? '数据库学习路线表格，可横向滚动' : 'Database roadmap table, scroll horizontally'}>
        <table>
          <caption>{chinese ? '22 个阶段的学习内容与目标' : 'Topics and goals across 22 stages'}</caption>
          <thead><tr>
            <th scope="col">{chinese ? '状态' : 'Status'}</th>
            <th scope="col">{chinese ? '阶段' : 'Stage'}</th>
            <th scope="col">{chinese ? '模块' : 'Module'}</th>
            <th scope="col">{chinese ? '需要学什么' : 'Topics to learn'}</th>
            <th scope="col">{chinese ? '目标' : 'Goal'}</th>
          </tr></thead>
          <tbody>
            {entries.map(({ stage, number }) => (
              <tr key={number}>
                <td><span role="img" aria-label={chinese ? '已完成' : 'Completed'}>✅</span></td>
                <td>{number + 1}</td>
                <th scope="row"><a href={`#database-stage-${number + 1}`} onClick={() => setExpanded((previous) => new Set(previous).add(number))}>{stage.module[index]}</a></th>
                <td>{stage.topics[index]}</td>
                <td>{stage.goal[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </details>

      <div className="database-lessons">
        <p className="database-roadmap-intro">
          {chinese ? '以下示例用于理解概念，假设相关表和字段已建立。$1、$2 等表示由客户端绑定的查询参数。' : 'The following examples illustrate concepts and assume the relevant tables and fields exist. $1, $2 and similar placeholders represent query parameters bound by the client.'}
        </p>
        {entries.length === 0 && (
          <p className="database-search-empty">{chinese ? '未找到匹配的模块，请尝试其他关键词或清除搜索。' : 'No matching modules. Try another keyword or clear the search.'}</p>
        )}
        {entries.map(({ stage, number, lesson }) => {
          return (
            <details className="database-lesson" id={`database-stage-${number + 1}`} key={number}
              open={expanded.has(number)}
              onToggle={(event) => {
                const open = event.currentTarget.open
                setExpanded((previous) => {
                  if (previous.has(number) === open) return previous
                  const next = new Set(previous)
                  if (open) next.add(number)
                  else next.delete(number)
                  return next
                })
              }}>
              <summary>
                <span className="database-lesson-number">{String(number + 1).padStart(2, '0')}</span>
                <span className="database-lesson-summary">
                  <span className="database-lesson-title">{stage.module[index]}</span>
                  <span className="database-lesson-topics">{stage.topics[index]}</span>
                </span>
                <span className="database-lesson-chevron" aria-hidden="true">+</span>
              </summary>
              <div className="database-lesson-body">
              <h4>{chinese ? '核心概念' : 'Core concepts'}</h4>
              <p>{lesson.explanation[index]}</p>
              <div className="database-lesson-code">
                <span>{lesson.codeLanguage}</span>
                <pre><code>{lesson.code}</code></pre>
              </div>
              <h4>{chinese ? '实践要点' : 'In practice'}</h4>
              <p>{lesson.takeaway[index]}</p>
              <p className="database-lesson-goal"><strong>{chinese ? '学习目标：' : 'Goal: '}</strong>{stage.goal[index]}</p>
              {number === 11 && <a className="database-lesson-reference" href="https://www.postgresql.org/docs/current/using-explain.html" target="_blank" rel="noreferrer">PostgreSQL · EXPLAIN ↗</a>}
              {number === 13 && <a className="database-lesson-reference" href="https://www.postgresql.org/docs/current/transaction-iso.html" target="_blank" rel="noreferrer">PostgreSQL · Transaction isolation ↗</a>}
              {number === 4 && <a className="database-lesson-reference" href="https://www.postgresql.org/docs/current/indexes-unique.html" target="_blank" rel="noreferrer">PostgreSQL · Unique indexes ↗</a>}
              {number === 17 && <a className="database-lesson-reference" href="https://docs.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool" target="_blank" rel="noreferrer">Prisma · Connection pool ↗</a>}
              </div>
            </details>
          )
        })}
      </div>
    </section>
  )
}

export default DatabaseRoadmap
