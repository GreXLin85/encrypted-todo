const express = require("express");
const { createServer } = require("http");
const models = require("./models/index");
const { Server } = require("socket.io");
const { sign, verify } = require('jsonwebtoken');
const cors = require("cors");
const validator = require("validator");
const app = express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

// create an express route for checking is todopage exists
app.get("/todopage/:uuid", async (req, res) => {
    const { uuid } = req.params;

    if (!validator.isUUID(uuid, 4)) {
        return res.status(404).json({ status: "Invalid UUID" });
    }

    const todopage = await models.TodoPage.findOne({
        where: {
            uuid: req.params.uuid
        },
        include: ["todos"]
    });
    if (todopage) {
        const token = sign(
            { id: todopage.id, uuid: req.params.uuid },
            "HEY",
            {
                expiresIn: "24h",
                algorithm: "HS256"
            }
        );
        return res.json({ status: token, todos : todopage.todos });
    } else {
        let newTodoPage = await models.TodoPage.create({
            uuid: req.params.uuid
        })
        const token = sign(
            { id: newTodoPage.id, uuid: req.params.uuid },
            "HEY",
            {
                expiresIn: "24h",
                algorithm: "HS256"
            }
        );
        return res.json({ status: token, todos: [] });
    }
});

io.on("connection", async (socket) => {

    // check if todopageid is valid
    if (!socket.handshake.query.todopagetoken) {
        socket.emit("error", "invalid-todopageid");
        socket.disconnect();
        return;
    }
    try {
        const todopage = verify(socket.handshake.query.todopagetoken, "HEY", {
            algorithms: ["HS256"],
        });

        socket.join(todopage.uuid);

        socket.on("todoadd", async (message) => {
            // create todopagetodo and save it
            models.TodoPageTodos.create({
                content: message.content,
                addedPeer: socket.id,
                todoPageId: todopage.id,
                isFinished: false
            });

            // if todopagetodo is created successfully, emit to all clients
            socket.to(todopage.uuid).emit("todoadd", message);
        });
        socket.on("tododelete", async (message) => {
            // delete todopagetodo and save it
            models.TodoPageTodos.destroy({
                where: {
                    id: message.id
                }
            });

            // if todopagetodo is deleted successfully, emit to all clients
            socket.to(todopage.uuid).emit("tododelete", message);
        });
        socket.on("todoupdate", async (message) => {
            // update todopagetodo and save it
            models.TodoPageTodos.update({
                content: message.content
            }, {
                where: {
                    id: message.id
                }
            });

            // if todopagetodo is updated successfully, emit to all clients
            socket.to(todopage.uuid).emit("todoupdate", message);
        });
        socket.on("todotoggle", async (message) => {
            // update todopagetodo and save it
            models.TodoPageTodos.update({
                isFinished: message.isFinished
            }, {
                where: {
                    id: message.id
                }
            });

            // if todopagetodo is updated successfully, emit to all clients
            socket.to(todopage.uuid).emit("todotoggle", message);
        });
    } catch (error) {
        socket.emit("error", "invalid-todopageid");
        socket.disconnect();
        return;
    }
});

httpServer.listen(3001, () => {
    console.log("Server is running on port 3001");
});