/**
 * Config
 */
thresholdMin = 0.25;
thresholdMax = 0.75;
repetitionsMin = 500;
repetitionsMax = 1500;
edgeMinLength = 30;
edgeMaxPercent = 0.5;

/**
 * Code
 */
var canvas = document.getElementById("glitch");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");


var localImages = ["images/IMG_1950.jpg", "images/IMG_1953.jpg", "images/IMG_2017.jpg", "images/IMG_2146.jpg", "images/IMG_2152.jpg", "images/IMG_2153.jpg", "images/IMG_2154.jpg", "images/IMG_2155.jpg", "images/IMG_2156.jpg", "images/IMG_2157.jpg", "images/IMG_2158.jpg", "images/IMG_2159.jpg", "images/IMG_2160.jpg", "images/IMG_2161.jpg", "images/IMG_2162.jpg", "images/IMG_2163.jpg", "images/IMG_2164.jpg", "images/IMG_2165.jpg", "images/IMG_2166.jpg", "images/IMG_2167.jpg", "images/IMG_2168.jpg", "images/IMG_2169.jpg", "images/IMG_2170.jpg", "images/IMG_2171.jpg", "images/IMG_2172.jpg", "images/IMG_2173.jpg", "images/IMG_2174.jpg", "images/IMG_2175.jpg", "images/IMG_2176.jpg", "images/IMG_2177.jpg", "images/IMG_2178.jpg", "images/IMG_2179.jpg", "images/IMG_2180.jpg", "images/IMG_2181.jpg", "images/IMG_2182.jpg", "images/IMG_2183.jpg", "images/IMG_2184.jpg", "images/IMG_2185.jpg", "images/IMG_2186.jpg", "images/IMG_2187.jpg", "images/IMG_2188.jpg", "images/IMG_2189.jpg", "images/IMG_2190.jpg", "images/IMG_2191.jpg", "images/IMG_2192.jpg", "images/IMG_2193.jpg", "images/IMG_2194.jpg", "images/IMG_2195.jpg", "images/IMG_2196.jpg", "images/IMG_2197.jpg", "images/IMG_2198.jpg", "images/IMG_2199.jpg", "images/IMG_2200.jpg", "images/IMG_2201.jpg", "images/IMG_2202.jpg", "images/IMG_2203.jpg", "images/IMG_2204.jpg", "images/IMG_2205.jpg", "images/IMG_2206.jpg", "images/IMG_2207.jpg", "images/IMG_2208.jpg", "images/IMG_2209.jpg", "images/IMG_2210.jpg", "images/IMG_2211.jpg", "images/IMG_2212.jpg", "images/IMG_2213.jpg", "images/IMG_2214.jpg", "images/IMG_2215.jpg", "images/IMG_2216.jpg", "images/IMG_2217.jpg", "images/IMG_2218.jpg", "images/IMG_2219.jpg", "images/IMG_2220.jpg", "images/IMG_2221.jpg", "images/IMG_2222.jpg", "images/IMG_2223.jpg", "images/IMG_2224.jpg", "images/IMG_2225.jpg", "images/IMG_2226.jpg", "images/IMG_2227.jpg", "images/IMG_2228.jpg", "images/IMG_2229.jpg", "images/IMG_2230.jpg", "images/IMG_2231.jpg", "images/IMG_2232.jpg", "images/IMG_2233.jpg", "images/IMG_2234.jpg", "images/IMG_2235.jpg", "images/IMG_2236.jpg", "images/IMG_2237.jpg", "images/IMG_2238.jpg", "images/IMG_2239.jpg", "images/IMG_2240.jpg", "images/IMG_2241.jpg", "images/IMG_2242.jpg", "images/IMG_2243.jpg", "images/IMG_2244.jpg", "images/IMG_2245.jpg", "images/IMG_2246.jpg", "images/IMG_2247.jpg", "images/IMG_2248.jpg", "images/IMG_2249.jpg", "images/IMG_2250.jpg", "images/IMG_2251.jpg", "images/IMG_2252.jpg", "images/IMG_2253.jpg", "images/IMG_2254.jpg", "images/IMG_2255.jpg", "images/IMG_2256.jpg", "images/IMG_2257.jpg", "images/IMG_2258.jpg", "images/IMG_2259.jpg", "images/IMG_2260.jpg", "images/IMG_2261.jpg", "images/IMG_2262.jpg", "images/IMG_2263.jpg", "images/IMG_2264.jpg", "images/IMG_2265.jpg", "images/IMG_2266.jpg", "images/IMG_2267.jpg", "images/IMG_2268.jpg", "images/IMG_2269.jpg", "images/IMG_2270.jpg", "images/IMG_2271.jpg"];
var remoteImages = ["http://cdn.meme.am/instances/800x/66265928.jpg", "http://cdn.meme.am/instances/800x/66265769.jpg", "http://cdn.meme.am/instances/800x/66265903.jpg", "http://cdn.meme.am/instances/800x/66276065.jpg", "http://cdn.meme.am/instances/800x/66303646.jpg", "http://cdn.meme.am/instances/800x/66311098.jpg", "http://cdn.meme.am/instances/800x/66310977.jpg", "http://cdn.meme.am/instances/800x/66303908.jpg", "http://cdn.meme.am/instances/800x/66277823.jpg", "http://cdn.meme.am/instances/800x/66310577.jpg", "http://cdn.meme.am/instances/800x/66265062.jpg", "http://cdn.meme.am/instances/800x/66328279.jpg", "http://cdn.meme.am/instances/800x/66265532.jpg", "http://cdn.meme.am/instances/800x/66265711.jpg", "http://cdn.meme.am/instances/800x/66276936.jpg", "http://cdn.meme.am/instances/800x/66283073.jpg", "http://cdn.meme.am/instances/800x/66296980.jpg", "http://cdn.meme.am/instances/800x/66302507.jpg", "http://cdn.meme.am/instances/800x/66303535.jpg", "http://cdn.meme.am/instances/800x/66304164.jpg", "http://cdn.meme.am/instances/800x/66307121.jpg", "http://cdn.meme.am/instances/800x/66327826.jpg", "http://cdn.meme.am/instances/800x/66328143.jpg", "http://cdn.meme.am/instances/800x/66346613.jpg", "http://cdn.meme.am/instances/800x/66295762.jpg", "http://cdn.meme.am/instances/800x/66292179.jpg", "http://cdn.meme.am/instances/800x/66271974.jpg", "http://cdn.meme.am/instances/800x/66271737.jpg", "http://cdn.meme.am/instances/800x/66265587.jpg", "http://cdn.meme.am/instances/800x/66264907.jpg", "http://cdn.meme.am/instances/800x/66264310.jpg", "http://cdn.meme.am/instances/800x/66369165.jpg", "http://cdn.meme.am/instances/800x/66369047.jpg", "http://cdn.meme.am/instances/800x/66364758.jpg", "http://cdn.meme.am/instances/800x/66366093.jpg", "http://cdn.meme.am/instances/800x/66366120.jpg", "http://cdn.meme.am/instances/800x/66366220.jpg", "http://cdn.meme.am/instances/800x/66366263.jpg", "http://cdn.meme.am/instances/800x/66366327.jpg", "http://cdn.meme.am/instances/800x/66366693.jpg", "http://cdn.meme.am/instances/800x/66367399.jpg", "http://cdn.meme.am/instances/800x/66367408.jpg", "http://cdn.meme.am/instances/800x/66367444.jpg", "http://cdn.meme.am/instances/800x/66367829.jpg", "http://cdn.meme.am/instances/800x/66368150.jpg", "http://cdn.meme.am/instances/800x/66368989.jpg", "http://cdn.meme.am/instances/800x/66369000.jpg", "http://cdn.meme.am/instances/800x/66369024.jpg", "http://cdn.meme.am/instances/800x/66355816.jpg", "http://cdn.meme.am/instances/800x/66355764.jpg", "http://cdn.meme.am/instances/800x/66355752.jpg", "http://cdn.meme.am/instances/800x/66355744.jpg", "http://cdn.meme.am/instances/800x/66355620.jpg", "http://cdn.meme.am/instances/800x/66355607.jpg", "http://cdn.meme.am/instances/800x/66355545.jpg", "http://cdn.meme.am/instances/800x/66355155.jpg", "http://cdn.meme.am/instances/800x/66355151.jpg", "http://cdn.meme.am/instances/800x/66340580.jpg", "http://cdn.meme.am/instances/800x/66340775.jpg", "http://cdn.meme.am/instances/800x/66341225.jpg", "http://cdn.meme.am/instances/800x/66341334.jpg", "http://cdn.meme.am/instances/800x/66343288.jpg", "http://cdn.meme.am/instances/800x/66343845.jpg", "http://cdn.meme.am/instances/800x/66351003.jpg", "http://cdn.meme.am/instances/800x/66353594.jpg", "http://cdn.meme.am/instances/800x/66353608.jpg", "http://cdn.meme.am/instances/800x/66353768.jpg", "http://cdn.meme.am/instances/800x/66354166.jpg", "http://cdn.meme.am/instances/800x/66354197.jpg", "http://cdn.meme.am/instances/800x/66354659.jpg", "http://cdn.meme.am/instances/800x/66355023.jpg", "http://cdn.meme.am/instances/800x/66355124.jpg", "http://cdn.meme.am/instances/800x/66303576.jpg", "http://cdn.meme.am/instances/800x/66303558.jpg", "http://cdn.meme.am/instances/800x/66303552.jpg", "http://cdn.meme.am/instances/800x/66303540.jpg", "http://cdn.meme.am/instances/800x/66303537.jpg", "http://cdn.meme.am/instances/800x/66303536.jpg", "http://cdn.meme.am/instances/800x/66303533.jpg", "http://cdn.meme.am/instances/800x/66303518.jpg", "http://cdn.meme.am/instances/800x/66303447.jpg", "http://cdn.meme.am/instances/800x/66302487.jpg", "http://cdn.meme.am/instances/800x/66302492.jpg", "http://cdn.meme.am/instances/800x/66302495.jpg", "http://cdn.meme.am/instances/800x/66302511.jpg", "http://cdn.meme.am/instances/800x/66302513.jpg", "http://cdn.meme.am/instances/800x/66302564.jpg", "http://cdn.meme.am/instances/800x/66302588.jpg", "http://cdn.meme.am/instances/800x/66302595.jpg", "http://cdn.meme.am/instances/800x/66302596.jpg", "http://cdn.meme.am/instances/800x/66302601.jpg", "http://cdn.meme.am/instances/800x/66302633.jpg", "http://cdn.meme.am/instances/800x/66302700.jpg", "http://cdn.meme.am/instances/800x/66303012.jpg", "http://cdn.meme.am/instances/800x/66303387.jpg", "http://cdn.meme.am/instances/800x/66303395.jpg"]

function pickRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

var image1 = new Image();
image1.src = pickRandom(localImages);

var image2 = new Image();
image2.src = pickRandom(remoteImages);

var image1Loaded = false;
var image2Loaded = false;

image1.onload = function() {
	image1Loaded = true;
	if (image1Loaded && image2Loaded) {
		process();
	}
};

image2.onload = function() {
	image2Loaded = true;
	if (image1Loaded && image2Loaded) {
		process();
	}
};

function randomNumber(from, to) {
	return from + Math.random() * (to - from);
}

function process() {
	var width = canvas.width;
	var height = canvas.height;
	var threshold = randomNumber(thresholdMin, thresholdMax);
	var repetitions = randomNumber(repetitionsMin, repetitionsMax);

	ctx.drawImage(image1, 0, 0, width, height);

	for (var i = 0; i < repetitions; i++) {
		var image = pickRandom([image1, image2]);
		var xD = randomNumber(-100, width);
		var yD = randomNumber(-100, height);
		var w  = randomNumber(edgeMinLength, edgeMaxPercent * image.width);
		var h  = randomNumber(edgeMinLength, edgeMaxPercent * image.width);
		var xS = randomNumber(0, image.width);
		var yS = randomNumber(0, image.height);

		ctx.drawImage(image, xS, yS, w, h, xD, yD, w, h);
	}
}