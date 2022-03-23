// Import External Packages
const got = require("got");

// Function Definitions
async function getLevel(id) {
  if (!typeof id == Number) return 404;

  const res = await got("https://gdbrowser.com/api/level/" + id);
  return res;
}

async function getProfileByName(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/profile/" + name);
  return res;
}

async function getProfileByAccountID(id) {
  if (!typeof id == Number) return 404;

  const res = await got("https://gdbrowser.com/api/profile/" + id);
  return res;
}

async function searchForLevelByName(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/search/" + name);
  return res;
}

async function getLeaderboard() {
  const res = await got("https://gdbrowser.com/api/leaderboard");
  return res;
}

async function getLevelLeaderboard(levelID) {
  if (!typeof levelID == Number) return 404;

  const res = await got("https://gdbrowser.com/api/leaderboardLevel/" + levelID);
  return res;
}

async function getMapPacks() {
  const res = await got("https://gdbrowser.com/api/mappacks");
  return res;
}

async function getGauntlets() {
  const res = await got("https://gdbrowser.com/api/gauntlets");
  return res;
}

async function getTopComments(id) {
  if (!typeof id == Number) return 404;

  const res = await got("https://gdbrowser.com/api/comments/" + id + "?top");
  return res;
}

async function getCube(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name);
  return res;
}

async function getShip(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=ship");
  return res;
}

async function getBall(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=ball");
  return res;
}

async function getUFO(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=ufo");
  return res;
}

async function getWave(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=wave");
  return res;
}

async function getRobot(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=robot");
  return res;
}

async function getSpider(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=spider");
  return res;
}

async function getSwing(name) {
  if (!typeof name == String) return 404;

  const res = await got("https://gdbrowser.com/api/icon/" + name + "?form=swing");
  return res;
}

// Export Functions
module.exports = {
  getLevel,
  getProfileByName,
  getProfileByAccountID,
  searchForLevelByName,
  getLeaderboard,
  getLevelLeaderboard,
  getMapPacks,
  getGauntlets,
  getTopComments,
  getCube,
  getShip,
  getBall,
  getUFO,
  getWave,
  getRobot,
  getSpider,
  getSwing
}
