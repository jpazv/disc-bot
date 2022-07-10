import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import SlashCommand from "../../structures/SlashCommand";

export default class extends SlashCommand{
    constructor(){
        super()
        this.data= new SlashCommandBuilder().setName("ping").setDescription("Replies with pong!");
    }
    async execute(interaction: ChatInputCommandInteraction){
        interaction.reply("pong");
    }
}

