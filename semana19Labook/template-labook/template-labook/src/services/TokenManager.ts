import express from "express"
import tokenmanager from ""


var tokenManager = require('tokenmanager');
var router = require('express').Router();
var tokenManager = require('tokenmanager');
tokenManager.configure( {
 "decodedTokenFieldName":"UserToken",
 "authorizationMicroserviceUrl":"http://localhost:3000",
 "authorizationMicroserviceToken":"4343243v3kjh3k4g3j4hk3g43hjk4g3jh41h34g3",
 "exampleUrl":"http://miosito.it",
 "tokenFieldName":"access_token",
 "secret":"secretKey"
});

