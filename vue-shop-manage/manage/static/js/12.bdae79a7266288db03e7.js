webpackJsonp([12],{211:function(t,e,a){a(797);var n=a(88)(a(551),a(824),null,null);t.exports=n.exports},236:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(52),r=a.n(n),s=a(51),o=a.n(s),i=a(54),l=a.n(i),c=a(89),u=a(53),d=a(90);e.default={data:function(){return{baseImgPath:u.b,isActive:!1}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(d.b)(["adminInfo","newOrdersCount","newAgentApply","newCashApply"])),methods:l()({},a.i(d.c)(["getAdminData","getOrderCount","getAgentApplyCount","getCashApplyCount"]),{handleCommand:function(t){var e=this;return o()(r.a.mark(function n(){var s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("home"!=t){n.next=4;break}e.$router.push("/manage"),n.next=9;break;case 4:if("singout"!=t){n.next=9;break}return n.next=7,a.i(c.e)();case 7:s=n.sent,1==s.status?(e.$message({type:"success",message:"退出成功"}),e.$router.push("/")):e.$message({type:"error",message:s.message});case 9:case"end":return n.stop()}},n,e)}))()},getNotify:function(){var t=this;return o()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t,setTimeout(function(){a.getOrderCount(),a.getAgentApplyCount(),a.getCashApplyCount(),console.log("新订单"),a.isActive&&a.getNotify()},3e5);case 2:case"end":return e.stop()}},e,t)}))()},handleGoToOrder:function(t){this.$router.push({path:"orderList",query:{index:t}})},handleGoToAgent:function(t){this.$router.push({path:"agentManage",query:{index:t}})}}),activated:function(){console.log("headTop激活了"),this.isActive=!0,this.getNotify()},deactivated:function(){console.log("headTop休眠了"),this.isActive=!1}}},237:function(t,e,a){e=t.exports=a(197)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},238:function(t,e,a){var n=a(237);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(198)("24ad6d9e",n,!0)},239:function(t,e,a){a(238);var n=a(88)(a(236),a(240),null,null);t.exports=n.exports},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.meta,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])})],2),t._v(" "),t.newOrdersCount>0?a("el-badge",{staticClass:"item",attrs:{value:t.newOrdersCount,max:99}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.handleGoToOrder(0)}}},[t._v("新订单")])],1):t._e(),t._v(" "),t.newAgentApply>0?a("el-badge",{staticClass:"item",attrs:{value:t.newAgentApply,max:99}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.handleGoToAgent(0)}}},[t._v("新代理申请")])],1):t._e(),t._v(" "),t.newCashApply>0?a("el-badge",{staticClass:"item",attrs:{value:t.newCashApply,max:99}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.handleGoToAgent(3)}}},[t._v("新提现申请")])],1):t._e(),t._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:t.baseImgPath+t.adminInfo.avatarUrl}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[t._v("首页")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"singout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},551:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(52),r=a.n(n),s=a(51),o=a.n(s),i=a(239),l=a.n(i),c=a(53),u=a(89);e.default={data:function(){return{baseUrl:c.a,baseImgPath:c.b,city:{},offset:0,limit:20,count:0,tableData:[],currentPage:1,expendRow:[]}},created:function(){},components:{headTop:l.a},methods:{initData:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.i(u.q)({shopId:t.shopId});case 3:if(n=e.sent,1!=n.status){e.next=8;break}t.count=n.count,e.next=9;break;case 8:throw new Error("获取数据失败");case 9:t.offset=0,t.limit=20,t.currentPage=1,t.getProduct(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("获取数据失败",e.t0);case 18:case"end":return e.stop()}},e,t,[[0,15]])}))()},getProduct:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.i(u.q)({offset:t.offset,limit:t.limit});case 2:n=e.sent,t.tableData=[],1==n.status&&n.products.forEach(function(e,a){var n=e.sellPoint.split(";"),r="";n.forEach(function(t,e){r=r+t+"  "});var s={};s.productName=e.productName,s.id=e.id,s.sellPoint=r,s.rate=e.rate,s.saleNum=e.saleNum,s.status=e.status,s.categoryName=e.categoryName,s.statusDesc=0==e.status?"未发布":1==e.status?"已上线":"已下线",s.index=a,t.tableData.push(s)});case 5:case"end":return e.stop()}},e,t)}))()},tableRowClassName:function(t,e){return 1===e?"info-row":3===e?"positive-row":""},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getProduct()},expand:function(t,e){},handleEdit:function(t){console.log(t.id),this.$router.push({path:"editGoods",query:{productId:t.id}})},handleDelete:function(t,e){var a=this;return o()(r.a.mark(function n(){var s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,deleteFood(e.item_id);case 3:if(s=n.sent,1!=s.status){n.next=9;break}a.$message({type:"success",message:"删除食品成功"}),a.tableData.splice(t,1),n.next=10;break;case 9:throw new Error(s.message);case 10:n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),a.$message({type:"error",message:n.t0.message}),console.log("删除食品失败");case 16:case"end":return n.stop()}},n,a,[[0,12]])}))()},handleChangeStatus:function(t,e){var n=this;return o()(r.a.mark(function s(){var o,i;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.i(u.r)({productId:e.id,status:0==e.status?1:1==e.status?2:1,flag:2});case 2:o=r.sent,1==o.status&&(i=0==e.status?1:1==e.status?2:1,n.tableData[t].status=i,n.tableData[t].statusDesc=0==i?"未发布":1==i?"已上线":"已下线");case 4:case"end":return r.stop()}},s,n)}))()}},activated:function(){this.initData()},deactivated:function(){}}},578:function(t,e,a){e=t.exports=a(197)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table_container{padding:20px}.Pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:8px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}",""])},797:function(t,e,a){var n=a(578);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(198)("6c64907a",n,!0)},824:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"expand-row-keys":t.expendRow,"row-key":function(t){return t.index}},on:{expand:t.expand}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("span",[t._v(t._s(e.row.productName))])]),t._v(" "),a("el-form-item",{attrs:{label:"商品 ID"}},[a("span",[t._v(t._s(e.row.id))])]),t._v(" "),a("el-form-item",{attrs:{label:"商品卖点"}},[a("span",[t._v(t._s(e.row.sellPoint))])]),t._v(" "),a("el-form-item",{attrs:{label:"商品评分"}},[a("span",[t._v(t._s(e.row.rate))])]),t._v(" "),a("el-form-item",{attrs:{label:"商品分类"}},[a("span",[t._v(t._s(e.row.categoryName))])]),t._v(" "),a("el-form-item",{attrs:{label:"总销量"}},[a("span",[t._v(t._s(e.row.saleNum))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"productName"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品卖点",prop:"sellPoint"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品评分",prop:"rate"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"statusDesc"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",disabled:2!=e.row.status},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("编辑\n                    ")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleChangeStatus(e.$index,e.row)}}},[t._v(t._s(2!=e.row.status?"下线":"上线")+"\n                    ")]),t._v(" "),0==e.row.status?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n                    ")]):t._e()]}}])})],1),t._v(" "),a("div",{staticClass:"Pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:"total, prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]}}});