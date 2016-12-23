$(document).ready(function () {
	// 搜索框的动画
		$("#search-btn").click(function() {
			$("#searchbox").show().animate({
				opacity :"1"
			},0,function(){$(this).css('transform','scale(1, 1)');});
		});
		$("#close-btn").click(function (){
			$("#searchbox").css('transform','scale(0.1, 1)').css('opacity','0').hide();
		});
		//置顶
		$(document).ready(function () {
			$(document).scroll(function () {
				var top = $(document).scrollTop(); 
				if (top <1) {
					$("#top").hide();
				}else if(top > 1 ){
					$("#top").show();
					$("#top").click(function () {
						$(document).scrollTop(0);
					})
				}
			})
		})	
})