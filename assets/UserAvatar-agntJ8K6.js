import{_ as k}from"./ContentBox-BER6y57q.js";import{r as u,i as w,c as y,a as s,o,b as t,x as _,d as x,u as i,e as p,bN as B,E as d,aR as C,bO as R}from"./index-CpMP9FrR.js";import{E as b,a as N}from"./el-col-Br7JO9Z2.js";import{_ as S,E as A}from"./_plugin-vue_export-helper-DllhH9y6.js";import{E as V}from"./el-progress-B0Foi9-a.js";import"./el-message-BL-vZ9Sx.js";import"./isEqual-BvM7HS7N.js";const h="/manage-system/assets/avatar-CQlNaQTu.jpg",z=["src"],F={key:1,src:h,width:"278"},I={class:"submit-arr"},Q={__name:"UserAvatar",setup(T){const a=u(""),r=u(),l=w();a.value=l.userInfo.user_pic;const f=n=>{const e=new FileReader;e.readAsDataURL(n.raw),e.onload=()=>{a.value=e.result}},m=async()=>{if(a.value)await B(a.value);else{d.error("请选择一个图片");return}await l.getUser(),d.success("更换成功")};return(n,e)=>{const v=V,c=A,g=b,E=N,U=k;return o(),y(U,{title:"更换头像"},{default:s(()=>[t(E,null,{default:s(()=>[t(g,{span:12},{default:s(()=>[t(v,{ref_key:"uploadRef",ref:r,class:"avatar-uploader","auto-upload":!1,"show-file-list":!1,"on-change":f},{default:s(()=>[a.value?(o(),_("img",{key:0,src:a.value,class:"avatar"},null,8,z)):(o(),_("img",F))]),_:1},512),x("div",I,[t(c,{type:"primary",icon:i(C),size:"large",onClick:e[0]||(e[0]=$=>r.value.$el.querySelector("input").click())},{default:s(()=>e[1]||(e[1]=[p(" 选择图片 ")])),_:1},8,["icon"]),t(c,{type:"success",icon:i(R),size:"large",onClick:m},{default:s(()=>e[2]||(e[2]=[p(" 上传头像 ")])),_:1},8,["icon"])])]),_:1})]),_:1})]),_:1})}}},G=S(Q,[["__scopeId","data-v-d12faf44"]]);export{G as default};