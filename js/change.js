(function() {
	var wuFang = {
		init: function() {
			var _this = this;
			$('#ROOT').delegate('#left', 'click', function() {
				alert('kkk');
			}).delegate('#right', 'click', function() {
				_this.change();
			})
			_this.change();
		},
		//change
		change: function() {
			var nowPic = 0;
			var lis = $("#imgItem li");
			var total = lis.length;
			setInterval(function() {
				if(nowPic == (total - 1)) {
					nowPic = 0
				} else {
					nowPic++;
				}
				lis.eq(nowPic).prevAll("li").fadeOut();
				lis.eq(nowPic).nextAll("li").fadeOut();
				console.log(total);
				lis.eq(nowPic).fadeIn();
				$("#smBox a").removeClass("current");
				$("#smBox a").eq(nowPic).addClass("current");
			}, 3000);
		}
	};

	wuFang.init();
})(jQuery);