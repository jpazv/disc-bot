import { ClientEvents } from "discord.js";

export default abstract class Event{
   constructor(public data: {name: keyof ClientEvents, listener?: "on"|"once"}){

   }
   abstract execute(...args: (ClientEvents)[keyof ClientEvents]): Promise<any>;
}