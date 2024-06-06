(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{169:function(e,t,a){e.exports=a(368)},174:function(e,t,a){},176:function(e,t,a){},204:function(e,t){},209:function(e,t){},211:function(e,t){},244:function(e,t){},246:function(e,t){},247:function(e,t){},252:function(e,t){},254:function(e,t){},274:function(e,t){},290:function(e,t){},293:function(e,t){},368:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(52),c=a.n(r),o=(a(174),a(25)),l=a(8);a(175),a(176);class i extends n.Component{render(){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},s.a.createElement("div",{className:"container"},s.a.createElement(o.b,{className:"navbar-brand",to:"/"},"NotesApp"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.b,{className:"nav-link",to:"/"},"Notes")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.b,{className:"nav-link",to:"/create"},"Create Note")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.b,{className:"nav-link",to:"/user"},"Create User"))))))}}var m=a(20),d=a.n(m),p=a(168);a(69);class u extends n.Component{constructor(){super(...arguments),this.state={notes:[]},this.getNotes=async()=>{const{data:e}=await d.a.get("".concat("https://mern-app-api-13q7.onrender.com/api","/notes"));this.setState({notes:e})},this.deleteNote=async e=>{!0===window.confirm("\xbfAre you sure you want to delete this note?")&&(await d.a.delete("".concat("https://mern-app-api-13q7.onrender.com/api","/notes/").concat(e)),this.getNotes())}}componentDidMount(){this.getNotes()}render(){return s.a.createElement("div",{className:"row"},this.state.notes.map(e=>s.a.createElement("div",{className:"col-md-4 p-2",key:e._id},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h5",null,s.a.createElement("strong",null,"Title:")," ",e.title),s.a.createElement(o.b,{className:"btn btn-secondary mr-2",to:"/edit/"+e._id},"Edit"),s.a.createElement("button",{className:"btn btn-danger",onClick:()=>this.deleteNote(e._id)},"Delete")),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",null,"Content:"),s.a.createElement("p",null,e.content)),s.a.createElement("div",{className:"card-footer"},s.a.createElement("p",null,s.a.createElement("strong",null,"Author:")," ",e.author),s.a.createElement("p",null,s.a.createElement("strong",null,"Date:")," ",Object(p.a)(e.date)))))))}}var h=u,E=a(165),v=a.n(E);a(299);class g extends n.Component{constructor(){super(...arguments),this.state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:"",redirect:!1},this.onSubmit=async e=>{e.preventDefault();const t={title:this.state.title,content:this.state.content,author:this.state.userSelected,date:this.state.date};this.state.editing?await d.a.put("".concat("https://mern-app-api-13q7.onrender.com/api","/notes/")+this.state._id,t).then(()=>this.setState({redirect:!0})):await d.a.post("".concat("https://mern-app-api-13q7.onrender.com/api","/notes"),t).then(()=>this.setState({redirect:!0}))},this.onInputChange=e=>{this.setState({[e.target.name]:e.target.value})},this.onChangeDate=e=>{this.setState({date:e})}}async componentDidMount(){var e,t;const{data:a}=await d.a.get("".concat("https://mern-app-api-13q7.onrender.com/api","/users"));if(this.setState({users:a.map(e=>e.username),userSelected:null!==(e=null===(t=a[0])||void 0===t?void 0:t.username)&&void 0!==e?e:""}),this.props.match.params.id){const{data:e}=await d.a.get("".concat("https://mern-app-api-13q7.onrender.com/api","/notes/").concat(this.props.match.params.id));this.setState({userSelected:e.author,title:e.title,content:e.content,date:new Date(e.date),editing:!0,_id:this.props.match.params.id})}}render(){return this.state.redirect?s.a.createElement(l.a,{to:"/"}):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 offset-md-3"},s.a.createElement("div",{className:"card card-body"},s.a.createElement("h4",null,"Create a Note"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected},this.state.users.map(e=>s.a.createElement("option",{key:e,value:e},e)))),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:this.state.title,onChange:this.onInputChange,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{name:"content",className:"form-control",placeholder:"Content",value:this.state.content,onChange:this.onInputChange,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement(v.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})),s.a.createElement("div",{className:"form-group"}),s.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.state.users.length},this.props.match.params.id?"Update":"Save")))))}}var N=g;class b extends n.Component{constructor(){super(...arguments),this.state={users:[],username:""},this.getUsers=async()=>{const e=await d.a.get("".concat("https://mern-app-api-13q7.onrender.com/api","/users"));this.setState({users:e.data})},this.onChangeUsername=e=>{this.setState({username:e.target.value})},this.onSubmit=async e=>{e.preventDefault(),await d.a.post("".concat("https://mern-app-api-13q7.onrender.com/api","/users"),{username:this.state.username}),this.setState({username:""}),this.getUsers()},this.deleteUser=async e=>{await d.a.delete("".concat("https://mern-app-api-13q7.onrender.com/api","/users/").concat(e)),this.getUsers()}}async componentDidMount(){this.getUsers()}render(){return s.a.createElement("div",{className:"row mt-3"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"card card-body"},s.a.createElement("h3",null,"Create New User"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",value:this.state.username,className:"form-control",onChange:this.onChangeUsername})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("ul",{className:"list-group"},this.state.users.map(e=>s.a.createElement("li",{key:e._id,className:"list-group-item list-group-item-action",onDoubleClick:()=>this.deleteUser(e._id)},e.username)))))}}var f=b;var y=function(){return s.a.createElement(o.a,null,s.a.createElement(i,null),s.a.createElement("div",{className:"container p-4"},s.a.createElement(l.b,{path:"/",exact:!0,component:h}),s.a.createElement(l.b,{path:"/edit/:id",component:N}),s.a.createElement(l.b,{path:"/create",component:N}),s.a.createElement(l.b,{path:"/user",component:f})))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.f3e4f4d1.chunk.js.map