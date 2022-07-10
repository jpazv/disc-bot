import { ChatInputCommandInteraction } from "discord.js";
import Event from "../structures/Event";
import SlashCommand from "../structures/SlashCommand";

export default class extends Event{
   constructor(){
    super({name: "interactionCreate"})
   }

   async execute(interaction:ChatInputCommandInteraction): Promise<any> {
       

        const {client} = interaction
        const command = client.commands.slash_interaction.get(interaction.commandName)as SlashCommand
        try {
           await command.execute(interaction)
            
        } catch (error) {
            console.error(error)
        }
       

   }
   
}