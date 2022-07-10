import { Client, Partials } from "discord.js";
import eventHandler from "../events";

const client = new Client({
    intents:["Guilds", "GuildMessages"],
    partials:[Partials.Message]
});

export default client

eventHandler.loadEvents();