var Developer = /** @class */ (function () {
    function Developer(staticImgUrl, isLeader, name, studentId, theClass, email, githubLink) {
        this.staticImgUrl = staticImgUrl;
        this.isLeader = isLeader;
        this.name = name;
        this.studentId = studentId;
        this["class"] = theClass;
        this.email = email;
        this.githubLink = githubLink;
    }
    Developer.prototype.getLevel = function () {
        return this.isLeader ? 'Nhóm trưởng' : 'Thành viên';
    };
    Developer.prototype.renderDevInfoToHtml = function () {
        var html = "\n            <div class=\"main-content\">\n                <div class=\"content-top\">\n                    <figure class=\"cover-photo-wrapper\">\n                        <img src=\"".concat(this.staticImgUrl, "\" alt=\"Cover photo\" class=\"cover-photo\">\n                    </figure>\n                    <p class=\"level\">\n                        ").concat(this.getLevel(), "\n                    </p>\n                </div>\n                <div class=\"content-bot\">\n                    <div class=\"content-comp content-fullname\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                        class=\"icon\"\n                        >\n                            <path d=\"M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z\"></path><path d=\"M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z\"></path>\n                        </svg>\n                        <span class=\"comp-label comp-name\">").concat(this.name, "</span>\n                    </div>\n                    <div class=\"content-comp content-id\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                        class=\"icon\"\n                        >\n                            <path d=\"M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm0 10h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm7.293-14.707-3.586-3.586a.999.999 0 0 0-1.414 0l-3.586 3.586a.999.999 0 0 0 0 1.414l3.586 3.586a.999.999 0 0 0 1.414 0l3.586-3.586a.999.999 0 0 0 0-1.414z\"></path>\n                        </svg>\n                        <span class=\"comp-label comp-id\">").concat(this.studentId, "</span>\n                    </div>\n                    <div class=\"content-comp content-class\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                        class=\"icon\"\n                        >\n                            <path d=\"M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z\"></path><path d=\"M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z\"></path><path d=\"M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z\"></path>\n                        </svg>\n                        <span class=\"comp-label comp-class\">").concat(this["class"], "</span>\n                    </div>\n                    <div class=\"content-comp content-email\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                        class=\"icon\"\n                        >\n                            <path d=\"m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z\"></path>\n                        </svg>\n                        <span class=\"comp-label comp-email\">").concat(this.email, "</span>\n                    </div>\n                    <div class=\"content-comp content-github\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" style=\"fill: rgba(0, 0, 0, 1);\"\n                        class=\"icon\"\n                        >\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z\"></path>\n                        </svg>\n                        <p class=\"comp-link comp-github\">\n                            <a href=\"").concat(this.githubLink, "\" target=\"_blank\">\n                                ").concat(this.githubLink, "\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        ");
        return html;
    };
    return Developer;
}());
function renderAllDevInfoToHtml(devArr) {
    var html = '';
    for (var i = 0; i < devArr.length; ++i) {
        html += devArr[i].renderDevInfoToHtml();
    }
    return html;
}
;
(function () {
    var dev1 = new Developer('../imgs/aboutus_demo_cover_photo.jpg', true, 'Nguyễn Dương Minh Huy', '19481471', 'DHKTMPM15A', 'minhhuy123nguyen@gmail.com', 'https://github.com/s1mple-n');
    var dev2 = new Developer('../imgs/aboutus_demo_cover_photo.jpg', false, 'Hoàng Thị Tố Thùy', '19432541', 'DHKTMPM15A', 'hoangtothuy01@gmail.com', 'https://github.com/ThuyHoang-01');
    var dev3 = new Developer('../imgs/aboutus_demo_cover_photo.jpg', false, 'Nguyễn Văn Phát', '19483821', 'DHKTMPM15A', 'nguyenvanphat911@gmail.com', 'https://github.com/Phatjiro');
    var dev4 = new Developer('../imgs/aboutus_demo_cover_photo.jpg', false, 'Cao A Minh', '19533901', 'DHKTMPM15A', 'caoaminh12an1nh2019@gmail.com', 'https://github.com/CaoAMinh');
    var devArr = new Array(dev1, dev2, dev3, dev4);
    var mainWrapper = document.querySelector('.main__wrapper');
    mainWrapper.innerHTML = renderAllDevInfoToHtml(devArr);
})();
