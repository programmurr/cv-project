(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(11),l=n.n(c),s=n(4),o=n(5),r=n(2),d=n(7),u=n(6),h=(n(16),n(3)),j=n(0);function b(){return Object(j.jsx)("div",{className:"AddButton",children:Object(j.jsx)("button",{type:"submit",children:"Add"})})}function m(e){return Object(j.jsx)("button",{onClick:e.handleEditClick,children:"Edit"})}function x(){return Object(j.jsx)("div",{className:"ResubmitButton",children:Object(j.jsx)("button",{type:"submit",children:"Resubmit"})})}function p(e){return Object(j.jsx)("div",{className:"DeleteButton",children:Object(j.jsx)("button",{onClick:e.handleDeleteClick,children:"Delete"})})}function O(e){var t=Object(i.useState)(e),n=Object(h.a)(t,2),a=n[0],c=n[1];return{value:a,setValue:c,onChange:function(e){c(e.target.value)},clear:function(){c("")}}}function v(e){return Object(j.jsxs)("div",{className:"generalInfoForm",children:[Object(j.jsx)("h2",{children:"General Info"}),Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsxs)("div",{className:"generalInfoName",children:[Object(j.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(j.jsx)("input",{type:"text",name:"name",required:"required",value:e.name,onChange:e.handleNameChange})]}),Object(j.jsxs)("div",{className:"generalInfoEmail",children:[Object(j.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(j.jsx)("input",{type:"email",name:"email",required:"required",value:e.email,onChange:e.handleEmailChange})]}),Object(j.jsxs)("div",{className:"generalInfoPhone",children:[Object(j.jsx)("label",{htmlFor:"PhoneInput",children:"Phone: "}),Object(j.jsx)("input",{type:"text",name:"phone",required:"required",pattern:"[0-9]{9,13}",value:e.phone,onChange:e.handlePhoneChange})]}),Object(j.jsx)(b,{})]})]})}function f(e){return Object(j.jsxs)("div",{className:"generalInfoDisplay",children:[Object(j.jsx)("h2",{children:"General Info"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Name: ",e.name]}),Object(j.jsxs)("li",{children:["Email: ",e.email]}),Object(j.jsxs)("li",{children:["Phone: ",e.phone]})]}),Object(j.jsx)(m,{handleEditClick:e.handleEdit})]})}var C=function(e){var t=O(""),n=O(""),a=O(""),c=Object(i.useState)(e.info),l=Object(h.a)(c,2),s=l[0],o=l[1];return Object(i.useEffect)((function(){o({name:t.value,email:n.value,phone:a.value})}),[e.info]),e.infoSubmitted?Object(j.jsx)(f,{name:t.value,email:n.value,phone:a.value,handleEdit:function(){e.onInfoSubmit(s,!1)}}):Object(j.jsx)(v,{name:t.value,email:n.value,phone:a.value,handleNameChange:t.onChange,handleEmailChange:n.onChange,handlePhoneChange:a.onChange,handleSubmit:function(t){t.preventDefault(),e.onInfoSubmit(s,!0)}})},y=n(8);function I(e,t){return e<t||!(e>t)&&void 0}function g(e){var t=e.educationInfo,n=t.schoolName,i=t.courseTitle,a=t.studyFromDate,c=t.studyToDate;return Object(j.jsx)("div",{className:"educationEditForm",children:Object(j.jsxs)("form",{onSubmit:e.handleEditSubmit,children:[Object(j.jsxs)("div",{className:"schoolName",children:[Object(j.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(j.jsx)("input",{type:"text",name:"schoolName",required:"required",value:n,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"courseTitle",children:[Object(j.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(j.jsx)("input",{type:"text",name:"courseTitle",required:"required",value:i,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"studyFromDate",children:[Object(j.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(j.jsx)("input",{type:"date",name:"studyFromDate",required:"required",max:e.maxDate,value:a,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"studyToDate",children:[Object(j.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(j.jsx)("input",{type:"date",name:"studyToDate",required:"required",max:e.maxDate,value:c,onChange:e.onChange})]}),Object(j.jsx)(x,{})]})})}a.a.Component;var D=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(e.educationInfo.id),a=Object(h.a)(n,2),c=a[0],l=a[1],s=Object(i.useState)(e.educationInfo.schoolName),o=Object(h.a)(s,2),r=o[0],d=o[1],u=Object(i.useState)(e.educationInfo.courseTitle),b=Object(h.a)(u,2),O=b[0],v=b[1],f=Object(i.useState)(e.educationInfo.studyFromDate),C=Object(h.a)(f,2),y=C[0],g=C[1],D=Object(i.useState)(e.educationInfo.studyToDate),N=Object(h.a)(D,2),E=N[0],S=N[1],T=Object(i.useState)(e.educationInfo.editClicked),F=Object(h.a)(T,2),q=F[0],k=F[1];return Object(i.useEffect)((function(){l(e.educationInfo.id),d(e.educationInfo.schoolName),v(e.educationInfo.courseTitle),g(e.educationInfo.studyFromDate),S(e.educationInfo.studyToDate),k(e.educationInfo.editClicked)}),[e.educationInfo.id,e.educationInfo.schoolName,e.educationInfo.courseTitle,e.educationInfo.studyFromDate,e.educationInfo.studyToDate,e.educationInfo.editClicked]),q?Object(j.jsx)("div",{className:"educationEditForm",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),I(y,E)?e.onEducationEdit({id:c,schoolName:r,courseTitle:O,studyFromDate:y,studyToDate:E,editClicked:!1}):alert("Please enter a valid date")},children:[Object(j.jsxs)("div",{className:"schoolName",children:[Object(j.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(j.jsx)("input",{type:"text",name:"schoolName",required:"required",value:r,onChange:function(e){d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"courseTitle",children:[Object(j.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(j.jsx)("input",{type:"text",name:"courseTitle",required:"required",value:O,onChange:function(e){v(e.target.value)}})]}),Object(j.jsxs)("div",{className:"studyFromDate",children:[Object(j.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(j.jsx)("input",{type:"date",name:"studyFromDate",required:"required",max:t,value:y,onChange:function(e){g(e.target.value)}})]}),Object(j.jsxs)("div",{className:"studyToDate",children:[Object(j.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(j.jsx)("input",{type:"date",name:"studyToDate",required:"required",max:t,value:E,onChange:function(e){S(e.target.value)}})]}),Object(j.jsx)(x,{})]})}):Object(j.jsxs)("div",{className:"educationDisplay",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["School Name: ",r]}),Object(j.jsxs)("li",{children:["Course Title: ",O]}),Object(j.jsxs)("li",{children:["From: ",y]}),Object(j.jsxs)("li",{children:["To: ",E]})]}),Object(j.jsxs)("div",{className:"buttonsContainer",children:[Object(j.jsx)(m,{handleEditClick:function(){k(!0)}}),Object(j.jsx)(p,{handleDeleteClick:function(){e.onEducationDelete({id:c,schoolName:r,courseTitle:O,studyFromDate:y,studyToDate:E,editClicked:q})}})]})]})},N=n(9),E=n.n(N);var S=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(E()()),a=Object(h.a)(n,2),c=a[0],l=a[1],s=O(""),o=O(""),r=O(""),d=O(""),u=Object(i.useState)(!1),m=Object(h.a)(u,2),x=m[0],p=m[1];return Object(j.jsx)("div",{className:"educationForm",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:c,schoolName:s.value,courseTitle:o.value,studyFromDate:r.value,studyToDate:d.value,editClicked:x};I(r.value,d.value)?(e.onEducationSubmit(n),l(E()()),s.setValue(""),o.setValue(""),r.setValue(""),d.setValue(""),p(!1)):alert("Please enter a valid date")},children:[Object(j.jsxs)("div",{className:"schoolName",children:[Object(j.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(j.jsx)("input",{type:"text",name:"schoolName",required:"required",value:s.value,onChange:s.onChange})]}),Object(j.jsxs)("div",{className:"courseTitle",children:[Object(j.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(j.jsx)("input",{type:"text",name:"courseTitle",required:"required",value:o.value,onChange:o.onChange})]}),Object(j.jsxs)("div",{className:"studyFromDate",children:[Object(j.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(j.jsx)("input",{type:"date",name:"studyFromDate",required:"required",max:t,value:r.value,onChange:r.onChange})]}),Object(j.jsxs)("div",{className:"studyToDate",children:[Object(j.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(j.jsx)("input",{type:"date",name:"studyToDate",required:"required",max:t,value:d.value,onChange:d.onChange})]}),Object(j.jsx)(b,{})]})})};function T(e){var t=e.experienceInfo,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,l=t.responsibilities;return Object(j.jsx)("div",{className:"experienceForm",children:Object(j.jsxs)("form",{onSubmit:e.handleEditSubmit,children:[Object(j.jsxs)("div",{className:"companyName",children:[Object(j.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(j.jsx)("input",{type:"text",name:"companyName",required:"required",value:n,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"positionTitle",children:[Object(j.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(j.jsx)("input",{type:"text",name:"positionTitle",required:"required",value:i,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"experienceFromDate",children:[Object(j.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(j.jsx)("input",{type:"date",name:"experienceFromDate",required:"required",max:e.maxDate,value:a,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"experienceToDate",children:[Object(j.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(j.jsx)("input",{type:"date",name:"experienceToDate",required:"required",max:e.maxDate,value:c,onChange:e.onChange})]}),Object(j.jsxs)("div",{className:"responsibilities",children:[Object(j.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(j.jsx)("textarea",{name:"responsibilities",required:"required",value:l,onChange:e.onChange})]}),Object(j.jsx)(x,{})]})})}var F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={id:"",companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleEditClick=i.handleEditClick.bind(Object(r.a)(i)),i.handleEditSubmit=i.handleEditSubmit.bind(Object(r.a)(i)),i.handleDeleteClick=i.handleDeleteClick.bind(Object(r.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState(this.props.experienceInfo)}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(y.a)({},i,n))}},{key:"handleEditClick",value:function(){var e=Object.assign({},this.state);e.editClicked=!0,this.setState(e)}},{key:"handleEditSubmit",value:function(e){e.preventDefault(),I(this.state.experienceFromDate,this.state.experienceToDate)?this.props.onExperienceEdit(this.state):alert("Please enter a valid date")}},{key:"handleDeleteClick",value:function(){this.props.onExperienceDelete(this.state)}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,l=t.responsibilities;return t.editClicked?Object(j.jsx)(T,{maxDate:e,onChange:this.handleChange,experienceInfo:this.state,handleEditSubmit:this.handleEditSubmit}):Object(j.jsxs)("div",{className:"experienceDisplay",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Organization Name: ",n]}),Object(j.jsxs)("li",{children:["Position Title: ",i]}),Object(j.jsxs)("li",{children:["From: ",a]}),Object(j.jsxs)("li",{children:["To: ",c]}),Object(j.jsxs)("li",{children:["Responsibilities: ",l]})]}),Object(j.jsxs)("div",{className:"buttonsContainer",children:[Object(j.jsx)(m,{handleEditClick:this.handleEditClick}),Object(j.jsx)(p,{handleDeleteClick:this.handleDeleteClick})]})]})}}]),n}(a.a.Component),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={id:E()(),companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(y.a)({},i,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),I(this.state.experienceFromDate,this.state.experienceToDate)?(this.props.onExperienceSubmit(this.state),this.setState({id:E()(),companyName:"",positionTitle:"",experienceFromDate:"",experienceToDate:"",responsibilities:""})):alert("Please enter a valid date")}},{key:"render",value:function(){var e=(new Date).toISOString().split("T")[0],t=this.state,n=t.companyName,i=t.positionTitle,a=t.experienceFromDate,c=t.experienceToDate,l=t.responsibilities;return Object(j.jsx)("div",{className:"experienceForm",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("div",{className:"companyName",children:[Object(j.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(j.jsx)("input",{type:"text",name:"companyName",required:"required",value:n,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"positionTitle",children:[Object(j.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(j.jsx)("input",{type:"text",name:"positionTitle",required:"required",value:i,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"experienceFromDate",children:[Object(j.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(j.jsx)("input",{type:"date",name:"experienceFromDate",required:"required",max:e,value:a,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"experienceToDate",children:[Object(j.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(j.jsx)("input",{type:"date",name:"experienceToDate",required:"required",max:e,value:c,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:"responsibilities",children:[Object(j.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(j.jsx)("textarea",{name:"responsibilities",required:"required",value:l,onChange:this.handleChange})]}),Object(j.jsx)(b,{})]})})}}]),n}(a.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={generalInfo:[],infoSubmitted:!1,educationInfo:[],experienceInfo:[]},e.handleInfoSubmit=e.handleInfoSubmit.bind(Object(r.a)(e)),e.handleEducationSubmit=e.handleEducationSubmit.bind(Object(r.a)(e)),e.handleEducationEdit=e.handleEducationEdit.bind(Object(r.a)(e)),e.handleEducationDelete=e.handleEducationDelete.bind(Object(r.a)(e)),e.handleExperienceSubmit=e.handleExperienceSubmit.bind(Object(r.a)(e)),e.handleExperienceEdit=e.handleExperienceEdit.bind(Object(r.a)(e)),e.handleExperienceDelete=e.handleExperienceDelete.bind(Object(r.a)(e)),e}return Object(o.a)(n,[{key:"handleInfoSubmit",value:function(e,t){this.setState({generalInfo:[e],infoSubmitted:t})}},{key:"handleEducationSubmit",value:function(e){var t=this.state;this.setState({educationInfo:t.educationInfo.concat(e)})}},{key:"handleEducationEdit",value:function(e){var t=Object.assign({},this.state),n=t.educationInfo.findIndex((function(t){return t.id===e.id}));t.educationInfo[n]=e,this.setState({state:t})}},{key:"handleEducationDelete",value:function(e){var t=Object.assign({},this.state).educationInfo.filter((function(t){return t.id!==e.id}));this.setState({educationInfo:t})}},{key:"handleExperienceSubmit",value:function(e){var t=this.state;this.setState({experienceInfo:t.experienceInfo.concat(e)})}},{key:"handleExperienceEdit",value:function(e){var t=Object.assign({},this.state),n=t.experienceInfo.findIndex((function(t){return t.id===e.id}));t.experienceInfo[n]=e,t.experienceInfo[n].editClicked=!1,this.setState({state:t})}},{key:"handleExperienceDelete",value:function(e){var t=Object.assign({},this.state).experienceInfo.filter((function(t){return t.id!==e.id}));this.setState({experienceInfo:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.generalInfo,i=t.infoSubmitted,a=t.educationInfo,c=t.experienceInfo;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"containerHeader",children:Object(j.jsx)("h1",{children:"CV Builder"})}),Object(j.jsx)(C,{info:n,onInfoSubmit:this.handleInfoSubmit,infoSubmitted:i}),Object(j.jsx)("h2",{children:"Education"}),a.length>0?a.map((function(t){return Object(j.jsx)(D,{educationInfo:t,onEducationEdit:e.handleEducationEdit,onEducationDelete:e.handleEducationDelete},t.id)})):Object(j.jsx)("p",{children:"Enter your education details below!"}),Object(j.jsx)(S,{onEducationSubmit:this.handleEducationSubmit}),Object(j.jsx)("h2",{children:"Practical Experience"}),c.length>0?c.map((function(t){return Object(j.jsx)(F,{experienceInfo:t,onExperienceEdit:e.handleExperienceEdit,onExperienceDelete:e.handleExperienceDelete},t.id)})):Object(j.jsx)("p",{children:"Enter your practical experience below!"}),Object(j.jsx)(q,{onExperienceSubmit:this.handleExperienceSubmit})]})}}]),n}(a.a.Component);l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.37915215.chunk.js.map