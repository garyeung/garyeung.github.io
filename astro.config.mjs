// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm'
import tailwindcss from '@tailwindcss/vite';
import {rehypeImageProcessor} from './src/plugins/rehype-plugins';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: "https://garyeung.github.io/",
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath
    ],

    rehypePlugins: [
      rehypeImageProcessor,
      rehypeKatex

    ]
  }

});