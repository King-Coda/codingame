function r(a){var b=0;return 9>=a?a:(a.toString().split("").forEach(function(a){return b+=parseInt(a)}),r(b))}print(r(parseInt(readline())));