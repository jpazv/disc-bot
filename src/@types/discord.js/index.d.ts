import { Collection } from "discord.js";

declare module "discord.js"{
    interface Client{
        commands: Record<Collection<string, any>>
    }
}
