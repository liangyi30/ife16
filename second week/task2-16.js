/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
		var cityaqi = document.getElementById("aqi-city-input");
		var numaqi = document.getElementById("aqi-value-input");
		var city = cityaqi.value.trim();
		var num = numaqi.value.trim();
		if (!/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/.test(city))
		 {alert("请用中英文字符输入城市名!");
			return;
				}
		if (!/^\d+$/.test(num))
			{alert("请用整数输入空气指数");
			return;
				}
		aqiData[city] = num;
	}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var item = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	var aqiTable = document.getElementById("aqi-table");
	for (var names in aqiData){
		item += "<tr><td>" + names + "</td><td>" + aqiData[names] +"</td><td><button onclick=\"delBtnHandle(\"+ names + \")\"  type=\"button\" id=\"deleteli\">删除</button></td></tr>"
		aqiTable.innerHTML = names ? item : "";
	} 

}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
 function addBtnHandle() { 
 	addAqiData();
   	renderAqiList();
 }

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
 function delBtnHandle(city) {
    delete aqiData[city];
	renderAqiList();
 }

 function init() {

   // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   var add = document.getElementById("add-btn");
 	add.onclick = addBtnHandle;
   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}
window.onload = init;