(this["webpackJsonproutine-react-app"]=this["webpackJsonproutine-react-app"]||[]).push([[0],{25:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(18),i=c.n(s),o=(c(25),function(e){var t=e.text,c=e.isCompleted,s=e.deleted,i=e.completed;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("div",{className:"todo-indicator ".concat(c?"bg-success":"bg-warning")}),Object(n.jsx)("div",{className:"widget-content p-0",children:Object(n.jsxs)("div",{className:"widget-content-wrapper",children:[Object(n.jsx)("div",{className:"widget-content-right flex1",children:Object(n.jsx)("div",{className:"widget-heading",children:c?Object(n.jsx)("del",{children:t}):t})}),Object(n.jsxs)("div",{className:"widget-content-left",children:[" ",Object(n.jsxs)("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:i,children:[" ",Object(n.jsx)("i",{className:"fa fa-check"})]})," ",Object(n.jsxs)("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:s,children:[" ",Object(n.jsx)("i",{className:"fa fa-trash"})," "]})," "]})]})})]})}),r=Object(a.createContext)({todos:[],todo:"",handleCreateNewTodo:function(){},handleTodoInput:function(){},handleCompletedTodo:function(){},handleDeleteTodo:function(){}}),d=function(){var e=Object(a.useContext)(r);return Object(n.jsx)("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper",children:Object(n.jsx)("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()},children:Object(n.jsxs)("div",{className:"input-group w-100",children:[Object(n.jsx)("input",{type:"text",className:"form-control rounded text-center",placeholder:"Add new Task",value:e.todo,onChange:e.handleTodoInput}),Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-sm bg-transparent fa fa-plus-square text-light",onClick:e.handleCreateNewTodo})})]})})})},l=function(){var e=Object(a.useContext)(r),t=e.todos,c=e.handleDeleteTodo,s=e.handleCompletedTodo;return Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[t.length>0?t.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(o,{text:e.text,isCompleted:e.completed,deleted:function(){return c(e.id)},completed:function(){return s(e.id)}})},e.id)})):Object(n.jsx)("div",{className:"alert alert-light mt-3 w-75 mx-auto",children:Object(n.jsx)("p",{className:"text-center",children:"The List is empty"})}),Object(n.jsx)(d,{})]})},j=function(e){var t=e.teachersName;return Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("div",{className:"card-header",children:"About Me"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Full-Stack MERN Developer"}),Object(n.jsxs)("p",{className:"card-text",children:["Name\xa0: ",t]}),Object(n.jsx)("a",{href:"https://ciamacdavoudi.com/",className:"btn btn-success",children:"Go to the Website"})]}),Object(n.jsx)("div",{className:"card-footer text-muted",children:"(:\xa0Happy Coding"})]})},b=c(2),u=c(8),h=Object(b.f)((function(e){return console.log(e),Object(n.jsx)("div",{className:"m-3",children:Object(n.jsxs)("ul",{className:"nav nav-pills justify-content-center",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(u.b,{to:"/",className:"nav-link",exact:!0,activeClassName:"active",activeStyle:{backgroundColor:"green"},children:"Routine Todos"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(u.b,{to:"/about",className:"nav-link",activeStyle:{backgroundColor:"green"},children:"About Me"})})]})})})),m=function(){return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsx)("div",{className:"d-flex justify-content-center container",children:Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("div",{className:"card-hover-shadow-2x mb-3 card",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:l}),Object(n.jsx)(b.a,{path:"/about",render:function(){return Object(n.jsx)(j,{teachersName:"Ciamac"})}})]})})})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},O=c(12),p=c(17),f=c(36);function v(e){var t=Object(a.useState)([]),c=Object(p.a)(t,2),s=c[0],i=c[1],o=Object(a.useState)(""),d=Object(p.a)(o,2),l=d[0],j=d[1];return Object(n.jsx)("div",{children:Object(n.jsx)(r.Provider,{value:{todos:s,todo:l,handleCreateNewTodo:function(){var e=Object(O.a)(s),t={id:Object(f.a)(),text:l,completed:!1};""!==l&&" "!==l&&(e.push(t),i(e),j(""))},handleTodoInput:function(e){j(e.target.value)},handleCompletedTodo:function(e){var t=Object(O.a)(s),c=t.findIndex((function(t){return t.id===e})),n=t[c];n.completed=!n.completed,t[c]=n,i(t)},handleDeleteTodo:function(e){var t=Object(O.a)(s).filter((function(t){return t.id!==e}));i(t)}},children:e.children})})}i.a.render(Object(n.jsx)(v,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)(m,{})})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.afeed2db.chunk.js.map