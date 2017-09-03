function foreachli(element) {
  $(element).on("click", function () {
    // 保存选中的项
    var current = this;
    $(element).each(function () {
      // 先清除选中的样式
      $(this).children('a').removeClass('active');
      // 过滤disabled选项
      var isDisabled = $(this).children().hasClass("disabled");
      if (current == this && !isDisabled) {
        // 当前项和点击的项一致, 激活选中的样式
        $(this).children("a").addClass('active');
      }
    });
  });
}

/**
 * @author yfmei
 * @date 2017/9/3
 * @time 21:04
 */

// html页面加载完成才执行
$(document).ready(function () {
  // ul 遍历 li 选中事件
  foreachli("#menu li" );
  foreachli("#navbarCollapse ul li");
});


