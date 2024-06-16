import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { auth, requiresAuth } from "express-openid-connect";

import { config } from "./config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.get("/logout", (req, res) => {
  res.send("You are logged out");
});

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
