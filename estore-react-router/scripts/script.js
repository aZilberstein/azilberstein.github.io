let search = $(".search");

search.on("click", function() {
	"flex-end" !== $(".toolsWrapper").css("justify-content") ? $(".toolsWrapper").css("justify-content", "flex-end") : $(".toolsWrapper").css("justify-content", "space-between"), $(".login").toggleClass("loginHidden"), $(".basket").toggleClass("basketHidden"), $(".searchInput").toggleClass("searchInputHidden")
});