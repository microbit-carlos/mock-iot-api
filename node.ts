/**
 * Concept IoT blocks to test out usability.
 */
//% color=275 weight=100 icon="\uf0c2" block="IoT Node" advanced=false
namespace IoTNode {
    /**
     * Notify the hub of your existence.
     * @param name micro:bit name
     */
    //% blockId=iot_node_sendName
    //% block="IoT|I am: %name"
    export function sendName(name: string): void {
        console.log("Node to Hub -> I am " + name);
    }

    /**
     * Update node sync interval.
     * @param interval New update interval in milliseconds. eg: 1000
     */
    //% blockId=iot_node_sendInterval
    //% block="IoT|set interval to %interval|ms"
    export function sendInterval(interval: number = 1000): void {
        console.log("Node -> Set interval to " + interval + " ms.");
    }

    /**
     * Send a variable value to the hub.
     * @param varName Name of the variable stored in the hub.
     * @param value Variable value.
     */
    //% blockId=iot_node_sendVariable
    //% block="IoT|send value: %varName|=%any"
    export function sendVariable(varName: string, value: string): void {
        console.log("Node to Hub -> Send var `" + varName + "` value: " + value);
    }

    /**
     * Read a variable from the hub.
     * @param varName Name of the variable stored in the hub.
     */
    //% blockId=iot_node_readVariable
    //% block="IoT|read value: %varName"
    export function readVariable(varName: string): string {
        let valueReturned: string = "value_from_" + varName;
        console.log("Node to Hub -> Read variable '" + varName + "`: " + valueReturned);
        return valueReturned;
    }

    /**
     * Run code on received command from hub.
     * @param command Command sent from hub.
     */
    //% blockId=iot_node_onCommand
    //% block="IoT|on command %command"
    export function onCommand(command: string, cb: () => void): void {
        // Faking in the simulator receiving this command every 5 seconds
        control.inBackground(() => {
            while (true) {
                basic.pause(5000);
                console.log("Hub to Node -> Command: " + command);
                cb();
            }
        });
    }

    /**
     * Run code when a variable in the hub has changed.
     * @param varName Name of the hub variable to be tracked.
     */
    //% blockId=iot_node_onVarChange
    //% block="IoT|on variable %varName|change"
    export function onVariableChange(varName: string, cb: () => void): void {
        // Faking in the simulator receiving this command every 15 seconds
        control.inBackground(() => {
            while (true) {
                basic.pause(15000);
                console.log("Hub to Node -> Variable change detected: " + varName);
                cb();
            }
        });
    }

    /**
     * Hub requests a variable from the node.
     * @param varName Name of the hub variable to be tracked.
     */
    //% blockId=iot_node_onVarRequest
    //% block="IoT|on request for|%varName|"
    export function onVariableRequest(varName: string, cb: () => void): void {
        // Faking in the simulator receiving this command every 20 seconds
        control.inBackground(() => {
            while (true) {
                basic.pause(20000);
                console.log("Hub to Node -> Variable requested: " + varName);
                cb();
            }
        });
    }
}
