import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import fs from 'fs';
import path from 'path';

/** Dynamically generate CLI command docs for the sidebar */
function getCliCommandDocs() {
  const docsDir = path.join(__dirname, 'docs');
  let items: string[] = [];
  try {
    items = fs
      .readdirSync(docsDir)
      .filter((file) => file.startsWith('cli-') && file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''))
      .sort();
  } catch (e) {
    // fallback: static list if docsDir not found
    items = ['cli-build', 'cli-config', 'cli-dev', 'cli-init'];
  }
  return items;
}

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'CLI Commands',
      items: getCliCommandDocs(),
    },
  ],
};

export default sidebars;
