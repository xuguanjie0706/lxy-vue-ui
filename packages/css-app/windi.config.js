import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: {
    prefix: 'lxy',
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
});
