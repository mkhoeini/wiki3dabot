// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Db$Reasonbot = require("../src/Db.bs.js");

Jest.testPromise(/* None */0, "Db connects Successfully", (function () {
        return Db$Reasonbot.db.then((function () {
                      return Promise.resolve(Jest.pass);
                    }));
      }));

/*  Not a pure module */
