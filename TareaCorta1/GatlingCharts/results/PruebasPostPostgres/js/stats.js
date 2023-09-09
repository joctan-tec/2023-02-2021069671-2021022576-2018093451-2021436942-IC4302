var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "120000",
        "ok": "24330",
        "ko": "95670"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "405",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "75483",
        "ok": "66610",
        "ko": "75483"
    },
    "meanResponseTime": {
        "total": "38930",
        "ok": "13928",
        "ko": "45289"
    },
    "standardDeviation": {
        "total": "21138",
        "ok": "10612",
        "ko": "18233"
    },
    "percentiles1": {
        "total": "39196",
        "ok": "9014",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "18825",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60883",
        "ok": "39241",
        "ko": "61278"
    },
    "percentiles4": {
        "total": "64320",
        "ok": "48835",
        "ko": "64815"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 24308,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95670,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.386",
        "ok": "19.542",
        "ko": "76.843"
    }
},
contents: {
"req_post-books-d5a2c": {
        type: "REQUEST",
        name: "Post books",
path: "Post books",
pathFormatted: "req_post-books-d5a2c",
stats: {
    "name": "Post books",
    "numberOfRequests": {
        "total": "120000",
        "ok": "24330",
        "ko": "95670"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "405",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "75483",
        "ok": "66610",
        "ko": "75483"
    },
    "meanResponseTime": {
        "total": "38930",
        "ok": "13928",
        "ko": "45289"
    },
    "standardDeviation": {
        "total": "21138",
        "ok": "10612",
        "ko": "18233"
    },
    "percentiles1": {
        "total": "39372",
        "ok": "9014",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "18825",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "60880",
        "ok": "39241",
        "ko": "61278"
    },
    "percentiles4": {
        "total": "64320",
        "ok": "48835",
        "ko": "64815"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 24308,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 95670,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.386",
        "ok": "19.542",
        "ko": "76.843"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
