(this["webpackJsonpreact-hm-03"]=this["webpackJsonpreact-hm-03"]||[]).push([[0],{12:function(t,e,n){t.exports=n(19)},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=n(11),i=n(1),u=n(2),s=n(4),m=n(3),d=n(9),f=n(10),h=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",id:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handeleSubmit=function(e){e.preventDefault(),t.props.contacts.map((function(t){return t.name})).find((function(e){return e===t.state.name}))?alert("".concat(t.state.name," is already in your contacts")):t.props.addContact({id:Object(f.v4)(),name:t.state.name,number:t.state.number}),t.setState({name:""}),t.setState({number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handeleSubmit},r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange})),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Add Contact")))}}]),n}(a.Component),p=function(t){var e=t.contact,n=t.deleteContact;return r.a.createElement("li",null,r.a.createElement("p",null,e.name,": ",e.number),r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete"))},b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,this.props.contacts.map((function(e){return r.a.createElement(p,{deleteContact:t.props.deleteContact,key:e.id,contact:e})}))))}}]),n}(a.Component),v=function(t){var e=t.getFilterValue,n=t.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{value:n,type:"text",name:"filter",onChange:e})))},C=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){var n=t.state.contacts;t.setState({contacts:n.filter((function(t){return t.id!==e}))})},t.getFilterValue=function(e){t.setState({filter:e.target.value})},t.getFilteredData=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())})):t.state.contacts},t.addContact=function(e){t.setState({contacts:[].concat(Object(o.a)(t.state.contacts),[e])})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," Phonebook"),r.a.createElement(h,{contacts:e,addContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(v,{filter:n,getFilterValue:this.getFilterValue}),r.a.createElement(b,{deleteContact:this.deleteContact,contacts:this.getFilteredData()}))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.53ef4ad3.chunk.js.map