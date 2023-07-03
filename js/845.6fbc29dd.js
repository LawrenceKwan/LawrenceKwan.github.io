"use strict";(self["webpackChunkdesigner"]=self["webpackChunkdesigner"]||[]).push([[845],{8845:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("div",{staticClass:"signin"},[e("div",{staticStyle:{width:"138px",margin:"0px auto"}},[e("svg",{staticStyle:{"enable-background":"new 0 0 200 66.92"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 200 66.92","xml:space":"preserve"}},[e("image",{staticStyle:{overflow:"visible"},attrs:{width:"1772",height:"506",transform:"matrix(0.1071 0 0 0.1071 5.1307 5.6736)","xlink:href":i(7119)}})])]),e("p",{staticStyle:{color:"black","padding-bottom":"20px"}}),e("div",{staticClass:"table_wrapper",staticStyle:{height:"212px",width:"100%"}},[e("el-table",{staticClass:"table",attrs:{border:"",data:t.list,size:"small",height:"100%"}},[e("el-table-column",{attrs:{label:t.lang.table.no},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),e("el-table-column",{attrs:{prop:"name",label:t.lang.table.name}}),e("el-table-column",{attrs:{label:t.lang.table.dost},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{"background-color":"blue",padding:"8px","border-radius":"8px",color:"white"},attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.goEdit(i.row.id)}}})],1),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[e("el-button",{staticStyle:{"background-color":"red",padding:"8px","border-radius":"8px",color:"white"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.del(i.row.name)}}})],1)]}}])})],1)],1),e("el-button",{staticClass:"submit",staticStyle:{"margin-top":"30px"},attrs:{type:"primary",loading:t.submitting},on:{click:t.createTag}},[t._v(" "+t._s(t.lang.tips22)+" ")])],1)])},n=[];i(3675),i(4453);const r={name:"team",data(){return{key:"",list:[],count:0,page:1,loading:!1,showAdd:!1,editingRow:null,selectedId:null,preference_name:"",showDateTimePicker:!1,selectedDateTime:"",selectedSubscription:"",addForm:{name:"",role:"2"}}},created(){this.lang=this.$lang("team")},mounted(){this.getList()},methods:{getList(){this.loading=!0,this.$ajax.get("/project/list_tags").then((t=>{this.list=t,this.loading=!1}))},refreshList(){this.getList()},addNewPreference(){this.$router.push({path:"/u.library",query:this.$route.query})},goEdit(t){let e=this;e.$prompt(this.lang.tips24,"",{inputPattern:/\S/,inputErrorMessage:e.lang.tips5,closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:this.lang.tips19,confirmButtonText:this.lang.tips20,beforeClose(i,s,n){if("confirm"==i){if(e.httping)return;e.httping=!0,e.$ajax.post("/group/rename_tag",{id:t,name:s.inputValue}).then((t=>{e.$message.success("success"),e.refreshList(),n(),setTimeout((()=>{e.httping=!1}),300)}))}else n()}}).catch((()=>{}))},createTag(){let t=this;t.$prompt(this.lang.tips23,"",{inputPattern:/\S/,inputErrorMessage:t.lang.tips5,closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:this.lang.tips19,confirmButtonText:this.lang.tips20,beforeClose(e,i,s){if("confirm"==e){if(t.httping)return;t.httping=!0,t.$ajax.post("/group/add_tag",{name:i.inputValue}).then((e=>{s(),t.refreshList(),t.$message.success("success"),setTimeout((()=>{t.httping=!1}),300)}))}else s()}}).catch((()=>{}))},del(t){let e=this;this.$confirm(`${this.lang.tips21} '${t}'?`," ",{closeOnPressEscape:!1,closeOnClickModal:!1,cancelButtonText:this.lang.tips19,confirmButtonText:this.lang.tips20,showCancelButton:!0,showConfirmButton:!0,customClass:"custom-confirm-dialog",beforeClose(i,s,n){if("confirm"==i){if(e.httping)return;e.httping=!0;let i=0;e.list.some(((e,s)=>{if(e.name==t)return i=s,!0})),e.$ajax.get("/group/del_tag_name/?name="+t).then((t=>{e.list.splice(i,1),e.$message.success("success"),n(),setTimeout((()=>{e.httping=!1}),300)}))}else n()}}).catch((()=>{}))}}},l=r;var a=i(3736),o=(0,a.Z)(l,s,n,!1,null,"557fad96",null);const u=o.exports},3675:(t,e,i)=>{i.d(e,{Z:()=>n});const s={to2:t=>Number(t)<10?`0${t}`:String(t),time(t="y-m-d",e=null){let i=e?new Date(e):new Date;return t=t.replace("y",i.getFullYear()),t=t.replace("m",this.to2(i.getMonth()+1)),t=t.replace("d",this.to2(i.getDate())),t=t.replace("h",this.to2(i.getHours())),t=t.replace("i",this.to2(i.getMinutes())),t=t.replace("s",this.to2(i.getSeconds())),t=t.replace("w",i.getDay()),t},monthLength(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},preMonthLenggth(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},nextMonthLenggth(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+2),s=new Date(`${e}-${i}-01`).getTime()-864e5;return Number(this.time("d",s))},monthFirst(t=null){let e=this.time("y-m",t)+"-01";return this.time("y-m-d",e)},monthLast(t=null){let e=1*this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=new Date(`${e}-${i}-01`).getTime()-864e5;return this.time("y-m-d",s)},preMonthToday(t=null){let e=this.time("y",t),i=this.to2(1*this.time("m",t)-1),s=this.time("d",t);return this.time("y-m-d",`${e}-${i}-${s}`)},nextMonthToday(t=null){let e=this.time("y",t),i=this.to2(1*this.time("m",t)+1),s=this.time("d",t);return this.time("y-m-d",`${e}-${i}-${s}`)},timeout(t){},timeRemaining(t,e){return t-=parseInt((new Date).getTime()/1e3),this.unixToString(e,t)},unixToString(t,e){let i=parseInt(e/60/60/24),n=parseInt((e-86400*i)/3600),r=parseInt((e-86400*i-3600*n)/60),l=e-86400*i-3600*n-60*r;return t=t.replace("d",s.to2(s.low(i))),t=t.replace("h",s.to2(s.low(n))),t=t.replace("i",s.to2(s.low(r))),t=t.replace("s",s.to2(s.low(l))),t},low(t){return t<0?0:t},parse(t){return new Date(t)}},n=s},7119:t=>{t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=845.6fbc29dd.js.map