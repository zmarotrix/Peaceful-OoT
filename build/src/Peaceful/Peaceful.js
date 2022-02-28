"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreInjection_1 = require("modloader64_api/CoreInjection");
const ModLoaderAPIInjector_1 = require("modloader64_api/ModLoaderAPIInjector");
const PluginLifecycle_1 = require("modloader64_api/PluginLifecycle");
const EventHandler_1 = require("modloader64_api/EventHandler");
const imports_1 = require("Z64Lib/API/imports");
const bitwise_1 = __importDefault(require("bitwise"));
class Peaceful {
    ModLoader;
    core;
    enabled = [true];
    //lastroom: number = this.ModLoader.V
    updateEnemy(actor) {
        if (this.enabled[0] && actor.actorType == 5 /* ENEMY */)
            actor.destroy();
    }
    onViUpdate() {
        if (this.enabled[0]) {
            if ( //Gohma
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x040F ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0410 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0411 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0412) {
                this.updateBitFlag(487, 6, 1);
                this.updateBitFlag(0, 6, 1);
                this.updateBitFlag(1, 0, 1);
            }
            if ( //King Dodongo
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x040B ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x040C ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x040D ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x040E) {
                this.updateBitFlag(5, 2, 1);
                this.updateBitFlag(515, 6, 1);
            }
            if ( //Barinade
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0301 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0302 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0303 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0304) {
                this.updateBitFlag(7, 0, 1);
                this.updateBitFlag(543, 6, 1);
            }
            if ( //Phantom Ganon
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000C ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000D ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000E ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000F) {
                this.updateBitFlag(8, 7, 1);
                this.updateBitFlag(571, 6, 1);
            }
            if ( //Vovalgia
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0305 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0306 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0307 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0308) {
                this.updateBitFlag(8, 6, 1);
                this.updateBitFlag(599, 6, 1);
            }
            if ( //Morpha
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0417 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0418 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0419 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x041A) {
                this.updateBitFlag(8, 5, 1);
                this.updateBitFlag(627, 6, 1);
            }
            if ( //Twinrova AND Nabooru
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008D ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008E ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008F ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0090) {
                this.updateBitFlag(6, 5, 1);
                this.updateBitFlag(191, 5, 1);
                this.updateBitFlag(191, 4, 1);
                this.updateBitFlag(651, 2, 1);
                this.updateBitFlag(655, 4, 1);
            }
            if ( //Bongo Bongo
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008D ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008E ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x008F ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0090) {
                this.updateBitFlag(683, 6, 1);
            }
            // OTHER FLAG UPDATES
            if ( //Wolfos kill in Sacred Forest Meadow
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x00FC ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x00FD ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x00FF ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0100) {
                this.updateBitFlag(2416, 0, 1);
            }
            if ( //Deku Tree Scrub Shild room
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0000 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0001 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0002 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0003) {
                this.updateBitFlag(11, 6, 1);
            }
            if ( //Gerudo Training Grounds
            this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0008 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x0009 ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000A ||
                this.ModLoader.emulator.rdramRead16(0x801DA2BA) == 0x000B) {
                this.updateBitFlag(312, 0, 1); //Left Room
                this.updateBitFlag(312, 1, 1); //Right Room
                this.updateBitFlag(319, 0, 1);
                this.updateBitFlag(319, 4, 1); //Wolfos
                this.updateBitFlag(314, 4, 1);
                this.updateBitFlag(318, 5, 1); //Like-Likes
            }
        }
        if (this.ModLoader.ImGui.beginMainMenuBar()) {
            if (this.ModLoader.ImGui.beginMenu("Mods")) {
                if (this.ModLoader.ImGui.beginMenu("Peaceful Mode")) {
                    if (this.ModLoader.ImGui.checkbox(": Enabled", this.enabled)) { }
                    this.ModLoader.ImGui.endMenu();
                }
                this.ModLoader.ImGui.endMenu();
            }
            this.ModLoader.ImGui.endMainMenuBar();
        }
    }
    updateBitFlag(byte, bit, set) {
        if (this.isBitSet(byte, bit, set))
            return;
        let temp = this.core.OOT.save.permSceneData;
        let tempbit = bitwise_1.default.byte.read(temp[byte]);
        tempbit[bit] = set;
        let tempfinal = bitwise_1.default.byte.write(tempbit);
        temp[byte] = tempfinal;
        this.core.OOT.save.permSceneData = temp;
        this.ModLoader.logger.debug("Stopping some violence!");
    }
    isBitSet(byte, bit, set) {
        let temp = this.core.OOT.save.permSceneData;
        let tempbit = bitwise_1.default.byte.read(temp[byte]);
        if (tempbit[bit] == set)
            return true;
        return false;
    }
}
__decorate([
    (0, ModLoaderAPIInjector_1.ModLoaderAPIInject)()
], Peaceful.prototype, "ModLoader", void 0);
__decorate([
    (0, CoreInjection_1.InjectCore)()
], Peaceful.prototype, "core", void 0);
__decorate([
    (0, EventHandler_1.EventHandler)(imports_1.Z64.OotEvents.ON_ACTOR_SPAWN)
], Peaceful.prototype, "updateEnemy", null);
__decorate([
    (0, PluginLifecycle_1.onViUpdate)() // Once per vertical interrupt (refresh, buffer swap)
], Peaceful.prototype, "onViUpdate", null);
exports.default = Peaceful;
//# sourceMappingURL=Peaceful.js.map