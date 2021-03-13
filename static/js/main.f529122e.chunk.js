(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(8),l=n.n(c),r=n(7),o=n(2),s=(n(13),n(0));function u(){return Object(s.jsx)("div",{className:"AddButton",children:Object(s.jsx)("button",{type:"submit",children:"Add"})})}function d(e){return Object(s.jsx)("button",{onClick:e.handleEditClick,children:"Edit"})}function j(){return Object(s.jsx)("div",{className:"ResubmitButton",children:Object(s.jsx)("button",{type:"submit",children:"Resubmit"})})}function b(e){return Object(s.jsx)("div",{className:"DeleteButton",children:Object(s.jsx)("button",{onClick:e.handleDeleteClick,children:"Delete"})})}function m(e){var t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],c=n[1];return{value:a,setValue:c,onChange:function(e){c(e.target.value)},clear:function(){c("")}}}function h(e){return Object(s.jsxs)("div",{className:"generalInfoForm",children:[Object(s.jsx)("h2",{children:"General Info"}),Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsxs)("div",{className:"generalInfoName",children:[Object(s.jsx)("label",{htmlFor:"nameInput",children:"Name: "}),Object(s.jsx)("input",{type:"text",name:"name",required:"required",value:e.name,onChange:e.handleNameChange})]}),Object(s.jsxs)("div",{className:"generalInfoEmail",children:[Object(s.jsx)("label",{htmlFor:"emailInput",children:"Email: "}),Object(s.jsx)("input",{type:"email",name:"email",required:"required",value:e.email,onChange:e.handleEmailChange})]}),Object(s.jsxs)("div",{className:"generalInfoPhone",children:[Object(s.jsx)("label",{htmlFor:"PhoneInput",children:"Phone: "}),Object(s.jsx)("input",{type:"text",name:"phone",required:"required",pattern:"[0-9]{9,13}",value:e.phone,onChange:e.handlePhoneChange})]}),Object(s.jsx)(u,{})]})]})}function x(e){return Object(s.jsxs)("div",{className:"generalInfoDisplay",children:[Object(s.jsx)("h2",{children:"General Info"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Name: ",e.name]}),Object(s.jsxs)("li",{children:["Email: ",e.email]}),Object(s.jsxs)("li",{children:["Phone: ",e.phone]})]}),Object(s.jsx)(d,{handleEditClick:e.handleEdit})]})}var p=function(e){var t=m(""),n=m(""),a=m(""),c=Object(i.useState)(e.info),l=Object(o.a)(c,2),r=l[0],u=l[1];return Object(i.useEffect)((function(){u({name:t.value,email:n.value,phone:a.value})}),[e.info]),e.infoSubmitted?Object(s.jsx)(x,{name:t.value,email:n.value,phone:a.value,handleEdit:function(){e.onInfoSubmit(r,!1)}}):Object(s.jsx)(h,{name:t.value,email:n.value,phone:a.value,handleNameChange:t.onChange,handleEmailChange:n.onChange,handlePhoneChange:a.onChange,handleSubmit:function(t){t.preventDefault(),e.onInfoSubmit(r,!0)}})};function O(e,t){return e<t||!(e>t)&&void 0}var v=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(e.educationInfo.id),a=Object(o.a)(n,2),c=a[0],l=a[1],r=Object(i.useState)(e.educationInfo.schoolName),u=Object(o.a)(r,2),m=u[0],h=u[1],x=Object(i.useState)(e.educationInfo.courseTitle),p=Object(o.a)(x,2),v=p[0],f=p[1],I=Object(i.useState)(e.educationInfo.studyFromDate),N=Object(o.a)(I,2),C=N[0],y=N[1],T=Object(i.useState)(e.educationInfo.studyToDate),g=Object(o.a)(T,2),D=g[0],F=g[1],S=Object(i.useState)(e.educationInfo.editClicked),q=Object(o.a)(S,2),E=q[0],k=q[1];return Object(i.useEffect)((function(){l(e.educationInfo.id),h(e.educationInfo.schoolName),f(e.educationInfo.courseTitle),y(e.educationInfo.studyFromDate),F(e.educationInfo.studyToDate),k(e.educationInfo.editClicked)}),[e.educationInfo.id,e.educationInfo.schoolName,e.educationInfo.courseTitle,e.educationInfo.studyFromDate,e.educationInfo.studyToDate,e.educationInfo.editClicked]),E?Object(s.jsx)("div",{className:"educationEditForm",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O(C,D)?(e.onEducationEdit({id:c,schoolName:m,courseTitle:v,studyFromDate:C,studyToDate:D,editClicked:!1}),k(!1)):alert("Please enter a valid date")},children:[Object(s.jsxs)("div",{className:"schoolName",children:[Object(s.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(s.jsx)("input",{type:"text",name:"schoolName",required:"required",value:m,onChange:function(e){h(e.target.value)}})]}),Object(s.jsxs)("div",{className:"courseTitle",children:[Object(s.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(s.jsx)("input",{type:"text",name:"courseTitle",required:"required",value:v,onChange:function(e){f(e.target.value)}})]}),Object(s.jsxs)("div",{className:"studyFromDate",children:[Object(s.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(s.jsx)("input",{type:"date",name:"studyFromDate",required:"required",max:t,value:C,onChange:function(e){y(e.target.value)}})]}),Object(s.jsxs)("div",{className:"studyToDate",children:[Object(s.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(s.jsx)("input",{type:"date",name:"studyToDate",required:"required",max:t,value:D,onChange:function(e){F(e.target.value)}})]}),Object(s.jsx)(j,{})]})}):Object(s.jsxs)("div",{className:"educationDisplay",children:[Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["School Name: ",m]}),Object(s.jsxs)("li",{children:["Course Title: ",v]}),Object(s.jsxs)("li",{children:["From: ",C]}),Object(s.jsxs)("li",{children:["To: ",D]})]}),Object(s.jsxs)("div",{className:"buttonsContainer",children:[Object(s.jsx)(d,{handleEditClick:function(){k(!0)}}),Object(s.jsx)(b,{handleDeleteClick:function(){e.onEducationDelete({id:c,schoolName:m,courseTitle:v,studyFromDate:C,studyToDate:D,editClicked:E})}})]})]})},f=n(3),I=n.n(f);var N=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(I()()),a=Object(o.a)(n,2),c=a[0],l=a[1],r=m(""),d=m(""),j=m(""),b=m(""),h=Object(i.useState)(!1),x=Object(o.a)(h,2),p=x[0],v=x[1];return Object(s.jsx)("div",{className:"educationForm",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:c,schoolName:r.value,courseTitle:d.value,studyFromDate:j.value,studyToDate:b.value,editClicked:p};O(j.value,b.value)?(e.onEducationSubmit(n),l(I()()),r.setValue(""),d.setValue(""),j.setValue(""),b.setValue(""),v(!1)):alert("Please enter a valid date")},children:[Object(s.jsxs)("div",{className:"schoolName",children:[Object(s.jsx)("label",{htmlFor:"schoolNameInput",children:"School Name:"}),Object(s.jsx)("input",{type:"text",name:"schoolName",required:"required",value:r.value,onChange:r.onChange})]}),Object(s.jsxs)("div",{className:"courseTitle",children:[Object(s.jsx)("label",{htmlFor:"courseTitleInput",children:"Course Title:"}),Object(s.jsx)("input",{type:"text",name:"courseTitle",required:"required",value:d.value,onChange:d.onChange})]}),Object(s.jsxs)("div",{className:"studyFromDate",children:[Object(s.jsx)("label",{htmlFor:"studyFromInput",children:"From:"}),Object(s.jsx)("input",{type:"date",name:"studyFromDate",required:"required",max:t,value:j.value,onChange:j.onChange})]}),Object(s.jsxs)("div",{className:"studyToDate",children:[Object(s.jsx)("label",{htmlFor:"studyToInput",children:"To:"}),Object(s.jsx)("input",{type:"date",name:"studyToDate",required:"required",max:t,value:b.value,onChange:b.onChange})]}),Object(s.jsx)(u,{})]})})};var C=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(e.experienceInfo.id),a=Object(o.a)(n,2),c=a[0],l=a[1],r=Object(i.useState)(e.experienceInfo.companyName),u=Object(o.a)(r,2),m=u[0],h=u[1],x=Object(i.useState)(e.experienceInfo.positionTitle),p=Object(o.a)(x,2),v=p[0],f=p[1],I=Object(i.useState)(e.experienceInfo.experienceFromDate),N=Object(o.a)(I,2),C=N[0],y=N[1],T=Object(i.useState)(e.experienceInfo.experienceToDate),g=Object(o.a)(T,2),D=g[0],F=g[1],S=Object(i.useState)(e.experienceInfo.responsibilities),q=Object(o.a)(S,2),E=q[0],k=q[1],P=Object(i.useState)(e.experienceInfo.editClicked),V=Object(o.a)(P,2),w=V[0],B=V[1];return Object(i.useEffect)((function(){var t=e.experienceInfo,n=t.id,i=t.companyName,a=t.positionTitle,c=t.experienceFromDate,r=t.experienceToDate,o=t.responsibilities,s=t.editClicked;l(n),h(i),f(a),y(c),F(r),k(o),B(s)}),[e.experienceInfo.id,e.experienceInfo.companyName,e.experienceInfo.positionTitle,e.experienceInfo.experienceFromDate,e.experienceInfo.experienceToDate,e.experienceInfo.responsibilities,e.experienceInfo.editClicked]),w?Object(s.jsx)("div",{className:"experienceForm",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O(C,D)?(e.onExperienceEdit({id:c,companyName:m,positionTitle:v,experienceFromDate:C,experienceToDate:D,responsibilities:E,editClicked:!1}),B(!1)):alert("Please enter a valid date")},children:[Object(s.jsxs)("div",{className:"companyName",children:[Object(s.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(s.jsx)("input",{type:"text",name:"companyName",required:"required",value:m,onChange:function(e){h(e.target.value)}})]}),Object(s.jsxs)("div",{className:"positionTitle",children:[Object(s.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(s.jsx)("input",{type:"text",name:"positionTitle",required:"required",value:v,onChange:function(e){f(e.target.value)}})]}),Object(s.jsxs)("div",{className:"experienceFromDate",children:[Object(s.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(s.jsx)("input",{type:"date",name:"experienceFromDate",required:"required",max:t,value:C,onChange:function(e){y(e.target.value)}})]}),Object(s.jsxs)("div",{className:"experienceToDate",children:[Object(s.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(s.jsx)("input",{type:"date",name:"experienceToDate",required:"required",max:t,value:D,onChange:function(e){F(e.target.value)}})]}),Object(s.jsxs)("div",{className:"responsibilities",children:[Object(s.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(s.jsx)("textarea",{name:"responsibilities",required:"required",value:E,onChange:function(e){k(e.target.value)}})]}),Object(s.jsx)(j,{})]})}):Object(s.jsxs)("div",{className:"experienceDisplay",children:[Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Organization Name: ",m]}),Object(s.jsxs)("li",{children:["Position Title: ",v]}),Object(s.jsxs)("li",{children:["From: ",C]}),Object(s.jsxs)("li",{children:["To: ",D]}),Object(s.jsxs)("li",{children:["Responsibilities: ",E]})]}),Object(s.jsxs)("div",{className:"buttonsContainer",children:[Object(s.jsx)(d,{handleEditClick:function(){B(!0)}}),Object(s.jsx)(b,{handleDeleteClick:function(){e.onExperienceDelete({id:c,companyName:m,positionTitle:v,experienceFromDate:C,experienceToDate:D,responsibilities:E,editClicked:w})}})]})]})};var y=function(e){var t=(new Date).toISOString().split("T")[0],n=Object(i.useState)(I()()),a=Object(o.a)(n,2),c=a[0],l=a[1],r=m(""),d=m(""),j=m(""),b=m(""),h=m(""),x=Object(i.useState)(!1),p=Object(o.a)(x,2),v=p[0],f=p[1];return Object(s.jsx)("div",{className:"experienceForm",children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:c,companyName:r.value,positionTitle:d.value,experienceFromDate:j.value,experienceToDate:b.value,responsibilities:h.value,editClicked:v};O(j.value,b.value)?(e.onExperienceSubmit(n),l(I()()),r.setValue(""),d.setValue(""),j.setValue(""),b.setValue(""),h.setValue(""),f(!1)):alert("Please enter a valid date")},children:[Object(s.jsxs)("div",{className:"companyName",children:[Object(s.jsx)("label",{htmlFor:"companyNameInput",children:"Company Name: "}),Object(s.jsx)("input",{type:"text",name:"companyName",required:"required",value:r.value,onChange:r.onChange})]}),Object(s.jsxs)("div",{className:"positionTitle",children:[Object(s.jsx)("label",{htmlFor:"positionTitleInput",children:"Position Title: "}),Object(s.jsx)("input",{type:"text",name:"positionTitle",required:"required",value:d.value,onChange:d.onChange})]}),Object(s.jsxs)("div",{className:"experienceFromDate",children:[Object(s.jsx)("label",{htmlFor:"experienceFromInput",children:"From:"}),Object(s.jsx)("input",{type:"date",name:"experienceFromDate",required:"required",max:t,value:j.value,onChange:j.onChange})]}),Object(s.jsxs)("div",{className:"experienceToDate",children:[Object(s.jsx)("label",{htmlFor:"experienceToInput",children:"To:"}),Object(s.jsx)("input",{type:"date",name:"experienceToDate",required:"required",max:t,value:b.value,onChange:b.onChange})]}),Object(s.jsxs)("div",{className:"responsibilities",children:[Object(s.jsx)("label",{htmlFor:"responsibilitiesInput",children:"Responsibilities: "}),Object(s.jsx)("textarea",{name:"responsibilities",required:"required",value:h.value,onChange:h.onChange})]}),Object(s.jsx)(u,{})]})})};var T=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),l=Object(o.a)(c,2),u=l[0],d=l[1],j=Object(i.useState)([]),b=Object(o.a)(j,2),m=b[0],h=b[1],x=Object(i.useState)([]),O=Object(o.a)(x,2),f=O[0],I=O[1];function T(e){var t=m.findIndex((function(t){return t.id===e.id}));m[t]=e,h(Object(r.a)(m))}function g(e){var t=m.filter((function(t){return t.id!==e.id}));h(t)}function D(e){var t=f.findIndex((function(t){return t.id===e.id}));f[t]=e,I(Object(r.a)(f))}function F(e){var t=f.filter((function(t){return t.id!==e.id}));I(t)}return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"containerHeader",children:Object(s.jsx)("h1",{children:"CV Builder"})}),Object(s.jsx)(p,{info:n,onInfoSubmit:function(e,t){a([e]),d(t)},infoSubmitted:u}),Object(s.jsx)("h2",{children:"Education"}),m.length>0?m.map((function(e){return Object(s.jsx)(v,{educationInfo:e,onEducationEdit:T,onEducationDelete:g},e.id)})):Object(s.jsx)("p",{children:"Enter your education details below!"}),Object(s.jsx)(N,{onEducationSubmit:function(e){var t=m.concat(e);h(t)}}),Object(s.jsx)("h2",{children:"Practical Experience"}),f.length>0?f.map((function(e){return Object(s.jsx)(C,{experienceInfo:e,onExperienceEdit:D,onExperienceDelete:F},e.id)})):Object(s.jsx)("p",{children:"Enter your practical experience below!"}),Object(s.jsx)(y,{onExperienceSubmit:function(e){var t=f.concat(e);I(t)}})]})};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f529122e.chunk.js.map