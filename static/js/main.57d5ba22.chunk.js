(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3Pm_r",Modal:"Modal_Modal__3LNNw"}},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),c=a.n(r),o=a(20),s=a.n(o),l=a(3),i=a(4),u=a(6),h=a(5),d=a(11);function m(e){var t=e.message;return Object(n.jsx)("p",{children:t})}var b=a(10),g=a.n(b),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:g.a.Overlay,children:Object(n.jsx)("div",{className:g.a.Modal,children:Object(n.jsx)("img",{src:this.props.src})})})}}]),a}(r.Component),j=a(7),f=a.n(j),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.hendleChange=function(t){e.setState({inputValue:t.target.value})},e.hendleSubmit=function(t){t.preventDefault(),console.log(e.state.inputValue),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:f.a.searchbar,children:Object(n.jsxs)("form",{className:f.a.searchForm,onSubmit:this.hendleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(n.jsx)("span",{className:f.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:f.a.searchFormInput,value:this.state.inputValue,onChange:this.hendleChange,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),y=a(21),_=a.n(y),v=function(e,t){return console.log(e,t),_.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photos&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},x=a(8),M=a.n(x),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],loading:!1,error:null,searchQuery:"",page:0,isOpenModal:!1,src:""},e.fetchArticles=function(t,a){v(t,a).then((function(a){return e.setState((function(e){return{articles:a,page:e.page+1,searchQuery:t}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.loadMore=function(){v(e.state.searchQuery,e.state.page).then((function(t){return e.setState((function(e){return{articles:[].concat(Object(d.a)(e.articles),Object(d.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.openModal=function(t){console.log(t.target.dataset.largeimage),e.setState({isOpenModal:!0,src:t.target.dataset.largeimage})},e.closeModal=function(){e.setState({isOpenModal:!1,src:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.fetchArticles("react")}},{key:"render",value:function(){var e=this,t=this.state,a=t.articles,r=t.isLoading,c=t.error;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{onSubmit:this.fetchArticles}),Object(n.jsxs)("div",{className:M.a.imageGallery,children:[c&&Object(n.jsxs)("p",{children:["Whoops, something went wrong: ",c.message]}),r&&Object(n.jsx)(m,{message:"Loading..."}),this.state.isOpenModal&&Object(n.jsx)(p,{src:this.state.src,closeModal:this.closeModal}),a.length>0&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:M.a.imageGalleryItemImage,children:this.state.articles.map((function(t){return Object(n.jsx)("li",{className:M.a.imageGalleryItem,children:Object(n.jsx)("img",{src:t.previewURL,target:"_blank",rel:"noopener noreferrer",className:M.a.imageGalleryItemImage,"data-largeimage":t.largeImageURL,onClick:e.openModal,children:t.title})},t.objectID)}))}),Object(n.jsx)("button",{type:"button",onClick:this.loadMore,className:M.a.Button,children:"Load more"})]})]})]})}}]),a}(r.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(t){return{showModal:!e.state.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{}),Object(n.jsx)("div",{children:e&&Object(n.jsxs)(p,{onClose:this.toggleModal,children:[Object(n.jsx)("h2",{children:"modal title"}),Object(n.jsx)("button",{type:"button",onClick:this.toggleModal,children:"close modal"})]})})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1qup8",searchForm:"Searchbar_searchForm__31hq4",searchForButton:"Searchbar_searchForButton__2Mby9",searchFormButton:"Searchbar_searchFormButton__22DAF",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3rQ_N",searchFormInput:"Searchbar_searchFormInput__1HUCr"}},8:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__s6YGw",imageGalleryItem:"ImageGallery_imageGalleryItem__1QNXe",imageGalleryItemImage:"ImageGallery_imageGalleryItemImage__3BIWq",Button:"ImageGallery_Button__3fOgs"}}},[[45,1,2]]]);
//# sourceMappingURL=main.57d5ba22.chunk.js.map