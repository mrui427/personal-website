export type TechSkill = { slug: string; title: string; category: [string, string]; summary: [string, string]; reference: string }
export const techSkills: TechSkill[] = [
  {slug:'react',title:'React',category:['Frontend','前端'],summary:['Components, state and effects for interactive interfaces.','组件、状态与副作用，构建交互式界面。'],reference:'https://react.dev/learn'},
  {slug:'typescript',title:'TypeScript',category:['Language','编程语言'],summary:['Types, narrowing and generics for reliable application code.','类型、类型收窄与泛型，让应用代码更可靠。'],reference:'https://www.typescriptlang.org/docs/handbook/'},
  {slug:'javascript',title:'JavaScript',category:['Language','编程语言'],summary:['Data, functions and asynchronous browser workflows.','数据、函数与浏览器异步流程。'],reference:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'},
  {slug:'python',title:'Python',category:['Language','编程语言'],summary:['Collections, functions and scripts for data processing.','集合、函数与数据处理脚本。'],reference:'https://docs.python.org/3/tutorial/'},
  {slug:'nestjs',title:'NestJS',category:['Backend','后端'],summary:['Controllers, services and validation for backend APIs.','控制器、服务与校验，组织后端 API。'],reference:'https://docs.nestjs.com/'},
  {slug:'postgresql',title:'PostgreSQL',category:['Database','数据库'],summary:['SQL, relationships and transactions for persistent data.','SQL、表关系与事务，管理持久化数据。'],reference:'https://www.postgresql.org/docs/current/tutorial.html'},
  {slug:'prisma',title:'Prisma',category:['Database','数据库'],summary:['Models, typed queries and migrations between code and SQL.','模型、类型化查询与迁移，连接代码和 SQL。'],reference:'https://www.prisma.io/docs/orm'},
  {slug:'git',title:'Git',category:['Tooling','开发工具'],summary:['Commits, branches and collaboration with version control.','提交、分支与版本控制协作。'],reference:'https://git-scm.com/docs/gittutorial'},
  {slug:'docker',title:'Docker',category:['Deployment','部署'],summary:['Images, containers and Compose for reproducible environments.','镜像、容器与 Compose，建立可复现环境。'],reference:'https://docs.docker.com/get-started/'},
  {slug:'vite',title:'Vite',category:['Tooling','开发工具'],summary:['Development server, environment variables and frontend builds.','开发服务器、环境变量与前端构建。'],reference:'https://vite.dev/guide/'},
  {slug:'langchain',title:'LangChain',category:['AI','AI'],summary:['Model calls, structured output and tools in AI applications.','模型调用、结构化输出与 AI 应用中的工具。'],reference:'https://docs.langchain.com/oss/javascript/langchain/overview'},
  {slug:'rest-api',title:'REST API',category:['Backend','后端'],summary:['Resources, HTTP semantics and dependable API contracts.','资源、HTTP 语义与可靠的 API 契约。'],reference:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods'},
]
