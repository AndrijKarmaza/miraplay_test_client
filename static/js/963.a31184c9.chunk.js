"use strict";(self.webpackChunkmiraplay_test_client=self.webpackChunkmiraplay_test_client||[]).push([[963],{963:(e,s,a)=>{a.r(s),a.d(s,{default:()=>B});var r=a(434);const _="GamesList_games_list__DnUv5",i="GamesList_game_item__Rx2nA",t="GamesList_game_img__wpPkQ",n="GamesList_game_descr_box__4RS5j",c="GamesList_game_header__2f+Gg",m="GamesList_game_descr__p5ZVO",l="GamesList_game_genre_cont__5TcWf",o="GamesList_game_top__7RAp8",g="GamesList_game_genre__iJrhX",d="GamesList_game_class__q5uQo",h=e=>e.games.items,N=e=>e.games.currentPage,j=e=>e.games.isFreshGamesFirst,x=e=>e.games.totalGames,G=e=>e.games.genre,L=e=>e.games.isLoading,p=e=>e.games.error;var v=a(184);const u=()=>{const e=(0,r.v9)(h);return(0,v.jsx)("ul",{className:_,children:e.length&&e.map((e=>{let{_id:s,systemGameName:a,gameDescription:r,gameImage:_,genre:h,inTop:N,gameClass:j}=e;return(0,v.jsxs)("li",{className:i,children:[(0,v.jsx)("img",{className:t,src:_,alt:a,loading:"lazy"}),(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("p",{className:c,children:a}),(0,v.jsx)("p",{className:m,children:r&&r.slice(0,115)+" ..."})]}),(0,v.jsxs)("div",{className:l,children:[N&&(0,v.jsx)("p",{className:o,children:"TOP"}),(0,v.jsx)("p",{className:g,children:h})]}),"STANDART"===j&&(0,v.jsx)("p",{className:d,children:"FREE"})]},s)}))})};var S=a(791),A=a(510),f=a(264),R=a(742);const k="Games_container__UygIB",I="Games_header__Ga+La",T="Games_nav_container__pumkZ",C="Games_btn_see_more__+Rbol",w="GenreList_genre_list__AVrY2",E="GenreList_genre_item__7c9hM",y="GenreList_genre_item_active__jQusO";var O=a(984);const F=["ALL","FREE","MOBA","SHOOTERS","LAUNCHERS","MMORPG","STRATEGY","FIGHTING","RACING","SURVIVAL","ONLINE"],b=()=>{const e=(0,r.I0)(),s=(0,r.v9)(G);return(0,v.jsx)("ul",{className:w,children:F.map((a=>(0,v.jsx)("li",{className:a===s||"ALL"===a&&!1===s?y:E,onClick:()=>function(a){!1===s&&"ALL"===a||s!==a&&e((0,A.bU)(a))}(a),children:a},(0,O.x0)())))})},P="Sort_sort_container__LSEr8",U="Sort_title__BtC+o",V="Sort_main_category__5sC4P",D="Sort_category__tVQ1Z",M="Sort_icon__TX+wj";var Q=a(135);const Z=()=>{const e=(0,r.I0)(),s=(0,r.v9)(j),[a,_]=(0,S.useState)(!1);return(0,v.jsxs)("div",{className:P,children:[(0,v.jsx)("p",{className:U,children:"Sort:"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("p",{className:V,onClick:()=>_(!a),children:[s?"new first":"old first"," ",a?(0,v.jsx)(Q.IkZ,{className:M}):(0,v.jsx)(Q.qL$,{className:M})]}),a&&(0,v.jsx)("p",{className:D,onClick:()=>(_(!a),void e((0,A.SG)())),children:s?"old first":"new first"})]})]})},B=()=>{const e=(0,r.I0)(),s=(0,r.v9)(L),a=(0,r.v9)(p),_=(0,r.v9)(G),i=(0,r.v9)(N),t=(0,r.v9)(x),n=(0,r.v9)(j),c={page:i,isFreshGamesFirst:n,genre:_,gamesToShow:9};return(0,S.useEffect)((()=>{e((0,A.kT)(c))}),[e,i,_,n]),(0,v.jsxs)("section",{className:k,children:[(0,v.jsx)("h1",{className:I,children:"All games"}),s&&R.Loading.circle("LOADING"),!s&&R.Loading.remove(),a&&f.Notify.failure("Something went wrong please try to reload page."),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:T,children:[(0,v.jsx)(b,{}),(0,v.jsx)(Z,{})]}),(0,v.jsx)(u,{}),9*i<t&&(0,v.jsx)("button",{className:C,onClick:()=>e((0,A.YA)()),children:"Show more"})]})]})}}}]);
//# sourceMappingURL=963.a31184c9.chunk.js.map