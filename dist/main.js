!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){class t extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n            <nav class="navbar navbar-expand-lg navbar-light">\n                <div class="container">\n                    <a class="navbar-brand" href="#"><strong>Beritamu</strong></a>\n                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"\n                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">\n                        <span class="navbar-toggler-icon"></span>\n                    </button>\n                    <div class="collapse navbar-collapse" id="navbarText">\n                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0 ml-3">\n                            <li class="nav-item">\n                                <a class="nav-link active" href="#kategori-bisnis">BISNIS</a>\n                            </li>\n                            <li class="nav-item">\n                                <a class="nav-link" href="#kategori-olahraga">OLAHRAGA</a>\n                            </li>\n                            <li class="nav-item">\n                                <a class="nav-link" href="#kategori-teknologi">TEKNOLOGI</a>\n                            </li>\n                            <li class="nav-item">\n                                <a class="nav-link" href="#kategori-kesehatan">KESEHATAN</a>\n                            </li>\n                            <li class="nav-item">\n                                <a class="nav-link" href="#kategori-sains">SAINS</a>\n                            </li>\n                            <li class="nav-item">\n                                <a class="nav-link" href="#kategori-hiburan">HIBURAN</a>\n                            </li>\n                        </ul>\n                        <span class="navbar-text time ml-auto">\n                            <small></small>\n                        </span>\n                    </div>\n                </div>\n            </nav>\n        '}}customElements.define("nav-bar",t)},function(e,n){class t extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n            <footer class="pt-2 py-1">\n                <div class="container">\n                    <p>Built by Muhammad Najie with <span class="text-danger">&hearts;</span></p>\n                </div>\n            </footer>\n        '}}customElements.define("footer-beritamu",t)},function(e,n,t){"use strict";t.r(n);t(0);var i=class{static getEverythingArticles(e){let n="?country=id&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7";return e&&(n+="&category="+e),fetch(""+("https://newsapi.org/v2/top-headlines"+n)).then(e=>(e=e.json()).articles?Promise.resolve(e.articles):Promise.reject(e.status+", Gagal mengambil data"))}static getTopHeadlinesArticles(e=null){let n="?country=id&pageSize=20&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7";return e&&(n+="&category="+e),fetch("https://newsapi.org/v2/top-headlines"+n).then(e=>e.json()).then(e=>e.articles?Promise.resolve(e.articles):Promise.reject(e.status+", Gagal mengambil data"))}};class a extends HTMLElement{connectedCallback(){this.category=this.getAttribute("category")||null,this.dataCall(this.category)}attributeChangedCallback(e,n,t){"category"===e&&(this.category=t,this.dataCall(this.category))}dataCall(e){void 0===e?i.getTopHeadlinesArticles().then(e=>{this.articles=e,this.render()}).catch(e=>{this.renderError(e)}):i.getTopHeadlinesArticles(e).then(e=>{this.articles=e,this.render()}).catch(e=>{this.renderError(e)})}render(){this.innerHTML=`\n            ${this.style()}\n            <div class="container">\n                <div class="d-flex bd-highlight">\n                    <div class="p-2 flex-grow-1 bd-highlight">\n                        <h2 class="kategori-title">${this.category?this.category.toUpperCase():"Umum"}</h2>\n                    </div>\n                    <div class="p-2 bd-highlight slide-button swiper-slide-button-prev">\n                        <img src="./src/images/icons/keyboard_arrow_left-24px.svg" alt="left arrow">\n                    </div>\n                    <div class="p-2 bd-highlight slide-button swiper-slide-button-next">\n                        <img src="./src/images/icons/keyboard_arrow_right-24px.svg" alt="right arrow">\n                    </div>\n                </div>\n                \n                <div class="swiper-container">\n                    <div class="swiper-wrapper">\n                        ${this.printArticles(this.articles)}\n                    </div>\n                    \x3c!-- <div class="swiper-pagination"></div> --\x3e\n                </div>\n            </div>`,this.swiper()}renderError(e){console.log(e)}swiper(){new Swiper(".swiper-container",{centeredSlides:!0,spaceBetween:30,loop:!0,grabCursor:!0,navigation:{nextEl:".swiper-slide-button-next",prevEl:".swiper-slide-button-prev"},pagination:{el:".swiper-pagination"},breakpoints:{480:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,centeredSlides:!1,spaceBetween:20},1024:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30},1440:{slidesPerView:4,slidesPerGroup:2,centeredSlides:!1,spaceBetween:40}}})}printArticles(e){let n="";for(const t of e)n+=`\n                <article class="swiper-slide">\n                    <a href="${t.url}" target="_blank">\n                        <figure class="figure">\n                            <img src="${t.urlToImage}"\n                                class="figure-img img-fluid rounded" alt="...">\n                            <figcaption class="figure-caption">\n                                <h5>${t.title.slice(0,100)}</h5>\n                                <p>${t.description}</p>\n                                <p class="tanggal">${t.publishedAt.slice(0,10)}</p>\n                            </figcaption>\n                        </figure>\n                    </a>\n                </article>\n                `;return n}style(){return"\n            <style>\n            news-list {\n                display: block;\n                margin-top: 1rem;\n            }\n\n            .swiper-container {\n                width: 100%;\n                height: 425px;\n            }\n\n            .kategori-title {\n                border-left: 4px solid turquoise; \n                padding-left: 10px;\n            }\n\n            .slide-button {\n                cursor: pointer;\n            }\n\n            .slide-button img {\n                width: 40px;\n                height: 40px;\n            }\n\n            .swiper-slide {\n                text-align: center;\n                font-size: 18px;\n\n                /* Center slide text vertically */\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: -webkit-flex;\n                display: flex;\n                -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                -webkit-justify-content: center;\n                justify-content: center;\n                -webkit-box-align: center;\n                -ms-flex-align: center;\n                -webkit-align-items: center;\n                align-items: center;\n            } \n            \n            .swiper-slide img {\n                max-height: 50vh;\n            } \n\n            .swiper-slide h5 {\n                color: black;\n            }\n\n            figcaption {\n                text-align: left;\n            }\n\n            .tanggal {\n                font-size: .9rem;\n            }\n            </style>\n        "}static get observedAttributes(){return["category"]}}customElements.define("news-list",a);t(1);const s=()=>{const e=document.querySelectorAll(".nav-link"),n=n=>{for(const n of e)n.classList.contains("active")&&n.classList.remove("active");n.classList.add("active")};for(const t of e)t.addEventListener("click",(function(){n(this)}))},r=()=>{const e=document.querySelector(".time"),n=()=>{(()=>{let n=(new Date).toLocaleString("id-ID",{timeZone:"Asia/Jakarta"});e.innerHTML=n})(),setTimeout(n,1e3)};n()},l=()=>{new Swiper(".swiper-container",{centeredSlides:!0,spaceBetween:30,loop:!0,grabCursor:!0,navigation:{nextEl:".swiper-slide-button-next",prevEl:".swiper-slide-button-prev"},pagination:{el:".swiper-pagination"},breakpoints:{640:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}}})},o=()=>{const e=document.querySelector("news-list");document.querySelectorAll(".btn").forEach(n=>{n.addEventListener("click",(function(){this.getAttribute("category")||null?e.setAttribute("category",this.getAttribute("category")):e.removeAttribute("category")}))})};var c=()=>{s(),r(),l(),o()};document.addEventListener("DOMContentLoaded",c)}]);