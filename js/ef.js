define(function(require,exports,module){exports.name="E",exports.sayHi=function(){debug("E's uri is "+module.uri);var f=require("./f");f.sayHi()}}),define(function(require,exports,module){exports.name="F",exports.sayHi=function(){debug("I am merged with E, but uri is still "+module.uri)}});