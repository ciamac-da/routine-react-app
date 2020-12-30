(this["webpackJsonproutine-react-app"]=this["webpackJsonproutine-react-app"]||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c(8),o=c.n(a),i=(c(26),function(e){var t=e.text,c=e.isCompleted,a=e.deleted,o=e.completed;return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)("div",{className:"todo-indicator ".concat(c?"bg-success":"bg-warning")}),Object(n.jsx)("div",{className:"widget-content p-0",children:Object(n.jsxs)("div",{className:"widget-content-wrapper",children:[Object(n.jsx)("div",{className:"widget-content-right flex1",children:Object(n.jsx)("div",{className:"widget-heading",children:c?Object(n.jsx)("del",{children:t}):t})}),Object(n.jsxs)("div",{className:"widget-content-left",children:[" ",Object(n.jsxs)("button",{className:"border-0 btn-transition btn btn-outline-success",onClick:o,children:[" ",Object(n.jsx)("i",{className:"fa fa-check"})]})," ",Object(n.jsxs)("button",{className:"border-0 btn-transition btn btn-outline-danger",onClick:a,children:[" ",Object(n.jsx)("i",{className:"fa fa-trash"})," "]})," "]})]})})]})}),r=Object(s.createContext)({todos:[],todo:"",handleCreateNewTodo:function(){},handleTodoInput:function(){},handleCompletedTodo:function(){},handleDeleteTodo:function(){}}),d=function(){var e=Object(s.useContext)(r);return Object(n.jsx)("div",{className:"w-50 mx-auto fixed-bottom mb-5 p-3 wrapper",children:Object(n.jsx)("form",{className:"form-inline justify-content-center",onSubmit:function(e){return e.preventDefault()},children:Object(n.jsxs)("div",{className:"input-group w-100",children:[Object(n.jsx)("input",{type:"text",className:"form-control rounded text-center",placeholder:"Add new Task",value:e.todo,onChange:e.handleTodoInput}),Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-sm bg-transparent fa fa-plus-square text-light",onClick:e.handleCreateNewTodo})})]})})})},l=function(){var e=Object(s.useContext)(r),t=e.todos,c=e.handleDeleteTodo,a=e.handleCompletedTodo;return Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[t.length>0?t.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(i,{text:e.text,isCompleted:e.completed,deleted:function(){return c(e.id)},completed:function(){return a(e.id)}})},e.id)})):Object(n.jsx)("div",{className:"alert alert-light mt-3 w-75 mx-auto",children:Object(n.jsx)("p",{className:"text-center",children:"The List is empty"})}),Object(n.jsx)(d,{})]})},j=function(e){var t=e.teachersName;return Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("div",{className:"card-header",children:"About Me"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Full-Stack MERN Developer"}),Object(n.jsxs)("p",{className:"card-text",children:["Name\xa0: ",t]}),Object(n.jsx)("a",{href:"https://ciamacdavoudi.com/",className:"btn btn-success",children:"Go to the Website"})]}),Object(n.jsx)("div",{className:"card-footer text-muted",children:"(:\xa0Happy Coding"})]})},b=c(2),u=c(10),h=Object(b.f)((function(e){return console.log(e),Object(n.jsx)("div",{className:"m-3",children:Object(n.jsxs)("ul",{className:"nav nav-pills justify-content-center",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(u.b,{to:"/",className:"nav-link",exact:!0,activeClassName:"active",activeStyle:{backgroundColor:"green"},children:"Routine Todos"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(u.b,{to:"/about",className:"nav-link",activeStyle:{backgroundColor:"green"},children:"About Me"})})]})})})),m=c(12),x=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{className:"d-flex justify-content-center container",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("div",{className:"card-hover-shadow-2x mb-3 card",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:l}),Object(n.jsx)(b.a,{path:"/about",render:function(){return Object(n.jsx)(j,{teachersName:"Ciamac"})}})]})})}),Object(n.jsx)(m.a,{})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))},p=c(14),f=c(19),v=c(39);function N(e){var t=Object(s.useState)([]),c=Object(f.a)(t,2),a=c[0],o=c[1],i=Object(s.useState)(""),d=Object(f.a)(i,2),l=d[0],j=d[1];return Object(n.jsx)("div",{children:Object(n.jsx)(r.Provider,{value:{todos:a,todo:l,handleCreateNewTodo:function(){var e=Object(p.a)(a),t={id:Object(v.a)(),text:l,completed:!1};""!==l&&" "!==l&&(e.push(t),o(e),j(""),m.b.success("".concat(l," was added successfully"),{position:"bottom-right",closeButton:!0}))},handleTodoInput:function(e){j(e.target.value)},handleCompletedTodo:function(e){var t=Object(p.a)(a),c=t.findIndex((function(t){return t.id===e})),n=t[c];n.completed=!n.completed,t[c]=n,o(t)},handleDeleteTodo:function(e){var t=Object(p.a)(a).filter((function(t){return t.id!==e}));o(t),m.b.error("Task was deleted successfully!",{position:"bottom-right"})}},children:e.children})})}o.a.render(Object(n.jsx)(N,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)(x,{})})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.e218c02b.chunk.js.map