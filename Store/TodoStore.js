/**
*  @Author: Sunil bn <sunhick@gmail.com>
*  @Desc: javascript file
*
*  Copyright (c) 2016.
*/
import React from "react";
import EventEmitter from "events";

class TodoStoreEvent extends EventEmitter {
    // Todo store events
}

var TodoStore = new TodoStoreEvent();
export default TodoStore;

window.event = TodoStore;