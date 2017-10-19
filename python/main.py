from microbit import *
import IoTNode

IoTNode.send_name("Fred")
IoTNode.send_interval(1000)


while True:
    temp = temperature()
    display.scroll("{}".format(temp))

    if IoTNode.command_received("hub_command"):
        display.show("x")

    if IoTNode.variable_requested("temp"):
        temp = temperature()
        IoTNode.send_variable("hello_var", "{}".format(temp))

    if IoTNode.variable_changed("temp"):
        temp = IoTNode.read_variable("temp")
        display.scroll(("{}".format(temp)))

    sleep(500)
