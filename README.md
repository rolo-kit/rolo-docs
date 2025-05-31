# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Rolo Docs

This repository contains the documentation for the Rolo CLI and extension framework.

## About Rolo

Rolo is a modern CLI tool designed to streamline browser extension development. It provides fast project initialization, hot module reloading (HMR), and optimized builds for both React and Vanilla JS templates.

- [Rolo GitHub Repository](https://github.com/rolo-kit/rolo)
- [Rolo CLI Documentation](https://github.com/rolo-kit/rolo/tree/main/packages/cli)

## Documentation Generation

Documentation for each CLI command is generated automatically using the [rolo-generate-docs](https://github.com/rolo-kit/rolo-generate-docs) utility. For setup and usage instructions, see the [rolo-generate-docs README](../rolo-generate-docs/README.md).

---

For more information, see the main [Rolo repository](https://github.com/rolo-kit/rolo).
