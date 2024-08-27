import { createServer } from "http";
const port = process.env.PORT;

const users = [
  { id: 1, name: "the battleground" },
  { id: 2, name: "spiderman" },
  { id: 3, name: "pablo" },
  { id: 4, name: "queen of the south" },
];

// logger
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const getAllUserHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

const getUsersByIDHandler = (req, res) => {
  const id = parseInt(req.url.split("/")[3]);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "User not found" }));
  }
};

// post method
const createHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid request body" }));
    }
  });
};

const NotFoundHandler = (req, res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      getAllUserHandler(req, res);
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      getUsersByIDHandler(req, res);
    } else if (req.url === "/api/users" && req.method === "POST") {
      createHandler(req, res);
    } else {
      NotFoundHandler(req, res);
    }
  });
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});