const https = require("https");

const getRequest = () =>
  new Promise((resolve, reject) => {
    const req = https.get(
      "https://api-memory-lane.onrender.com/schedule/send-memory",
      (res) => {
        let buffer = "";
        res.on("data", (chunk) => (buffer += chunk));
        res.on("end", () => resolve(JSON.stringify(buffer)));
      }
    );
    req.on("error", (e) => reject(e.message));
    req.end();
  });

getRequest().then((data) => console.log(data));
