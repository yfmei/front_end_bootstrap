// 数学相关配置信息初始化
function mathInit() {
  desmosConfig();
  mathJaxConfig();
}

// desmos 数学函数绘图插件配置信息
function desmosConfig() {
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt);
  // Desmos.supportedLanguages; // ['es-ES', 'fr'] 没有效果
  calculator.updateSettings({language: 'zh-CN'});
  calculator.setExpression({id: 'graph1', latex: 'y=x^2'});
}

// mathjax 配置信息
function mathJaxConfig() {
  MathJax.Hub.Config({
    showProcessingMessages: false, // 关闭js加载过程信息
    messageStyle: "none", // 不显示信息
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [["$", "$"], ['\\(', '\\)'], ['`$', '$`']], // 行内公式选择$
      displayMath: [['$', '$'], ['```', '```']], // 段内公式选择$
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'], // 避开某些标签
      ignoreClass: "comment-content" // 避开含该Class的标签
    },
    "HTML-CSS": {
      availableFonts: ["STIX", "TeX"], // 可选字体
      showMathMenu: false // 关闭右击菜单显示
    }
  });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

//画正弦曲线
//dot 原点
//amplitude    振幅 -- A
//initialPhase 初相 -- φ
//setover 偏距 -- k
//palstance 角速度 -- ω
//len 周期数
function drawSinusoid(dot, amplitude,initialPhase,palstance,setover, len, opts){
  var color = opts&&opts.color?opts.color:"DarkRed"; //曲线的颜色
  var max = len*2*Math.PI/w; //x的最大值
  //var x = -2*Math.PI/w/3;
  var x = 0; //x的初值
  var pre = [dot[0]+x, dot[1]+(amplitude*Math.sin(palstance*x+initialPhase)+setover)]; //y的初值
  for(;x < max;x+=5){ //每五个单位画一条线
    var cur = [dot[0]+x, dot[1]+(amplitude*Math.sin(palstance*x+initialPhase)+setover)];
    drawLine(pre, cur, {color: color}); // 画线
    pre = cur;
  }
  var d = Math.PI/(2*w);
  for(var x =0;x < max;x+=d){//描点
    var cur = [dot[0]+x, dot[1]+(amplitude*Math.sin(palstance*x+initialPhase)+setover)];
    drawPoint({
      pw:3,ph:3,color:'DarkRed',point: cur
    });
  }

  var pend = [dot[0]+max, dot[1]+(amplitude*Math.sin(palstance*max+initialPhase)+setover)];
  drawPoint({
    pw:3,ph:3,color:'DarkRed',point: pend
  });
  drawLine(pre, pend);
}




