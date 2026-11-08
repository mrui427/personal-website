export interface Project {
  slug: string
  title: string
  subtitle: string
  year: string
  category: string
  role: string
  stack: string[]
  shortDescription: string

  overview: string
  problem: string
  solution: string

  highlights: string[]
  responsibilities: string[]
  learnings: string[]

  accent: string
  github?: string
  demo?: string
  translations?: Partial<Project>
}

export const projects: Project[] = [
  {
    slug: 'smartnail',
    title: 'SmartNail',
    subtitle: 'Nail booking and schedule management platform',
    year: 'Mar 2026 – Present',
    category: 'Personal Project',
    role: 'Full-stack Developer',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'JWT',
    ],

    shortDescription:
      'A full-stack booking platform designed around small nail studios, with separate customer and artist workflows for appointments and schedule management.',

    overview:
      'SmartNail is a personal project shaped by conversations with nail professionals in China and Australia. I planned a two-role MVP that replaces scattered messages and manual records with clear customer booking and artist scheduling workflows.',

    problem:
      'Small nail studios often manage appointments through chat messages and manual notes. This makes it easy to lose track of availability, create schedule conflicts and spend extra time handling cancellations.',

    solution:
      'I defined the core customer and nail artist workflows, then built a full-stack platform for artist profiles and portfolios, appointment creation and cancellation, and availability management. Booking checks use artist availability and appointment start and end times to prevent conflicts.',

    highlights: [
      'Two role-based experiences for customers and nail artists',
      'Artist profile and portfolio browsing',
      'Appointment creation and cancellation workflows',
      'Artist availability and schedule management',
      'Conflict checks based on availability and appointment start and end times',
      '22 backend APIs built with NestJS',
      'PostgreSQL data model managed with Prisma',
    ],

    responsibilities: [
      'Interviewed nail professionals in China and Australia to understand booking and scheduling pain points',
      'Planned a two-role MVP and designed 10 functional pages and business workflows',
      'Built the frontend and backend with React, TypeScript and NestJS',
      'Developed 22 backend APIs for authentication, artist profiles, portfolios, appointments and availability',
      'Modelled booking data with PostgreSQL and Prisma',
      'Implemented appointment creation, cancellation and schedule-conflict validation',
      'Deployed the system and continued frontend-to-backend integration',
    ],

    learnings: [
      'How conversations with users can shape a focused product MVP',
      'How to translate scheduling rules into reliable validation across API and data layers',
      'How to build and integrate a full-stack application across 22 backend endpoints',
      'How deployment and iterative integration fit into an ongoing product build',
    ],

    accent: '#f3d7df',
    translations: {
      title: 'SmartNail 美甲预约管理平台',
      subtitle: '美甲预约与档期管理平台',
      year: '2026年3月至今',
      category: '个人项目',
      role: '全栈开发者',
      shortDescription:
        '面向小型美甲工作室的全栈预约平台，为顾客与美甲师提供预约和档期管理流程。',
      overview:
        'SmartNail 是一个通过与中国及澳洲美甲从业者交流而规划的个人项目。我从双角色 MVP 出发，将分散的聊天消息和人工记录转化为清晰的顾客预约与美甲师排班流程。',
      problem:
        '小型美甲工作室常通过聊天消息和人工记录管理预约，容易遗漏档期、产生时间冲突，也让取消预约需要额外沟通。',
      solution:
        '我梳理了顾客与美甲师的核心流程，并构建了支持美甲师资料和作品集展示、预约创建与取消以及空闲时间维护的全栈平台。预约校验结合美甲师可用时间及预约开始、结束时间来避免冲突。',
      highlights: [
        '为顾客与美甲师设计双角色使用流程',
        '浏览美甲师资料与作品集',
        '创建及取消预约',
        '美甲师空闲时间与档期管理',
        '基于可用时间和预约起止时间进行冲突校验',
        '使用 NestJS 开发 22 个后端 API',
        '使用 PostgreSQL 与 Prisma 管理关系型数据',
      ],
      responsibilities: [
        '与中国及澳洲美甲从业者交流，了解预约和排班痛点',
        '规划双角色 MVP，设计 10 个功能页面及业务流程',
        '使用 React、TypeScript 和 NestJS 搭建前后端',
        '为认证、美甲师资料、作品集、预约和空闲时间等模块开发 22 个后端 API',
        '使用 PostgreSQL 和 Prisma 设计预约数据模型',
        '实现预约创建、取消及档期冲突校验',
        '完成系统部署并持续进行前后端联调',
      ],
      learnings: [
        '如何通过用户交流确定聚焦的产品 MVP',
        '如何将排班规则转化为 API 与数据层中的可靠校验',
        '如何围绕 22 个后端接口构建并集成全栈应用',
        '如何在持续开发中推进部署与迭代联调',
      ],
    },
  },

  {
    slug: 'ai-visibility-analytics',
    title: 'AI Visibility Analytics',
    subtitle: 'AI advertising analysis platform',
    year: 'Feb–Jun 2026',
    category: 'Industry Project',
    role: 'Requirements Analysis, Product Design & Technical Delivery',
    stack: ['React', 'TypeScript', 'RESTful APIs', 'Figma', 'LLM Prompting', 'OCR'],

    shortDescription:
      'A client-facing platform that makes advertising analysis easier to search, compare and reuse through structured data and AI-assisted insights.',

    overview:
      'At Aeoflo, I worked in an eight-person Agile team on an AI advertising analysis platform for an external client. I contributed across requirements analysis, product design, frontend delivery and AI output testing.',

    problem:
      'The client relied on offline PDF analysis and manual workflows, making it difficult to find information, compare Keyword and Brand reports, and reuse advertising insights.',

    solution:
      'The team brought Dashboard, Report, Portfolio and Scan workflows into an online platform. I clarified requirements with the client, designed page and interaction prototypes, delivered frontend pages and API integrations, and iterated on prompts using fixed advertising samples.',

    highlights: [
      'Dashboard, Report, Portfolio and Scan product workflows',
      '8–10 Figma pages and interaction prototypes',
      '11 frontend pages delivered within an eight-person Agile team',
      'Integration testing across 14 RESTful API endpoints',
      'Structured extraction of brands, product categories and advertising claims',
      'Prompt evaluation for accuracy, consistency and fabricated content',
      'Unified Keyword and Brand report presentation with differentiated analysis',
    ],

    responsibilities: [
      'Participated in 12 client meetings to clarify requirements, report progress and raise issues',
      'Analyzed differences in Keyword and Brand reporting and proposed two prototype options',
      'Designed 8–10 pages and interaction prototypes in Figma',
      'Independently delivered 11 frontend pages and integrated 14 RESTful API endpoints',
      'Aligned frontend data handling with backend response fields and structures',
      'Tested and refined LLM prompts using fixed advertising samples',
      'Supported integration testing, deployment and client acceptance',
    ],

    learnings: [
      'How to turn client discussions and competing requirements into reviewable product options',
      'How to keep frontend and backend data contracts aligned during integration',
      'How to evaluate LLM extraction for accuracy, consistency and hallucinations',
      'How to coordinate delivery and acceptance in a client-facing Agile team',
    ],

    accent: '#dce7f3',
    translations: {
      title: 'AI 广告分析平台',
      subtitle: 'AI 广告分析平台',
      year: '2026年2月至6月',
      category: '企业项目',
      role: '需求分析、产品设计与技术交付',
      shortDescription:
        '面向客户的广告分析平台，通过结构化数据与 AI 辅助洞察，让广告分析更易检索、比较和复用。',
      overview:
        '在 Aeoflo，我作为 8 人敏捷团队成员参与面向外部客户的 AI 广告分析平台，工作涵盖需求分析、产品设计、前端交付与 AI 输出测试。',
      problem:
        '客户此前依赖离线 PDF 分析和手动流程，难以查找信息、比较 Keyword 与 Brand 报告并复用广告洞察。',
      solution:
        '团队将 Dashboard、Report、Portfolio 和 Scan 流程整合到线上平台。我参与客户需求沟通、页面与交互原型设计、前端页面和 API 集成，并使用固定广告样本迭代测试 Prompt。',
      highlights: [
        '覆盖 Dashboard、Report、Portfolio 和 Scan 等产品流程',
        '使用 Figma 设计 8–10 个页面及交互原型',
        '在 8 人敏捷团队中独立交付 11 个前端页面',
        '联调 14 个 RESTful API 接口',
        '结构化提取品牌、产品类别和广告卖点',
        '围绕准确性、一致性和内容编造测试 Prompt',
        '统一 Keyword 与 Brand 报告的展示形式，同时保留分析内容差异',
      ],
      responsibilities: [
        '参与 12 次客户会议，梳理需求、汇报进度并反馈问题',
        '分析 Keyword 与 Brand 报告差异并提出两版原型方案',
        '使用 Figma 设计 8–10 个页面及交互原型',
        '独立开发 11 个前端页面并联调 14 个 RESTful API 接口',
        '梳理后端返回字段与数据结构，协调前后端适配',
        '使用固定广告样本测试并优化 LLM Prompt',
        '支持系统集成测试、部署和客户验收',
      ],
      learnings: [
        '如何将客户讨论与不同诉求转化为可评审的产品方案',
        '如何在系统集成过程中保持前后端数据契约一致',
        '如何评估 LLM 提取结果的准确性、一致性和幻觉问题',
        '如何在面向客户的敏捷团队中协同交付与验收',
      ],
    },
  },

  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Hospital operations and data management',
    year: 'Jul–Dec 2024',
    category: 'Database Project',
    role: 'Database Design & SQL Development',
    stack: ['PostgreSQL', 'SQL', 'ER Diagram', 'Relational Data Model'],

    shortDescription:
      'A PostgreSQL database project modelling patients, doctors, appointments and medical records with SQL workflows for everyday data management.',

    overview:
      'This hospital management project focused on modelling core healthcare entities and implementing database operations for patient, doctor and appointment records.',

    problem:
      'Patient, doctor, appointment and medical record information is connected, so the data model needs to represent those relationships clearly and support reliable queries and updates.',

    solution:
      'I created an ER diagram and relational data model, designed a PostgreSQL database, and used SQL CRUD operations and multi-table queries to manage and retrieve core business records.',

    highlights: [
      'ER diagram for patients, doctors, appointments and medical records',
      'Relational data model and PostgreSQL schema',
      'SQL create, read, update and delete operations',
      'Multi-table joins for related healthcare records',
      'Data maintenance for patient, doctor and appointment information',
    ],

    responsibilities: [
      'Analysed the core entities and relationships in hospital workflows',
      'Designed the ER diagram and relational data model',
      'Implemented the PostgreSQL database schema',
      'Wrote SQL CRUD statements and multi-table queries',
      'Managed and updated patient, doctor and appointment records',
    ],

    learnings: [
      'How ER diagrams express relationships in a business domain',
      'How relational schemas support consistent data management',
      'How to use SQL joins and CRUD operations for connected records',
    ],

    accent: '#e6e1d9',
    translations: {
      title: '医院管理系统',
      subtitle: '医院业务与数据管理',
      year: '2024年7月至12月',
      category: '数据库项目',
      role: '数据库设计与 SQL 开发',
      shortDescription:
        '基于 PostgreSQL 的数据库项目，围绕患者、医生、预约和病历建模，并使用 SQL 管理业务数据。',
      overview:
        '该医院管理项目围绕核心医疗业务实体建模，并实现患者、医生和预约记录等数据操作。',
      problem:
        '患者、医生、预约和病历信息彼此关联，因此数据模型需要清晰表达这些关系，并支持可靠的查询与更新。',
      solution:
        '我绘制 ER Diagram 并建立关系数据模型，设计 PostgreSQL 数据库，通过 SQL CRUD 操作和多表查询管理、检索核心业务记录。',
      highlights: [
        '围绕患者、医生、预约和病历设计 ER Diagram',
        '建立关系数据模型并设计 PostgreSQL 数据库',
        '使用 SQL 实现增删改查操作',
        '使用多表关联查询获取相关医疗业务记录',
        '维护患者、医生和预约信息',
      ],
      responsibilities: [
        '梳理医院业务流程中的核心实体及其关系',
        '设计 ER Diagram 和关系数据模型',
        '设计 PostgreSQL 数据库结构',
        '编写 SQL CRUD 语句与多表查询',
        '管理和更新患者、医生及预约记录',
      ],
      learnings: [
        '如何使用 ER Diagram 表达业务领域中的实体关系',
        '关系型数据库结构如何支持一致的数据管理',
        '如何使用 SQL 关联查询和 CRUD 操作处理相关记录',
      ],
    },
  },
]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}