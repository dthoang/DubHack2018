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
var public_service_1 = require("../service/public.service");
var Landing = (function () {
    function Landing(publicService) {
        var _this = this;
        this.publicService = publicService;
        this.publicService.getToken()
            .then(function (success) {
            _this.publicService.getAllTweets();
        });
    }
    return Landing;
}());
Landing = __decorate([
    core_1.Component({
        templateUrl: './landing.page.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [public_service_1.PublicService])
], Landing);
exports.Landing = Landing;
//# sourceMappingURL=landing.page.js.map