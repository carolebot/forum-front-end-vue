(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f542c2"],{ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{initialRestaurant:t.restaurant}}),r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("RestaurantComment",{key:e.id,attrs:{restaurantComment:e},on:{"after-delete-comment":t.afterDeleteComment}})})),r("CreateComment",{attrs:{restaurantId:t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("4de4"),r("d3b7"),r("a4d3"),r("e01a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeLiked(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLiked(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),u=[],c=r("2708"),m={mixins:[c["a"],c["b"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}}},l=m,d=r("2877"),p=Object(d["a"])(l,o,u,!1,null,null,null),b=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleDeleteBtnClick(t.restaurantComment.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.restaurantComment.User.name)+" ")])]),r("p",[t._v(t._s(t.restaurantComment.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(t.restaurantComment.createdAt))+" ")])]),r("hr")])])},v=[],g=r("2fa3"),C={addComment:function(t){var e=t.restaurantId,r=t.commentText;return g["b"].post("/comments",{restaurantId:e,commentText:r})},removeComment:function(t){var e=t.commentId;return g["b"].delete("/comments/".concat(e))}},h=r("2f62"),_={mixins:[c["c"]],props:{restaurantComment:{type:Object,require:!0}},methods:{handleDeleteBtnClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.removeComment({commentId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw e.isProcessing=!1,new Error(n.message);case 8:e.$emit("after-delete-comment",t),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),g["a"].fire({icon:"error",title:"無法刪除餐廳"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}},computed:Object(i["a"])({},Object(h["b"])(["currentUser"]))},x=_,k=Object(d["a"])(x,f,v,!1,null,null,null),y=k.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" Submit ")])])])},R=[],O=(r("a9e3"),{name:"CreateComment",data:function(){return{text:"",isProcessing:!1}},props:{restaurantId:{type:Number,required:!0}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return g["a"].fire({icon:"error",title:"評論內容為空"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,C.addComment({restaurantId:t.restaurantId,text:t.text});case 7:if(r=e.sent,a=r.data,"success"===a.status){e.next=12;break}throw t.isProcessing=!1,new Error(a.message);case 12:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),t.isProcessing=!1,t.text="",e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),t.isProcessing=!1,g["a"].fire({icon:"error",title:"無法取得餐廳類別"});case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),j=O,D=Object(d["a"])(j,w,R,!1,null,null,null),I=D.exports,P=r("2375"),L=r("c4c3"),S={name:"Restaurant",components:{RestaurantDetail:b,RestaurantComment:y,CreateComment:I,Spinner:P["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},computed:Object(i["a"])({},Object(h["b"])(["currentUser"])),methods:{afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,u,c,m,l,d,p,b,f,v;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,L["a"].getRestaurantDetail(t);case 4:a=r.sent,n=a.data,s=n.isFavorited,i=n.isLiked,o=n.restaurant.Category.name,u=n.restaurant,c=u.id,m=u.name,l=u.image,d=u.openingHours,p=u.tel,b=u.address,f=u.description,v=n.restaurant.Comments,e.restaurant={id:c,name:m,categoryName:o,image:l,openingHours:d,tel:p,address:b,description:f,isFavorited:s,isLiked:i},e.restaurantComments=v,e.isLoading=!1,r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](0),e.isLoading=!1,g["a"].fire({icon:"error",title:"無法獲取餐廳細節"}),console.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[0,16]])})))()}}},$=S,U=Object(d["a"])($,a,n,!1,null,null,null);e["default"]=U.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),u=r("1626"),c=r("3a9b"),m=r("577e"),l=r("9bf2").f,d=r("e893"),p=s.Symbol,b=p&&p.prototype;if(n&&u(p)&&(!("description"in b)||void 0!==p().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:m(arguments[0]),e=c(b,this)?new p(t):void 0===t?p():p(t);return""===t&&(f[e]=!0),e};d(v,p),v.prototype=b,b.constructor=v;var g="Symbol(test)"==String(p("test")),C=i(b.toString),h=i(b.valueOf),_=/^Symbol\((.*)\)[^)]+$/,x=i("".replace),k=i("".slice);l(b,"description",{configurable:!0,get:function(){var t=h(this),e=C(t);if(o(f,t))return"";var r=g?k(e,7,-1):x(e,_,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=chunk-24f542c2.55c19815.js.map