# gmd.js (Geometry Dash API Wrapper)
An NPM module to dynamically surf the Geometry Dash API.

***

## Installation
```sh
# Using NPM
npm install gmd.js

# Using Yarn
yarn add gmd.js
```

## Importing Module
```js
// Using Node.js
const gd = require("gmd.js");

// Using React.js
import "gmd.js";
```

## Functions

### `getLevel`:
**Description:**
Returns information about a level.

**Parameters:** 
- `id` - The ID of the level.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getLevel(10565740).then((res) => {
  console.log(res.body);
}); // Pass level ID for Bloodbath and log returned information to the console.
```

***

### `getProfileByName`:
**Description:** Returns information about a user profile.

**Parameters:**
- `name` - The username for the profile.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getProfileByName("Riot").then((res) => {
  console.log(res.body);
}); // Pass username "Riot" and log returned information to the console.
```

***

### `getProfileByAccountID`:
**Description:** Returns information about a user profile.

**Parameters:**
- `id` - The account ID for the profile.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getProfileByAccountID(37415).then((res) => {
  console.log(res.body);
}); // Pass account ID for Riot and log returned information to the console.
```

***

### `searchForLevelByName`:
**Description:** Returns information about a level.

**Parameters:**
- `name` - The name of the level.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.searchForLevelByName("Bloodbath").then((res) => {
  console.log(res.body);
});
```

***

### `getLeaderboard`:
**Description**: Returns an accurate Geometry Dash leaderboard.

**Parameters:**
- None

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getLeaderboard().then((res) => {
  console.log(res.body);
});
```

***

### `getLevelLeaderboard`:
**Description:** Returns the leaderboard for a specific level.

**Parameters:**
- `id` - The ID of the level.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getLevelLeaderboard(10565740).then((res) => {
  console.log(res.body);
}); // Pass level ID for Bloodbath and log returned information to the console.
```

***

### `getMapPacks`:
**Description:** Returns information about the map pack levels.

**Parameters:**
- None

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getMapPacks().then((res) => {
  console.log(res.body);
}); // Log map pack information to the console.
```

***

### `getGauntlets`:
**Description:** Returns information about the gauntlet levels.

**Parameters:**
- None

**Example Code:**
```js
const gd = require("gmd.js"); // Require module

gd.getGauntlets().then((res) => {
  console.log(res.body);
}); // Log gauntlet information to the console.
```

***

### `getTopComments`:
**Description:** Return the top comments on a level.

**Parameters:**
- `id` - The level ID.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getTopComments(10565740).then((res) => {
  console.log(res.body);
}); // Pass Level ID for Bloodbath and log returned information to the console.
```

***

### `getCube`:

**Description:** Returns a PNG image with the user's cube.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getCube("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getShip`:

**Description:** Returns a PNG image with the user's ship.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getShip("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getBall`:

**Description:** Returns a PNG image with the user's ball.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getBall("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getUFO`:

**Description:** Returns a PNG image with the user's UFO.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getUFO("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getWave`:

**Description:** Returns a PNG image with the user's wave.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getWave("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getRobot`:

**Description:** Returns a PNG image with the user's robot.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getRobot("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getSpider`:

**Description:** Returns a PNG image with the user's spider.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getSpider("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

### `getSwing`:

**Description:** Returns a PNG image with the user's swingcopter.

**Parameters:**
- `name` - The name of the user to get information from.

**Example Code:**
```js
const gd = require("gmd.js"); // Require module.

gd.getSwing("Riot").then((res) => {
  console.log(res.body);
}); // Pass user Riot and log returned information to the console
```

***

## Contact:
- **Discord:** LilJuiceBox491#3256
- **Scratch:** LilJuiceBox491
- **YouTube:** LilJuiceBox491
- **GitHub:** LilJuiceBox491
