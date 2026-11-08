type Bilingual = [string, string]
export type DatabaseLesson = {
  explanation: Bilingual
  takeaway: Bilingual
  code: string
  codeLanguage: 'SQL' | 'Prisma' | 'TypeScript' | 'Shell' | 'Flow'
}

// Examples are teaching snippets; identifiers and SQL keywords stay in English.
export const databaseLessons: DatabaseLesson[] = [
  {
    explanation: ['A database stores related data. A table describes one kind of entity, a row is one record, and columns define its attributes. A schema groups database objects. PostgreSQL runs as a server; a backend or database tool connects as a client.', '数据库保存相关数据。Table 表示一类实体，Row 是一条记录，Column 是记录的字段。Schema 用于组织数据库对象。PostgreSQL 作为 Server 运行，后端或数据库工具作为 Client 连接它。'],
    takeaway: ['Describe the path from backend client to database, schema, table, row and column using an appointment as an example.', '用预约举例，说明后端客户端、数据库、Schema、表、行和字段之间的关系。'],
    code: 'Backend client → PostgreSQL server\n  Database: smartnail\n    Schema: public\n      Table: appointments\n        Row: one booking\n        Columns: id, user_id, artist_id, starts_at', codeLanguage: 'Flow',
  },
  {
    explanation: ['SELECT chooses columns and WHERE filters rows. ORDER BY determines the result order; LIMIT caps the result count. IN matches a set, BETWEEN includes both bounds, and LIKE matches a text pattern. Test missing values with IS NULL rather than = NULL.', 'SELECT 选择字段，WHERE 筛选行。ORDER BY 决定排序，LIMIT 限制返回数量。IN 匹配集合，BETWEEN 包含两端边界，LIKE 匹配文本模式。空值应使用 IS NULL 判断，而不是 = NULL。'],
    takeaway: ['Query a customer’s next ten appointments in a predictable order. Always specify ORDER BY when the order matters.', '查询某位顾客接下来的十个预约。需要稳定顺序时，必须明确 ORDER BY。'],
    code: "SELECT id, artist_id, starts_at\nFROM appointments\nWHERE user_id = $1\n  AND status IN ('pending', 'confirmed')\n  AND starts_at >= CURRENT_TIMESTAMP\nORDER BY starts_at ASC, id ASC\nLIMIT 10;", codeLanguage: 'SQL',
  },
  {
    explanation: ['INSERT creates rows, UPDATE modifies them and DELETE removes them. PostgreSQL RETURNING sends selected columns from affected rows back to the client. WHERE defines the scope of an update or deletion.', 'INSERT 新增记录，UPDATE 修改记录，DELETE 删除记录。PostgreSQL 的 RETURNING 可以把受影响记录的指定字段返回给客户端。UPDATE 和 DELETE 的作用范围由 WHERE 决定。'],
    takeaway: ['Check the rows selected by a WHERE clause before changing them. Use RETURNING to inspect the result.', '修改数据前先确认 WHERE 会匹配哪些行，使用 RETURNING 查看操作结果。'],
    code: "INSERT INTO users (name, email)\nVALUES ($1, $2) RETURNING id;\n\nUPDATE users SET name = $1\nWHERE id = $2 RETURNING id, name;\n\nDELETE FROM appointments\nWHERE id = $1 AND status = 'cancelled'\nRETURNING id;", codeLanguage: 'SQL',
  },
  {
    explanation: ['Choose types by meaning: integers for counts, numeric for exact decimals, boolean for flags, and text or varchar for strings. UUID can identify records. Date stores a calendar date; timestamptz stores an instant. JSONB stores structured JSON without replacing the core relational model.', '按业务含义选择类型：整数用于计数，numeric 用于精确小数，boolean 用于开关，text 或 varchar 用于字符串。UUID 可作为标识。date 保存日期，timestamptz 保存时间点。JSONB 适合结构化扩展信息，但不应代替核心关系模型。'],
    takeaway: ['Store money as an exact decimal or integer minor units. Store booking instants with a time-zone-aware type and handle display time zones in the application.', '金额使用精确小数或最小货币单位整数。预约时间点采用带时区语义的类型，并在应用中处理展示时区。'],
    code: 'CREATE TABLE services (\n  id uuid PRIMARY KEY,\n  name text NOT NULL,\n  price numeric(10, 2) NOT NULL,\n  duration_minutes integer NOT NULL,\n  active boolean NOT NULL DEFAULT true,\n  metadata jsonb,\n  created_at timestamptz NOT NULL DEFAULT now()\n);', codeLanguage: 'SQL',
  },
  {
    explanation: ['A primary key uniquely identifies a row. A foreign key links it to an existing row in another table. NOT NULL requires a value; UNIQUE prevents duplicate non-null values by default. DEFAULT supplies a value when omitted. CHECK enforces a condition on a row.', '主键唯一标识一行；外键保证关联记录存在。NOT NULL 要求有值，UNIQUE 默认防止非空值重复。DEFAULT 在未提供字段时填入默认值，CHECK 约束行内数据必须满足条件。'],
    takeaway: ['Keep important rules in the database as well as backend validation. Combine NOT NULL with CHECK when a value must be present and valid.', '重要规则同时放在数据库和后端中。字段必须存在且合法时，应结合 NOT NULL 与 CHECK。'],
    code: 'CREATE TABLE artist_slots (\n  id uuid PRIMARY KEY,\n  artist_id uuid NOT NULL REFERENCES artists(id),\n  starts_at timestamptz NOT NULL,\n  duration_minutes integer NOT NULL\n    CHECK (duration_minutes > 0),\n  UNIQUE (artist_id, starts_at)\n);', codeLanguage: 'SQL',
  },
  {
    explanation: ['One-to-one uses a foreign key with a uniqueness constraint. One-to-many puts the foreign key on the many side. Many-to-many uses a junction table with foreign keys to both entities. Each appointment connects a customer and an artist.', '一对一通常使用外键加唯一约束；一对多把外键放在“多”的一侧；多对多通过中间表关联双方。每个预约连接一位顾客和一位美甲师。'],
    takeaway: ['Explain why users and artists can each have many appointments, while artists and services can use a junction table.', '解释为什么用户和美甲师各自可以有多个预约，而美甲师与服务可以通过中间表建立多对多关系。'],
    code: 'users 1 ── many appointments many ── 1 artists\n\nCREATE TABLE artist_services (\n  artist_id uuid REFERENCES artists(id),\n  service_id uuid REFERENCES services(id),\n  PRIMARY KEY (artist_id, service_id)\n);', codeLanguage: 'SQL',
  },
  {
    explanation: ['INNER JOIN returns matching pairs. LEFT JOIN keeps every left-side row and uses NULL for missing right-side values. A filter on the right table in WHERE can remove unmatched rows, so put matching conditions in ON when those rows must remain.', 'INNER JOIN 返回匹配的记录组合；LEFT JOIN 保留左表所有行，未匹配的右表字段为 NULL。对右表字段使用 WHERE 过滤可能去掉未匹配行；要保留这些行，应把相关匹配条件放在 ON 中。'],
    takeaway: ['List artists together with appointments, keeping artists who have no bookings.', '查询美甲师及其预约，同时保留尚无预约的美甲师。'],
    code: 'SELECT ar.id, ar.name, ap.starts_at\nFROM artists AS ar\nLEFT JOIN appointments AS ap\n  ON ap.artist_id = ar.id\nORDER BY ar.id, ap.starts_at;', codeLanguage: 'SQL',
  },
  {
    explanation: ['Aggregate functions summarise rows. GROUP BY forms groups; WHERE filters input rows and HAVING filters the resulting groups. COUNT(*) counts rows, while COUNT(column) ignores NULL in that column.', '聚合函数对多行进行统计。GROUP BY 分组，WHERE 筛选分组前的记录，HAVING 筛选分组后的结果。COUNT(*) 统计行数，COUNT(column) 忽略该字段中的 NULL。'],
    takeaway: ['Count confirmed bookings per artist and return only artists with at least five bookings.', '统计每位美甲师的已确认预约，只返回至少有五个预约的美甲师。'],
    code: "SELECT artist_id, COUNT(*) AS booking_count\nFROM appointments\nWHERE status = 'confirmed'\nGROUP BY artist_id\nHAVING COUNT(*) >= 5\nORDER BY booking_count DESC;", codeLanguage: 'SQL',
  },
  {
    explanation: ['A subquery embeds a query inside another query. A common table expression, written with WITH, gives a query result a name. CTEs help split a complex query into readable steps; they are not automatically a performance improvement.', '子查询将一个查询放进另一个查询。CTE 使用 WITH 为查询结果命名，方便把复杂查询拆成清晰步骤。CTE 改善可读性，但并不自动提升性能。'],
    takeaway: ['First summarise bookings, then join the summary to artist profiles.', '先统计预约，再把统计结果与美甲师资料关联。'],
    code: 'WITH booking_counts AS (\n  SELECT artist_id, COUNT(*) AS total\n  FROM appointments\n  GROUP BY artist_id\n)\nSELECT ar.name, bc.total\nFROM artists ar\nJOIN booking_counts bc ON bc.artist_id = ar.id;', codeLanguage: 'SQL',
  },
  {
    explanation: ['Normalisation reduces duplicated facts and update anomalies. 1NF removes repeating groups, 2NF removes dependencies on only part of a composite key, and 3NF removes transitive dependencies between non-key attributes. Start with clear entities and relationships.', '规范化减少重复事实和更新异常。1NF 消除重复字段组；2NF 消除对复合主键一部分的依赖；3NF 消除非键字段间的传递依赖。设计时先明确实体及其关系。'],
    takeaway: ['Keep an artist’s contact details in the artist table. If a booking needs a historical price, store that explicit snapshot rather than relying on a changing service price.', '美甲师联系方式放在美甲师表中。如果预约需要保留历史价格，应明确存储价格快照，而不是始终读取变化后的服务价格。'],
    code: 'artists: id, name, contact\nservices: id, name, current_price\nappointments: id, user_id, artist_id,\n              service_id, booked_price, starts_at', codeLanguage: 'Flow',
  },
  {
    explanation: ['An index provides an additional access path to rows. It can speed up suitable filters, joins and ordering, but consumes space and adds write cost. A composite B-tree index is especially useful when queries constrain its leading columns.', '索引为数据提供额外的访问路径，可加快适合的筛选、关联和排序，但会占用空间并增加写入成本。复合 B-tree 索引通常尤其适合限制其前导字段的查询。'],
    takeaway: ['Choose index columns from actual queries. An index on artist_id and starts_at can support one artist’s schedule; it does not guarantee every time-only query will be efficient.', '根据真实查询选择索引。artist_id 与 starts_at 的复合索引可支持某位美甲师的日程查询，但不保证仅按时间筛选也高效。'],
    code: 'CREATE INDEX appointments_artist_time_idx\nON appointments (artist_id, starts_at);', codeLanguage: 'SQL',
  },
  {
    explanation: ['EXPLAIN shows the planned execution steps and estimated costs. EXPLAIN ANALYZE actually executes the query and reports measured timing and row counts. A sequential scan can be the right choice for a small table or a query that returns many rows.', 'EXPLAIN 显示执行计划和估算成本。EXPLAIN ANALYZE 会实际执行查询，并显示测量到的时间与行数。小表或返回大量数据时，顺序扫描可能就是合理选择。'],
    takeaway: ['Compare estimated and actual row counts and inspect scan methods. Remember that ANALYZE executes writes too; use a transaction and ROLLBACK when examining a reversible write.', '比较估算行数与实际行数，并观察扫描方式。ANALYZE 也会执行写操作；分析可回滚的写操作时应使用事务与 ROLLBACK。'],
    code: 'EXPLAIN (ANALYZE, BUFFERS)\nSELECT id, starts_at\nFROM appointments\nWHERE artist_id = $1\nORDER BY starts_at\nLIMIT 20;', codeLanguage: 'SQL',
  },
  {
    explanation: ['A transaction groups operations into one unit. BEGIN starts it, COMMIT makes its changes permanent and ROLLBACK discards them. ACID describes atomicity, consistency, isolation and durability. Isolation determines what concurrent transactions can observe.', '事务把一组操作作为一个整体。BEGIN 开始事务，COMMIT 提交，ROLLBACK 撤销。ACID 分别表示原子性、一致性、隔离性和持久性。隔离性决定并发事务能观察到什么。'],
    takeaway: ['Reserve a slot and create the appointment in the same transaction. Have the backend verify that the slot update affected one row before inserting; otherwise roll back.', '占用时段和创建预约应放在同一个事务里。后端先确认更新确实影响了一行，再插入预约；否则回滚。'],
    code: "BEGIN;\nUPDATE artist_slots SET reserved = true\nWHERE id = $1 AND reserved = false\nRETURNING id;\n-- Continue only if one slot was returned.\nINSERT INTO appointments (id, slot_id, user_id)\nVALUES ($2, $1, $3);\nCOMMIT;", codeLanguage: 'SQL',
  },
  {
    explanation: ['A race condition happens when the outcome depends on timing. Two requests can both read that a slot is free before either writes. A transaction alone does not remove this race. Use a conditional update, suitable locks, database constraints or stronger isolation with retry handling.', '竞态条件意味着结果取决于执行时序。两个请求可能都先读到“时段可用”，然后同时写入。仅使用事务不能自动解决这个问题；需要条件更新、合适的锁、数据库约束，或更强隔离级别配合重试。'],
    takeaway: ['For fixed slots, enforce one appointment per slot with UNIQUE(slot_id). Variable-length appointments need overlap rules; uniqueness on a start time alone is insufficient.', '固定时段可以使用 UNIQUE(slot_id) 防止重复预约。不同长度的预约需要处理时间区间重叠，仅约束开始时间唯一并不够。'],
    code: 'ALTER TABLE appointments\nADD CONSTRAINT one_booking_per_slot UNIQUE (slot_id);\n\nBEGIN;\nSELECT id, reserved FROM artist_slots\nWHERE id = $1 FOR UPDATE;\n-- Check availability and create the booking.\nCOMMIT;', codeLanguage: 'SQL',
  },
  {
    explanation: ['Offset pagination skips a number of rows; it is easy to implement but large offsets can be costly and changing data can shift pages. Cursor pagination continues after an ordered value. Use a unique tie-breaker so rows with the same timestamp have a stable order.', 'Offset 分页跳过一定数量的行，实现简单，但大偏移量可能昂贵，数据变化也可能使页面错位。Cursor 分页从有序值之后继续读取。应加入唯一字段处理相同时间戳，保证顺序稳定。'],
    takeaway: ['Use a starts_at and id cursor for an appointment feed, with a matching order and index.', '预约列表可使用 starts_at 和 id 组成游标，配合相同排序规则与索引。'],
    code: 'SELECT id, starts_at FROM appointments\nWHERE (starts_at, id) > ($1, $2)\nORDER BY starts_at ASC, id ASC\nLIMIT 20;\n\n-- First page: omit the cursor predicate.', codeLanguage: 'SQL',
  },
  {
    explanation: ['N+1 means fetching a list once and then issuing another query for every item. The query count grows with the list size. A join, batched lookup or ORM relation loading can reduce round trips; inspect generated SQL instead of assuming include always produces one query.', 'N+1 指先查询一次列表，再为每条记录分别查询一次。查询次数随列表长度增长。JOIN、批量查询或 ORM 关联加载能减少往返，但不能假设 include 一定只生成一个查询，应检查实际 SQL。'],
    takeaway: ['Load appointments for a set of artist IDs in a single batched query, then group the results in the application.', '一次批量查询多个美甲师的预约，再在应用中按美甲师分组。'],
    code: 'SELECT id, artist_id, starts_at\nFROM appointments\nWHERE artist_id = ANY($1::uuid[]);', codeLanguage: 'SQL',
  },
  {
    explanation: ['Prisma is an ORM; PostgreSQL is the database. The Prisma schema defines models and relations, migrations change the database structure, and seed scripts add initial data. Prisma Client provides typed queries; transactions and parameterised raw SQL remain useful when needed.', 'Prisma 是 ORM，PostgreSQL 是数据库。Prisma Schema 定义模型与关联，Migration 修改数据库结构，Seed 写入初始数据。Prisma Client 提供类型化查询，必要时也可以使用事务和参数化原生 SQL。'],
    takeaway: ['Understand the SQL and constraints behind the ORM. Review migrations before applying them, and avoid interpolating user input into raw SQL strings.', '理解 ORM 背后的 SQL 和约束。执行前检查迁移内容，原生 SQL 不要直接拼接用户输入。'],
    code: 'model ArtistSlot {\n  id        String   @id @default(uuid()) @db.Uuid\n  artistId  String   @db.Uuid\n  startsAt  DateTime @db.Timestamptz(6)\n  reserved  Boolean  @default(false)\n\n  @@unique([artistId, startsAt])\n}', codeLanguage: 'Prisma',
  },
  {
    explanation: ['A database connection is a session between client and server. A pool reuses a limited set of connections instead of opening a new one for every request. Each backend instance contributes to the total connection count, including when the application scales.', '数据库连接是客户端与服务器之间的会话。连接池复用有限数量的连接，避免每次请求都新建连接。每个后端实例都贡献一部分连接数，扩容时总连接数也会增加。'],
    takeaway: ['Reuse the application’s database client and measure pool wait time. Pool settings depend on the driver or adapter and deployed Prisma version.', '复用应用中的数据库客户端，并观察连接池等待时间。连接池配置取决于驱动、适配器与实际使用的 Prisma 版本。'],
    code: 'Total possible connections ≈\n  backend instances × pool limit per instance\n  + migrations / admin tools / other clients', codeLanguage: 'Flow',
  },
  {
    explanation: ['PostgreSQL supports UUID identifiers, enums for bounded values, JSONB documents, arrays and timestamp types. Choose a representation based on how the data is queried. B-tree indexes suit many ordered comparisons; GIN can support appropriate JSONB and array queries.', 'PostgreSQL 支持 UUID、枚举、JSONB、数组和多种时间类型。应根据查询方式选择数据表示。B-tree 适用于许多有序比较；GIN 可以支持合适的 JSONB 与数组查询。'],
    takeaway: ['Keep frequently related data in tables. Use JSONB for flexible attributes and add an index only when actual queries justify it.', '经常需要关联的数据保留在表中。JSONB 用于灵活属性，只有真实查询需要时才添加索引。'],
    code: 'CREATE INDEX services_metadata_gin_idx\nON services USING gin (metadata);\n\nSELECT id, name FROM services\nWHERE metadata @> \'{"category":"nail"}\'::jsonb;', codeLanguage: 'SQL',
  },
  {
    explanation: ['A cache holds copies of data to reduce repeated work. A hit finds cached data; a miss loads it from the source. TTL limits how long a value remains cached. Cache-aside reads the cache first and stores a database result on a miss. Writes need an invalidation strategy.', '缓存保存数据副本，减少重复工作。Hit 表示命中，Miss 表示未命中并需要读取数据源。TTL 限制缓存存活时间。Cache-aside 先查缓存，未命中再查数据库并回填。写入时需要制定失效策略。'],
    takeaway: ['Cache artist profiles if useful, but check booking availability in the database. A stale cache should never be the final authority for accepting a booking.', '有需要时缓存美甲师资料，但预约可用性应由数据库确认。过期缓存不能成为接受预约的最终依据。'],
    code: 'Read profile → Redis GET\n  Hit: return cached profile\n  Miss: read PostgreSQL → Redis SET with TTL\n\nUpdate profile → commit database write\n               → invalidate cached profile', codeLanguage: 'Flow',
  },
  {
    explanation: ['Separate data from SQL using query parameters. Validate shape and values at the API boundary, then check permissions using the authenticated user. Keep database credentials in environment or secret configuration and give the application only the database privileges it needs.', '使用查询参数把数据与 SQL 分开。在 API 入口校验数据结构和值，再基于已认证用户检查权限。数据库凭证保存在环境配置或密钥管理中，应用只获得必要的数据库权限。'],
    takeaway: ['A valid appointment ID does not grant access. Restrict the query to the current user as well as the ID.', '预约 ID 合法并不代表有访问权限。查询时同时限制预约 ID 和当前用户。'],
    code: 'SELECT id, starts_at FROM appointments\nWHERE id = $1 AND user_id = $2;\n\n-- $1: validated appointment ID\n-- $2: authenticated user ID, not a trusted request field', codeLanguage: 'SQL',
  },
  {
    explanation: ['Production work includes reviewed migrations, backups, restore testing, logs and monitoring. Watch slow queries, connection use, storage and errors. Cloud hosting changes how infrastructure is managed, but does not remove the need to plan recovery and access control.', '生产环境需要审查迁移、备份、恢复演练、日志和监控。关注慢查询、连接数、存储和错误。云数据库改变基础设施的管理方式，但仍需要规划恢复和访问控制。'],
    takeaway: ['Test migrations in staging, confirm a recovery plan and verify backups can be restored. Treat destructive schema changes as deliberate release work.', '先在预发布环境验证迁移，确认恢复方案，并验证备份可以恢复。删除字段等破坏性变更应作为明确的发布步骤处理。'],
    code: 'Before release: review migration → test in staging\n                → verify recovery plan\nAfter release:  monitor errors, queries and connections\nRegularly:      back up → restore test → review access', codeLanguage: 'Flow',
  },
]
