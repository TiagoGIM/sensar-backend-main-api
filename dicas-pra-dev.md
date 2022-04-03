## Prisma

Para usar uuid auto gerado pelo db é preciso seguir o seguinte formato
```
model Company {
  id      String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name    String
  sectors Sector[]
}

model Sector {
  id            String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  company_owner Company? @relation(fields: [companyId], references: [id])
  companyId     String?  @db.Uuid
  name          String
  lines         Line[]
  lineId        Int?
}
```

Para corrigir problemas de autoformat do vscode com prisma, basta add ao settings.json

```
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true,
    "editor.detectIndentation": true
  }
```