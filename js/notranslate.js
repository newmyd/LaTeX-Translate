function work() {
	// for CodeForces
    $(".MathJax").addClass("notranslate"); // Latex
	$(".sample-tests").addClass("notranslate"); // sample-tests
	$(".tex-span").addClass("notranslate");
	
	// for AtCoder
	// $("var").addClass("notranslate"); // Latex
	$(".katex").addClass("notranslate"); // Latex
    $("pre").addClass("notranslate"); // sample-tests
	$("#fixed-server-timer").addClass("notranslate"); // time
}

function main() {
	setInterval(work, 100);
}

main();
