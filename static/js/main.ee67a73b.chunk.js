(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(13),s=n.n(c),o=(n(18),n(3)),l=n(4),r=n(1),d=n(6),h=n(5),u=(n(19),n(7)),b=(n(20),n(10),n(0)),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"AddButton",children:Object(b.jsx)("button",{type:"submit",children:"Add"})})}}]),n}(a.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("button",{onClick:this.props.handleEditClick,children:"Edit"})}}]),n}(a.a.Component);function p(e){return Object(b.jsxs)("div",{className:"generalInfoForm",children:[Object(b.jsx)("h2",{children:"General Info"}),Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsxs)("div",{className:"generalInfoName",children:[Object(b.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(b.jsx)("input",{type:"text",name:"name",value:e.name,onChange:e.handleChange})]}),Object(b.jsxs)("div",{className:"generalInfoEmail",children:[Object(b.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(b.jsx)("input",{type:"text",name:"email",value:e.email,onChange:e.handleChange})]}),Object(b.jsxs)("div",{className:"generalInfoPhone",children:[Object(b.jsx)("label",{htmlFor:"PhoneInput",children:"Phone: "}),Object(b.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:e.handleChange})]}),Object(b.jsx)(j,{})]})]})}function x(e){return Object(b.jsxs)("div",{className:"generalInfoDisplay",children:[Object(b.jsx)("h2",{children:"General Info"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Name: ",e.name]}),Object(b.jsxs)("li",{children:["Email: ",e.email]}),Object(b.jsxs)("li",{children:["Phone: ",e.phone]})]}),Object(b.jsx)(m,{handleEditClick:e.handleEdit})]})}var O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={name:"",email:"",phone:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i.handleEdit=i.handleEdit.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(u.a)({},i,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onInfoSubmit(this.state,!0)}},{key:"handleEdit",value:function(){this.props.onInfoSubmit(this.state,!1)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,i=e.phone;return this.props.infoSubmitted?Object(b.jsx)(x,{name:t,email:n,phone:i,handleEdit:this.handleEdit}):Object(b.jsx)(p,{name:t,email:n,phone:i,handleChange:this.handleChange,handleSubmit:this.handleSubmit})}}]),n}(a.a.Component),f=(n(11),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"ResubmitButton",children:Object(b.jsx)("button",{type:"submit",children:"Resubmit"})})}}]),n}(a.a.Component));function v(e){var t=e.educationInfo,n=t.schoolName,i=t.courseTitle,a=t.studyFromDate,c=t.studyToDate;return Object(b.jsx)("div",{className:"educationEditForm",children:Object(b.jsxs)("form",{onSubmit:e.handleEditSubmit,children:[Object(b.jsxs)("div",{className:"schoolName",children:[Object(b.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(b.jsx)("input",{type:"text",name:"schoolName",value:n,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"courseTitle",children:[Object(b.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(b.jsx)("input",{type:"text",name:"courseTitle",value:i,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"studyFromDate",children:[Object(b.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(b.jsx)("input",{type:"date",name:"studyFromDate",max:e.maxDate,value:a,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"studyToDate",children:[Object(b.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(b.jsx)("input",{type:"date",name:"studyToDate",max:e.maxDate,value:c,onChange:e.onChange})]}),Object(b.jsx)(f,{})]})})}var C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={id:"",schoolName:"",courseTitle:"",studyFromDate:"",studyToDate:"",editClicked:!1},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleEditClick=i.handleEditClick.bind(Object(r.a)(i)),i.handleEditSubmit=i.handleEditSubmit.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.educationInfo,t=e.id,n=e.schoolName,i=e.courseTitle,a=e.studyFromDate,c=e.studyToDate,s=e.editClicked;this.setState({id:t,schoolName:n,courseTitle:i,studyFromDate:a,studyToDate:c,editClicked:s})}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(u.a)({},i,n))}},{key:"handleEditClick",value:function(){var e=Object.assign({},this.state);e.editClicked=!0,this.setState({id:e.id,schoolName:e.schoolName,courseTitle:e.courseTitle,studyFromDate:e.studyFromDate,studyToDate:e.studyToDate,editClicked:e.editClicked})}},{key:"handleEditSubmit",value:function(e){e.preventDefault(),this.props.onEducationEdit(this.state)}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.schoolName,i=t.courseTitle,a=t.studyFromDate,c=t.studyToDate;return t.editClicked?Object(b.jsx)(v,{maxDate:e,onChange:this.handleChange,educationInfo:this.state,handleEditSubmit:this.handleEditSubmit}):Object(b.jsxs)("div",{className:"educationDisplay",children:[Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["School Name: ",n]}),Object(b.jsxs)("li",{children:["Course Title: ",i]}),Object(b.jsxs)("li",{children:["From: ",a]}),Object(b.jsxs)("li",{children:["To: ",c]})]}),Object(b.jsx)("div",{className:"buttonsContainer",children:Object(b.jsx)(m,{handleEditClick:this.handleEditClick})})]})}}]),n}(a.a.Component),y=n(8),g=n.n(y),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={id:g()(),schoolName:"",courseTitle:"",studyFromDate:"",studyToDate:"",editClicked:!1},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(u.a)({},i,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onEducationSubmit(this.state),this.setState({id:g()(),schoolName:"",courseTitle:"",studyFromDate:"",studyToDate:"",editClicked:!1})}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.schoolName,i=t.courseTitle,a=t.studyFromDate,c=t.studyToDate;return Object(b.jsx)("div",{className:"educationForm",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"schoolName",children:[Object(b.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(b.jsx)("input",{type:"text",name:"schoolName",value:n,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"courseTitle",children:[Object(b.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(b.jsx)("input",{type:"text",name:"courseTitle",value:i,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"studyFromDate",children:[Object(b.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(b.jsx)("input",{type:"date",name:"studyFromDate",max:e,value:a,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"studyToDate",children:[Object(b.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(b.jsx)("input",{type:"date",name:"studyToDate",max:e,value:c,onChange:this.handleChange})]}),Object(b.jsx)(j,{})]})})}}]),n}(a.a.Component);n(12);function S(e){var t=e.experienceInfo,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,s=t.responsibilities;return Object(b.jsxs)("div",{className:"experienceForm",children:[Object(b.jsx)("h2",{children:"Practical Experience"}),Object(b.jsxs)("form",{onSubmit:e.handleEditSubmit,children:[Object(b.jsxs)("div",{className:"companyName",children:[Object(b.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(b.jsx)("input",{type:"text",name:"companyName",value:n,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"positionTitle",children:[Object(b.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(b.jsx)("input",{type:"text",name:"positionTitle",value:i,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"experienceFromDate",children:[Object(b.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(b.jsx)("input",{type:"date",name:"experienceFromDate",max:e.maxDate,value:a,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"experienceToDate",children:[Object(b.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(b.jsx)("input",{type:"date",name:"experienceToDate",max:e.maxDate,value:c,onChange:e.onChange})]}),Object(b.jsxs)("div",{className:"responsibilities",children:[Object(b.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(b.jsx)("textarea",{name:"responsibilities",value:s,onChange:e.onChange})]}),Object(b.jsx)(f,{})]})]})}var T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={id:"",companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleEditClick=i.handleEditClick.bind(Object(r.a)(i)),i.handleEditSubmit=i.handleEditSubmit.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.experienceInfo,t=e.id,n=e.companyName,i=e.positionTitle,a=e.experienceFromDate,c=e.experienceToDate,s=e.responsibilities,o=e.editClicked;this.setState({id:t,companyName:n,positionTitle:i,experienceFromDate:a,experienceToDate:c,responsibilities:s,editClicked:o})}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(u.a)({},i,n))}},{key:"handleEditClick",value:function(){var e=Object.assign({},this.state);e.editClicked=!0,this.setState({id:e.id,companyName:e.companyName,positionTitle:e.positionTitle,experienceFromDate:e.experienceFromDate,experienceToDate:e.experienceToDate,responsibilities:e.responsibilities,editClicked:e.editClicked})}},{key:"handleEditSubmit",value:function(e){e.preventDefault(),this.props.onExperienceEdit(this.state)}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,s=t.responsibilities;return t.editClicked?Object(b.jsx)(S,{maxDate:e,onChange:this.handleChange,experienceInfo:this.state,handleEditSubmit:this.handleEditSubmit}):Object(b.jsxs)("div",{className:"experienceDisplay",children:[Object(b.jsx)("h2",{children:"Experience"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Organization Name: ",n]}),Object(b.jsxs)("li",{children:["Position Title: ",i]}),Object(b.jsxs)("li",{children:["From: ",a]}),Object(b.jsxs)("li",{children:["To: ",c]}),Object(b.jsxs)("li",{children:["Responsibilities: ",s]})]}),Object(b.jsx)("div",{className:"buttonsContainer",children:Object(b.jsx)(m,{handleEditClick:this.handleEditClick})})]})}}]),n}(a.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={id:g()(),companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(u.a)({},i,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onExperienceSubmit(this.state),this.setState({id:g()(),companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""})}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,s=t.responsibilities;return Object(b.jsx)("div",{className:"experienceForm",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"companyName",children:[Object(b.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(b.jsx)("input",{type:"text",name:"companyName",value:n,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"positionTitle",children:[Object(b.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(b.jsx)("input",{type:"text",name:"positionTitle",value:i,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"experienceFromDate",children:[Object(b.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(b.jsx)("input",{type:"date",name:"experienceFromDate",max:e,value:a,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"experienceToDate",children:[Object(b.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(b.jsx)("input",{type:"date",name:"experienceToDate",max:e,value:c,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"responsibilities",children:[Object(b.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(b.jsx)("textarea",{name:"responsibilities",value:s,onChange:this.handleChange})]}),Object(b.jsx)(j,{})]})})}}]),n}(a.a.Component),D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={generalInfo:[],infoSubmitted:!1,educationInfo:[],experienceInfo:[]},e.handleInfoSubmit=e.handleInfoSubmit.bind(Object(r.a)(e)),e.handleEducationSubmit=e.handleEducationSubmit.bind(Object(r.a)(e)),e.handleEducationEdit=e.handleEducationEdit.bind(Object(r.a)(e)),e.handleExperienceSubmit=e.handleExperienceSubmit.bind(Object(r.a)(e)),e.handleExperienceEdit=e.handleExperienceEdit.bind(Object(r.a)(e)),e}return Object(l.a)(n,[{key:"handleInfoSubmit",value:function(e,t){var n=this.state;this.setState({generalInfo:[e],infoSubmitted:t,educationInfo:n.educationInfo,experienceInfo:n.experienceInfo})}},{key:"handleEducationSubmit",value:function(e){var t=this.state;this.setState({generalInfo:t.generalInfo,infoSubmitted:t.infoSubmitted,educationInfo:t.educationInfo.concat(e),experienceInfo:t.experienceInfo})}},{key:"handleEducationEdit",value:function(e){var t=Object.assign({},this.state),n=t.educationInfo.findIndex((function(t){return t.id===e.id}));t.educationInfo[n]=e,t.educationInfo[n].editClicked=!1,this.setState({generalInfo:t.generalInfo,infoSubmitted:t.infoSubmitted,educationInfo:t.educationInfo,experienceInfo:t.experienceInfo})}},{key:"handleExperienceEdit",value:function(e){var t=Object.assign({},this.state),n=t.experienceInfo.findIndex((function(t){return t.id===e.id}));t.experienceInfo[n]=e,t.experienceInfo[n].editClicked=!1,this.setState({generalInfo:t.generalInfo,infoSubmitted:t.infoSubmitted,educationInfo:t.educationInfo,experienceInfo:t.experienceInfo})}},{key:"handleExperienceSubmit",value:function(e){var t=this.state;this.setState({generalInfo:t.generalInfo,infoSubmitted:t.infoSubmitted,educationInfo:t.educationInfo,experienceInfo:t.experienceInfo.concat(e)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.generalInfo,i=t.infoSubmitted,a=t.educationInfo,c=t.experienceInfo;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"containerHeader",children:Object(b.jsx)("h1",{children:"CV Builder"})}),Object(b.jsx)(O,{info:n,onInfoSubmit:this.handleInfoSubmit,infoSubmitted:i}),Object(b.jsx)("h2",{children:"Education"}),a.length>0?a.map((function(t){return Object(b.jsx)(C,{educationInfo:t,onEducationEdit:e.handleEducationEdit},t.id)})):Object(b.jsx)("p",{children:"Enter your education details below!"}),Object(b.jsx)(I,{onEducationSubmit:this.handleEducationSubmit}),Object(b.jsx)("h2",{children:"Practical Experience"}),c.length>0?c.map((function(t){return Object(b.jsx)(T,{experienceInfo:t,onExperienceEdit:e.handleExperienceEdit},t.id)})):Object(b.jsx)("p",{children:"Enter your practical experience below!"}),Object(b.jsx)(E,{onExperienceSubmit:this.handleExperienceSubmit})]})}}]),n}(a.a.Component);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ee67a73b.chunk.js.map