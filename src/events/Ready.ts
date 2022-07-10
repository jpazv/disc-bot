import { Client } from "discord.js";
import Event from "../structures/Event";
import commandHandler from "../commands";
import Deploy from "../client/deploy";

export default class Ready extends Event {
    constructor() {
        super({
            name: "ready",
            listener: "once"
        })
    }
    async execute(client: Client) {
        console.log(`Ready! ${client.user?.tag} is on ${client.guilds.cache.size} servers.`);
        commandHandler.loadCommands();
        new Deploy().online(client);
    }
}