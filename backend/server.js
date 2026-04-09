const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        return res.end();
    }
    if (req.url === "/api/login" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const { email, password } = JSON.parse(body);

                if (!email || !password) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ error: "All fields required" }));
                }

                const dummyUser = {
                    email: "test@example.com",
                    password: "123456"
                };

                if (email === dummyUser.email && password === dummyUser.password) {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ message: "Login successful" }));
                } else {
                    res.writeHead(401, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ error: "Invalid credentials" }));
                }

            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });

        return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});