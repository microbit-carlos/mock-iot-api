from microbit import running_time


time = running_time()
next_cmd_time = time + 5000
next_var_checked_time = time + 15000
next_var_requested_time = time + 20000


def send_name(name):
    print("Node to Hub -> I am {}".format(name))


def send_interval(interval):
    print("Node -> Set interval to {} ms.".format(interval))


def send_variable(name, value):
    print("Node to Hub -> Send var {} value: {}".format(name, value))


def read_variable(name):
    valueReturned = "value_from_{}".format(name)
    print("Node to Hub -> Read variable '{}': {}".format(name, valueReturned))
    return valueReturned;


def command_received(cmd):
    global next_cmd_time
    received = False
    now = running_time()
    if now > next_cmd_time:
        received = True
        next_cmd_time = now + 5000
        print("Hub to Node -> Command: {}".format(cmd))
    return received


def variable_changed(var):
    global next_var_checked_time
    changed = False
    now = running_time()
    if now > next_var_checked_time:
        changed = True
        next_var_checked_time = now + 15000
        print("Hub to Node -> Command: {}".format(var))
    return changed


def variable_requested(var):
    global next_var_requested_time
    requested = False
    now = running_time()
    if now > next_var_requested_time:
        requested = True
        next_var_requested_time = now + 20000
        print("Hub to Node -> Command: {}".format(var))
    return requested
