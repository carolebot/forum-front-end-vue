(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200",alt:""}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:function(t){return e.handleFileChange(t)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(e._s(e.isProcessing?"更新中":"Submit"))])])])},s=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("b0c0"),r("25f0"),r("4cce")),u=r("2f62"),c=r("2fa3"),m={name:"UserEdit",data:function(){return{user:{id:0,image:"",name:"",email:""},isProcessing:!1}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),created:function(){if(-1!==this.currentUser.id){var e=this.$route.params.id;this.setUser(e)}},watch:{currentUser:function(e){if(-1!==e.id){var t=this.$route.params.id;this.setUser(t)}}},methods:{handleFileChange:function(e){var t=e.target.files;if(0!==t.length){var r=window.URL.createObjectURL(t[0]);this.currentUser.image=r}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.user.name){r.next=4;break}return c["a"].fire({icon:"error",title:"姓名為空"}),r.abrupt("return");case 4:return a=e.target,s=new FormData(a),t.isProcessing=!0,r.next=9,o["a"].update({userId:t.user.id,formData:s});case 9:if(n=r.sent,i=n.data,"error"!==i.status){r.next=13;break}throw new Error(i.message);case 13:t.$router.push({name:"user-profile",params:{id:t.user.id}}),r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](0),console.error(r.t0.message),t.isProcessing=!1,c["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 21:case"end":return r.stop()}}),r,null,[[0,16]])})))()},setUser:function(e){var t=this.currentUser,r=t.id,a=t.name,s=t.email,n=t.image;r.toString()===e.toString()?this.user=Object(i["a"])(Object(i["a"])({},this.currentUser),{},{id:r,name:a,email:s,image:n}):this.$router.push({name:"not-found"})}}},l=m,d=r("2877"),f=Object(d["a"])(l,a,s,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d228901.a2c6b8ae.js.map