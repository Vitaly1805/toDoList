const bd = require("../dal/storage");

module.exports = (request, response) => {
const model = {
tasks: bd.getTasks(),
statuses: bd.getStatuses()
};

response.render("main", model);
}