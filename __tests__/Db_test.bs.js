// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Db$Reasonbot = require("../src/Db.bs.js");
var TestHelper$Reasonbot = require("./TestHelper.bs.js");

TestHelper$Reasonbot.testAsync(/* None */0, "Db connects Successfully", (function (cb) {
        Db$Reasonbot.createDb((function (db) {
                if (db) {
                  return Curry._1(cb, TestHelper$Reasonbot.pass);
                } else {
                  return Curry._1(cb, TestHelper$Reasonbot.fail("Db failed to construct"));
                }
              }));
        return /* () */0;
      }));

/*  Not a pure module */