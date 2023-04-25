<script>
	import {appId} from 'common/dataInfo.js'
	export default {
		data() {
			return{
				code: '',
				appId,
				agentId:'',
				wxCode:'',
			}
		},
		onLaunch: async function() {
			console.log(window)
			await this.getCode()
			await this.getIscToken()
			this.icpic()
		},
		methods: {
			getCode() {
				let sURL = 'https://wechtpoc.ehome.ren:10443/connect/oauth2/authorize?';
				sURL += `appid=${this.appId}`;
				//	redirect_uri：企信认证后重定向地址
	            //离线包应用填写：zipapp://local.host/ 为项目根目录+具体html页面
	            //现在H5应用：直接填写完整的地址即可
				sURL += '&redirect_uri=' + encodeURIComponent('zipapp://local.host/index.html');
				sURL += '&response_type=code';
				sURL += '&scope=SCOPE';
				sURL += '&state=STATE';
				sURL += `&agentid=${this.agentId}`;
				sURL += '#wechat_redirect';
				uni.request({
					url: sURL,
					method: 'GET',
					success: (res) => {
						this.code = res.data.code
						window.location.href = ` zipapp://local.host/index.html?code=${res.data.code}&state= STATE`
					}
				})
			},
			getIscToken() {
				var sURL = 'https://iscpoc.ehome.ren:10443/proxy/getAuthTicketByWechatCode';
				var param = {
					CODE: this.code,
					appId: this.agentId
				}
				param = JSON.stringify(param);
				uni.request({
					url: sURL,
					method: 'POST',
					data: param,
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log('isc信息', json)
					}
				})
			},
			
			vcode() {
				let code = this.getParam('code')
				if (code) {}
			},
			getParam(variable) {
				let query = window.location.search.substring(1);
				let vars = query.split("&");
				for (let i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return "";
			},
			//建立安全链接
			icpic() {
				//先初始化，建立通道
				var vm = this;
				stru();
				function stru(json) {
					console.log(7);
					wx.config({
						beta: true, // 调用wx.invoke形式的接口值时，该值必须为true。
						jsApiList: [
							"ext_ISCP_Init",
							"ext_ISCP_ConnectService",
							"ext_ISCP_GetLocalPort",
						],
					});
					wx.invoke("ext_ISCP_Init", {
							data: {
								iscpIP: this.agentId, //链路唯一标识,自己生成（建议赋值为AgentID）
							},
						},
						function(res) {
							// console.log(7);
							console.log(JSON.stringify(res));
							if (res.err_msg === "ext_ISCP_Init:ok") {
								//成功处理
								console.log(res.result);
								stri();
							}
							if (res.err_msg === "ext_ISCP_Init:fail") {
								//失败处理
								  console.log(res.result);
								  return -1
							}
							if (res.err_msg === "ext_ISCP_Init:cancel") {
								//取消处理
								console.log(res.result);
								  return 0
							}
						}
					);
				}

				//安全平台建立链接
				function stri(json) {
					wx.invoke("ext_ISCP_ConnectService", {
							data: {
								iscpIP: "61.136.122.77:7082", //'链路唯一标识,自己生成',
								ip: "61.136.120.77",//安全交互平台互联⽹ip，从对接⽅获取
								port: "7082", //安全交互平台互联⽹port，从对接⽅获取
								user: "zhuying6",//当前登录⽤户id，可写死
								appid: this.appId,
							},
						},
						function(res) {
							console.log(JSON.stringify(res));

							if (res.err_msg === "ext_ISCP_ConnectService:ok") {
								//成功处理
								// console.log(res.result);
								stra();
							}
							if (res.err_msg === "ext_ISCP_ConnectService:fail") {
								//失败处理
								console.log(res.result);
							}
							if (res.err_msg === "ext_ISCP_ConnectService:cancel") {
								//取消处理
								console.log(res.result);
							}
						}
					);
				}

				//获取端口号
				function stra(json) {
					wx.invoke("ext_ISCP_GetLocalPort", {
							data: {
								iscpIP: "61.136.122.71:7082", //'链路唯一标识,自己生成（建议赋值为AgentID）',
								ip: "172.21.6.140",
								port: "18088",
							},
						},
						function(res) {
							if (res.err_msg === "ext_ISCP_GetLocalPort:ok") {
								//成功处理
								console.log("端口号:", res.result);
								let port = res.result;
								localStorage.setItem("port", port);
								vm.confin();
							}
							if (res.err_msg === "ext_ISCP_GetLocalPort:fail") {
								//失败处理
								console.log(res.result);
							}
							if (res.err_msg === "ext_ISCP_GetLocalPort:cancel") {
								//取消处理
								console.log(res.result);
							}
						}
					);
				}
			},
			confin() {
				var vm = this;
				// let appid = "1001481";
				let appid = this.appId; //UAT环境
				let wx_code = getParam("code");
				this.wxCode = wx_code
				// $.getScript("./jweixin-1.2.0.js", function() {});
				if (wx_code) {
					console.log(wx_code);
					// $(".code").html(wx_code);
					getTicket();
				} else {
					getCode();
				}

				function getParam(variable) {
					let query = window.location.search.substring(1);
					let vars = query.split("&");
					for (let i = 0; i < vars.length; i++) {
						var pair = vars[i].split("=");
						if (pair[0] == variable) {
							return pair[1];
						}
					}
					return "";
				}

				function getCode() {
					// var sURL = "https://igw.sgcc.com.cn/connect/oauth2/authorize?";
					var sURL = "https://igw.isgcc.net:18081/connect/oauth2/authorize?"; //UAT环境
					// sURL += "appid=ww4d11a39991ebffdc";//
					sURL += `appid=${this.appId}`; //UAT环境
					sURL += "&redirect_uri=" + encodeURIComponent("zipapp://local.host/index.html");
					sURL += "&response_type=code";
					sURL += "&scope=SCOPE";
					sURL += "&state=STATE";
					// sURL += "agentid=1001481";
					sURL += `agentid=${this.agentId}`; //UAT环境
					sURL += "#wechat_redirect";
					location.href = sURL;
				}

				//通过微信code获取isc_ticket
				function getTicket() {
					// var sURL = "https://id.sgcc.com.cn:10443/igwmobile/proxy/getUserByIgwCode";
					var sURL = "https://igw.isgcc.net:18443/proxy/getUserByIgwCode"; //UAT环境

					// console.log(wx_code);
					var param = {
						CODE: wx_code,
						appId: appid,
					};
					param = JSON.stringify(param);
					
					uni.request({
						url:sURL,
						method:'POST',
						data:param,
						success: function(json) {
							console.log("isc信息", json);
							// let code = json.data;
							// console.log("isode", code);
							// let pamesm = code;
							vm.$_api.getIscCode(json.data).then((res) => {
								console.log('iscode', res);
								let userId = res.data;
								localStorage.setItem("iscode", userId);
								console.log('userId', userId);
								document.getElementById('szydLoading').style.display = 'none'
								vm.$router.push("/home");
							});
						},
					});
				}
			},
			homedir() {
				uni.navigateTo({
		 		url: '/pages/index/index'
				});
			},
		}

	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss'
</style>
