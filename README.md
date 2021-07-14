## GraphQL基础

GraphQL api由模式和解析器两部分组成

### 模式

模式是数据和交互的书面表示。API可能只返回数据，并执行模式中定义的交互操作。GraphQL模式的基本构建是对象类型。

GraphQL原生支持五种标量类型：
- String
- Boolean
- Int
- Float
- ID

API的模式使用这些基本构建编制。在模式中，必须提供的字段使用感叹号表示。例如：

```graphql
type Pizza {
    id: ID!
    size: String!
    slices: Int!
    toppings: [String]
}
```

### 解析器

解析api用户请求的数据

- 查询
- 变更