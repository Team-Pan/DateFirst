﻿var homeModel = (function () {
    function getHomePage() {
        userModel.getLoggedUserId()
            .then(function (res) {
                var loggedUser = res;
                userModel.getUserInfo(loggedUser)
                    .then(function (res) {
                        var loggedUserInfo = res;
                        $('#profile-picture').attr("src", loggedUserInfo.AvatarUrl);
                    });
            });
        return jsonRequester.get(constants.HOST + '/api/HomePageInfo')
        .then(function (res) {
            return res;
        });
    }

    return {
        getHomePage: getHomePage
    };
}());