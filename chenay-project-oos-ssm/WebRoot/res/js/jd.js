function login() {
    location.href = document.location.protocol + "//passport.jd.com/uc/login" + location.search;
    return false
}
function regist() {
    location.href = document.location.protocol + "//reg.jd.com/reg/person" + location.search;
    return false
}
(function (a) {
    a.fn.Jdropdown = function (d, e) {
        if (!this.length) {
            return
        }
        if (typeof d == "function") {
            e = d;
            d = {}
        }
        var c = a.extend({event: "mouseover", current: "hover", delay: 0}, d || {});
        var b = (c.event == "mouseover") ? "mouseout" : "mouseleave";
        a.each(this, function () {
            var h = null, g = null, f = false;
            a(this).bind(c.event,
                    function () {
                        if (f) {
                            clearTimeout(g)
                        } else {
                            var j = a(this);
                            h = setTimeout(function () {
                                j.addClass(c.current);
                                f = true;
                                if (e) {
                                    e(j)
                                }
                            }, c.delay)
                        }
                    }).bind(b, function () {
                        if (f) {
                            var j = a(this);
                            g = setTimeout(function () {
                                j.removeClass(c.current);
                                f = false
                            }, c.delay)
                        } else {
                            clearTimeout(h)
                        }
                    })
        })
    }
})(jQuery);
function addToFavorite() {
    var a = "http://www.jd.com/";
    var b = "京东商城-网购上京东，省钱又放心";
    if (document.all) {
        window.external.AddFavorite(a, b)
    } else if (window.sidebar) {
        window.sidebar.addPanel(b, a, "")
    } else {
        alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。")
    }
}

function pwdLevel(value) {
    var pattern_1 = /^.*([\W_])+.*$/i;
    var pattern_2 = /^.*([a-zA-Z])+.*$/i;
    var pattern_3 = /^.*([0-9])+.*$/i;
    var level = 0;
    if (value.length > 10) {
        level++;
    }
    if (pattern_1.test(value)) {
        level++;
    }
    if (pattern_2.test(value)) {
        level++;
    }
    if (pattern_3.test(value)) {
        level++;
    }
    if (level > 3) {
        level = 3;
    }
    return level;
}
// 休眠
function sleepm(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) return;
    }
}
var weakPwdArray = ["123456", "123456789", "111111", "5201314", "12345678", "123123", "password", "1314520", "123321", "7758521", "1234567", "5211314", "666666", "520520", "woaini", "520131", "11111111", "888888", "hotmail.com", "112233", "123654", "654321", "1234567890", "a123456", "88888888", "163.com", "000000", "yahoo.com.cn", "sohu.com", "yahoo.cn", "111222tianya", "163.COM", "tom.com", "139.com", "wangyut2", "pp.com", "yahoo.com", "147258369", "123123123", "147258", "987654321", "100200", "zxcvbnm", "123456a", "521521", "7758258", "111222", "110110", "1314521", "11111111", "12345678", "a321654", "111111", "123123", "5201314", "00000000", "q123456", "123123123", "aaaaaa", "a123456789", "qq123456", "11112222", "woaini1314", "a123123", "a111111", "123321", "a5201314", "z123456", "liuchang", "a000000", "1314520", "asd123", "88888888", "1234567890", "7758521", "1234567", "woaini520", "147258369", "123456789a", "woaini123", "q1q1q1q1", "a12345678", "qwe123", "123456q", "121212", "asdasd", "999999", "1111111", "123698745", "137900", "159357", "iloveyou", "222222", "31415926", "123456", "111111", "123456789", "123123", "9958123", "woaini521", "5201314", "18n28n24a5", "abc123", "password", "123qwe", "123456789", "12345678", "11111111", "dearbook", "00000000", "123123123", "1234567890", "88888888", "111111111", "147258369", "987654321", "aaaaaaaa", "1111111111", "66666666", "a123456789", "11223344", "1qaz2wsx", "xiazhili", "789456123", "password", "87654321", "qqqqqqqq", "000000000", "qwertyuiop", "qq123456", "iloveyou", "31415926", "12344321", "0000000000", "asdfghjkl", "1q2w3e4r", "123456abc", "0123456789", "123654789", "12121212", "qazwsxedc", "abcd1234", "12341234", "110110110", "asdasdasd", "123456", "22222222", "123321123", "abc123456", "a12345678", "123456123", "a1234567", "1234qwer", "qwertyui", "123456789a", "qq.com", "369369", "163.com", "ohwe1zvq", "xiekai1121", "19860210", "1984130", "81251310", "502058", "162534", "690929", "601445", "1814325", "as1230", "zz123456", "280213676", "198773", "4861111", "328658", "19890608", "198428", "880126", "6516415", "111213", "195561", "780525", "6586123", "caonima99", "168816", "123654987", "qq776491", "hahabaobao", "198541", "540707", "leqing123", "5403693", "123456", "123456789", "111111", "5201314", "123123", "12345678", "1314520", "123321", "7758521", "1234567", "5211314", "520520", "woaini", "520131", "666666", "RAND#a#8", "hotmail.com", "112233", "123654", "888888", "654321", "1234567890", "a123456"];

function verc() {
    $("#JD_Verification1").click();
}
function verc2() {
    $("#JD_Verification2").click();
}
var validateRegExp = {
    decmal: "^([+-]?)\\d*\\.\\d+$",
    // 浮点数
    decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
    // 正浮点数
    decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
    // 负浮点数
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
    // 浮点数
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
    // 非负浮点数（正浮点数 + 0）
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
    // 非正浮点数（负浮点数 +
    // 0）
    intege: "^-?[1-9]\\d*$",
    // 整数
    intege1: "^[1-9]\\d*$",
    // 正整数
    intege2: "^-[1-9]\\d*$",
    // 负整数
    num: "^([+-]?)\\d*\\.?\\d+$",
    // 数字
    num1: "^[1-9]\\d*|0$",
    // 正数（正整数 + 0）
    num2: "^-[1-9]\\d*|0$",
    // 负数（负整数 + 0）
    ascii: "^[\\x00-\\xFF]+$",
    // 仅ACSII字符
    chinese: "^[\\u4e00-\\u9fa5]+$",
    // 仅中文
    color: "^[a-fA-F0-9]{6}$",
    // 颜色
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
    // 日期
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    // 邮件
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",
    // 身份证
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
    // ip地址
    letter: "^[A-Za-z]+$",
    // 字母
    letter_l: "^[a-z]+$",
    // 小写字母
    letter_u: "^[A-Z]+$",
    // 大写字母
    mobile: "^0?(13|15|18|14|17)[0-9]{9}$",
    // 手机
    notempty: "^\\S+$",
    // 非空
    password: "^.*[A-Za-z0-9\\w_-]+.*$",
    // 密码
    fullNumber: "^[0-9]+$",
    // 数字
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
    // 图片
    qq: "^[1-9]*[1-9][0-9]*$",
    // QQ号码
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",
    // 压缩文件
    tel: "^[0-9\-()（）]{7,18}$",
    // 电话号码的函数(包括验证国内区号,国际区号,分机号)
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
    // url
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
    // 户名
    deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
    // 单位名
    zipcode: "^\\d{6}$",
    // 邮编
    realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",
    // 真实姓名
    companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
    companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
    companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
};
// 主函数
(function($) {
    $.fn.jdValidate = function(option, callback, def) {
        var ele = this;
        var id = ele.attr("id");
        var type = ele.attr("type");
        var rel = ele.attr("rel");
        var _onFocus = $("#" + id + validateSettings.onFocus.container);
        var _succeed = $("#" + id + validateSettings.succeed.container);
        var _isNull = $("#" + id + validateSettings.isNull.container);
        var _error = $("#" + id + validateSettings.error.container);
        if (def == true) {
            var str = ele.val();
            var tag = ele.attr("sta");
            if (str == "" || str == "-1") {
                validateSettings.isNull.run({
                    prompts: option,
                    element: ele,
                    isNullEle: _isNull,
                    succeedEle: _succeed
                },
                option.isNull);
            } else if (tag == 1 || tag == 2) {
                return;
            } else {
                callback({
                    prompts: option,
                    element: ele,
                    value: str,
                    errorEle: _error,
                    succeedEle: _succeed
                });
            }
        } else {
            if (typeof def == "string") {
                ele.val(def);
            }
            if (type == "checkbox" || type == "radio") {
                if (ele.attr("checked") == true) {
                    ele.attr("sta", validateSettings.succeed.state);
                }
            }
            switch (type) {
            case "text":
            case "password":
                ele.bind("focus",
                function() {
                    var str = ele.val();
                    if (str == def) {
                        ele.val("");
                    }
                    validateSettings.onFocus.run({
                        prompts: option,
                        element: ele,
                        value: str,
                        onFocusEle: _onFocus,
                        succeedEle: _succeed
                    },
                    option.onFocus, option.onFocusExpand);
                }).bind("blur",
                function() {
                    var str = ele.val();
                    if (str == "") {
                        ele.val(def);
                    }
                    if (validateRules.isNull(str)) {
                        validateSettings.isNull.run({
                            prompts: option,
                            element: ele,
                            value: str,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        },
                        "");
                    } else {
                        callback({
                            prompts: option,
                            element: ele,
                            value: str,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    }
                });
                break;
            default:
                if (rel && rel == "select") {
                    ele.bind("change",
                    function() {
                        var str = ele.val();
                        callback({
                            prompts: option,
                            element: ele,
                            value: str,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    })
                } else {
                    ele.bind("click",
                    function() {
                        callback({
                            prompts: option,
                            element: ele,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    })
                }
                break;
            }
        }
    }
})(jQuery);

// 配置
var validateSettings = {
    onFocus: {
        state: null,
        container: "_error",
        style: "focus",
        run: function(option, str, expands) {
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style2).addClass(validateSettings.INPUT_style1);
            }
            option.succeedEle.removeClass(validateSettings.succeed.style);
            option.onFocusEle.removeClass().addClass(validateSettings.onFocus.style).html(str);
            if (expands) {
                expands();
            }
        }
    },
    isNull: {
        state: 0,
        container: "_error",
        style: "null",
        run: function(option, str) {
            option.element.attr("sta", 0);
            if (!validateRules.checkType(option.element)) {
                if (str == "") {
                    option.element.removeClass(validateSettings.INPUT_style2).removeClass(validateSettings.INPUT_style1);
                } else {
                    option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
                }
            }

            option.succeedEle.removeClass(validateSettings.succeed.style);
            if (str == "") {
                option.isNullEle.removeClass().addClass(validateSettings.isNull.style).html(str);
            } else {
                option.isNullEle.removeClass().addClass(validateSettings.error.style).html(str);
            }
        }
    },
    error: {
        state: 1,
        container: "_error",
        style: "error",
        run: function(option, str) {
            option.element.attr("sta", 1);
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
            }

            option.succeedEle.removeClass(validateSettings.succeed.style);
            option.errorEle.removeClass().addClass(validateSettings.error.style).html(str);
        }
    },
    succeed: {
        state: 2,
        container: "_succeed",
        style: "succeed",
        run: function(option) {
            option.element.attr("sta", 2);
            option.errorEle.empty();
            if (!validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).removeClass(validateSettings.INPUT_style2);
            }

            option.succeedEle.addClass(validateSettings.succeed.style);
            option.errorEle.removeClass();
        }
    },
    INPUT_style1: "highlight1",
    INPUT_style2: "highlight2"
}

// 验证规则
var validateRules = {
    isNull: function(str) {
        return (str == "" || typeof str != "string");
    },
    betweenLength: function(str, _min, _max) {
        return (str.length >= _min && str.length <= _max);
    },
    isUid: function(str) {
        return new RegExp(validateRegExp.username).test(str);
    },
    fullNumberName: function(str) {
        return new RegExp(validateRegExp.fullNumber).test(str);
    },
    isPwd: function(str) {
        return /^.*([\W_a-zA-Z0-9-])+.*$/i.test(str);
    },
    isPwdRepeat: function(str1, str2) {
        return (str1 == str2);
    },
    isEmail: function(str) {
        return new RegExp(validateRegExp.email).test(str);
    },
    isTel: function(str) {
        return new RegExp(validateRegExp.tel).test(str);
    },
    isMobile: function(str) {
        return new RegExp(validateRegExp.mobile).test(str);
    },
    checkType: function(element) {
        return (element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("rel") == "select");
    },
    isRealName: function(str) {
        return new RegExp(validateRegExp.realname).test(str);
    },
    isCompanyname: function(str) {
        return new RegExp(validateRegExp.companyname).test(str);
    },
    isCompanyaddr: function(str) {
        return new RegExp(validateRegExp.companyaddr).test(str);
    },
    isCompanysite: function(str) {
        return new RegExp(validateRegExp.companysite).test(str);
    },
    simplePwd: function(str) {
        // var pin = $("#regName").val();
        // if (pin.length > 0) {
        // pin = strTrim(pin);
        // if (pin == str) {
        // return true;
        // }
        // }
        return pwdLevel(str) == 1;
    },
    weakPwd: function(str) {
        for (var i = 0; i < weakPwdArray.length; i++) {
            if (weakPwdArray[i] == str) {
                return true;
            }
        }
        return false;
    }
};
// 验证文本
var validatePrompt = {
    regName: {
        // onFocus: "4-20位字符，支持中英文、数字及\"-\"、\"_\"组合",
        onFocus:"4-20位字符,支持汉字、字母、数字及\"-\"、\"_\"组合",
        succeed: "",
        isNull: "请输入用户名",
        error: {
            beUsed: "该用户名已被使用，请重新输入。如果您是该用户，请立刻<a href='https://passport.jd.com/uc/login' class='flk13'>登录</a>",
            badLength: "用户名长度只能在4-20位字符之间",
            badFormat: "用户名只能由中文、英文、数字及\"-\"、\"_\"组成",
            fullNumberName: "用户名不能是纯数字，请重新输入"
        },
        onFocusExpand: function() {
            $("#morePinDiv").removeClass().addClass("intelligent-error hide");
        }
    },

    pwd: {
        onFocus: "<span>6-20位字符，建议由字母，数字和符号两种以上组合</span>",
        succeed: "",
        isNull: "请输入密码",
        error: {
            badLength: "密码长度只能在6-20位字符之间",
            badFormat: "密码只能由英文、数字及标点符号组成",
            simplePwd: "<span>该密码比较简单，有被盗风险，建议您更改为复杂密码，如字母+数字的组合</span>",
            weakPwd: "<span>该密码比较简单，有被盗风险，建议您更改为复杂密码</span>"
        },
        onFocusExpand: function() {
            $("#pwdstrength").hide();
        }
    },
    pwdRepeat: {
        onFocus: "请再次输入密码",
        succeed: "",
        isNull: "请确认密码",
        error: {
            badLength: "密码长度只能在6-20位字符之间",
            badFormat2: "两次输入密码不一致",
            badFormat1: "密码只能由英文、数字及标点符号组成"
        }
    },
    phone: {
        onFocus: "请输入手机号码",
        succeed: "",
        isNull: "请输入手机号码",
        error: ""
    },
    protocol: {
        onFocus: "",
        succeed: "",
        isNull: "请先阅读并同意《京东用户注册协议》",
        error: ""
    },
    empty: {
        onFocus: "",
        succeed: "",
        isNull: "",
        error: ""
    }
};

var nameold, morePinOld, emailResult;
var namestate = false;
// 回调函数
var validateFunction = {
    regName: function(option) {
        $("#intelligent-regName").empty().hide();
        var regName = option.value;
        if (validateRules.isNull(regName) || regName == '') {
            option.element.removeClass(validateSettings.INPUT_style2).removeClass(validateSettings.INPUT_style1);
            $("#regName_error").removeClass().empty();
            return;
        }
        // $("#authcodeDiv").show();
        checkPin(option);
    },

    pwd: function(option) {
        var str1 = option.value;
        var regName = $("#regName").val();
        if ((validateRules.isNull(regName) == false) && (regName != '') && regName == str1) {
            $("#pwdstrength").hide();
            validateSettings.error.run(option, "<span>您的密码与账户信息太重合，有被盗风险，请换一个密码</span>");
            return;
        }

        // var str2 = $("#pwdRepeat").val();
        $("#pwdRepeat").blur();
        var format = validateRules.isPwd(option.value);
        var length = validateRules.betweenLength(option.value, 6, 20);

        $("#pwdstrength").hide();
        if (!length && format) {
            validateSettings.error.run(option, option.prompts.error.badLength);
        } else if (!length && !format) {
            validateSettings.error.run(option, option.prompts.error.badFormat);
        } else if (length && !format) {
            validateSettings.error.run(option, option.prompts.error.badFormat);
        } else if (validateRules.weakPwd(str1)) {
            validateSettings.error.run(option, option.prompts.error.weakPwd);
        } else {

            validateSettings.succeed.run(option);
            validateFunction.pwdstrength();
            if (validateRules.simplePwd(str1)) {
                $("#pwd_error").removeClass().addClass("focus");
                $("#pwd_error").empty().html(option.prompts.error.simplePwd);
                return;
            }
        }
        // if (str2 == str1) {
        // $("#pwdRepeat").focus();
        // }
    },
    pwdRepeat: function(option) {
        var str1 = option.value;
        var str2 = $("#pwd").val();
        var length = validateRules.betweenLength(option.value, 6, 20);
        var format2 = validateRules.isPwdRepeat(str1, str2);
        var format1 = validateRules.isPwd(str1);
        if (!length) {
            validateSettings.error.run(option, option.prompts.error.badLength);
        } else {
            if (!format1) {
                validateSettings.error.run(option, option.prompts.error.badFormat1);
            } else {
                if (!format2) {
                    validateSettings.error.run(option, option.prompts.error.badFormat2);
                } else {
                    validateSettings.succeed.run(option);
                }
            }
        }
    },
    // mobileCode: function(option) {
    // var bool = validateRules.isNull(option.value);
    // if (bool) {
    // validateSettings.error.run(option, option.prompts.error);
    // return;
    // } else {
    // validateSettings.succeed.run(option);
    // }
    // },
    protocol: function(option) {
        if (option.element.attr("checked") == true) {
            option.element.attr("sta", validateSettings.succeed.state);
            option.errorEle.html("");
        } else {
            option.element.attr("sta", validateSettings.isNull.state);
            option.succeedEle.removeClass(validateSettings.succeed.style);
        }
    },
    pwdstrength: function() {
        var element = $("#pwdstrength");
        var value = $("#pwd").val();
        if (value.length >= 6 && validateRules.isPwd(value)) {
            $("#pwd_error").removeClass('focus');
            $("#pwd_error").empty();
            element.show();
            var level = pwdLevel(value);
            switch (level) {
            case 1:
                element.removeClass().addClass("strengthA");
                break;
            case 2:
                element.removeClass().addClass("strengthB");
                break;
            case 3:
                element.removeClass().addClass("strengthC");
                break;
            default:
                break;
            }
        } else {
            element.hide();
        }
    },
    checkGroup: function(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                return true;
            }
        }
        return false;
    },
    checkSelectGroup: function(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].value == -1) {
                return false;
            }
        }
        return true;
    },

    FORM_submit: function(elements) {
        var bool = true;
        for (var i = 0; i < elements.length; i++) {
            if ($(elements[i]).attr("sta") == 2) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }

        return bool;
    }
};

// 检查用户名
var checkpin = -10;
function checkPin(option) {
    var pin = option.value;
    if (!validateRules.betweenLength(pin.replace(/[^\x00-\xff]/g, "**"), 4, 20)) {
        validateSettings.error.run(option, option.prompts.error.badLength);
        return false;
    }

    if (!validateRules.isUid(pin)) {
        validateSettings.error.run(option, option.prompts.error.badFormat);
        return;
    }
    if (validateRules.fullNumberName(pin)) {
        validateSettings.error.run(option, option.prompts.error.fullNumberName);
        return;
    }
    if (!namestate || nameold != pin) {
        if (nameold != pin) {
            nameold = pin;
            option.errorEle.html("<em style='color:#999'>检验中……</em>");
            $.getJSON("../validateuser/isPinEngaged?pin=" + escape(pin) + "&r=" + Math.random(),
            function(date) {
                checkpin = date.success;
                if (date.success == 0) {
                    validateSettings.succeed.run(option);
                    namestate = true;
                } else if (date.success == 2) {
                    validateSettings.error.run(option, "用户名包含了非法词");
                    namestate = false;
                } else {
                    validateSettings.error.run(option, "<span>" + option.prompts.error.beUsed.replace("{1}", option.value) + "</span>");
                    namestate = false;
                    morePinOld = date.morePin;
                    if (date.morePin != null && date.morePin.length > 0) {
                        var html = ""
                        for (var i = 0; i < date.morePin.length; i++) {
                            html += "<div class='item-fore'><input name='morePinRadio' onclick='selectMe(this);' type='radio' class='radio' value='" + date.morePin[i] + "'/><label>" + date.morePin[i] + "</label></div>"
                        }
                        $("#morePinGroom").empty();
                        $("#morePinGroom").html(html);
                        $("#morePinDiv").removeClass().addClass("intelligent-error");
                    }
                }
            });
        } else {

            if (checkpin == 2) {
                validateSettings.error.run(option, "用户名包含了非法词");
            } else {
                validateSettings.error.run(option, "<span>" + option.prompts.error.beUsed.replace("{1}", option.value) + "</span>");
                if (morePinOld != null && morePinOld.length > 0) {
                    $("#morePinDiv").removeClass().addClass("intelligent-error");
                }
            }
            namestate = false;
        }
    } else {
        validateSettings.succeed.run(option);
    }
}

function selectMe(option) {
    $("#morePinDiv").removeClass().addClass("intelligent-error hide");
    $("#regName").val(option.value);
    $("#regName").blur();
}
// 主流程发送手机验证码
function sendMobileCode() {
    if ($("#sendMobileCode").attr("disabled")) {
        return;
    }
    mobileCodeHide();
    var mobile = $("#phone").val();
    if (validateRules.isNull(mobile)) {
        $("#phone_error").removeClass().addClass("error").html("请输入手机号");
        $("#phone_error").show();
        return;
    }
    if (!validateRules.isMobile(mobile)) {
        $("#phone_error").removeClass().addClass("error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone_error").show();
        return;
    }
    $('#mobileCode').removeClass("highlight2");
    authCodeBlur(function(validResult){
        if(validResult){
            // 检测手机号码是否存在
            $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
                function(result) {
                    if (result.success == 0) {
                        $('#phone').removeClass().addClass("text");
                        $("#phone_error").html("");
                        $("#phone_error").hide();
                        $("#phone_succeed").removeClass().addClass("blank succeed");
                        mobileFlags = true;
                        sendmCode();
                    }

                    if (result.success == 1) {
                        $('#phone').removeClass().addClass('text highlight3');
                        $("#phone_error").html("手机号已注册，继续注册将与原账号解绑");
                        $("#phone_error").removeClass().addClass("cue");
                        $("#phone_error").show();
                        $("#phone_succeed").removeClass().addClass("blank cue-ico");
                        mobileFlags = false;
                        var state = $("#state").val();
                        if (state == "unbind") {
                            $("#rebind").remove();
                            $("#mobileCodeDiv").show();
                            sendmCode();
                        } else {
                            mobileEngagedStyle();
                        }
                    }

                    if (result.success == 2) {
                        $('#phone').removeClass().addClass('text highlight2');
                        $("#phone_error").html("该手机号已被其它账户绑定，"+result.ub+"天内不可改绑");
                        $("#phone_error").removeClass().addClass("error");
                        $("#phone_error").show();
                        $("#phone_succeed").removeClass().addClass("");
                        mobileFlags = false;
                    }
                });
        }
    });

}
// 手机注册发送验证码target
function sendmCode() {
    if ($("#sendMobileCode").attr("disabled") || delayFlag == false) {
        return;
    }
    var state = $("#state").val();
    if (state != "unbind") {
        $("#rebind").remove();
        $("#mobileCodeDiv").show();
    }
    $("#sendMobileCode").attr("disabled", "disabled");
    jQuery.ajax({
        type: "get",
        url: "../notifyuser/mobileCode?state=" + state + "&mobile=" + $("#phone").val() + "&r=" + Math.random(),
        success: function(result) {
            if (result) {
                var obj = eval(result);
                if (obj.rs == 1 || obj.remain) {
                    $("#mobileCode_error").addClass("hide");
                    $("#dyMobileButton").html("120秒后重新获取");
                    if (obj.remain) {
                        $("#mobileCodeSucMessage").empty().html(obj.remain);
                    } else {
                        if (state == "unbind") {
                            $("#mobileCode_error").removeClass().addClass("cue").empty().html("校验码已发送,注册成功后手机号将与原帐号解绑");
                            $("#mobileCode_error").show();
                        } else {
                            $("#mobileCode_error").removeClass().empty().html("验证码已发送，请查收短信。");
                            $("#mobileCode_error").show();
                        }
                    }

                    setTimeout(countDown, 1000);
                    $("#sendMobileCode").removeClass().addClass("btn btn-15").attr("disabled", "disabled");
                    $("#mobileCode").removeAttr("disabled");
                }
                if (obj.rs == -1) {
                    mobileCodeError("网络繁忙，请稍后重新获取验证码");
                }
                if (obj.info) {
                    if (obj.info == "该手机号已被使用，请更换号码") {
                        mobileEngagedStyle();
                    } else {
                        mobileCodeError(obj.info);
                    }

                }

                if (obj.rs == -2) {
                    mobileCodeError("网络繁忙，请稍后重新获取验证码");
                }
            }
        }
    });
}
// 邮箱验证发送验证码target
function sendmCode1() {
    if ($("#sendMobileCode1").attr("disabled") || delayFlag1 == false) {
        return;
    }
    $("#rebind1").remove();
    $("#mobileCodeDiv1").show();
    $("#sendMobileCode1").attr("disabled", "disabled");
    var state = $("#state").val();
    jQuery.ajax({
        type: "get",
        url: "../notifyuser/mobileCode?state=" + state + "&mobile=" + $("#phone1").val() + "&r=" + Math.random(),
        success: function(result) {
            if (result) {
                var obj = eval(result);
                if (obj.rs == 1 || obj.remain) {
                    $("#mobileCode1_error").addClass("hide");
                    $("#dyMobileButton1").html("120秒后重新获取");
                    if (obj.remain) {
                        $("#mobileCodeSucMessage1").empty().html(obj.remain);
                    } else {
                        if (state == "unbind") {
                            $("#mobileCodeSucMessage1").removeClass().addClass("cue").empty().html("校验码已发送,注册成功后手机号将与原帐号解绑");
                        } else {
                            $("#mobileCodeSucMessage1").empty().html("验证码已发送，请查收短信。");
                        }
                    }

                    setTimeout(countDown1, 1000);
                    $("#sendMobileCode1").removeClass().addClass("btn btn-15").attr("disabled", "disabled");
                    $("#mobileCode1").removeAttr("disabled");
                }
                if (obj.rs == -1) {
                    $("#mobileCode1_error").html("网络繁忙，请稍后重新获取验证码");
                    $("#mobileCode1_error").removeClass().addClass("error");
                    $("#mobileCode1_error").show();
                    $("#sendMobileCode1").removeClass().addClass("btn").removeAttr("disabled");
                }
                if (obj.info) {
                    if (obj.info == "该手机号已被使用，请更换号码") {
                        mobileEngagedStyle1();
                    } else {
                        $("#mobileCode1_error").html(obj.info);
                        $("#mobileCode1_error").removeClass().addClass("error");
                        $("#mobileCode1_error").show();
                        $("#sendMobileCode1").removeClass().addClass("btn").removeAttr("disabled");
                    }
                }

                if (obj.rs == -2) {
                    $("#mobileCode1_error").html("网络繁忙，请稍后重新获取验证码");
                    $("#mobileCode1_error").removeClass().addClass("error");
                    $("#mobileCode1_error").show();
                    $("#sendMobileCode1").removeClass().addClass("btn").removeAttr("disabled");
                }
            }
        }
    });
}
// 次流程发送手机验证码
function sendMobileCode1() {
    if ($("#sendMobileCode1").attr("disabled")) {
        return;
    }
    var mobile = $("#phone1").val();
    if (validateRules.isNull(mobile)) {
        $('#phone1').addClass('highlight2');
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        $("#phone1_error").removeClass().addClass("error").html("请输入手机号");
        $("#phone1_error").show();
        return;
    }
    if (!validateRules.isMobile(mobile)) {
        $("#phone1_error").removeClass().addClass("error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone1_error").show();
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        return;
    }

    var mobile = $("#phone1").val();
    if (mobile == "") {
        $('#phone1').removeClass().addClass("text");
        $("#phone1_error").hide();
        $('#phone1_succeed').removeClass('error-ico');
        mobileFlag = false;
        return;
    }
    if (!validateRules.isMobile(mobile)) {
        $("#phone1_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone1_error").removeClass().addClass("error");
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        $("#phone1_error").show();
        $('#phone1').removeClass("highlight1").addClass('highlight2');
        mobileFlag = false;
        return;
    }
    $("#mobileCode1_error").removeClass().empty();
    $("#mobileCode1_error").hide();
    $('#mobileCode1').removeClass("highlight2");
    /*
	 * authCodeBlur(function(validResult){ if(validResult){
	 */
            // 检测手机号码是否存在
            $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
                function(result) {
                    if (result.success == 0) {
                        $('#phone1').removeClass().addClass("text");
                        $("#phone1_error").html("");
                        $("#phone1_error").hide();
                        $("#phone1_succeed").removeClass().addClass("blank succeed");
                        mobileFlags = true;
                        sendmCode1();
                        return;
                    }
                    if (result.success == 1) {
                        $('#phone1').removeClass().addClass('text highlight3');
                        $("#phone1_error").html("手机号已注册，继续注册将与原账号解绑");
                        $("#phone1_error").removeClass().addClass("cue");
                        $("#phone1_error").show();
                        $("#phone1_succeed").removeClass().addClass("blank cue-ico");
                        mobileFlags = false;
                        var state = $("#state").val();
                        if (state == "unbind") {
                            sendmCode1();
                        } else {
                            mobileEngagedStyle1();
                        }
                        return;
                    }
                    if (result.success == 2) {
                        $('#phone1').removeClass().addClass('text highlight2');
                        $("#phone_error").html("该手机号已重新注册并绑定，"+result.ub+"天内不可改绑");
                        $("#phone1_error").removeClass().addClass("error");
                        $("#phone1_error").show();
                        $("#phone1_succeed").removeClass().addClass("blank error-ico");
                        // $("#sendMobileCode1").attr("disabled", "disabled");
                        mobileFlags = false;
                    }
                });// 检测手机号码是否存在
            $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
                function(result) {
                    if (result.success == 0) {
                        $('#phone1').removeClass().addClass("text");
                        $("#phone1_error").html("");
                        $("#phone1_error").hide();
                        $("#phone1_succeed").removeClass().addClass("blank succeed");
                        mobileFlags = true;
                        sendmCode1();
                        return;
                    }
                    if (result.success == 1) {
                        $('#phone1').removeClass().addClass('text highlight3');
                        $("#phone1_error").html("手机号已注册，继续注册将与原账号解绑");
                        $("#phone1_error").removeClass().addClass("cue");
                        $("#phone1_error").show();
                        $("#phone1_succeed").removeClass().addClass("blank cue-ico");
                        mobileFlags = false;
                        var state = $("#state").val();
                        if (state == "unbind") {
                            sendmCode1();
                        } else {
                            mobileEngagedStyle1();
                        }
                        return;
                    }
                    if (result.success == 2) {
                        $('#phone1').removeClass().addClass('text highlight2');
                        $("#phone_error").html("该手机号已重新注册并绑定，"+result.ub+"天内不可改绑");
                        $("#phone1_error").removeClass().addClass("error");
                        $("#phone1_error").show();
                        $("#phone1_succeed").removeClass().addClass("blank error-ico");
                        // $("#sendMobileCode1").attr("disabled", "disabled");
                        mobileFlags = false;
                    }
                });
     /*
		 * } });
		 */

}

var oldEmail, emailCheckResult;
// 邮箱验证信息填写
function sendRegMail() {
    var mail = $("#mail").val();
    var authcode1 = $("#authcode1").val();
    if (mail == "") {
        $("#mail_error").removeClass().addClass("error").html("请输入邮箱");
        $("#mail_error").show();
        $('#mail_succeed').addClass('error-ico');
        $('#mail').addClass('highlight2');
        return;
    }
    var email = strTrim(mail);
    var format = validateRules.isEmail(email);
    var format2 = validateRules.betweenLength(email, 0, 50);
    if (!format) {
        $("#mail_error").html("邮箱地址不正确，请重新输入");
        $('#mail_succeed').addClass('error-ico');
        $('#mail').addClass('highlight2');
        return;
    } else {
        if (!format2) {
            $('#mail_error').removeClass().addClass("error");
            $("#mail_error").html("邮箱地址长度应在4-50个字符之间");
            $('#mail_succeed').addClass('error-ico');
            $('#mail').removeClass("highlight1").addClass('highlight2');
            return;
        } else {
            // if (oldEmail == email) {
            // if (emailCheckResult == 1) {
            // emailEngagedStyle();
            // return;
            // }
            // if (emailCheckResult == 2) {
            // emailFormatErrorStyle();
            // return;
            // }
            // return;
            // }
            // oldEmail = email;
            $.getJSON("../validateuser/isEmailEngaged?email=" + escape(email) + "&r=" + Math.random(),
            function(result) {
                emailResult = result.success;
                emailCheckResult = emailResult;
                // 邮箱未被验证 可注册
                if (emailResult == 0) {
                    $("#emailMg").val(email);
                    $("#authcodeMg").val(authcode1);
                    jdThickBoxclose();
                    $("#dyMobileButton1").html("获取短信验证码");
                    jQuery.jdThickBox({
                        type: "text",
                        width: 500,
                        height: 260,
                        source: $('#box01').html(),
                        title: "验证手机",
                        _close_val: "×",
                        _con: "opinioncon",
                        _titleOn: true
                    });
                }
                if (emailResult == 1) {
                    emailEngagedStyle();
                    return;
                }
                if (emailResult == 2) {
                    emailFormatErrorStyle();
                    return;
                }
            });

        }
    }
}

function emailEngagedStyle() {
    $('#mail_succeed').addClass('error-ico');
    $('#mail_error').removeClass().addClass("error");
    $("#mail_error").html("该邮箱已被使用，请更换其它邮箱");
}

function emailFormatErrorStyle() {
    $('#mail_succeed').addClass('error-ico');
    $('#mail_error').removeClass().addClass("error");
    $("#mail_error").html("邮箱地址不正确，请重新输入");
}

// 邮箱验证 验证手机 提交注册
function mobileReg() {
    var mail = $("#emailMg").val();
    var authcode = $("#authcodeMg").val();
    var email = strTrim(mail);
    var format = validateRules.isEmail(email);
    var format2 = validateRules.betweenLength(email, 0, 50);
    if (!format) {
        $("#mail_error").html("邮箱地址不正确，请重新输入");
        return;
    } else if (!format2) {
        $("#mail_error").html("邮箱地址长度应在4-50个字符之间");
        return;
    }

    var mobile = $("#phone1").val();
    var phonevalue = $("#phone").val();
    var mobileCode = $("#mobileCode1").val();
    if (mobile == "") {
        $('#phone1').addClass('highlight2');
        $("#phone1_error").removeClass().addClass("error").html("请输入手机号");
        $("#phone1_error").show();
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
    }

    if (mobileCode == "") {
        $('#mobileCode1').addClass('highlight2');
        $("#mobileCodeSucMessage1").empty();
        $("#mobileCodeSucMessage1").removeClass();
        $("#mobileCode1_error").html("请输入短信验证码");
        $("#mobileCode1_error").removeClass().addClass("error");
        $("#mobileCode1_error").show();
        return;
    }
    if (mobile == "") {
        $('#phone1').addClass('highlight2');
        $("#phone1_error").removeClass().addClass("error").html("请输入手机号");
        $("#phone1_error").show();
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        return;
    } else if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $("#phone1_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone1_error").removeClass().addClass("error");
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        $("#phone1_error").show();
        $('#phone1').removeClass().addClass('text highlight2');
        $("#mobileCodeDiv1").show();
        mobileFlag = false;
        return;
    }
    var state = $("#state").val();
    if (state == "unbind") {
        mobileFlag = true;
    }
    if (mobileFlag) {
        var paramList = $("#personRegForm").serialize() + "&email=" + email;
        var temp = paramList.replace("phone=" + phonevalue, "phone=" + mobile);
        var params = temp.replace("mobileCode=", "mobileCode=" + mobileCode);
        params = params.replace("authcode=", "authcode=" + authcode);
        $.ajax({
            type: "POST",
            url: "../register/sendRegEmail?r=" + Math.random() + "&" + location.search.substring(1),
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: params,
            success: function(result) {
                var obj = eval(result);
                var emailResult = obj.success;
                var key = obj.k;
                if (emailResult == 0) {
                    jdThickBoxclose();
                    jQuery.jdThickBox({
                        type: "text",
                        width: 510,
                        height: 280,
                        source: '<div class="thickbox-tip fz14">' + '<div class="icon-box">' + '<span class="succ-icon m-icon"></span>' + '<div class="item-fore">' + '<div class="ftx-02 info-succ">账户更安全购物更放心</div>' + '</div>' + '</div>' + '<div class="msg-txt">' + '系统已向您的邮箱&nbsp;<strong class="ftx-01">' + $("#emailMg").val() + '</strong>&nbsp;发送了一封验证邮件，请您登录邮箱，点击邮件中的链接完成邮箱验证。如果超过2分钟未收到邮件，您可以<a href="#none" onclick="reSendEmail(\'' + $("#emailMg").val() + '\',\'' + key + '\');" class="ftx-05">重新发送</a>' + '</div>' + '<div class="mt10 ftx-01"> <span id="reSendEmailSuccess"></span></div>' + '<div class="mt20">' + '<a href="#" id="emailLogin" class="btn-red">登录邮箱</a>'
                        // +'<a href="#none"
                        // onclick="changeEmail();"
                        // class="ftx-05 fr">返回邮箱修改</a>'
                        + '<span class="clr"></span>' + '</div>' + '</div>',
                        title: "温馨提示",
                        _close_val: "×",
                        _con: "opinioncon",
                        _titleOn: true
                    });

                    initEmailLoginUrl(email);
                } else {
                    $("#mobileCodeSucMessage1").removeClass().empty();
                    $("#mobileCode1_error").html(obj.info);
                    $("#mobileCode1_error").removeClass().addClass("error");
                    $("#mobileCode1_error").show();
                    $("#sendMobileCode1").removeClass().addClass("btn").removeAttr("disabled");
                }
            }
        });
    }
}
function mobileCodeError(content) {
    $("#mobileCode_error").html(content);
    $("#mobileCode_error").removeClass().addClass("error");
    $("#mobileCode_error").show();
    $("#sendMobileCode").removeClass().addClass("btn").removeAttr("disabled");
}
function mobileCodeHide() {
    $("#mobileCode_error").html("");
    $("#mobileCode_error").removeClass().addClass("error");
    $("#mobileCode_error").hide();
}
var delayTime = 120;
var delayFlag = true;
function countDown() {
    delayTime--;
    $("#sendMobileCode").attr("disabled", "disabled");
    $("#dyMobileButton").html(delayTime + '秒后重新获取');
    if (delayTime == 1) {
        delayTime = 120;
        $("#mobileCodeSucMessage").removeClass().empty();
        $("#dyMobileButton").html("获取短信验证码");
        $("#mobileCode_error").addClass("hide");
        $("#sendMobileCode").removeClass().addClass("btn").removeAttr("disabled");
        delayFlag = true;
    } else {
        delayFlag = false;
        setTimeout(countDown, 1000);
    }
}
var delayTime1 = 120;
var delayFlag1 = true;
function countDown1() {
    delayTime1--;
    $("#sendMobileCode1").attr("disabled", "disabled");
    $("#dyMobileButton1").html(delayTime1 + '秒后重新获取');
    if (delayTime1 == 1) {
        delayTime1 = 120;
        $("#mobileCodeSucMessage1").removeClass().empty();
        $("#dyMobileButton1").html("获取短信验证码");
        $("#mobileCode1_error").removeClass().empty();
        $("#mobileCode1_error").hide();
        $("#sendMobileCode1").removeClass().addClass("btn").removeAttr("disabled");
        delayFlag1 = true;
    } else {
        delayFlag1 = false;
        countDown1.timer = setTimeout(countDown1, 1000);
    }
}
countDown1.timer = '';
function strTrim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

$("#regName").blur(function() {
    setTimeout(function() {
        if ($("#schoolid").val() == "") {
            $("#schoolinput").val("");
            $("#hnschool").val("-1");
            $("#hnschool").attr("sta", 0);
            $("#schoolinput_succeed").removeClass("succeed");
        } else {
            $("#hnschool").val("1");
            $("#hnschool").attr("sta", 2);
            $("#schoolinput_error").html("");
            $("#schoolinput_succeed").addClass("succeed");
        }
        $('#intelligent-school').hide().empty();
        $("#hnseli").val("-1");
    },
    200)
})

function showHideProtocol() {
    var protocolNode = $('.protocol-box');
    if (!protocolNode.is(':hidden')) {
        protocolNode.hide();
    } else {
        protocolNode.show();
    }
    return false;
}

function validateRegName() {
    var loginName = $("#regName").val();
    if (validateRules.isNull(loginName) || loginName == '') {
        $("#regName").val("");
        $("#regName").attr({
            "class": "text highlight2"
        });
        $("#regName_error").html("请输入用户名").show().attr({
            "class": "error"
        });
        return false;
    }
    return true;
}
$("#regist .tab li").hover(function() {
    if ($(this).hasClass("curr")) {} else {
        $(this).addClass("new");
    }
},
function() {
    if ($(this).hasClass("curr")) {} else {
        $(this).removeClass("new");
    }
})

$("#registsubmit").hover(function() {
    $(this).addClass("hover-btn")
},
function() {

    $(this).removeClass("hover-btn")
})

// 主流程手机获得焦点事件
function phoneFocus() {
    var mobile = $("#phone").val();
    if (oldMobile == mobile && mobile != "") {
        return;
    }
    $("#phone_succeed").removeClass("blank succeed");
    $('#phone').removeClass().addClass('text highlight1');
    $("#phone_error").removeClass().addClass("focus").html("完成验证后，您可以用该手机号登录和找回密码");
    $("#phone_error").show();
    $('#phone_succeed').removeClass('error-ico');
}
// 主流程手机获得焦点事件
function phoneOtherFocus() {
    var mobile = $("#phone").val();
    if (oldMobile == mobile && mobile != "") {
        return;
    }
    $("#phone_succeed").removeClass("blank succeed");
    $('#phone').removeClass().addClass('text highlight1');
    $("#phone_error").removeClass().addClass("focus").html("请输入手机号码");
    $("#phone_error").show();
    $('#phone_succeed').removeClass('error-ico');
}
// 次流程手机获得焦点事件
function phone1Focus() {
    var mobile1 = $("#phone1").val();
    if (oldMobile1 == mobile1 && mobile1 != "") {
        return;
    }
    $("#phone1_succeed").removeClass();
    $('#phone1').removeClass().addClass('text highlight1');
    $("#phone1_error").removeClass().addClass("focus").html("完成验证后，您可以用该手机号登录和找回密码");
    $("#phone1_error").show();
    $('#phone1_succeed').removeClass('error-ico');
}

var oldMobile, mobileResult;
// 主流程检查手机
function phoneBlur() {
    var mobile = $("#phone").val();

    if (mobile == "") {
        $('#phone').removeClass().addClass('text');
        $("#phone_error").removeClass().html("");
        $("#phone_error").hide();
        $("#rebind").remove();
        $("#mobileCodeDiv").show();
        $("#phone_succeed").removeClass().addClass("");
        oldMobile = mobile;
        mobileFlags = false;
        return;
    }
    if (oldMobile == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult(mobileResult);
        return;
    }
    oldMobile = mobile;
    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $('#phone').removeClass().addClass('text highlight2');
        $("#phone_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone_error").removeClass().addClass("error");
        $("#phone_error").show();
        $("#phone_succeed").removeClass().addClass("");
        $("#rebind").remove();
        $("#mobileCodeDiv").show();
        mobileFlags = false;
        return;
    }
    $("#mobileCodeSucMessage").removeClass().empty();
    $("#mobileCode_error").html("");
    $("#mobileCode_error").hide();
    $("#state").val("");
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {

        mobileResult = result.success;
        // if (mobileResult != 2) {
        // if ($("#sendMobileCode").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode").removeAttr("disabled");
        // }
        $("#sendMobileCode").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle();
        }

        if (result.success == 1) {
            mobileEngagedStyle();
        }

        if (result.success == 2) {
            mobileBindedStyle(result.ub);
            // $("#sendMobileCode").attr("disabled", "disabled");
        }
    });
}
// 主流程检查手机
function phoneKeyup() {
    var mobile = $("#phone").val();
    var mobileLength=mobile.length;
    if(mobileLength != 11)
    {
    	return;
    }
    if (mobile == "") {
        $('#phone').removeClass().addClass('text');
        $("#phone_error").removeClass().html("");
        $("#phone_error").hide();
        $("#rebind").remove();
        $("#mobileCodeDiv").show();
        $("#phone_succeed").removeClass().addClass("");
        oldMobile = mobile;
        mobileFlags = false;
        return;
    }
    if (oldMobile == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult(mobileResult);
        return;
    }
    oldMobile = mobile;
    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $('#phone').removeClass().addClass('text highlight2');
        $("#phone_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone_error").removeClass().addClass("error");
        $("#phone_error").show();
        $("#phone_succeed").removeClass().addClass("");
        $("#rebind").remove();
        $("#mobileCodeDiv").show();
        mobileFlags = false;
        return;
    }
    $("#mobileCodeSucMessage").removeClass().empty();
    $("#mobileCode_error").html("");
    $("#mobileCode_error").hide();
    $("#state").val("");
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {

        mobileResult = result.success;
        // if (mobileResult != 2) {
        // if ($("#sendMobileCode").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode").removeAttr("disabled");
        // }
        $("#sendMobileCode").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle();
        }

        if (result.success == 1) {
            mobileEngagedStyle();
        }

        if (result.success == 2) {
            mobileBindedStyle(result.ub);
            // $("#sendMobileCode").attr("disabled", "disabled");
        }
    });
}
// 验证码单独流程检查-合并与2处 1处：继续注册 2处：获取短信验证码
function authCodeBlur(callback){
    var ishidden=$("#authcodeDiv").is(":hidden");
    if(true==ishidden){
        var validateResut = true;
        callback(validateResut);
        return;
    }
    var authCode = $("#authcode").val();
    if (authCode == "") {
        $("#authcode_error").html("验证码不正确或验证码已过期");
        $("#authcode_error").removeClass().addClass("error2");
        $("#authcode_error").show();
        $("#authcode_succeed").removeClass().addClass("");
        $("#JD_Verification1").click();
        return;
    }
    var loginUrl = "../validate/validateAuthCode";
    var uuid = $("#uuid").val();
    var authCode =$("#authcode").val();
    $.ajax({
        url: loginUrl,
        type: "POST",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data:{uuid:uuid,authCode:authCode},
        error: function () {
            $("#authcode_error").html("网络超时，请稍后再试");
            $("#authcode_error").removeClass().addClass("error2");
            $("#authcode_error").show();
            $("#authcode_succeed").removeClass().addClass("");
            $("#JD_Verification1").click();
        },
        success: function (result) {
            var validateResut = false;
            if(result.success === "0"){
                validateResut = true;
                $("#authcode_error").html("");
                $("#authcode_error").removeClass().addClass("");
                $("#authcode_error").hide();
            }

            if(result.success === "1"){
               $("#authcode_error").html("验证码不正确或验证码已过期");
               $("#authcode_error").removeClass().addClass("error2");
               $("#authcode_error").show();
               $("#authcode_succeed").removeClass().addClass("");
                validateResut=false;
                $("#JD_Verification1").click();
            }
            callback(validateResut);
        }
    });
}


// 主流程检查手机
function phoneOtherBlur() {
    var mobile = $("#phone").val();

    if (mobile == "") {
        $('#phone').removeClass().addClass('text');
        $("#phone_error").removeClass().html("");
        $("#phone_error").hide();
        $("#phone_succeed").removeClass().addClass("");
        oldMobile = mobile;
        mobileFlags = false;
        return;
    }
    if (oldMobile == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult(mobileResult);
        return;
    }
    oldMobile = mobile;
    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $('#phone').removeClass().addClass('text highlight2');
        $("#phone_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone_error").removeClass().addClass("error");
        $("#phone_error").show();
        $("#phone_succeed").removeClass().addClass("");
        mobileFlags = false;
        return;
    }
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {

        mobileResult = result.success;
        // if (mobileResult != 2) {
        // if ($("#sendMobileCode").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode").removeAttr("disabled");
        // }
        $("#sendMobileCode").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle();
        }

        if (result.success == 1 || result.success == 2) {
        	 $('#phone').removeClass().addClass('text highlight2');
             $("#phone_error").html("该手机号已被绑定，请更换手机号");
             $("#phone_error").removeClass().addClass("error");
             $("#phone_error").show();
             $("#phone_succeed").removeClass().addClass("");
        	 mobileFlags = false;
        }

    });
}
// 主流程检查手机
function phoneOtherKeyup() {
    var mobile = $("#phone").val();
    var mobileLength=mobile.length;
    if(mobileLength != 11)
    {
    	return;
    }
    if (mobile == "") {
        $('#phone').removeClass().addClass('text');
        $("#phone_error").removeClass().html("");
        $("#phone_error").hide();
        $("#phone_succeed").removeClass().addClass("");
        oldMobile = mobile;
        mobileFlags = false;
        return;
    }
    if (oldMobile == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult(mobileResult);
        return;
    }
    oldMobile = mobile;
    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $('#phone').removeClass().addClass('text highlight2');
        $("#phone_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone_error").removeClass().addClass("error");
        $("#phone_error").show();
        $("#phone_succeed").removeClass().addClass("");
        mobileFlags = false;
        return;
    }
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {

        mobileResult = result.success;
        // if (mobileResult != 2) {
        // if ($("#sendMobileCode").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode").removeAttr("disabled");
        // }
        $("#sendMobileCode").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle();
        }

        if (result.success == 1 || result.success == 2) {
         	 $('#phone').removeClass().addClass('text highlight2');
             $("#phone_error").html("该手机号已被绑定，请更换手机号");
             $("#phone_error").removeClass().addClass("error");
             $("#phone_error").show();
             $("#phone_succeed").removeClass().addClass("");
       	    mobileFlags = false;
       }
    });
}
function showMobileCheckResult(result) {
    if (result == 0) {
        mobileOkStyle();
    }
    if (result == 1) {
        mobileEngagedStyle();
    }
    if (result == 2) {
        mobileBindedStyle();
    }
}

function mobileOkStyle() {
    $('#phone').removeClass().addClass("text");
    $("#phone_error").html("");
    $("#phone_error").hide();
    $("#phone_succeed").removeClass().addClass("blank succeed");
    $("#mobileCode_error").removeClass().empty();
    $("#mobileCodeDiv").show();
    $("#rebind").remove();
    $("#mobileCodeDiv").show();
    mobileFlags = true;
}

function mobileBindedStyle(ub) {
    $('#phone').removeClass().addClass('text highlight2');
    $("#phone_error").html("该手机号已重新注册并绑定，"+ub+"天内不可改绑");
    $("#phone_error").removeClass().addClass("error");
    $("#phone_error").show();
    $("#phone_succeed").removeClass().addClass("");
    $("#rebind").remove();
    $("#mobileCodeDiv").show();
    mobileFlags = false;
}

function mobileEngagedStyle() {
    $('#phone').removeClass().addClass('text highlight3');
    $("#phone_error").html("手机号已注册，继续注册将与原账号解绑");
    $("#phone_error").removeClass().addClass("cue");
    $("#phone_error").show();
    $("#phone_succeed").removeClass().addClass("blank cue-ico");
    $("#rebind").remove();
    $('#authcodeDiv').after('<div class="item" id="rebind"> <span class="label">&nbsp;</span><div class="fl item-ifo item-ifo-extra"> <a href="javascript:;" onclick="unbind();" class="btn-comm"><span>继续注册</span></a> </div> </div>');
    $("#mobileCodeDiv").hide();
    mobileFlags = false;
}
function showMobileCheckResult1(result) {
    if (result == 0) {
        mobileOkStyle1();
    }
    if (result == 1) {
        mobileEngagedStyle1();
    }
    if (result == 2) {
        mobileBindedStyle1();
    }
}
function mobileOkStyle1() {
    $('#phone1').removeClass().addClass("text");
    $("#phone1_error").removeClass().addClass("success");
    $("#phone1_error").html("此手机号可用");
    $("#phone1_succeed").removeClass().addClass("blank succeed");
    $("#mobileCodeDiv1").show();
    $("#dmcode1").show();
    $("#rebind1").remove();
    mobileFlag = true;
    return;
}

function mobileBindedStyle1(ub) {
    $('#phone1').removeClass().addClass('text highlight2');
    $("#phone1_error").html("该手机号已重新注册并绑定，"+ub+"天内不可改绑");
    $("#phone1_error").removeClass().addClass("error");
    $("#phone1_succeed").removeClass().addClass("blank error-ico");
    $("#phone1_error").show();
    $('#phone1').removeClass("highlight1").addClass('highlight2');
    $("#sendMobileCode1").attr("disabled", "disabled");
    $("#mobileCodeDiv1").show();
    $("#rebind1").remove();
    mobileFlag = false;
    return;
}

function mobileEngagedStyle1() {
    $('#phone1').removeClass().addClass('text highlight3');
    $("#phone1_error").html("手机号已注册，继续注册将与原账号解绑");
    $("#phone1_error").removeClass().addClass("cue");
    $("#phone1_succeed").removeClass().addClass("blank cue-ico");
    $("#phone1_error").show();
    $("#rebind1").remove();
    $('#dphone1').after('<div class="item"  id="rebind1"><span class="label">&nbsp;</span><div class="fl item-ifo"><a href="javascript:void(0);" onclick="unbind1();"  class="btn btn-comm"><span>继续注册</span></a></div></div>');
    $("#mobileCodeDiv1").hide();
    mobileFlag = false;
    return;
}
// 次流程手机失去焦点事件
var mobileFlag = false;
var oldMobile1, mobileResult1;
function phone1Blur() {
    var mobile = $("#phone1").val();
    if (mobile == "") {
        $('#phone1').removeClass().addClass("text");
        $("#phone1_error").hide();
        $('#phone1_succeed').removeClass();
        $("#rebind1").remove();
        $("#dmcode1").show();
        $("#mobileCodeDiv1").show();
        oldMobile1 = mobile;
        mobileFlag = false;
        return;
    }
    if (oldMobile1 == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult1(mobileResult1);
        return;
    }
    oldMobile1 = mobile;

    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $("#phone1_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone1_error").removeClass().addClass("error");
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        $("#phone1_error").show();
        $('#phone1').removeClass().addClass('text highlight2');
        $("#mobileCodeDiv1").show();
        $("#rebind1").remove();
        $("#dmcode1").show();
        mobileFlag = false;
        return;
    }
    $("#state").val("");
    $("#mobileCodeSucMessage1").removeClass().empty();
    $("#mobileCode1_error").removeClass().empty();
    $("#mobileCode1_error").hide();
    $('#mobileCode1').removeClass("highlight2");
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {
        // mobileResult1 = result.success;
        // if (mobileResult1 != 2) {
        // if ($("#sendMobileCode1").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode1").removeAttr("disabled");
        // }
        $("#sendMobileCode1").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle1();
        }

        if (result.success == 1) {
            mobileEngagedStyle1();
        }

        if (result.success == 2) {
            mobileBindedStyle1(result.ub);
            // $("#sendMobileCode1").attr("disabled", "disabled");
        }
    });
}
function phone1Keyup() {
    var mobile = $("#phone1").val();
    var mobileLength=mobile.length;
    if(mobileLength != 11)
    {
    	return;
    }
    if (mobile == "") {
        $('#phone1').removeClass().addClass("text");
        $("#phone1_error").hide();
        $('#phone1_succeed').removeClass();
        $("#rebind1").remove();
        $("#dmcode1").show();
        $("#mobileCodeDiv1").show();
        oldMobile1 = mobile;
        mobileFlag = false;
        return;
    }
    if (oldMobile1 == mobile && mobile != "") {
        // 未修改手机号
        // showMobileCheckResult1(mobileResult1);
        return;
    }
    oldMobile1 = mobile;

    if (validateRules.isNull(mobile) || !validateRules.isMobile(mobile)) {
        $("#phone1_error").html("手机号码格式有误，请输入正确的手机号");
        $("#phone1_error").removeClass().addClass("error");
        $("#phone1_succeed").removeClass().addClass("blank error-ico");
        $("#phone1_error").show();
        $('#phone1').removeClass().addClass('text highlight2');
        $("#mobileCodeDiv1").show();
        $("#rebind1").remove();
        $("#dmcode1").show();
        mobileFlag = false;
        return;
    }
    $("#state").val("");
    $("#mobileCodeSucMessage1").removeClass().empty();
    $("#mobileCode1_error").removeClass().empty();
    $("#mobileCode1_error").hide();
    $('#mobileCode1').removeClass("highlight2");
    // 检测手机号码是否存在
    $.getJSON("../validateuser/isMobileEngaged?mobile=" + mobile + "&r=" + Math.random(),
    function(result) {
        // mobileResult1 = result.success;
        // if (mobileResult1 != 2) {
        // if ($("#sendMobileCode1").attr("disabled")) {
        // return;
        // }
        // $("#sendMobileCode1").removeAttr("disabled");
        // }
        $("#sendMobileCode1").removeAttr("disabled");
        if (result.success == 0) {
            mobileOkStyle1();
        }

        if (result.success == 1) {
            mobileEngagedStyle1();
        }

        if (result.success == 2) {
            mobileBindedStyle1(result.ub);
            // $("#sendMobileCode1").attr("disabled", "disabled");
        }
    });
}
// 次流程短信验证码获得焦点事件
function mobileCodeFocus() {
    $('#mobileCode').removeClass().addClass('text text-1 highlight1');
    $("#mobileCode_error").hide();
}
// 次流程短信验证码获得失去事件
function mobileCodeBlur() {
    $('#mobileCode').removeClass().addClass("text text-1");
    $("#mobileCode_error").hide();
}
// 次流程短信验证码获得焦点事件
function mobileCode1Focus() {
    $('#mobileCode1').removeClass().addClass('text text-1 highlight1');
    $("#mobileCode1_error").hide();
}
// 次流程短信验证码获得失去事件
function mobileCode1Blur() {
    $('#mobileCode1').removeClass().addClass("text text-1");
    $("#mobileCode1_error").hide();
    $('#mobileCode1_succeed').removeClass('error-ico');
}
// 解绑按钮事件
function unbind() {
    $("#state").val("unbind");
   /* $("#mobileCodeDiv").show(); */
   /* $("#rebind").remove(); */
    // 校验手机号码和验证码是否正确

    // sendmCode();
    sendMobileCode();
}
// 次流程解绑按钮事件
function unbind1() {
    $("#state").val("unbind");
    $("#mobileCodeDiv1").show();
    $("#rebind1").remove();
    // 校验手机号码和验证码是否正确


    sendMobileCode1();
}
// 用户协议
$(function() {
    $('#protocol').click(function() {
        jQuery.jdThickBox({
            id:"protocol",
            type: "text",
            title: "京东用户注册协议",
            width: 922,
            height: 450,
            source: "<div class=\" regist-2013\">" + "<div class=\"regist-bor\">" + "<div class=\"mc\">" + "<div id=\"protocol-con\">" + " <h4>京东用户注册协议</h4>" +

            "    <p>" + "        本协议是您与京东网站（简称\"本站\"，网址：www.jd.com）所有者（以下简称为\"京东\"）之间就京东网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击\"同意并继续\"按钮后，本协议即构成对双方有约束力的法律文件。</p>" + "    <h5> 第1条 本站服务条款的确认和接纳</h5>" +

            "    <p>" + "        <strong>1.1</strong>本站的各项电子服务的所有权和运作权归京东所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。" + "    </p>" +

            "    <p>" + "        <strong>1.2</strong>用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。</p>" +

            "    <p>" + "        <strong>1.3</strong>如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。</p>" +

            "    <p>" + "        <strong>1.4</strong>京东保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。</p>" + "    <h5> 第2条 本站服务</h5>" +

            "    <p>" + "        <strong>2.1</strong>京东通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。</p>" +

            "    <p>" + "        <strong>2.2</strong>用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。" + "    </p>" + "    <h5> 第3条 用户信息</h5>" +

            "    <p>" + "        <strong>3.1</strong>用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且京东保留终止用户使用京东各项服务的权利。" + "    </p>" +

            "    <p>" + "        <strong>3.2</strong>用户在本站进行浏览、下单购物等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。" + "    </p>" +

            "    <p>" + "        <strong>3.3</strong>用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站并向公安机关报案。" + "    </p>" +

            "    <p>" + "        <strong>3.4</strong><strong>用户同意，京东拥有通过邮件、短信电话等形式，向在本站注册、购物用户、收货人发送订单信息、促销活动等告知信息的权利。</strong></p>" +

            "    <p>" + "        <strong>3.5</strong><strong>用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。</strong></p>" +

            "    <p>" + "        <strong>3.6</strong><strong>用户同意，京东有权使用用户的注册信息、用户名、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。</strong></p>" + "    <h5> 第4条 用户依法言行义务</h5>" +

            "    <p> 本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：</p>" +

            "    <p>" + "        <strong>（1）</strong>不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；" + "    </p>" +

            "    <p>" + "        <strong>（2）</strong>从中国大陆向境外传输资料信息时必须符合中国有关法规；</p>" +

            "    <p>" + "        <strong>（3）</strong>不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；" + "    </p>" +

            "    <p>" + "        <strong>（4）</strong>不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；</p>" +

            "    <p>" + "        <strong>（5）</strong>不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；</p>" +

            "    <p>" + "        <strong>（6）</strong>不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；</p>" +

            "    <p>" + "        <strong>（7）</strong>不得教唆他人从事本条所禁止的行为；</p>" +

            "    <p>" + "        <strong>（8）</strong>不得利用在本站注册的账户进行牟利性经营活动；</p>" +

            "    <p>" + "        <strong>（9）</strong>不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；</p>" +

            "    <p>" + "        用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。</p>" +

            "    <p>" + "        <strong>本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。</strong></p>" +

            "    <p>" + "        <strong>若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户帐号等措施。</strong>用户须对自己在网上的言论和行为承担法律责任。</p>" + "    <h5> 第5条 商品信息</h5>" +

            "    <p>" + "        本站上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本站不作特别通知。由于网站上商品信息的数量极其庞大，虽然本站会尽最大努力保证您所浏览商品信息的准确性，但由于众所周知的互联网技术因素等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解；京东欢迎纠错，并会视情况给予纠错者一定的奖励。</p>" +

            "    <p> 为表述便利，商品和服务简称为\"商品\"或\"货物\"。</p>" + "    <h5> 第6条 订单</h5>" +

            "    <p>" + "        <strong>6.1</strong>在您下订单时，请您仔细确认所购商品的名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。<span>收货人与用户本人不一致的，收货人的行为和意思表示视为用户的行为和意思表示，用户应对收货人的行为及意思表示的法律后果承担连带责任。</span>" + "    </p>" +

            "    <p>" + "        <strong>6.2</strong><strong>除法律另有强制性规定外，双方约定如下：本站上销售方展示的商品和价格等信息仅仅是交易信息的发布，您下单时须填写您希望购买的商品数量、价款及支付方式、收货人、联系方式、收货地址等内容；系统生成的订单信息是计算机信息系统根据您填写的内容自动生成的数据，仅是您向销售方发出的交易诉求；销售方收到您的订单信息后，只有在销售方将您在订单中订购的商品从仓库实际直接向您发出时（ 以商品出库为标志），方视为您与销售方之间就实际直接向您发出的商品建立了交易关系；如果您在一份订单里订购了多种商品并且销售方只给您发出了部分商品时，您与销售方之间仅就实际直接向您发出的商品建立了交易关系；只有在销售方实际直接向您发出了订单中订购的其他商品时，您和销售方之间就订单中该其他已实际直接向您发出的商品才成立交易关系。您可以随时登录您在本站注册的账户，查询您的订单状态。</strong>" + "    </p>" +

            "    <p>" + "        <strong>6.3</strong><strong>由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的商品都会有货；如您拟购买的商品，发生缺货，您有权取消订单。</strong>" + "    </p>" + "    <h5> 第7条 配送</h5>" +

            "    <p>" + "        <strong>7.1</strong>销售方将会把商品（货物）送到您所指定的收货地址，所有在本站上列出的送货时间为参考时间，参考时间的计算是根据库存状况、正常的处理过程和送货时间、送货地点的基础上估计得出的。</p>" + "" + "    <p>" + "        <strong>7.2</strong>因如下情况造成订单延迟或无法配送等，销售方不承担延迟配送的责任：</p>" +

            "    <p>" + "        <strong>（1）</strong>用户提供的信息错误、地址不详细等原因导致的；" + "    </p>" +

            "    <p>" + "        <strong>（2）</strong>货物送达后无人签收，导致无法配送或延迟配送的；</p>" +

            "    <p>" + "        <strong>（3）</strong>情势变更因素导致的；</p>" +

            "    <p>" + "        <strong>（4）</strong>不可抗力因素导致的，例如：自然灾害、交通戒严、突发战争等。</p>" + "    <h5> 第8条 所有权及知识产权条款</h5>" +

            "    <p>" + "        <strong>8.1</strong><strong>用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内容）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），全部独家且不可撤销地转让给京东所有，用户同意京东有权就任何主体侵权而单独提起诉讼。</strong>" + "    </p>" +

            "    <p>" + "        <strong>8.2</strong><strong>本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律规定的著作财产权等权利转让书面协议，其效力及于用户在京东网站上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。</strong>" + "    </p>" +

            "    <p>" + "        <strong>8.3</strong><strong>用户同意并已充分了解本协议的条款，承诺不将已发表于本站的信息，以任何形式发布或授权其它主体以任何方式使用（包括但不限于在各类网站、媒体上使用）。</strong></p>" +

            "    <p>" + "        <strong>8.4</strong><strong>京东是本站的制作者,拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的最大限度范围内，京东对本协议及本站内容拥有解释权。</strong>" + "    </p>" +

            "    <p>" + "        <strong>8.5</strong><strong>除法律另有强制性规定外，未经京东明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，京东有权追究其法律责任。</strong>" + "    </p>" + "    <p>" + "        <strong>8.6</strong>本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是京东或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是京东的排他财产，受中国和国际版权法的保护。本站上所有软件都是京东或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。" + "    </p>" + "    <h5> 第9条 责任限制及不承诺担保</h5>" + "    <p>" + "        <strong>除非另有明确的书面说明,本站及其所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务，均是在\"按现状\"和\"按现有\"的基础上提供的。</strong></p>" +

            "    <p>" + "        <strong>除非另有明确的书面说明,京东不对本站的运营及其包含在本网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。</strong>" + "    </p>" + "    <p>" + "        <strong>京东不担保本站所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务、其服务器或从本站发出的电子信件、信息没有病毒或其他有害成分。</strong></p>" + "    <p>" + "        <strong>如因不可抗力或其它本站无法控制的原因使本站销售系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，京东会合理地尽力协助处理善后事宜。</strong></p>" + "    <h5> 第10条 协议更新及用户关注义务</h5>" + "    根据国家法律法规变化及网站运营需要，京东有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登录查阅最新协议；<strong><em>用户有义务不时关注并阅读最新版的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受京东网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。京东建议您在使用本站之前阅读本协议及本站的公告。</em></strong>" + "    如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。" + "    <h5> 第11条 法律管辖和适用</h5>" + "    本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。" + "    如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。" + "    <h5> 第12条 其他 </h5>" + "    <p>" + "        <strong>12.1</strong>京东网站所有者是指在政府部门依法许可或备案的京东网站经营主体。</p>" +

            "    <p>" + "        <strong>12.2</strong>京东尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，京东将虚心接受并适时修改本协议及本站上的各类规则。" + "    </p>" +

            "    <p>" + "        <strong>12.3</strong><span>本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。</span></p>" + "    <p>" + "        <strong>12.4</strong><span>您点击本协议下方的\"同意并继续\"按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。</span></p>" + "</div>" + "      <div class=\"btnt\">" + "         <input  class=\"btn-img\"  type=\''button\" value='同意并继续' onclick='protocolReg();'/>" + "     </div>" + "</div>" + "</div>" + "</div>",
            _autoReposi: true
        });
    });
});

// 京东钱包用户协议
$(function() {
    $('#payProtocol').click(function() {
        jQuery.jdThickBox({
            id:"payprotocol",
            type: "text",
            title: "京东钱包服务协议",
            width: 922,
            height: 450,
            source: "<div class=\" regist-2013\">" + "<div class=\"regist-bor\">" + "<div class=\"mc\">" + "<div id=\"protocol-con\">" + " <h4>京东钱包服务协议 </h4>" +
                "<p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span></b><b><span style=\"font-size:" +
        "  9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">京东钱包服务协议（以下称“本协议<span lang=\"EN-US\">”</span>）由您与网银在线（北京）科技有限公司（以下简称“本公司”）签订。</span></b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您确认，在申请本协议项下服务时，您已详细阅读本协议的所有内容，您充分理解并同意接受本协议的全部内容。本协议会对与您的权益具有或可能具有重大关系的条款，以及对本公司具有或可能具有免责或限制责任的条款均用粗体字标注，请您注意。如果您不同意本协议的任意内容，或者无法准确理解本公司对条款的解释，请不要进行后续操作。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">一、 关于“京东钱包”服务协议的确认和接纳</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  </span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（一）<span lang=\"EN-US\">&nbsp;</span>“京东钱包”软件服务系统是由本公司运营并所有的为京东钱包个人用户提供电子支付账户服务及理财产品的支付结算服务的软件系统。“京东钱包”服务是由本公司向京东钱包个人用户提供的“京东钱包”软件服务系统及（或）附随的代收代付等中介服务（以下简称“京东钱包服务”）。为了保障您的权益，<b>您应保证自己在注册使用京东钱包服务时为具有完全民事行为能力的自然人。</b>您在自愿注册使用本京东钱包服务前，必须仔细阅读本服务协议所有条款。一经注册使用京东钱包服务即视为您对本协议服务条款的接受和确认。<b><span lang=\"EN-US\"><o:p></o:p></span></b></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二） 本公司有权在必要时单方修改或变更本协议的内容，并将通过本公司网站公布最新的服务协议，不另作个別通知，您应随时关注本公司网站发布的新公告以了解相关内容。若您于本公司修改或变更本服务条款后继续使用本服务，则视为您已阅读、了解、确认并同意接受修改或变更；若您不同意，则您应主动立即停止使用本服务。<b>您在使用京东钱包服务时，应自行判断对方是否是完全民事行为能力人并自行决定是否进行支付或转账给对方等，且您应自行承担与此相关的所有风险。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（三）您同意，您在京东钱包网站（<span lang=\"EN-US\">www.jdpay.com</span>），或京东钱包无线客户端上发生的所有支付行为，您不可撤销的授权由本公司按照《京东钱包服务协议》进行处理；同时本公司有权为提供前述服务的需要获取您的相关信息（包括但不限于个人信息、行为信息、账户相关信息等）。本公司按照您的操作指令或《京东钱包服务协议》的相关约定进行资金的冻结、扣划完全来自于您的授权，因此造成的任何损失本公司不承担任何责任。但您确认，您使用京东钱包服务时，您仍应完全遵守本《京东钱包服务协议》及本公司制定的各项规则及页面提示等。<span lang=\"EN-US\"><br>\n" +
        "  </span><b>二、关于“京东钱包”服务的注册</b><span lang=\"EN-US\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>在使用“京东钱包”服务前，您必须先注册成为“京东钱包”用户，您同意以下事项：<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（一）本公司仅向符合中华人民共和国法律规定的具有完全民事权利能力和民事行为能力，能够独立承担民事责任的中国大陆地区的自然人提供“京东钱包”服务。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二）您必须依京东钱包服务注册表的要求提供您本人准确、真实、有效、最新及完整的资料（包括但不限于身份证、户口本、护照等证件或其他身份证明文件、联系方式、与京东钱包账户（或称“账户”））及与之关联的银行账户、绑定的电子邮箱、手机号码等，如有变更，应及时通知本公司并按照本公司要求办理变更手续。<span lang=\"EN-US\"><br>\n" +
        "  </span>（三）您有义务维持您的“用户资料”，确保其准确、真实、有效及完整。若您提供任何错误、虚假、失效或不完整的资料，或者<b>本公司有合理的理由怀疑资料为错误、虚假、过期或不完整，本公司有权暂停或终止向您提供部分或全部京东钱包服务，对此本公司不承担任何责任，您承诺并同意负担因此所产生的所有损失，包括但不限于直接损失、间接损失。</b>若因国家法律法规、部门规章或监管机构的要求，本公司需要您补充提供任何相关资料时，如您不能及时配合提供，本公司有权暂停或终止向您提供部分或全部京东钱包服务。<span lang=\"EN-US\"><br>\n" +
        "  </span>（四）为了适用法律规范，本条款及任何其他的协议、告示或其他关于您使用本服务账户及服务的通知，您同意本公司通过电子方式通知您。电子方式包括但不限于以电子邮件方式、或于本网站或者合作网站上公布、或无线通讯装置通知等方式。上述条款、协议、通知、告示一经发出，即视为已送达。<span lang=\"EN-US\"><br>\n" +
        "  </span><b>三、 关于“京东钱包”服务的使用</b><span lang=\"EN-US\"><br>\n" +
        "  </span>（一）<span lang=\"EN-US\">&nbsp;</span>“京东钱包”服务说明：<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  1.&nbsp;</span>一旦您注册成为京东钱包用户，并选择使用“京东钱包”服务，则本公司将在您及（或）对方符合指定条件或状态时，支付款项给您所指定的对象，或收取他人支付给您的款项。<span lang=\"EN-US\"><br>\n" +
        "  2.</span>如果您尚未注册成为京东钱包用户或注册信息填写不完整，当您收到来自他人通过京东钱包服务支付给您款项时，由于您尚未注册成功，本公司将暂时替您接收此笔款项，而不能直接划款给您，直到您成功注册或将您的注册信息补充完整。<span lang=\"EN-US\"><br>\n" +
        "  3.</span>您使用京东钱包服务且暂留的资金，在任何时候均绝对独立于本公司营运资金之外，本公司不会以任何形式挪用您的资金。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  4.&nbsp;</span>按照中华人民共和国法律规定，由于本公司非银行或金融机构，本公司作为第三方支付机构无法为您提供京东钱包“即时”资金转账服务，资金会在合理时间范围内于途中流转，您对此予以认同。<span lang=\"EN-US\"><br>\n" +
        "  5.</span>在您使用京东钱包服务期间，本公司不对代收或代付的款项的货币贬值承担任何风险，并且本公司无须向您支付此等款项的任何孳息。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（二）一般服务条款<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>您在使用本协议项下的“京东钱包”服务时，可实现以下“京东钱包”中介服务：<span lang=\"EN-US\"><br>\n" +
        "  1.</span>代收功能：接受您的指令代为收取其他第三方向您支付的各类合法款项。<span lang=\"EN-US\"><br>\n" +
        "  2.</span>代付功能：经由您的授权或指令，自您的京东钱包账户内扣划一定金额向指定账户或指定第三方支付。如非经法律程序或者非由于本条款约定事项之出现，此等支付是不可逆转的。<span lang=\"EN-US\"><br>\n" +
        "  3.</span>退<span lang=\"EN-US\">&nbsp;(&nbsp;</span>付<span lang=\"EN-US\">&nbsp;)&nbsp;</span>款功能：您可以申请退返您京东钱包账户内的款项，但是<span lang=\"EN-US\">&nbsp;:&nbsp;<br>\n" +
        "  </span>（<span lang=\"EN-US\">1</span>）当您收领退返款项时，必须提供一个与您本人名称完全相符的有效的国内银行账户。当您向本公司做出退<span lang=\"EN-US\">&nbsp;(&nbsp;</span>付<span lang=\"EN-US\">&nbsp;)&nbsp;</span>款指示时，本公司将于收到指令后的一到三个工作日内（根据您登记的银行不同，会产生时间上的差异），同时必须是在不违反国家法律法规的前提下，将相应的资金按照您的指示汇入您登记的银行账户<span lang=\"EN-US\">&nbsp;,&nbsp;</span>除此以外本服务不提供其他收领方式。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">2</span>）国际使用者若需使用“退<span lang=\"EN-US\">&nbsp;(&nbsp;</span>付<span lang=\"EN-US\">&nbsp;)&nbsp;</span>款”功能，则需具备国内银行账户。<span lang=\"EN-US\">&nbsp;</span>暂缓开通，本条款现时不适用。<span lang=\"EN-US\"><br>\n" +
        "  4.</span>查询功能：<span lang=\"EN-US\">&nbsp;</span>本公司将对您在本系统中的所有操作进行记录，不管该操作的目的最终是否实现，您可以在本系统中实时进行查询，并可以此为基础与您的银行账户进行核对查询，如您认为数额有误，则本公司将向您提供已按照您的指令所执行的收付款的相关记录，您了解并同意您最终能够收到款项的责任是由您登记的银行账户对应的银行提供的，您需向该银行请求查证。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  5.</span>账户记录：<span lang=\"EN-US\">&nbsp;</span>本公司将对您京东钱包账户内的信息和操作的全部或部分进行记录。<span lang=\"EN-US\"><br>\n" +
        "  6.</span>您同意基于运行的需要<span lang=\"EN-US\">&nbsp;,&nbsp;</span>本公司可以暂时提供部分服务功能<span lang=\"EN-US\">&nbsp;,&nbsp;</span>或于将来暂停部分服务功能或开通新的服务功能、对系统进行升级及改造<span lang=\"EN-US\">&nbsp;,&nbsp;</span>因此可能导致对您提供的京东钱包服务延迟或限制或终止的，不视为本公司的违约。当任何功能减少或者增加或者变化时<span lang=\"EN-US\">&nbsp;,&nbsp;</span>只要您仍然使用京东钱包服务<span lang=\"EN-US\">&nbsp;,&nbsp;</span>表示您仍然同意本条款或者本条款修正后的条款。<span lang=\"EN-US\"><br>\n" +
        "  </span>（三） 转账服务：是指收付款双方使用本系统，在付款方向本系统指定收款方京东钱包账户或银行账户和转账金额后<span lang=\"EN-US\">,</span>将付款方京东钱包账户内指定金额的款项划转至收款方京东钱包账户或银行账户的一种资金转移服务。本公司提示您注意：该项服务适用于您与收（付）款方彼此都有充分了解的转账行为。<b>在您使用转账服务指示转出资金时，您所转出的款项将进入您向本系统指示的收款方的京东钱包账户或银行账户。在您注册了京东钱包账户后，您的京东钱包账户即具备接受（收）来自转账服务的转账款项的功能<span lang=\"EN-US\">,</span>但未进行实名认证的京东钱包账户可能会受到收款和（或）退返的限制。基于此项服务可能存在的风险，在使用转账服务时，您需理解并接受以下条款：<span lang=\"EN-US\"><br>\n" +
        "  </span></b><span lang=\"EN-US\">1.&nbsp;</span>本公司为控制可能存在的风险，对所有用户使用转账服务时的每天转账款项最高限额、每笔转账最高限额、每天转账的最高频次进行了限制，并保留对限制种类和限额进行无需预告地调整的权利。<span lang=\"EN-US\"><br>\n" +
        "  2.</span>您可能收到由于使用转账服务的付款方指示错误（失误）而转账到您京东钱包账户或银行账户的款项，在此情况下您应该根据国家的相关法律规定和实际情况处理该笔款项。<span lang=\"EN-US\"><br>\n" +
        "  3.</span><b>使用转账服务是基于您对转账对方的充分了解（包括但不限于对方的真实身份及确切的京东钱包账户名等），一旦您选用转账服务进行转账，您应当自行承担因您指示错误（失误）而导致的风险。你理解：本公司及其关联公司仅向您提供资金支付渠道，本公司依照您指示的收款方并根据本协议的约定完成转账后，即完成了当次服务的所有义务，本公司亦无义务参与支付环节之外的任何赔偿、纠纷处理等活动。对于收付款双方之间产生的支付环节之外的任何纠纷不承担任何责任，也不提供任何形式的纠纷解决途径，您应当自行处理相关的纠纷。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（四）实名认证服务</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">1.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">关于实名认证服务的理解与认同</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">本公司有权采取各种必要手段（包括但不限于向第三方确认）对您的身份进行识别。由于目前的技术水平下本公司所能采取的方法有限，且在网络上进行用户身份识别存在一定的困难，因此，本公司对完成实名认证的用户身份的准确性和绝对真实性不做任何保证。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">1</span>）您同意，本公司有权记录并保存您在实名认证中提供给本公司的身份信息和本公司向其他合作方获取的身份信息，亦有权根据本协议的约定向您或第三方提供您是否通过实名认证以及您的实名认证身份信息。<span lang=\"EN-US\"><o:p></o:p></span></span></b></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">上述身份信息包括但不限于您的京东钱包账户<span lang=\"EN-US\">( </span>或称“账户”<span lang=\"EN-US\">)</span>及与之关联的银行账户、密码、数字证书、短信校验服务、支付盾、签约时设置的电话号码、手机号码、身份证件名称、证件号码、证件有效期限、联系地址、电子邮箱等及本公司认可的或法律法规规定的其他信息要素。<span lang=\"EN-US\"><o:p></o:p></span></span></b></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">2</span>）您同意，您有义务按照本公司的要求提供本人的真实身份信息进行注册及实名认证，并保证上述身份信息的准确性、真实性、有效性、完整性，同时也有义务在相关资料发生变更时及时通知本公司进行更新。若因您提供任何错误、不实、无效或不完整信息，或本公司有合理理由怀疑该资料为错误、不实、过时或不完整的，本公司有权暂停或终止对您提供服务，或限制您京东钱包账户的部分或全部功能，本公司对此不承担任何责任。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">3</span>）除非本协议另有约定，一旦您的京东钱包账户完成了实名认证，相关信息和实名认证结果将不能由您自行进行任何修改；</span></b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">如果您的身份信息等在完成实名认证后发生了变更，您应按本公司要求提供资料且由本公司审核后进行更新。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">4</span>）若您未满<span lang=\"EN-US\">16</span>周岁或未满足本协议规定的条件而以不当方式注册成为本公司用户或通过本公司实名认证的，则因此产生的一切法律责任应由您及<span lang=\"EN-US\">(</span>或<span lang=\"EN-US\">)</span>您的监护人承担；因此给本公司造成损失的，您及（或）您的监护人应向本公司进行赔偿。同时本公司有权随时停止为您提供服务。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">2.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">身份信息识别</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">1</span>）中华人民共和国大陆地区（以下简称大陆）个人京东钱包用户提供以下证件用于身份信息识别：申请实名认证时处于有效期内的身份证、护照等明确标有身份证号的证件之一（需要在线上传证件时，必须是彩色原件扫描件，或者彩色数码拍摄件，第二代身份证需要同时提交正反两面，户籍证明自提供之日起的有效期须在三个月以上，除临时身份证外，其它有效期三个月以内的证件不予受理<span lang=\"EN-US\">)&nbsp;</span>。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">2</span>）台湾地区用户应提供有效期内的台湾居民往来大陆通行证（台胞证）<span lang=\"EN-US\">+</span>入境证明（需要同时提交公章页）。港澳用户应提供有效期内的港澳居民往来内地通行证。海外用户应提供有效期内的护照<span lang=\"EN-US\">+</span>入境证明（或中华人民共和国颁发的《外国人永久居留证》）。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">3</span>）通过身份信息识别的京东钱包用户不能自行修改已经通过实名认证的信息，包括但不限于姓名以及身份证件号码等。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">4</span>）大陆个人京东钱包用户实名认证的有效期与其提供的身份证件有效期一致，但实名认证有效期最长不超过自实名认证完成之日起<span lang=\"EN-US\">20</span>年，户籍证明从通过审核当日开始起计算，有效期一年。有效期届满后，相应的京东钱包用户应使用最新身份信息进行再次实名认证。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">5</span>）在京东钱包用户对其京东钱包账户进行取回密码等操作时，您应按照本公司要求出示相关身份证件及资料以便本公司进行核实。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">3.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">银行账户识别<span lang=\"EN-US\"><o:p></o:p></span></span></b></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">1</span>）个人京东钱包用户进行实名认证应提供本人在大陆银行开设的人民币账号、开户名、开户银行。<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">2</span>）京东钱包用户填写的银行账户开户名必须与身份信息中的真实姓名完全一致，所有经京东钱包用户填写的资料将成为实名认证资料。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（<span lang=\"EN-US\">3</span>）为确保用户提供银行账户的真实性、完整性、有效性和准确性，用户同意协助本公司采取划扣、付款或其他方式完成银行账户的识别。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">4.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">身份实名认证信息共享<span lang=\"EN-US\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>为了使您享有便捷的服务，您经由其它网站或其他合作方向本公司提交实名认证申请即表示您同意本公司为您核对所提交的全部身份信息和银行账户信息，并同意本公司将实名认证结果及相关身份信息提供给该网站或合作方。<span lang=\"EN-US\"><br>\n" +
        "  5.</span>实名认证身份信息的管理<span lang=\"EN-US\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>您在实名认证时提交给本公司的实名认证身份信息，即不可撤销地授权由本公司保留。本公司承诺除法定或约定事由外，不公开或编辑或透露您的实名认证身份信息及保存在本公司的非公开内容，不将此类内容用于商业目的，但第（四）条第<span lang=\"EN-US\">1</span>款规定以及以下情形除外：<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">1</span>）您授权本公司透露的相关信息；<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">2</span>）本公司按照法律法规的规定向国家有权机关提供；<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">3</span>）向本公司关联公司提供；<span lang=\"EN-US\"><br>\n" +
        "  </span>（<span lang=\"EN-US\">4</span>）第三方和本公司一起为您提供服务时，该第三方向您提供服务所需的相关信息；</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">6.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">不得为非法或禁止的使用</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">接受本协议全部的说明、条款、条件是您申请实名认证的先决条件。您声明并保证，您不得为任何非法或为本协议所禁止之目的进行实名认证申请。您不得以任何可能损害、使瘫痪、使过度负荷或损害其他网站或其他网站的服务或本公司或干扰他人对于京东钱包实名认证申请的使用等方式使用实名认证服务。您不得经由非本公司许可提供的任何方式取得或试图取得任何资料或信息。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（五）借记卡快捷支付服务</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">1.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您通过网络页面点击确认或以其他方式选择接受本协议即表示您授权借记卡发卡行根据本公司的指令划扣您相应借记卡账户中的相应款项。<b>您理解并同意发卡行仅是依据京东钱包的指令进行款项的划扣，除非发卡行执行指令错误，否则因此导致的所有纠纷均由您与本公司之间协商解决，概与发卡行无关。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">2.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您应确保您在使用本服务时的借记卡为您本人的银行卡，确保您使用借记卡的行为合法、有效，未侵犯任何第三方合法权益；否则因此造成本公司、持卡人损失的，您应负责赔偿并承担全部法律责任，包括但不限于冻结您的京东钱包账户及资金、从您的京东钱包账户扣除相应的款项等。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "        </td>\n" +
        "    </tr>\n" +
        "    </tbody></table>\n" +
        "\n" +
        "<p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">3.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您应妥善保管借记卡、卡号、密码以及京东钱包账号、密码、数字证书、<span lang=\"EN-US\">Ukey</span>等与借记卡或与京东钱包账户有关的一切信息。如您遗失借记卡、泄露京东钱包账户密码或相关信息的，您应及时通知发卡行及<span lang=\"EN-US\">/</span>或本公司，以减少可能发生的损失。<b>因</b><b>非本公司原因造成的泄露密码、数字证书、绑定手机号、丢失借记卡或支付盾等所致损失需由您自行承担。<span lang=\"EN-US\"><o:p></o:p></span></b></span></p>\n" +
        "\n" +
        "<p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您同意，如您的账号和密码遭到未获授权的使用，或者发生其他任何安全问题时，将立即通知本公司。您在此同意并确认，本公司对因上述情形产生的遗失或损害不负责任。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "\n" +
        "<table class=\"MsoNormalTable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width:100.0%;mso-cellspacing:0cm;mso-yfti-tbllook:1184;mso-padding-alt:\n" +
        " 0cm 0cm 0cm 0cm\">\n" +
        "    <tbody><tr>\n" +
        "        <td style=\"padding:0cm 0cm 0cm 0cm\">\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">4.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您不应将本服务用于任何非法的或违反本协议的目的。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">5.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">为保障您的账户资金安全，您同意您使用快捷支付所绑定的银行卡将作为默认快捷支付银行卡，即仅可使用所绑定银行卡完成退（付）款功能。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">6.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您如使用本服务进行支付的，应当在认真确认金额后输入密码进行支付。<b><u>您认可和同意：输入密码即视为您确认交易和交易金额并已不可撤销地向本公司发出指令，本公司有权根据您的指令委托银行或第三方从借记卡中划扣资金给收款人。届时您不应以非本人意愿交易或其他任何原因要求本公司退款或承担其他责任</u></b>。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">7.</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您在对使用本服务过程中发出指令的真实性及有效性承担全部责任；您承诺，本公司依照您的指令进行操作的一切风险由您自行承担。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><u><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">8.</span></u></b><b><u><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您认可京东钱包账户的使用记录数据、交易金额数据等均以京东钱包系统平台记录的数据为准</span></u></b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">同时您授权本公司有权留存您在京东钱包网站填写的相应信息，以供后续向您持续性地提供相应服务（包括但不限于将本信息用于向您推广、提供其他更加优质的产品或服务）。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span></b><b><span style=\"font-size:\n" +
        "  9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您同意并授权本公司依据其自身判断对涉嫌欺诈或被他人控制并用于欺诈目的的京东钱包账户采取相应的措施，上述措施包括但不限于冻结账户及资金、处置涉嫌欺诈的资金等。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  <b><u>&nbsp;&nbsp;&nbsp; </u></b></span><b><u><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">出现下列情况之一的，本公司有权立即终止您使用京东钱包相关服务而无需承担任何责任：（<span lang=\"EN-US\">1</span>）违反本协议的约定；（<span lang=\"EN-US\">2</span>）违反本公司<span lang=\"EN-US\">/</span>或其他关联公司网站的条款、协议、规则、通告等相关规定，而被上述任一网站终止提供服务的；（<span lang=\"EN-US\">3</span>）京东钱包认为向您提供本服务存在风险的</span></u></b><span style=\"font-size:\n" +
        "  9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><u><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span></u></b><b><u><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">在不违反本协议约定的前提下，您可以就使用本服务时因不能归责于您的原因造成的借记卡内资金损失向本公司申请补偿。您同意，您能否得到补偿及具体金额取决于本公司自身独立的判断。您同意并认可本公司最终的补偿行为并不代表前述资金损失应归责于本公司，亦不代表本公司须为此承担其他任何责任。您同意，本公司在向您支付补偿的同时，即刻取得您可能或确实存在的就前述资金损失而产生的对第三方的所有债权及其他权利，包括但不限于就上述债权向第三方追偿的权利，且您不再就上述已经让渡给本公司的债权向该第三方主张任何权利，亦不再就资金损失向本公司主张任何权利。此外，在接受补偿的同时或之后，您从其它渠道挽回了前述资金损失的，或有新证据证明您涉嫌欺诈的，或者发生您应当自行承担责任的其他情形，您应在第一时间返还本公司向您支付的补偿款项，否则本公司有权采取包括但不限于从您京东钱包账户划扣等方式向您进行追偿。</span></u></b><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  </span></b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（六）服务费用：<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>京东钱包有权向您收取合理的交易服务费，并可根据业务发展需要对服务费进行调整。京东钱包应向您明示交易服务费用标准（含调整后的标准）。如您不接受相关费用标准，则不应继续使用京东钱包服务。若您继续使用京东钱包服务的，则视为接受京东钱包的相关费用标准。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您同意，除非另有说明，本公司有权自您委托本公司代管、代收或代付的款项中直接扣除上述服务费用。<span lang=\"EN-US\">&nbsp;<o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">四、第三方网站的链接</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">为实现身份信息审查，京东钱包网站<span lang=\"EN-US\">(www.jdpay.com)</span>、或京东钱包无线客户端上可能包含了指向第三方网站（如网上银行网站）的链接（以下简称“链接网站”）。“链接网站”非由本公司控制，对于任何“链接网站”的内容，包含但不限于“链接网站”内含的任何链接，或“链接网站”的任何改变或更新，本公司均不予负责。自“链接网站”接收的网络传播或其它形式之传送，本公司不予负责。<span lang=\"EN-US\"><br>\n" +
        "  </span><b>五、 暂停、拒绝或终止您的使用</b><span lang=\"EN-US\"><br>\n" +
        "  </span>（一） 您同意本公司有权基于单方独立判断，包含但不限于本公司认为您已经违反本服务条款的明文规定及精神，将暂停、中断或终止向您提供“京东钱包”服务（或其任何部分），并将“京东钱包”服务内任何“用户资料”加以移除并删除。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（二） 您同意本公司在发现异常交易或有疑义或有违法之虞时，不经通知有权先行暂停或终止您的账号、密码，并拒绝您使用“京东钱包”服务之部分或全部功能。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（三） 您同意在必要时，本公司无需进行事先通知即得终止提供“京东钱包”服务，并可以立即暂停、关闭或删除您的账号及您账号中所有相关资料及档案。<span lang=\"EN-US\"><br>\n" +
        "  </span><b>六、 用户账号、密码及安全性</b><span lang=\"EN-US\"><br>\n" +
        "  </span><b>（一）注册相关</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您应对您的京东钱包账户（以下亦简称该账户）负责，只有您本人可以使用您的京东钱包账户，该账户不可转让、赠与或继承。<b>在您决定不再使用该账户时，您应将该账户下所对应的可用款项全部提现或者向京东钱包发出其它支付指令。<span lang=\"EN-US\"><br>\n" +
        "  </span>您同意，若您丧失全部或部分民事权利能力或民事行为能力，本公司有权根据有效法律文书（包括但不限于生效的法院判决、生效的遗嘱等）处置与您的京东钱包账户相关的款项。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二）账户安全</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您了解并同意<span lang=\"EN-US\">&nbsp;,&nbsp;</span>确保密码及账号的机密安全是您的责任。您将对利用该密码及账号所进行的一切行动及言论，负完全的责任，并同意以下事项：<span lang=\"EN-US\"><br>\n" +
        "  1.&nbsp;</span>您不可对其他任何人泄露您的账户或密码，亦不可使用其他任何人的账户或密码。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  2.&nbsp;</span>您同意如发现有第三人冒用或盗用您的账号及密码，或其他任何未经合法授权的情形，应立即以有效方式通知本公司，并且同意本公司可暂停您使用本服务并采取有效的防范措施。<b>本公司在接受您的有效通知前，对第三人使用该服务已发生之效力，除非可证明本公司故意或重大过失而且是未经合法授权之使用，否则本公司将不承担任何责任。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">3.&nbsp;</span><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">交易异常处理：您使用本服务时同意并认可，可能由于银行本身系统问题、银行相关作业网络连线问题或其他不可抗拒因素，造成本服务无法提供。<b>您确保所输入的您的资料无误，如果因资料错误造成本公司于上述异常状况发生时无法及时通知您相关交易后续处理方式的，本公司不承担任何损害赔偿责任。</b><span lang=\"EN-US\"><br>\n" +
        "  4.</span><b>基于运行和交易安全的需要，您同意本公司有权暂时停止提供或者限制本服务部分功能<span lang=\"EN-US\">,</span>或提供新的功能，在任何功能减少、增加或者变化时，对系统进行升级及改造、只要您仍然使用本服务，表示您仍然同意本协议或者变更后的协议。</b><span lang=\"EN-US\"><br>\n" +
        "  5.&nbsp;</span><b>本公司有权了解您使用京东钱包的真实交易背景及目的，您应如实提供本公司所需的真实、全面、准确的信息；如果本公司有合理理由怀疑您提供虚假交易信息的，本公司有权暂时或永久限制您所使用的产品或服务的部分或全部功能。</b><span lang=\"EN-US\"><br>\n" +
        "  6.</span>为了您的京东钱包账户及其内资金的安全，根据本协议的约定、法律法规及法律文书的规定、政府依行政职权的要求及本公司依据自行判断认为的可能对您的京东钱包账户产生风险的情况，您同意本公司有权对您的京东钱包账户进行冻结，即进行暂时关闭该账户部分或全部使用权限的操作。冻结的逆过程为解冻，即本公司对您的被冻结的京东钱包账户结束冻结。<b>当冻结发生时，如您申请解冻，本公司有权依照自行判断根据本项规定前述的冻结原因来决定是否允许解冻，您应充分理解您的解冻申请并不必然被允许，且申请解冻时您应当配合本公司核实您的身份的有关要求，提供包括但不限于身份信息、身份证、护照、其他有效的身份证明文件及本公司要求的其他信息或文件。<span lang=\"EN-US\"><br>\n" +
        "  </span></b><span lang=\"EN-US\">7.&nbsp;</span><b>您同意，本公司有权按照包括但不限于公安机关、检察机关、法院、海关、税务机关等司法机关、行政机关、军事机关的要求或基于本公司对您资金及交易异常的判断及风险策略对您在京东钱包的资金及账户等进行查询、冻结或扣划。</b><span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">七、 用户的守法义务及承诺</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您承诺绝不为任何非法目的或以任何非法方式使用本服务，也不将本服务用于禁止或限制物品的交易，并承诺遵守中华人民共和国相关法律<span lang=\"EN-US\">&nbsp;,&nbsp;</span>法规及一切使用互联网之国际惯例。您若是中华人民共和国以外之使用者，您同意同时遵守您所属国家或地域的法令。<span lang=\"EN-US\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>您同意并保证不得利用本服务从事侵害他人权益或违法之行为，若有违反者应负所有法律责任，包括但不限于：<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（一） 反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的。<span lang=\"EN-US\"><br>\n" +
        "  </span>（二） 侵害他人名誉、隐私权、商业秘密、商标权、著作权、专利权、其他智慧财产权及其他权利。<span lang=\"EN-US\"><br>\n" +
        "  </span>（三） 违反依法律或合约所应负之保密义务。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（四） 冒用他人名义使用本服务。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（五） 提供赌博资讯或以任何方式引诱他人参与赌博。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（六） 涉嫌洗钱、套现或进行传销活动的。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（七） 使用他人银行账号或无效银行账号交易。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（八） 从事任何可能含有电脑病毒或是可能侵害本服务系統、资料之行为。<span lang=\"EN-US\"><br>\n" +
        "  </span>（九） 其他本公司有正当理由认为不适当之行为。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span><b>八、 系统服务中断或故障</b><span lang=\"EN-US\"><br>\n" +
        "  <b>&nbsp;&nbsp;&nbsp; </b></span><b>京东钱包系统因下列状况无法正常运作，使您无法使用各项服务时，本公司对您不负任何损害赔偿责任，\n" +
        "                包括但不限于：<span lang=\"EN-US\">&nbsp;</span></b><span lang=\"EN-US\"><br>\n" +
        "  </span><b>（一） 本公司公告系统停机维护期间。<span lang=\"EN-US\"><br>\n" +
        "  </span>（二） 信息网络连接故障，电脑、通讯或其他系统故障。</b><span lang=\"EN-US\"><br>\n" +
        "  </span>（三） 因台风、地震、海啸、火灾、洪水、爆炸、停电、罢工、劳动争议、暴乱、起义、骚乱、战争、恐怖袭击，生产力或生产资料不足，政府行为，司法行政机关的命令或第三方的不作为而造成的不能服务或延迟服务的。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（四）因黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题等因素造成的服务中断或者延迟。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">九、特别授权</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:9.0pt;\n" +
        "  font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您完全理解并不可撤销地授予本公司及其关联公司下列权利：<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（一）您完全理解并不可撤销地授权本公司或本公司授权的第三方或您与本公司一致同意的第三方，根据本协议及本公司的规定，处理您在京东钱包发生的所有交易及可能产生的交易纠纷。您同意接受本公司或本公司授权的第三方或您与本公司一致同意的第三方的判断和调处决定。该决定将对您具有法律约束力。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二）一旦您向本公司及（或）其关联公司做出任何形式的承诺，且相关公司已确认您违反了该承诺，则本公司有权立即按您的承诺或协议约定的方式对您的账户采取限制措施，包括暂停或终止向您提供服务，并公示相关公司确认的您的违约情况。您了解并同意，本公司无须就相关确认与您核对事实，或另行征得您的同意，且本公司无须就此限制措施或公示行为向您承担任何的责任。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（三）一旦您违反本协议或与本公司签订的其他协议的约定，本公司有权以任何方式通知本公司关联公司，要求其对您的权益采取限制措施，包括但不限于要求关联公司将您京东钱包账户内的款项支付给本公司指定的对象，要求关联公司中止或终止对您提供部分或全部服务，且在其经营或实际控制的任何网站公示您的违约情况。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（四）对于您提供的资料及数据信息，您授予本公司及其关联公司独家的、全球通用的、永久的、免费的许可使用权利<span lang=\"EN-US\">&nbsp;(</span>并有权在多个层面对该权利进行再授权<span lang=\"EN-US\">)</span>。此外，本公司及其关联公司有权<span lang=\"EN-US\">(</span>全部或部分地<span lang=\"EN-US\">)&nbsp;</span>使用、复制、修订、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、交易行为数据及全部展示于京东钱包的各类信息）或制作其派生作品，并以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入其它作品内。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（五）本公司关联公司将逐渐允许京东钱包用户登录关联公司平台并使用其服务，京东钱包用户在关联公司平台的任何行为均需遵守该等平台服务协议的约定、平台公布的规则以及有关正确使用平台服务的说明和操作指引。为了实现上述功能，您同意本公司将您在京东钱包的注册信息、交易<span lang=\"EN-US\">/</span>支付数据等信息和其他数据同步至关联公司系统并允许其使用。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（六）如您以本公司关联公司会员账号和密码登录京东钱包，为了实现向您提供同等服务的功能，您同意本公司将您在关联公司账号项下的注册信息、交易<span lang=\"EN-US\">/</span>支付数据等信息和其他数据同步至京东钱包并进行使用，并且您不会因此追究本公司以及本公司关联公司的责任。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">十、责任范围及责任限制</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  </span><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（一）本公司仅对本协议中所列明的义务承担责任。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二）本公司负责按<span lang=\"EN-US\">\"</span>现状<span lang=\"EN-US\">\"</span>和<span lang=\"EN-US\">\"</span>可得到<span lang=\"EN-US\">\"</span>的状态向您提供京东钱包服务。但本公司对京东钱包服务不作任何明示或暗示的保证，包括但不限于京东钱包服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，本公司也不对京东钱包服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性做出任何承诺和保证。<span lang=\"EN-US\"><br>\n" +
        "  </span>（三）您明确因交易所产生的任何风险应由交易双方承担。<span lang=\"EN-US\"><br>\n" +
        "  </span>（四）用户信息是由用户自行发布，本公司无法保证用户信息的真实、及时和完整，您应对您的判断承担全部责任。<span lang=\"EN-US\"><br>\n" +
        "  </span>（五）本公司未对交易标的及“京东钱包”服务提供任何形式的保证，包括但不限于以下事项：<span lang=\"EN-US\"><br>\n" +
        "  1.</span>“京东钱包”服务将符合您的需求。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  2.</span>“京东钱包”服务将不受干扰、及时提供或免于出錯。<span lang=\"EN-US\"><br>\n" +
        "  3.&nbsp;</span>您经由“京东钱包”服务购买或取得之任何产品、服务、资讯或其他资料将符合您的期望。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（六）除非法律法规明确要求，或出现以下情况，否则，本公司没有义务对所有用户的注册数据、商品（服务）信息、交易行为以及与交易有关的其它事项进行事先审查：</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">1.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">本公司有合理的理由认为具体交易事项可能存在重大违法或违约情形。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">2.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">本公司有合理的理由认为用户在京东钱包的行为涉嫌违法或不当。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（七）本公司或本公司授权的第三方或您与本公司一致同意的第三方有权基于您不可撤销的授权受理您与其他用户因交易产生的争议，并有权单方判断与该争议相关的事实及应适用的规则，进而做出处理决定，包括但不限于调整相关订单的交易状态，或本公司将争议货款的全部或部分支付给交易一方或双方。该处理决定对您有约束力。如您未在限期内执行处理决定的，则本公司有权利（但无义务）直接使用您京东钱包账户内的款项，或使用您向本公司及其关联公司交纳的保证金代为支付。您应及时补足保证金并弥补本公司及其关联公司的损失，否则本公司及其关联公司有权直接抵减您在其它合同项下的权益，并有权继续追偿。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;&nbsp;&nbsp; </span></b><b><span style=\"font-size:\n" +
        "  9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您理解并同意，本公司或本公司授权的第三方或您与本公司一致同意的第三方并非司法机构，仅能以普通人的身份对证据进行鉴别，本公司或本公司授权的第三方或您与本公司一致同意的第三方对争议的调处完全是基于您不可撤销的授权，其无法保证争议处理结果符合您的期望，也不对争议调处结论承担任何责任。如您因此遭受损失，您同意自行向受益人索偿。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（八）您了解并同意，本公司不对因下述任一情况而导致您的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其它无形损失的损害赔偿<span lang=\"EN-US\">&nbsp;(</span>无论本公司是否已被告知该等损害赔偿的可能性<span lang=\"EN-US\">)&nbsp;</span>：</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">1.&nbsp;</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">使用或未能使用本公司平台服务。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">2.&nbsp;</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">第三方未经批准的使用您的账户或更改您的数据。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">3.</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">通过本公司平台服务购买或获取任何商品、样品、数据、信息或进行交易等行为或替代行为产生的费用及损失。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">4.&nbsp;</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">您对本公司平台服务的误解。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">5.&nbsp;</span></b><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">任何非因本公司的原因而引起的与本公司平台服务有关的其它损失。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（九）免责<span lang=\"EN-US\"><br>\n" +
        "  &nbsp;&nbsp;&nbsp; </span>您同意，在下列情形下本公司无需承担任何责任：<span lang=\"EN-US\"><br>\n" +
        "  1.</span>由于您将京东钱包账户密码告知他人或未保管好自己的密码或与他人共享京东钱包账户或任何其他非本公司的过错，导致您的个人资料泄露。<span lang=\"EN-US\"><br>\n" +
        "  2.</span>任何由于黑客攻击、计算机病毒侵入或发作、电信部门技术调整导致之影响、因政府管制而造成的暂时性关闭、由于第三方原因<span lang=\"EN-US\">(</span>包括不可抗力，例如国际出口的主干线路及国际出口电信提供商一方出现故障、火灾、水灾、雷击、地震、洪水、台风、龙卷风、火山爆发、瘟疫和传染病流行、罢工、战争或暴力行为或类似事件等<span lang=\"EN-US\">)</span>及其他非因本公司过错而造成的实名认证信息泄露、丢失、被盗用或被篡改等。<span lang=\"EN-US\"><br>\n" +
        "  3.</span>由于与本公司链接或合作的其它网站（如网上银行等）所造成的银行账户信息、身份信息泄露及由此而导致的任何法律争议和后果。<span lang=\"EN-US\"><br>\n" +
        "  4.</span>任何京东钱包用户（包括未成年人用户）向本公司提供错误、不完整、不实信息等造成不能通过实名认证或遭受任何其他损失，概与本公司无关。<span lang=\"EN-US\"><br>\n" +
        "  </span>（十）<span lang=\"EN-US\">&nbsp;</span>“京东钱包”服务的合作单位，所提供的服务品质及内容由该合作单位自行负责。<span lang=\"EN-US\"><br>\n" +
        "  </span>（十一） 您经由“京东钱包”服务的使用下载或取得任何资料，应由您自行考量且自负风险，因资料的下载而导致您电脑系统的任何损坏或资料流失，您应负完全责任。<span lang=\"EN-US\"><br>\n" +
        "  </span>（十二） 您自本公司及公司工作人员或经由“京东钱包”服务取得的建议或资讯，无论其为书面或口头，均不构成本公司对“京东钱包”服务的任何保证。<span lang=\"EN-US\"><br>\n" +
        "  </span>（十三）在法律允许的情况下，本公司对于与本协议有关或由本协议引起的任何间接的、惩罚性的、特殊的、派生的损失（包括业务损失、收益损失、利润损失、使用数据或其他经济利益的损失），不论是如何产生的，也不论是由对本协议的违约（包括违反保证）还是由侵权造成的，均不负有任何责任，即使其事先已被告知此等损失的可能性。另外即使本协议规定的排他性救济没有达到其基本目的，也应排除本公司对上述损失的责任。<span lang=\"EN-US\">&nbsp;<br>\n" +
        "  </span>（十四）除本协议另有规定外，在任何情况下，本公司对本协议所承担的违约赔偿责任总额不超过向您收取的当次“京东钱包”服务费用总额。</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><br>\n" +
        "  </span><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">十一、商标、知识产权、专利的保护</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（一）本公司及关联公司所有系统及本网站上所有内容，包括但不限于著作、图片、档案、资讯、资料、网站架构、网站画面的安排、网页设计，均由本公司或本公司关联公司依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（二）非经本公司或本公司关联公司书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站程序或内容。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（三）尊重知识产权是您应尽的义务，如有违反，您应承担损害赔偿责任。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">十二、服务条款的解释、法律适用及争端解决</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "            <p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">（一）您对本协议理解和认同，您即对本协议所有组成部分的内容理解并认同，一旦您使用本服务，您和本公司即受本协议所有组成部分的约束。</span></b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">本协议部分内容被有管辖权的法院认定为违法或无效的，不因此影响其他内容的效力。<span lang=\"EN-US\"><br>\n" +
        "  </span>（二）在法律允许的范围内，本公司对本协议服务条款拥有最终解释权。<span lang=\"EN-US\"><br>\n" +
        "  </span>（三） 本协议及其修订本的有效性、履行和与本协议及其修订本效力有关的所有事宜，将受中华人民共和国法律管辖，没有相关法律规定的，参照通用国际商业惯例和（或）行业惯例。<span lang=\"EN-US\"><br>\n" +
        "  </span>（四）本协议签订地为中国北京市朝阳区。因本协议所引起的用户与本公司的任何纠纷或争议，首先应友好协商解决，协商不成的，双方可提出诉讼，管辖法院为本公司所在地人民法院。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "        </td>\n" +
        "    </tr>\n" +
        "    </tbody></table>\n" +
        "\n" +
        "<p class=\"MsoNormal\" style=\"text-indent:18.0pt;mso-char-indent-count:2.0;\n" +
        "line-height:15.0pt;mso-line-height-rule:exactly\"><span style=\"font-size:9.0pt;\n" +
        "font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">本协议未尽事宜，您需遵守京东钱包网站（<span lang=\"EN-US\">www.jdpay.com</span>）或京东钱包无线客户端或京东钱包特别告知的其他方式上公布的相关规则。<span lang=\"EN-US\"><o:p></o:p></span></span></p>\n" +
        "\n" +
        "<p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;<o:p></o:p></span></p>\n" +
        "\n" +
        "<p class=\"MsoNormal\" align=\"center\" style=\"text-align:center;line-height:15.0pt;\n" +
        "mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">网银在线（北京）科技有限公司</span></b><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "\n" +
        "<p class=\"MsoNormal\" align=\"center\" style=\"text-align:center;line-height:15.0pt;\n" +
        "mso-line-height-rule:exactly\"><b><span style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">投诉电话：<span lang=\"EN-US\">400-6226-586</span></span></b><span lang=\"EN-US\" style=\"font-size:\n" +
        "9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\"><o:p></o:p></span></p>\n" +
        "\n" +
        "<p class=\"MsoNormal\" style=\"line-height:15.0pt;mso-line-height-rule:exactly\"><span lang=\"EN-US\" style=\"font-size:9.0pt;font-family:&quot;微软雅黑&quot;,&quot;sans-serif&quot;\">&nbsp;</span></p>"+

             "</div>" + " <div class=\"btnt\">" + " <input  class=\"btn-img\"  type=\''button\" value='同意并继续' onclick='protocolReg();'/>" + " </div>" + "</div>" + "</div>" + "</div>",
            _autoReposi: true
        });

    });
});