/**
 * Concept IoT blocks to test out usability.
 */
//% color=310 weight=100 icon="\uf0c2" block="IoT Hub" advanced=false
namespace IoTHub {
    /**
     * Reset all connected nodes.
     */
    //% blockId=iot_hub_resetAll
    //% block="IoT|reset all nodes"
    export function sendName(): void {
        console.log("Hub to Nodes -> Reset all nodes");
    }
}
