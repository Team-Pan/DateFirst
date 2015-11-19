var imageModel = (function () {

    function uploadImage(data) {
        return jsonRequester.post(constants.HOST + "//api/FileUpload", {
            headers: { 'Authorization': modelHelpers.getBearerCode() },
            data: data,
            contentType: false,
            processData: false
        })
            .then(function (res) {
                return res;
            });
    }

    function uploadAvatar(data) {
        return jsonRequester.post(constants.HOST + "//api/UploadProfilePicture", {
            data: data,
            headers: { 'Authorization': modelHelpers.getBearerCode() },
            contentType: false,
            processData: false
        })
        .then(function (res) {
            return res;
        });
    }

    return {
        uploadImage: uploadImage,
        uploadAvatar: uploadAvatar
    };
}());