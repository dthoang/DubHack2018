"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var PublicService = (function () {
    function PublicService(http) {
        this.http = http;
        this.twitterAPI = "https://api.twitter.com/1.1/";
    }
    //returns tweets that got created within 2 years.
    //id=${id}&
    PublicService.prototype.getToken = function () {
        var _this = this;
        var head = new http_1.Headers({ 'Authorization': "Basic NUhyZ1l0TzVIUFI3cFZMd1JSU0RnYnlGMjp0dG9sdFI4WVJFNk9QR21GTXFqdzB6eE5jbDFYWG1tcTVDS2pOZDdJd0xTUHVRZ1lINQ==", 'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8" });
        var ro = {};
        ro["grant_type"] = "client_credentials";
        var ret = this.http.post('https://api.twitter.com/oauth2/token', "grant_type:client_credientails", { headers: head })
            .toPromise();
        ret.then(function (response) {
            _this.header = new http_1.Headers({ "Authorization": response["token_type"] + " " + response["access_token"] });
        });
        return ret;
    };
    PublicService.prototype.getAllTweets = function (id) {
        var _this = this;
        var tweets = [];
        this.http.get(this.twitterAPI + "statuses/user_timeline.json?screen_name=twitterapi&count=2", { headers: this.header })
            .toPromise().then(function (response) {
            var received = response.json();
            console.log(received);
            var twoYear = new Date(new Date().getMonth() - 24);
            console.log(twoYear);
            while (new Date(received[200]["created_at"]) > twoYear) {
                _this.http.get(_this.twitterAPI + "statuses/user_timeline.json?user_id=" + id + "&count=200&max_id=" + received[200]["id"], { headers: _this.header })
                    .toPromise()
                    .then(function (response) {
                    tweets.concat(received);
                    received = response.json();
                });
                tweets.concat(received);
            }
            var last = received.filter(function (value) {
                return value["created_at"] > twoYear;
            });
            return tweets.concat(last);
        });
    };
    return PublicService;
}());
PublicService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PublicService);
exports.PublicService = PublicService;
//# sourceMappingURL=public.service.js.map