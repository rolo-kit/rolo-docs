import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Framework for modern browser extensions</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  return (
    <section className="container margin-vert--lg">
      <div className="row">
        <div className="col col--6">
          <h2>Features</h2>
          <ul>
            <li><b>Project Initialization (init):</b> Instantly scaffold new projects with best practices and ready-to-go templates.</li>
            <li><b>Hot Module Reloading (HMR):</b> Lightning-fast updates in your development environment without full page reloads.</li>
            <li><b>Quick Builds:</b> Rapid builds with optimized configurations for both development and production.</li>
            <li><b>Template Support:</b> Choose from React and Vanilla JS templates to kickstart your project.</li>
            <li><b>Easy CLI Commands:</b> Simple and intuitive commands for all major actions.</li>
          </ul>
        </div>
        <div className="col col--6">
          <h2>Getting Started</h2>
          <ol>
            <li>
              <b>Install Rolo</b> (if published to npm):
              <pre><code>npm install -g rolo-cli</code></pre>
            </li>
            <li>
              <b>Initialize a New Project:</b>
              <pre><code>rolo init</code></pre>
            </li>
            <li>
              <b>Start Development Server with HMR:</b>
              <pre><code>rolo dev</code></pre>
            </li>
            <li>
              <b>Build Your Project:</b>
              <pre><code>rolo build</code></pre>
            </li>
            <li>
              <b>Update configurations and permissions:</b>
              <pre><code>rolo config [options]</code></pre>
            </li>
          </ol>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--6">
          <h2>CLI Commands</h2>
          <ul>
            <li><code>rolo init</code> – Scaffold a new project</li>
            <li><code>rolo dev</code> – Start development server with HMR</li>
            <li><code>rolo build</code> – Build the project for production</li>
            <li><code>rolo config [options]</code> – Update configurations and permissions</li>
          </ul>
        </div>
        <div className="col col--6">
          <h2>Templates</h2>
          <ul>
            <li><b>React:</b> Modern React setup with Vite</li>
            <li><b>Vanilla JS:</b> Lightweight vanilla JavaScript template</li>
          </ul>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--12">
          <h2>Development</h2>
          <ol>
            <li>
              <b>Install dependencies:</b>
              <pre><code>cd packages/cli
npm install</code></pre>
            </li>
            <li>
              <b>Build the CLI package:</b>
              <pre><code>cd packages/cli
npm run build --workspace=cli</code></pre>
            </li>
            <li>
              <b>Link the CLI globally:</b>
              <pre><code>cd packages/cli
npm link</code></pre>
            </li>
            <li>
              <b>Verify Node.js version (should be 20):</b>
              <pre><code>node -v
# v20.x.x</code></pre>
            </li>
          </ol>
          <p>You can now use the <code>rolo</code> command globally for local development and testing.</p>
          <h2 className="margin-top--lg">rolo.config.json Options</h2>
          <ul>
            <li><b>name</b>: The name of your extension.</li>
            <li><b>description</b>: A short description of your extension.</li>
            <li><b>templateType</b>: <code>react</code> or <code>vanilla</code> (template used for the project).</li>
            <li><b>permissions</b>: Array of Chrome extension permissions (e.g. <code>["storage", "tabs"]</code>).</li>
            <li><b>version</b>: The version of your extension.</li>
            <li><b>author</b>: The author of the extension.</li>
            <li><b>manifest</b>: Object for custom manifest fields (merged into manifest.json).</li>
            {/* Add more config options as your project supports them */}
          </ul>

          <h2 className="margin-top--lg">rolo config Command</h2>
          <p>
            The <code>rolo config</code> command lets you view, add, update, or remove keys in your <code>rolo.config.json</code> file from the CLI. It supports merging values into arrays/objects, and will prompt for missing keys/values if not provided via CLI options. You can also edit <code>rolo.config.json</code> manually for advanced or bulk changes.
          </p>
          <ul>
            <li><b>Set a config value:</b> <br />
              <code>rolo config --key name --value "My Extension"</code>
            </li>
            <li><b>Set a JSON array value:</b> <br />
              <code>rolo config --key permissions --value '["storage","tabs"]'</code>
            </li>
            <li><b>Add a value to an existing array property:</b> <br />
              <code>rolo config --key permissions --value 'cookies' --add</code>
            </li>
            <li><b>Remove a config key:</b> <br />
              <code>rolo config --key permissions --remove</code>
            </li>
            <li>If you omit <code>--key</code> or <code>--value</code>, the CLI will prompt you interactively.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Rolo is a modern CLI tool for browser extension development. Fast project initialization, HMR, and quick builds.">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
