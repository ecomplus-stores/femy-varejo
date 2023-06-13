(window.webpackJsonp=window.webpackJsonp||[]).push([[27,26],{283:function(t,e,i){"use strict";var s=i(34),a=i(52),o=i(32),r=i(106),n=i(113),c=i(53),d=i(54),l=i(111),u=i(110),p=i(104),h=i(57),_=i(117),b=i(1),m=i(81),y=i(12),f=i(0),g=i(62),v=i(267),w=i(282),C=i(272),O=i(278),P=i(221),j=i(270),k=i(222),I=i(223),S=i(295),x=i(296),T=i(300),V=i(297),B=i(271),A=i(298),E=i(40),z=i(210);const D="object"==typeof window&&window.storefront||{},$=()=>D.context&&D.context.body||{},F=()=>$()._id,M=t=>{const e=Object.assign({},t);return delete e.body_html,delete e.body_text,delete e.specifications,delete e.inventory_records,delete e.price_change_records,e};var L={name:"TheProduct",components:{Portal:O.a,ALink:P.a,AAlert:j.a,APicture:k.a,APrices:I.a,AShare:S.a,ProductVariations:x.a,ProductGallery:T.a,QuantitySelector:V.a,ShippingCalculator:B.a,PaymentOption:A.a},props:{productId:{type:String,default:()=>F()},product:Object,headingTag:{type:String,default:"h1"},buyText:String,galleryColClassName:{type:String,default:"col-12 col-md-6"},hasPromotionTimer:Boolean,hasStickyBuyButton:{type:Boolean,default:!0},hasQuantitySelector:Boolean,canAddToCart:{type:Boolean,default:!0},hasBuyButton:{type:Boolean,default:!0},lowQuantityToWarn:{type:Number,default:12},maxVariationOptionsBtns:Number,isQuickview:Boolean,paymentAppsSort:{type:Array,default:()=>window.ecomPaymentApps||[]},isSSR:Boolean,ecomPassport:{type:Object,default:()=>E.a},accountUrl:{type:String,default:"/app/#/account/"}},data:()=>({body:{},fixedPrice:null,selectedVariationId:null,currentGalleyImg:1,isOnCart:!1,qntToBuy:1,isStickyBuyVisible:!1,isFavorite:!1,hasClickedBuy:!1,hasLoadError:!1,paymentOptions:[],customizations:[],kitItems:[],currentTimer:null}),computed:{i19addToFavorites:()=>Object(a.a)(s.l),i19close:()=>Object(a.a)(s.M),i19days:()=>Object(a.a)(s.cb),i19discountOf:()=>Object(a.a)(s.gb),i19endsIn:()=>"Termina em",i19freeShippingFrom:()=>Object(a.a)(s.zb),i19loadProductErrorMsg:()=>Object(a.a)(s.Yb),i19offer:()=>"Oferta",i19only:()=>Object(a.a)(s.Ec),i19outOfStock:()=>Object(a.a)(s.Lc),i19paymentOptions:()=>Object(a.a)(s.Pc),i19perUnit:()=>Object(a.a)(s.Qc),i19productionDeadline:()=>Object(a.a)(s.ad),i19removeFromFavorites:()=>Object(a.a)(i19removeFromFavorites),i19retry:()=>Object(a.a)(s.qd),i19selectVariationMsg:()=>Object(a.a)(s.Gd),i19unavailable:()=>Object(a.a)(s.ce),i19units:()=>Object(a.a)(s.de).toLowerCase(),i19unitsInStock:()=>Object(a.a)(s.ee),i19workingDays:()=>Object(a.a)(s.ne),selectedVariation(){return this.selectedVariationId?this.body.variations.find((t=>{let{_id:e}=t;return e===this.selectedVariationId})):{}},name(){return this.selectedVariation.name||Object(o.a)(this.body)},isInStock(){return Object(r.a)(this.body)},isVariationInStock(){return Object(r.a)(this.selectedVariationId?this.selectedVariation:this.body)},isLogged:()=>E.a.checkAuthorization(),thumbnail(){return Object(n.a)(this.body,null,"small")},productQuantity(){return this.selectedVariation.quantity?this.selectedVariation.quantity:this.body.quantity?this.body.quantity:void 0},isLowQuantity(){return this.productQuantity>0&&this.lowQuantityToWarn>0&&this.productQuantity<=this.lowQuantityToWarn},strBuy(){return this.buyText||Object(a.a)(s.x)},discount(){const{body:t}=this,e=this.fixedPrice||Object(c.a)(t),i=t.base_price||t.price;return Object(d.a)(t)||t.price>e?Math.round(100*(i-e)/i):0},mockNewPromoDate(){const{body:t}=this,e={...t},i=new Date((new Date).getTime()+864e5).setHours(0,0,0,0);return e.price_effective_date={},e.price_effective_date.end=new Date(i).toISOString(),console.log(e),console.log(Object(d.a)(e)),e},isOnSale(){const{mockNewPromoDate:t}=this;return this.hasPromotionTimer&&(Object(d.a)(t)||this.body.price>this.fixedPrice)&&t.price_effective_date&&t.price_effective_date.end&&Date.now()<new Date(t.price_effective_date.end).getTime()},ghostProductForPrices(){const t={};["price","base_price"].forEach((e=>{let i=this.selectedVariation[e]||this.body[e];void 0!==i&&this.customizations.forEach((t=>{t.add_to_price&&(i+=this.getAdditionalPrice(t.add_to_price))})),t[e]=i}));const e={...this.body};return this.selectedVariationId&&(Object.assign(e,this.selectedVariation),delete e.variations),{...e,...t}},hasVariations(){return this.body.variations&&this.body.variations.length},isKit(){return this.body.kit_composition&&this.body.kit_composition.length}},methods:{getVariationsGrids:l.a,getSpecValueByText:u.a,setBody(t){this.body={...t,body_html:"",body_text:"",inventory_records:[]},this.$emit("update:product",t)},fetchProduct(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{productId:e}=this;Object(b.g)({url:"/products/".concat(e,".json"),axiosConfig:{timeout:t?2500:6e3}}).then((t=>{let{data:i}=t;this.setBody(i),F()===e&&(D.context.body=this.body),this.hasLoadError=!1})).catch((e=>{console.error(e);const{response:i}=e;i&&i.status>=400&&i.status<500||(t?(this.setBody($()),this.body.name&&this.body.price&&this.body.pictures||(this.hasLoadError=!0)):this.fetchProduct(!0))}))},getAdditionalPrice(t){let{type:e,addition:i}=t;return"fixed"===e?i:Object(c.a)(this.body)*i/100},formatAdditionalPrice(t){return t&&t.addition?Object(p.a)(this.getAdditionalPrice(t)):""},setCustomizationOption(t,e){const i=this.customizations.findIndex((e=>{let{_id:i}=e;return i===t._id}));e?i>-1?this.customizations[i].option={text:e}:this.customizations.push({_id:t._id,label:t.label,add_to_price:t.add_to_price,option:{text:e}}):i>-1&&this.customizations.splice(i,1)},showVariationPicture(t){if(t.picture_id){const e=this.body.pictures.findIndex((e=>{let{_id:i}=e;return i===t.picture_id}));this.currentGalleyImg=e+1}},handleGridOption(t){let{gridId:e,gridIndex:i,optionText:s}=t;if(0===i){const t=this.body.variations.find((t=>Object(h.a)(t,e)===s));t&&this.showVariationPicture(t)}},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(z.b)(this.body._id,this.ecomPassport))},buy(){this.hasClickedBuy=!0;const t=M(this.body);let e;if(this.hasVariations){if(!this.selectedVariationId)return;e=this.selectedVariationId}const{customizations:i}=this;this.$emit("buy",{product:t,variationId:e,customizations:i}),this.canAddToCart&&y.a.addProduct({...t,customizations:i},e,this.qntToBuy),this.isOnCart=!0},buyOrScroll(){this.hasVariations||this.isKit?Object(C.a)(this.$refs.actions):this.buy()}},watch:{selectedVariationId(t){t&&(this.hasClickedBuy&&(this.hasClickedBuy=!1),this.showVariationPicture(this.selectedVariation))},fixedPrice(t){t>0&&!this.isQuickview&&Object(w.a)((()=>{Object(b.c)({url:"/list_payments.json",method:"POST",data:{amount:{total:t},items:[{...M(this.body),product_id:this.body._id}]}}).then((t=>{let{data:e}=t;Array.isArray(this.paymentAppsSort)&&this.paymentAppsSort.length&&Object(v.a)(e.result,this.paymentAppsSort),this.paymentOptions=e.result.reduce(((t,e)=>(e.validated&&t.push({app_id:e.app_id,...e.response}),t)),[]).sort(((t,e)=>!t.discount_option||!t.discount_option.value||e.discount_option&&e.discount_option.value?1:-1))})).catch(console.error)}))},isKit:{handler(t){if(t&&!this.kitItems.length){const t=this.body.kit_composition,e=new m.a;e.setPageSize(t.length).setProductIds(t.map((t=>{let{_id:e}=t;return e}))).fetch(!0).then((()=>{e.getItems().forEach((e=>{const{quantity:i}=t.find((t=>{let{_id:i}=t;return i===e._id})),s=t=>{const s=y.a.parseProduct(e,t,i);i?s.min_quantity=s.max_quantity=i:s.quantity=0,this.kitItems.push({...s,_id:Object(_.a)()})};e.variations?e.variations.forEach((t=>{t._id=Object(_.a)(),s(t._id)})):s()}))})).catch(console.error)}},immediate:!0}},created(){this.product?(this.body=this.product,this.isSSR&&this.fetchProduct()):this.fetchProduct(),this.isFavorite=Object(z.a)(this.body._id||this.productId,this.ecomPassport)},mounted(){var t=this;if(this.$refs.sticky){let e=!1;const i=function(){let s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const a=t.$refs[s?"sticky":"buy"];if(!a)return;const o=document.createElement("div");a.parentNode.insertBefore(o,a),s&&(o.style.position="absolute",o.style.bottom=f.isMobile?"-1600px":"-1000px");const r=Object(g.a)(o,{rootMargin:"100px",threshold:0,load:()=>{t.isStickyBuyVisible=s,s&&!e&&t.$nextTick((()=>{const i=t.$refs.sticky.offsetHeight;document.body.style.paddingBottom="".concat(i+4,"px"),e=!0})),o.remove(),setTimeout((()=>{const t=function(){i(!s),document.removeEventListener("scroll",t)};document.addEventListener("scroll",t)}),100)}});r.observe()};i()}if(this.isOnSale){const t=new Date(this.mockNewPromoDate.price_effective_date.end),e=Date.now();if(t.getTime()>e){let i;const s=864e5;Math.floor((t.getTime()-e)/s)>2?(i=new Date,i.setHours(23,59,59,999)):i=t;const a=t=>t<10?"0".concat(t):t,o=()=>{const t=i.getTime()-Date.now(),e=Math.floor(t/s),o=Math.floor(t%s/36e5),r=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3);return(e>0?"".concat(a(e),":"):"")+"".concat(a(o),":").concat(a(r),":").concat(a(n))};this.currentTimer=setInterval((()=>{this.$refs.timer.innerHTML=o()}),1e3)}}},destroyed(){this.currentTimer&&clearInterval(this.currentTimer)}};e.a=L},301:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"gallery"},[i("div",{staticClass:"gallery__thumbs",attrs:{id:"thumbimage"}},[t.videoSrc?i("div",{staticClass:"gallery__item gallery__item--video",class:{"gallery__item--selected":t.localPictures.length===t.activeIndex},on:{click:function(e){t.activeIndex=t.localPictures.length}}},[i("i",{staticClass:"fas fa-play"}),i("span",[t._v(t._s(t.i19video))])]):t._e(),t._l(t.localPictures,(function(e,s){return i("div",{key:"img-"+s,staticClass:"gallery__item",class:{"gallery__item--selected":s===t.activeIndex},on:{click:function(e){t.activeIndex=s}}},[s<4?i("a-picture",{staticClass:"gallery__thumb",attrs:{src:t.getImg(e,null,"small")}}):t._e()],1)})),t.localPictures.length>4?i("button",{staticClass:"gallery__open btn btn-dark",attrs:{type:"button",title:t.i19openGallery},on:{click:function(e){return e.preventDefault(),t.openZoom(4)}}},[t._v(" +"+t._s(t.localPictures.length-4)+" ")]):t._e()],2),i("div",{staticClass:"gallery__stage"},[i("div",{ref:"glide",staticClass:"glide"},[i("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[i("ul",{staticClass:"glide__slides"},[t._l(t.localPictures,(function(e,s){return i("li",{key:"slide-"+s,staticClass:"glide__slide"},[i("div",{on:{click:function(e){return t.openZoom(s)}}},[0!==s||t.isSliderMoved?i("a-picture",{staticClass:"gallery__big-image",attrs:{src:t.getImg(e,null,"zoom")}}):t._t("default",(function(){return[t.elFirstPicture?i("div",{ref:"firstPicture",refInFor:!0,staticClass:"gallery__big-image"}):i("a-picture",{staticClass:"gallery__big-image",attrs:{src:t.getImg(e,null,"zoom")}})]}))],2)])})),t.videoSrc?i("li",{key:"slide-"+t.localPictures.length,staticClass:"glide__slide"},[i("div",{staticClass:"embed-responsive",class:"embed-responsive-"+t.videoAspectRatio},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}})])]):t._e()],2)])])]),t._m(4)])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pswp__container"},[e("div",{staticClass:"pswp__item"}),e("div",{staticClass:"pswp__item"}),e("div",{staticClass:"pswp__item"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pswp__preloader"},[e("div",{staticClass:"pswp__preloader__icn"},[e("div",{staticClass:"pswp__preloader__cut"},[e("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[e("div",{staticClass:"pswp__share-tooltip"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pswp__caption"},[e("div",{staticClass:"pswp__caption__center"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"pswp__bg"}),i("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter"}),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:t.i19close+" (Esc)"}}),i("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:t.i19share}}),i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:t.i19fullscreen}}),i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._m(1)]),t._m(2),i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:t.i19previous}}),i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:t.i19next}}),t._m(3),t.canAddToCart?i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.buy}},[i("i",{staticClass:"fas fa-cart-arrow-down"}),i("span",{staticClass:"d-none d-md-inline ml-1"},[t._v(" "+t._s(t.i19addToCart)+" ")])]):t._e()])])])}]}},0,[32,33]]);