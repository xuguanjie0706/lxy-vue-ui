# windicss

## 安装

```bash
pnpm i -D vite-plugin-windicss windicss
```

```vite.config.ts
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

就是这样！开始在你的应用程序中使用类实用程序或CSS指令，享受速度！

## 配置文件

- windi.config.ts
- windi.config.js
- tailwind.config.ts
- tailwind.config.js

```windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
})
```

```windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
})
```

## 开启属性

```windi.config.ts
attributify: true,
```

### 增加前缀

```windi.config.ts
attributify: {
    prefix:"x"
},
```
