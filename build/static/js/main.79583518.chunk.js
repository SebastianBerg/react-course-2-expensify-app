(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(e,t,n){e.exports=n(513)},509:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=n.n(o),s=n(9),i=n(11),u=n(12),l=n(14),p=n(13),d=n(15),m=n(519),h=n(517),f=n(515),E=n(233),v=n.n(E),b=n(76),j=n.n(b),g=(n(255),n(259),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_MESSAGING_SENSER_ID});j.a.initializeApp(g);var O=j.a.database(),_=new j.a.auth.GoogleAuthProvider,N=new j.a.auth.FacebookAuthProvider,y=Object(s.b)(void 0,function(e){return{startLoginGoogle:function(){return e(function(){return j.a.auth().signInWithPopup(_)})},startLoginFacebook:function(){return e(function(){return j.a.auth().signInWithPopup(N)})}}})(function(e){var t=e.startLoginGoogle,n=e.startLoginFacebook;return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"box-layout__title"},"Expensify - Project Version"),r.a.createElement("p",null,"A web app designed to keep the budget of your diffrent projects."),r.a.createElement("button",{className:"button",onClick:t,style:{width:"95%"}},"Login with Google"),r.a.createElement("p",null),r.a.createElement("button",{className:"button--facebook",onClick:n,style:{width:"95%"}},"Login with Facebook")))}),S=n(4),x=n.n(S),C=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=x()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),s=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&s}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:null})},A=function(e){if(e&&!e.length)return e.amount;if(e&&e.length)return e.map(function(e){return e.amount}).reduce(function(e,t){return e+t});return 0},D=n(103),P=n.n(D),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getExpensesNumber",value:function(){var e=Array.from(this.props.expenses);if(e)return e.length}},{key:"render",value:function(){var e=this.props,t=e.expenseCount,n=e.expensesTotal,a=1===t?"expense":"expenses";return r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("div",null,this.props.expenses.length>0?r.a.createElement("h1",{className:"page-header__title"},"Showing ",r.a.createElement("span",null,t),"of",r.a.createElement("span",null," ",this.getExpensesNumber()),a," for"," ",r.a.createElement("span",null,P()(n/100).format("$0,0"))):null)))}}]),t}(r.a.Component),R=Object(s.b)(function(e){var t=C(e.expenses,e.filters);return{expenseCount:t.length,expensesTotal:A(t),expenses:e.expenses}})(T),k=n(104),F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={calenderFocused:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.setStartDate(t),n.props.setEndDate(a)},n.onFocusChange=function(e){n.setState(function(){return{calenderFocused:e}})},n.onTextChange=function(e){n.props.setTextFilter(e.target.value)},n.onSortChange=function(e){if("date"===e.target.value)n.props.sortByDate();else{if("amount"!==e.target.value)return null;n.props.sortByAmount()}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title--center"},"Filter expenses to view"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group__item"},r.a.createElement("input",{type:"text",className:"text-input",value:this.props.filters.text,onChange:this.onTextChange,placeholder:"Search expenses"})),r.a.createElement("div",{className:"input-group__item"},r.a.createElement("select",{className:"select",onChange:this.onSortChange,defaultValue:"default"},r.a.createElement("option",{value:"default",disabled:!0},"Sort By"),r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount"))),r.a.createElement("div",{className:"input-group__item"},r.a.createElement(k.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calenderFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1},startDateId:"123456",endDateId:"654321"}))))}}]),t}(r.a.Component),w=Object(s.b)(function(e){return{filters:e.filters}},function(e){return{setTextFilter:function(t){return e(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},sortByDate:function(){return e({type:"SORT_BY_DATE"})},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},setStartDate:function(t){return e(function(e){return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(){return{type:"SET_END_DATE",endDate:arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0}}(t))}}})(F),I=n(514);var L=function(e){var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.a.createElement(I.a,{className:"list-item",to:"/edit/".concat(t)},r.a.createElement("div",null,r.a.createElement("h3",{className:"list-item__title"},n),r.a.createElement("span",{className:"list-item__sub-title"},x()(o).format("Do MMMM, YYYY"))),r.a.createElement("h3",{className:"list-item__data"},P()(a/100).format("$0,0.00")))},B=Object(s.b)(function(e){return{expenses:C(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"show-for-mobile"},"Expenses"),r.a.createElement("div",{className:"show-for-desktop"},"Expense"),r.a.createElement("div",{className:"show-for-desktop"},"Amount")),r.a.createElement("div",{className:"list-body"},0===e.expenses.length?r.a.createElement("div",{className:"list-item list-item--message"},r.a.createElement("span",null,"No Expenses")):e.expenses.map(function(e,t){return r.a.createElement(L,Object.assign({key:e.id},e))})))}),M=n(21),U=n(151),V=n.n(U),X=n(234),G=function(e){return{type:"ADD_PROJECT",project:e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=Object(X.a)(V.a.mark(function t(n,a){var r,o,c,s,i,u,l,p,d;return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,o=e.name,c=void 0===o?"":o,s=e.initialFunds,i=void 0===s?"":s,u=e.endDate,l=void 0===u?0:u,p=e.info,d={name:c,initialFunds:i,endDate:l,info:void 0===p?0:p},t.abrupt("return",O.ref("users/".concat(r,"/projects")).push(d).then(function(e){n(G(Object(M.a)({id:e.key},d)))}));case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},J=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e,t){var n=t().auth.uid,a=t().project.id;return O.ref("users/".concat(n,"/projects/").concat(a,"/expenses")).once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(M.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}},$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleProjectSelect=function(e){var t=Array.from(n.state.projects),a=e.target.options.selectedIndex,r=e.target.options[a].getAttribute("id"),o=t[n.state.projects.findIndex(function(e){return e.id===r})];n.props.setCurrentProject(o),n.props.startSetExpenses()},n.getProjects=function(e){return O.ref("users/".concat(e,"/projects")).once("value").then(function(e){var t=[];e.forEach(function(e){t.push(Object(M.a)({id:e.key},e.val()))}),n.setState({projects:t}),n.setState({project:{isLoading:!1}})})},n.state={projects:n.getProjects(n.props.auth.uid),project:{isLoading:!0,initialFunds:0}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"createSelectItems",value:function(){var e=Array.from(this.state.projects),t=[];if(0!==e.length){for(var n=0;n<=this.state.projects.length-1;n++)t.push(r.a.createElement("option",{key:[n],value:e[n].name,id:e[n].id},e[n].name));return t}}},{key:"componentWillMount",value:function(){this.getProjects(this.props.auth.uid)}},{key:"getCurrentFunds",value:function(){return this.props.project.initialFunds-Array.from(this.props.expenses).map(function(e){return e.amount}).reduce(function(e,t){return e+t})/100}},{key:"render",value:function(){return r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"input-group__item header__content"},r.a.createElement("h1",{className:"page-header__title"},this.props.project.name?"Project: ":null,this.props.project.name?r.a.createElement("span",null,this.props.project.name):r.a.createElement("span",null,"Select / Create a Project")),this.state.project.isLoading?null:r.a.createElement("select",{className:"select",onChange:this.handleProjectSelect,defaultValue:this.props.project.name||"default"},r.a.createElement("option",{disabled:!0,value:"default"},"Select a Project"),this.createSelectItems())),this.props.project.name?r.a.createElement("div",{className:"header__content"},r.a.createElement("h1",{className:"page-header__title"},"Project Budget: ",r.a.createElement("span",null,"$",this.props.project.initialFunds)),this.props.expenses.length>0?r.a.createElement("h1",{className:"page-header__title"},"Remaining Funds:"," ",r.a.createElement("span",{className:this.getCurrentFunds()<0?"text__color--red":null},"$",this.getCurrentFunds())):null):null,this.props.project.info?r.a.createElement("div",{className:"container-content"},r.a.createElement("h1",{className:"page-header__title--center"},"Additional Info:"),this.props.project.info):null))}}]),t}(a.Component),W=Object(s.b)(function(e){return{project:e.project,auth:e.auth,expenses:e.expenses}},function(e){return{setCurrentProject:function(t){return e(function(e){return{type:"SET_PROJECT",project:e}}(t))},startSetExpenses:function(){return e(J())}}})($),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={project:{}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({project:{name:""}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),this.props.project.name?r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(B,null),r.a.createElement(R,null)):null)}}]),t}(r.a.Component),K=Object(s.b)(function(e){return{project:e.project}})(H),q=(n(196),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{calenderFocused:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf(),note:n.state.note})):n.setState(function(){return{error:"Please provide description and amount"}})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?(e.expense.amount/100).toString():"",createdAt:e.expense?x()(e.expense.createdAt):x()(),calenderFocused:!1,error:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},this.state.error&&r.a.createElement("p",{className:"form__error"},this.state.error),r.a.createElement("input",{type:"text",className:"text-input",name:"",id:"",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"text",className:"text-input",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(k.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calenderFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1},block:!0}),r.a.createElement("textarea",{placeholder:"Add a note for your expense (optional)",className:"textarea",cols:"30",rows:"10",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("div",null,r.a.createElement("button",{className:"button"},"Save Expense")))}}]),t}(a.Component)),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startAddExpense(e),n.props.history.push("/")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Add Expense"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(q,{onSubmit:this.onSubmit})))}}]),t}(r.a.Component),Q=Object(s.b)(void 0,function(e){return{startAddExpense:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){var a=n().auth.uid,r=n().project.id,o=e.description,c=void 0===o?"":o,s=e.note,i=void 0===s?"":s,u=e.amount,l=void 0===u?0:u,p=e.createdAt,d={description:c,note:i,amount:l,createdAt:void 0===p?0:p};return O.ref("users/".concat(a,"/projects/").concat(r,"/expenses")).push(d).then(function(e){t(function(e){return{type:"ADD_EXPENSE",expense:e}}(Object(M.a)({id:e.key},d)))})}}(t))}}})(z),Z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{name:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{initialFunds:t}})},n.onInfoChange=function(e){var t=e.target.value;n.setState(function(){return{info:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.name&&n.state.initialFunds?(n.setState(function(){return{error:""}}),n.props.onSubmit({name:n.state.name,initialFunds:n.state.initialFunds,info:n.state.info})):n.setState(function(){return{error:"Please provide a Name and an initial Funding. (This can be 0)"}})},n.state={name:e.project?e.project.name:"",initialFunds:e.project?e.project.initialFunds:"",info:e.project?e.project.info:"",calenderFocused:!1,error:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},this.state.error&&r.a.createElement("p",{className:"form__error"},this.state.error),r.a.createElement("input",{type:"text",className:"text-input",name:"",id:"",placeholder:"Name",autoFocus:!0,value:this.state.name,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"amount",className:"text-input",placeholder:"Project Budget",value:this.state.initialFunds,onChange:this.onAmountChange}),r.a.createElement("textarea",{placeholder:"Add info about the project (optional)",className:"textarea",cols:"30",rows:"10",value:this.state.info,onChange:this.onInfoChange}),r.a.createElement("div",null,r.a.createElement("button",{className:"button"},"Save Project")))}}]),t}(a.Component),ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startAddProject(e),n.props.history.push("/")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Add Project"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(Z,{onSubmit:this.onSubmit})))}}]),t}(r.a.Component),te=Object(s.b)(void 0,function(e){return{startAddProject:function(t){return e(Y(t))}}})(ee),ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startAddProject(e),n.props.history.push("/")},n.onRemove=function(){n.props.startRemoveProject({id:n.props.project.id}),n.props.history.push("/")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Add Project"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(Z,{onSubmit:this.onSubmit}),r.a.createElement("button",{className:"button--light-grey",onClick:this.onRemove},"Remove Project")))}}]),t}(r.a.Component),ae=Object(s.b)(function(e){return{project:e.project}},function(e){return{startAddProject:function(t){return e(Y(t))},startRemoveProject:function(t){return e(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t,n){var a=n().auth.uid,r=n().project.id;return O.ref("users/".concat(a,"/projects/").concat(r)).remove().then(function(){t(function(){return{type:"REMOVE_PROJECT",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))}).catch(function(e){console.log(e)})}}(t))}}})(ne),re=n(235),oe=n.n(re),ce=function(e){return r.a.createElement(oe.a,{isOpen:!!e.isOpen,ariaHideApp:!1,onRequestClose:e.handleCloseModal},r.a.createElement("div",{className:"modal-box"},r.a.createElement("h1",{className:"modal-title"},"Are you sure you want to remove this expense?"),r.a.createElement("div",{className:"modal-buttonbox"},r.a.createElement("button",{onClick:e.onRemove,className:"button"},"Yes, I'm sure."),r.a.createElement("button",{onClick:e.handleCloseModal,className:"button--light-grey"},"No, I want to keep the expense."))))},se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.handleOpenModal=function(){n.setState({isOpen:!0})},n.handleCloseModal=function(){n.setState({isOpen:!1})},n.onSubmit=function(e){n.props.startEditExpense(n.props.expense.id,e),n.props.history.push("/")},n.onRemove=function(){n.props.startRemoveExpense({id:n.props.expense.id}),n.props.history.push("/")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("h1",{className:"page-header__title"},"Edit Expense"))),r.a.createElement("div",{className:"content-container"},r.a.createElement(q,{expense:this.props.expense,onSubmit:this.onSubmit}),r.a.createElement("button",{className:"button--light-grey",onClick:this.handleOpenModal},"Remove Expense")),r.a.createElement(ce,{isOpen:this.state.isOpen,onRemove:this.onRemove,handleCloseModal:this.handleCloseModal,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0}))}}]),t}(r.a.Component),ie=Object(s.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}},function(e,t){return{startEditExpense:function(t,n){return e(function(e,t){return function(n,a){var r=a().auth.uid,o=a().project.id;return O.ref("users/".concat(r,"/projects/").concat(o,"/expenses")).update(t).then(function(){n(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(e,t))}).catch(function(e){console.log(e)})}}(t,n))},startRemoveExpense:function(t){return e(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t,n){var a=n().auth.uid,r=n().project.id;return O.ref("users/".concat(a,"/projects/").concat(r,"/expenses")).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))}).catch(function(e){console.log(e)})}}(t))}}})(se),ue=function(){return r.a.createElement("div",null,"404! - ",r.a.createElement(I.a,{to:"/"},"Home page"))},le=n(108),pe=n(516),de=n(152),me=n(518),he=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.startLogout;return r.a.createElement("header",{className:"header",style:{opacity:".97"}},r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"header__content"},r.a.createElement("div",null,r.a.createElement(I.a,{className:"header__title",to:"/dashboard"},r.a.createElement("h1",null,"Expensify"))),r.a.createElement("div",{className:"header__content--s-padding"},this.props.project.name&&"/dashboard"===this.props.location.pathname?r.a.createElement(I.a,{to:"/create-post",className:"button button--link"},"Add Expense"):null,this.props.project.name&&"/dashboard"===this.props.location.pathname?r.a.createElement(I.a,{to:"/edit-project/".concat(this.props.project.id),className:"button button--link"},"Edit Project"):null,"/dashboard"!==this.props.location.pathname?r.a.createElement(I.a,{to:"/dashboard",className:"button button--link"},"Home"):r.a.createElement(I.a,{to:"/create-project",className:"button button--link"},"Create Project"),r.a.createElement("button",{className:"button button--link",onClick:e},"Logout")))))}}]),t}(a.Component),fe=Object(me.a)(Object(s.b)(function(e){return{project:e.project}},function(e){return{startLogout:function(){return e(function(){return j.a.auth().signOut()})}}})(he)),Ee=Object(s.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.a,Object.assign({},a,{component:function(e){return t?r.a.createElement(de.StickyContainer,null,r.a.createElement(de.Sticky,null,function(e){var t=e.style;return r.a.createElement("header",{style:t},r.a.createElement(fe,null))}),r.a.createElement(n,e)):r.a.createElement(pe.a,{to:"/"})}}))}),ve=Object(s.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.a,Object.assign({},a,{component:function(e){return t?r.a.createElement(pe.a,{to:"/dashboard"}):r.a.createElement(n,e)}}))}),be=v()(),je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{history:be},r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(ve,{path:"/",component:y,exact:!0}),r.a.createElement(Ee,{path:"/create-post",component:Q}),r.a.createElement(Ee,{path:"/create-project",component:te}),r.a.createElement(Ee,{path:"/dashboard",component:K}),r.a.createElement(Ee,{path:"/edit/:id",component:ie}),r.a.createElement(Ee,{path:"/edit-project/:id",component:ae}),r.a.createElement(f.a,{component:ue}))))}}]),t}(a.Component),ge=(n(341),n(507),n(509),n(511),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(je,null)}}]),t}(a.Component)),Oe=n(61),_e=n(236),Ne=n(237),ye=[],Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(Ne.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(M.a)({},e,t.updates):e});case"SET_EXPENSES":return t.expenses;default:return e}},xe={text:"",sortBy:"date",startDate:x()().startOf("month"),endDate:x()().endOf("month")},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(M.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(M.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(M.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(M.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(M.a)({},e,{endDate:t.endDate});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},De={},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROJECT":return Object(M.a)({},e,t.project);case"REMOVE_PROJECT":return{};case"SET_PROJECT":return Object(M.a)({},e,t.project);default:return e}},Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{className:"loader__image",src:"/images/loader.gif",alt:"Loading Screen"}))},ke=Object(Oe.e)(Object(Oe.c)({expenses:Se,filters:Ce,auth:Ae,project:Pe}),Te(Object(Oe.a)(_e.a))),Fe=r.a.createElement(s.a,{store:ke},r.a.createElement(ge,null)),we=!1,Ie=function(){we||(c.a.render(Fe,document.getElementById("root")),we=!0)};c.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),j.a.auth().onAuthStateChanged(function(e){e?(ke.dispatch({type:"LOGIN",uid:e.uid}),ke.dispatch(J()).then(function(){Ie(),"/"===be.location.pathname&&be.push("/dashboard")})):(ke.dispatch({type:"LOGOUT"}),Ie(),be.push("/"))})}},[[238,2,1]]]);
//# sourceMappingURL=main.79583518.chunk.js.map