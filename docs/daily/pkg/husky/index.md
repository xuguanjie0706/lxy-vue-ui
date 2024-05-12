# 代码规范

## eslint

创建eslint.config.js

```
pnpm i eslint@8
pnpm eslint --init
```

## prettier

```
pnpm i prettier prettier-plugin-organize-imports prettier-plugin-packagejson
```

## husky

快速得到一个.husky文件

```
pnpm i lint-staged husky@8
npx husky-init //初始化
```

### pre-commit

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

### 你还需要让eslint和prettier不冲突

```
pnpm i eslint-plugin-prettier eslint-config-prettier
```

::: info eslint.config.js extends: [

'plugin:prettier/recommended',

] :::

### package.json

```
"lint-staged": {
    "package.json": [
      "pnpm format"
    ],
    "src/**/*.{ts,.tsx}": [
      "pnpm lint"
    ]
}
```
