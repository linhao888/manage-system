import{_ as E}from"./ContentBox-D-SlbgbM.js";import{r as u,i as k,c as y,a as t,o as s,b as o,x as i,d as x,u as _,e as p,bN as R,E as d,aR as B,bO as C}from"./index-Chfo-exE.js";import{E as b,a as N}from"./el-col-ZY8PRA_9.js";import{_ as S,E as h}from"./_plugin-vue_export-helper-BXNRiKc2.js";import{E as A}from"./el-progress-C2GrFVxo.js";import"./el-message-CTCmm-al.js";import"./isEqual-D3N-VltP.js";const V=""+new URL("avatar-CQlNaQTu.jpg",import.meta.url).href,z=["src"],F={key:1,src:V,width:"278"},I={class:"submit-arr"},L={__name:"UserAvatar",setup(Q){const a=u(""),r=u(),l=k();a.value=l.userInfo.user_pic;const f=n=>{const e=new FileReader;e.readAsDataURL(n.raw),e.onload=()=>{a.value=e.result}},m=async()=>{if(a.value)await R(a.value);else{d.error("请选择一个图片");return}await l.getUser(),d.success("更换成功")};return(n,e)=>{const v=A,c=h,U=b,g=N,w=E;return s(),y(w,{title:"更换头像"},{default:t(()=>[o(g,null,{default:t(()=>[o(U,{span:12},{default:t(()=>[o(v,{ref_key:"uploadRef",ref:r,class:"avatar-uploader","auto-upload":!1,"show-file-list":!1,"on-change":f},{default:t(()=>[a.value?(s(),i("img",{key:0,src:a.value,class:"avatar"},null,8,z)):(s(),i("img",F))]),_:1},512),x("div",I,[o(c,{type:"primary",icon:_(B),size:"large",onClick:e[0]||(e[0]=T=>r.value.$el.querySelector("input").click())},{default:t(()=>e[1]||(e[1]=[p(" 选择图片 ")])),_:1},8,["icon"]),o(c,{type:"success",icon:_(C),size:"large",onClick:m},{default:t(()=>e[2]||(e[2]=[p(" 上传头像 ")])),_:1},8,["icon"])])]),_:1})]),_:1})]),_:1})}}},G=S(L,[["__scopeId","data-v-d12faf44"]]);export{G as default};
