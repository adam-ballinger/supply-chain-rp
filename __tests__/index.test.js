const rp = require("../index");
const Database = require("workflow-database");

const db = new Database("__tests__/test-database");

console.log(db.findOne("resourceGroups", {}));
