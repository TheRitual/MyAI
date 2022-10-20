"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initial_system_configuration_1 = require("./data/initial-system-configuration");
const print_system_configuration_1 = require("./utils/print-system-configuration");
console.clear();
console.log("\nINITIALIZATION");
(0, print_system_configuration_1.printSystemConfiguration)(initial_system_configuration_1.INITIAL_SYSTEM_CONFIGURATION);
