"use strict";

let spa = (function() {
  let initModule = ( $container ) => {
    spa.shell.initModule(container);
  };
  return { initModule :initModule }
}());
