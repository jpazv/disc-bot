import { ShardingManager } from  "discord.js";
import "dotenv/config";
import { join } from "path";
import {execArgv} from "node:process";

const manager = new ShardingManager(join(__dirname, "bot.ts"), {execArgv});

manager.on("shardCreate", (shard)=>{console.log(`launched shard ${shard.id}`)});
manager.spawn();