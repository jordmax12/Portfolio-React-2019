"use strict";

function selectController(t) {
    if (!$("#clock-body").hasClass("clock-body-tap")) switch (gameState) {
        case STATE_SELECTING:
            selectTile(t);
            break;
        case STATE_SELECTED:
            initMoveTile(t)
    }
}

function validateSwap(t, e) {
    return 0 != t.attr("data-bit") && 0 != e.attr("data-bit") && (t != e && -1 != [1, -1, config.NUM_X_ROWS, -1 * config.NUM_X_ROWS].indexOf(e.attr("data-number") - t.attr("data-number")))
}

function swapElements(t, e) {
    var a = t.clone(),
        r = e.clone();
    if (validateSwap(t, e) && ($("#undo").show(), $("#copy").show(), !e.is(":empty"))) {
        t.hasClass("matchedTiles") && e.addClass("matchedTiles"), e.hasClass("matchedTiles") && t.addClass("matchedTiles");
        var n = a.attr("data-number"),
            i = r.attr("data-number"),
            o = a.attr("data-bit"),
            s = r.attr("data-bit"),
            a = t.clone(),
            r = e.clone();
        t.offset(), e.offset();
        t.hide(), e.hide(), a.addClass("clone"), r.addClass("clone"), a.attr("id", a.attr("id") + "-clone"), $("#" + t.closest(".box").attr("id")).append(a), r.attr("id", r.attr("id") + "-clone"), $("#" + e.closest(".box").attr("id")).append(r), a.animate({
            left: -(a.offset().left - r.offset().left),
            top: "" + e.css("top")
        }, 500), r.animate({
            left: -(r.offset().left - a.offset().left),
            top: "" + t.css("top")
        }, 500, function() {
            e.attr("data-number", i), t.attr("data-number", n), e.attr("data-bit", o), t.attr("data-bit", s), r.remove(), a.remove(), e.show(), t.show(), boardMatrix[n - 1] = parseInt(s), boardMatrix[i - 1] = parseInt(o), currentBoardCache = boardMatrix;
            checkEntireBoardForMatches();
            if (t.hasClass("matchedTiles") || e.hasClass("matchedTiles")) {
                setTimeout(function() {
                    finalize()
                }, 1200)
            } else $(".matchedTiles").each(function(t, e) {
                $(e).removeClass("matchedTiles")
            })
        })
    }
}

function finalize() {
    var t = [];
    $(".matchedTiles").each(function(e, a) {
        var r = {};
        getAllAboveRowElements($(a), function(e) {
            t.push.apply(t, e), t = t.filter(function(t) {
                return !$("[data-number=" + t + "]").hasClass("removeTiles") && (!r.hasOwnProperty(t) && (r[t] = !0))
            })
        }), $(a).remove()
    });
    for (var e = 0; e < t.length; e++) {
        var a = t[e];
        $("[data-number=" + a + "]").addClass("moveDownTiles")
    }
    $($(".moveDownTiles").get().reverse()).each(function(t, e) {
        moveDownNewTile($(e))
    }), setTimeout(function() {
        if (!finishMove()) {
            for (var t = 1, e = 1; e <= config.NUM_Y_ROWS; e++) {
                var a = "box-" + e;
                $("#" + a + " .tile").each(function(e, a) {
                    $(a).attr("data-number", t), boardMatrix[$(a).attr("data-number") - 1] = parseInt($(a).attr("data-bit")), $(a).removeClass("newTiles"), t++
                })
            }
            currentBoardCache = boardMatrix;
            checkEntireBoardForMatches().length > 0 && setTimeout(function() {
                finalize()
            }, 1200)
        }
    }, 600)
}

function finishMove() {
    for (var t = 1; t <= config.NUM_Y_ROWS; t++)
        for (var e = parseInt(config.NUM_X_ROWS - $("#box-" + t + " .tile").length), a = e; a > 0; a--) {
            var r = t,
                n = a,
                i = t * config.NUM_X_ROWS - getIndexInverse(a),
                o = getRandomInt(1, 3),
                s = colors.filter(function(t) {
                    return t.bit == o
                }),
                l = generateTile(r, n, s, o, i, !0);
            $("#box-" + t).prepend(l);
            var c = "innerBox-" + n + "-" + r,
                d = $("#" + c);
            d.css("top", "-100px"), moveDownNewTile(d, !0)
        }
    return currentBoardCache = boardMatrix, !1
}

function moveDownNewTile(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        var a = t.nextAll(":not('.moveDownTiles')").first();
        t.closest(".box").prop("id").split("box-")[1];
        if (a.length > 0) {
            if (a.attr("data-top")) var r = parseInt(a.attr("data-top")) - config.tileHeight;
            else {
                var r = parseInt(a.css("top").split("px")[0]) - config.tileHeight;
                a.removeAttr("data-top")
            }
            var n = r / config.tileHeight,
                i = parseInt(a.attr("data-tilex")),
                o = "innerBox-" + n + "-" + i;
            t.attr("data-tiley", n), t.attr("id", o);
            var s = e ? getDelay(n) : 500;
            t.animate({
                top: r + "px"
            }, s), t.removeClass("moveDownTiles"), t.attr("data-top", r)
        } else {
            var r = config.NUM_X_ROWS * config.tileHeight,
                n = config.NUM_X_ROWS,
                i = t.attr("data-tilex");
            o = "innerBox-" + n + "-" + i;
            var s = e ? getDelay(n) : 500;
            t.animate({
                top: r + "px"
            }, s), t.attr("id", o), t.attr("data-tiley", n), t.attr("data-top", r), t.removeClass("moveDownTiles")
        }
    } catch (e) {
        console.log(t)
    }
}

function getDelay(t) {
    switch (t) {
        case 1:
            return 1e3;
        case 2:
            return 900;
        case 3:
            return 800;
        case 4:
            return 700;
        case 5:
            return 600;
        case 6:
            return 500;
        case 7:
            return 400;
        case 8:
            return 300
    }
}

function checkEntireBoardForMatches() {
    for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = boardMatrix.slice(), a = splitArr(e, config.NUM_X_ROWS), r = (splitArr(boardMatrix.slice(), config.NUM_Y_ROWS), []), n = [], i = 0; i < config.NUM_X_ROWS; i++) {
        var o = [],
            s = 1;
        $(".tile[data-tiley=" + (i + 1) + "]").each(function(t, e) {
            o.push(e)
        });
        for (var l = 0; l < o.length; l++) {
            var c = o[l],
                d = o[l + 1],
                f = [];
            if (d && 0 != boardMatrix[$(c).attr("data-number") - 1] && boardMatrix[$(c).attr("data-number") - 1] == boardMatrix[$(d).attr("data-number") - 1]) s++;
            else {
                if (s > 2) {
                    var u = $(c).attr("data-number");
                    f.push($(".tile[data-number=" + u + "]"));
                    for (var h = 1; h < s; h++) f.push($(".tile[data-number=" + (u - config.NUM_X_ROWS * h) + "]"))
                }
                s = 1
            }
            if (f.length > 0) {
                r.push(f);
                for (var v = 0; v < f.length; v++) {
                    var m = f[v];
                    t && m.addClass("matchedTiles")
                }
            }
        }
        o.length > 1 && n.push(o)
    }
    for (var b = 0; b < a.length; b++) {
        for (var p = 1, g = a[b], T = [], l = 0; l < g.length; l++) {
            var x = g[l];
            if (g[l + 1] && 0 != x && g[l + 1] == x) p++;
            else {
                if (p > 2) {
                    var M = b + 1,
                        _ = l + 1;
                    T.push($("#box-" + M + " .tile[data-tiley=" + _ + "]"));
                    for (var h = 1; h < p; h++) T.push($("#box-" + M + " .tile[data-tiley=" + (_ - h) + "]"))
                }
                p = 1
            }
        }
        if (T.length > 0) {
            r.push(T);
            for (var v = 0; v < T.length; v++) {
                var w = T[v];
                t && w.addClass("matchedTiles")
            }
        }
    }
    return r
}

function getAllAboveRowElements(t, e) {
    function a(t) {
        if (isMatchedTile(t)) {
            a($("[data-number=" + (t.attr("data-number") - 1) + "]"))
        } else {
            var r = getNumbersInBetween(o, t.attr("data-number"));
            e(r)
        }
    }
    var r = t.attr("data-number"),
        n = getRowIndex(r),
        i = $("[data-number=" + (r - 1) + "]"),
        o = n * config.NUM_X_ROWS - (config.NUM_X_ROWS - 1);
    a(i)
}