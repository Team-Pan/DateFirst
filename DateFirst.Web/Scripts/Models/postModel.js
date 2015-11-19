var postModel = (function () {

    function sendNewPost(data) {
            return jsonRequester.post(constants.HOST + '/api/Posts', {
                headers: { 'Authorization': modelHelpers.getBearerCode() },
                data: JSON.stringify(data)
            })
            .then(function (res) {
                return res;
            });
        }

    return {
        sendNewPost : sendNewPost
    };

}());