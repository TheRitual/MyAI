import { AI_System } from "../interfaces/ai-system.interface";

export const printSystemConfiguration = (config: AI_System) => {
  console.log("\n================================ \n");
  console.log("AI_SYSTEM configuration: \n");
  console.log("EMOTIONS:");
  console.log("\tAnger\t:::\t", config.emotions.anger);
  console.log("\tDisgust\t:::\t", config.emotions.disgust);
  console.log("\tFear\t:::\t", config.emotions.fear);
  console.log("\tJoy\t:::\t", config.emotions.joy);
  console.log("\tSadness\t:::\t", config.emotions.sadness);
  console.log("\n================================ \n");
};
