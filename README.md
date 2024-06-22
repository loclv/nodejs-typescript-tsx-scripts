# NodeJS Typescript TSX Scripts template

## Motivation

NodeJS Typescript Scripts template using pnpm.

- Using TSX - TypeScript Executer for Node.js.
- built-in `.env` file support with [Node.js v20.6.0 or above](https://nodejs.org/en/blog/release/v20.6.0)
- Simple logger build on top of `node:fs` and JS `console`.

## Environment

```bash
fnm use
# use `.node-version` file

# create `.env`
cp .env.example .env

# create logs folder
mkdir logs
```

## Development

```sh
pnpm i

# type checking only
pnpm type

pnpm test:log
```

Expected output in log file should look like following template:

```txt
[INFO] ENV: dev
[INFO] 🌱 Start script! 2024-06-22T06:02:27.995Z
[INFO] try
[INFO] finally
[INFO] ------------------
[INFO] 🌳 End script! 2024-06-22T06:02:27.996Z
```

Create a new script:

```sh
cp src/test-log.ts src/new-script.ts
```

Update the scripts configuration in `package.json`:

```json
{
  "scripts": {
    "new-script": "tsx --env-file=.env src/new-script.ts log-file-name",
    "test:log": "tsx --env-file=.env src/test-log.ts test-log",
    "type": "tsc --noEmit"
  }
}
```

Run the new script:

```sh
pnpm new-script
```
