export type DatabaseStage = {
  module: [string, string]
  topics: [string, string]
  goal: [string, string]
}

// Each pair contains the English and Chinese text. All stages were marked complete.
export const databaseRoadmap: DatabaseStage[] = [
  { module: ['Database fundamentals', '数据库基础概念'], topics: ['Database, Table, Row, Column, Schema, Server, Client', 'Database、Table、Row、Column、Schema、Server、Client'], goal: ['Explain the overall structure of a database', '能说清数据库整体结构'] },
  { module: ['SQL query basics', 'SQL 查询基础'], topics: ['SELECT, WHERE, ORDER BY, LIMIT, IN, BETWEEN, LIKE, NULL', 'SELECT、WHERE、ORDER BY、LIMIT、IN、BETWEEN、LIKE、NULL'], goal: ['Query data independently', '能独立查数据'] },
  { module: ['SQL write operations', 'SQL 写操作'], topics: ['INSERT, UPDATE, DELETE, RETURNING', 'INSERT、UPDATE、DELETE、RETURNING'], goal: ['Perform CRUD operations', '能完成 CRUD'] },
  { module: ['Data types', '数据类型'], topics: ['Integer, Decimal, Boolean, VARCHAR, Text, Date, Timestamp, UUID, JSON/JSONB', 'Integer、Decimal、Boolean、VARCHAR、Text、Date、Timestamp、UUID、JSON/JSONB'], goal: ['Choose appropriate field types', '知道字段怎么设计'] },
  { module: ['Constraints', '约束'], topics: ['PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT, CHECK', 'PRIMARY KEY、FOREIGN KEY、NOT NULL、UNIQUE、DEFAULT、CHECK'], goal: ['Ensure data integrity', '能保证数据正确性'] },
  { module: ['Table relationships', '表关系'], topics: ['One-to-One, One-to-Many, Many-to-Many, Junction Table', 'One-to-One、One-to-Many、Many-to-Many、Junction Table'], goal: ['Model User / Artist / Appointment relationships', '能设计 User / Artist / Appointment'] },
  { module: ['JOIN', 'JOIN'], topics: ['INNER JOIN, LEFT JOIN, multi-table JOINs', 'INNER JOIN、LEFT JOIN、多表 JOIN'], goal: ['Query data across multiple tables', '能把多张表的数据查出来'] },
  { module: ['Aggregate queries', '聚合查询'], topics: ['COUNT, SUM, AVG, MIN/MAX, GROUP BY, HAVING', 'COUNT、SUM、AVG、MIN/MAX、GROUP BY、HAVING'], goal: ['Write statistical queries', '能做统计查询'] },
  { module: ['Subqueries / CTEs', '子查询 / CTE'], topics: ['Subquery, WITH ... AS', 'Subquery、WITH ... AS'], goal: ['Read and write common complex queries', '看懂和写常见复杂查询'] },
  { module: ['Database design', '数据库设计'], topics: ['Normalization, 1NF/2NF/3NF, avoiding duplicate data, schema design', 'Normalization、1NF/2NF/3NF、避免重复数据、Schema Design'], goal: ['Explain the reasoning behind table design', '能解释为什么这样设计表'] },
  { module: ['Indexes', '索引'], topics: ['Index fundamentals, single-column indexes, composite indexes, unique indexes', 'Index 原理、Single Index、Composite Index、Unique Index'], goal: ['Know when to create an index', '知道什么时候该建索引'] },
  { module: ['Query performance', '查询性能'], topics: ['EXPLAIN, EXPLAIN ANALYZE, Sequential Scan, Index Scan', 'EXPLAIN、EXPLAIN ANALYZE、Sequential Scan、Index Scan'], goal: ['Perform basic query performance analysis', '能做基础性能分析'] },
  { module: ['Transactions', '事务'], topics: ['BEGIN, COMMIT, ROLLBACK, ACID', 'BEGIN、COMMIT、ROLLBACK、ACID'], goal: ['Understand why related operations must succeed or fail together', '能理解一组操作为什么要一起成功/失败'] },
  { module: ['Concurrency', '并发'], topics: ['Race Condition, Lock, Isolation Level, Lost Update', 'Race Condition、Lock、Isolation Level、Lost Update'], goal: ['Explain concurrent booking conflicts', '能解释同时预约的问题'] },
  { module: ['Pagination', '分页'], topics: ['Offset Pagination, Cursor Pagination', 'Offset Pagination、Cursor Pagination'], goal: ['Implement list pagination', '能实现列表分页'] },
  { module: ['N+1 queries', 'N+1 查询'], topics: ['What N+1 means, JOIN / include / batching', 'N+1 是什么、JOIN / include / batching'], goal: ['Identify common ORM performance issues', '能识别 ORM 常见性能问题'] },
  { module: ['ORM / Prisma', 'ORM / Prisma'], topics: ['Prisma Schema, Relation, Migration, Seed, Transaction, Raw SQL', 'Prisma Schema、Relation、Migration、Seed、Transaction、Raw SQL'], goal: ['Understand the relationship between Prisma and PostgreSQL', '理解 Prisma 和 PostgreSQL 的关系'] },
  { module: ['Connections', '数据库连接'], topics: ['Connection, Connection Pool, connection counts', 'Connection、Connection Pool、连接数'], goal: ['Understand how a backend connects to a database', '知道 backend 怎么连接数据库'] },
  { module: ['PostgreSQL features', 'PostgreSQL 特性'], topics: ['UUID, Enum, JSONB, Array, Timestamp, Postgres Index', 'UUID、Enum、JSONB、Array、Timestamp、Postgres Index'], goal: ['Use the features commonly needed in projects', '掌握项目常用部分'] },
  { module: ['Cache / Redis', '缓存 / Redis'], topics: ['Cache, TTL, Cache Hit/Miss, Cache-aside, Invalidation', 'Cache、TTL、Cache Hit/Miss、Cache-aside、Invalidation'], goal: ['Understand caching fundamentals without requiring deep expertise', '理解缓存，不要求深入'] },
  { module: ['Backend + database security', 'Backend + DB 安全'], topics: ['SQL Injection, validation, permissions, environment variables', 'SQL Injection、Validation、权限、环境变量'], goal: ['Build safer backends', '能写更安全的后端'] },
  { module: ['Production databases', '生产环境数据库'], topics: ['Migration, Backup, Logs, Monitoring, Cloud DB', 'Migration、Backup、Logs、Monitoring、Cloud DB'], goal: ['Understand the basics of production environments', '对生产环境有基本概念'] },
]
