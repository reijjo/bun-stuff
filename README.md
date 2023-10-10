<img src="https://github.com/reijjo/bun-stuff/assets/95418273/82cceb8d-1b04-4a29-929a-3bd17058461a" alt="bun" height="200px" /> Bun stuff

# Bun vs Node

## init server

### Node

- make a folder, `npm init -y` in that folder
- add to package.json

```json
	"start": "node index.js"
```

### Bun

- make a folder ,`bun init -y` in that folder
- add to package.json

```json
		"scripts" : {
		"start": "bun run index.js"
	},

```

## Add packages

### Node

- `npm install [PACKAGE NAME]`
- `npm install --save-dev [PACKAGE NAME]`

### Bun

- `bun add [PACKAGE NAME]`
- `bun add [PACKAGE NAME] --dev`

## Hot reload

### Node

- `npm install --save-dev nodemon`
- add to package.json on scripts

```json
	"dev": "nodemon index.js"
```

-> `npm run dev` to start the server

### Bun

- add to package.json on scripts

```json
	"dev": "bun --hot run index.js"
```

-> `bun run dev` to start the server




