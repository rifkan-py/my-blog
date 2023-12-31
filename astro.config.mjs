import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rifkan-py.github.io",
  integrations: [mdx(), sitemap()],
  base: "/my-blog",
});
