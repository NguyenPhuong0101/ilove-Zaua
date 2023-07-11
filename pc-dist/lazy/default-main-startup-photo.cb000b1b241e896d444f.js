(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{RGaR:function(t,e,s){"use strict";var i=s("rePB"),n=s("jDHv"),o=s("sxU/"),a=s("SZ0g");n.ModuleContainer.registerValue(a.a,new class{constructor(){Object(i.a)(this,"_emitter",void 0),this._emitter=o.a.instance}emit(t){return this._emitter.emit(t.topic,t),Promise.resolve()}on(t,e){return this._emitter.on(t,e),this}off(t,e){return this._emitter.off(t,e),this}})},ycwz:function(t,e,s){"use strict";var i,n=s("jDHv"),o=s("tw7i");let a=Object(n.injectable)()(i=function(t,e){return Object(n.inject)(o.d)(t,void 0,0)}(i=Reflect.metadata("design:type",Function)(i=Reflect.metadata("design:paramtypes",[Object])(i=class{constructor(t){this.queue=t}push(t,e){const s={msgId:t,action:e};this.queue.push(s)}})||i)||i)||i)||i;var r=s("rePB");class u extends Error{constructor({message:t,name:e,options:s}){super(t),Object(r.a)(this,"code",void 0),Object(r.a)(this,"name",void 0),this.name=e,s&&s.code&&(this.code=s.code),s&&s.stack&&(this.stack=(new Error).stack),Object.setPrototypeOf(this,u.prototype)}}var c=(t,e)=>{const s={code:t.code,stack:e};return new u({name:t.name,options:s,message:t.message})};const l={name:"CANNOT_GET_MSG_FROM_DB",code:1,message:"Cannot get message from Message Core database"},d={name:"QUEUE_TASK_EMPTY",code:2,message:"Action log info queue is empty"},h={name:"TASK_IS_RUNNING",code:3,message:"Media action log info queue has task is running"};var g=s("JJxn"),m=s("1pet"),p=s("tmLI"),v=s("z0WU"),b=s("UiPd"),f=s("Gm1y"),y=s("UQla"),O=s("NDmK"),S=s("n4Tl");var j=s("HPXo");class _{constructor(){Object(r.a)(this,"msg",void 0),Object(r.a)(this,"subType",void 0),Object(r.a)(this,"entryPoint",void 0),Object(r.a)(this,"convType",void 0),Object(r.a)(this,"mediaStatus",void 0),Object(r.a)(this,"forceStatus",void 0)}withMessage(t){return this.msg=t,this}withSubType(t){return this.subType=t,this}withEntryPoint(t){return this.entryPoint=t,this}withStatus(t){return this.mediaStatus=t&&function(t){let e="";return null!=t&&t.isExpired&&(e=y.s.Expired),null!=t&&t.isExpiredSoon&&(e=y.s.ExpiredSoon),null!=t&&t.autoDownloadPath&&(e=y.s.DownloadedAuto),(null!=t&&t.localPath||null!=t&&t.folderPath)&&(e=y.s.DownloadedManual),e}(t),this}withForceStatus(t=""){return this.forceStatus=t,this}build(){var t,e,s,i;const n=function(t){const e=Object(p.n)(null==t?void 0:t.params)||"";return e?(null==e?void 0:e.fileSize)&&+e.fileSize/1024:-1}(this.msg.message),o=(null===(t=this.msg)||void 0===t?void 0:t.toUid)&&(a=null===(e=this.msg)||void 0===e?void 0:e.toUid,v.default.isOAType(b.default.getProfileFriendSync(a))?g.a.OA:v.default.getConversationType(a));var a;const r=o===g.a.GROUP&&function(t){let e;const s=f.default.getGroupByIdSync(t);return null!=s&&s.topMember&&(null==s?void 0:s.topMember.length)>0&&(e=null==s?void 0:s.topMember.length),e}(this.msg.toUid),u=this.msg.msgType===m.MSG_VIDEO?function(t){let e=t;return e||(e=S.a.Success),e}(this.mediaStatus):o===g.a.CLOUD?function(t,e){let s=t;return t!==y.q.DownloadedAuto&&t!==y.q.DownloadedManual&&e<=O.default.mediaStatus.cloud.limitBigFile&&(s=y.q.CloudSaved),s}(this.mediaStatus,n):this.mediaStatus,c={msg_type:g.l[this.msg.msgType],entry_point:this.entryPoint,size:n,sent_time:this.msg.sendDttm,is_e2ee:(d=null===(s=this.msg)||void 0===s?void 0:s.e2eeStatus,d===m.MSG_E2EE?g.e.YES:g.e.NO),is_sender:(l=null===(i=this.msg)||void 0===i?void 0:i.fromUid,"0"!=l?g.f.RECEIVER:g.f.SENDER),conv_type:g.j[o],sync_source:g.k[this.msg.src],msg_id:this.msg.msgId};var l,d;switch(r&&(c.group_size=r),this.subType){case g.o.MediaExpiredWhenAction:c.original_status=j.a.get(this.msg.msgId);break;case g.o.MediaStatusInView:this.msg.msgType===m.MSG_PHOTO||this.msg.msgType===m.MSG_PHOTO_2?c.file_status=null==this?void 0:this.forceStatus:c.file_status=u}return c}}var w=class{verify(t){return!!Object.values(g.e).includes(t.is_e2ee)&&(!!Object.values(g.f).includes(t.is_sender)&&(!!Object.values(g.f).includes(t.is_sender)&&(!!Object.values(g.j).includes(t.conv_type)&&(!!Object.values(g.k).includes(t.sync_source)&&!!Object.values(g.l).includes(t.msg_type)))))}},M=s("a4lh"),E=s("o1u6"),T=s("lJL2"),P=s("Mgpg"),R=s("h0S/"),D=s("fsN4");const q=[m.MSG_FILE,m.MSG_VIDEO,m.MSG_VOICE];var I;let C=Object(n.injectable)()(I=function(t,e){return Object(n.inject)(o.d)(t,void 0,0)}(I=function(t,e){return Object(n.inject)(P.ZLoggerFactory)(t,void 0,1)}(I=Reflect.metadata("design:type",Function)(I=Reflect.metadata("design:paramtypes",[Object,void 0===P.ZLoggerFactory?Object:P.ZLoggerFactory])(I=class{constructor(t,e){this.queue=t,Object(r.a)(this,"logger",void 0),Object(r.a)(this,"DB",void 0),Object(r.a)(this,"isRunning",void 0),this.logger=e.createZLogger(R.b.mediaStatus,["action-log-consumer"]),this.DB=D.a.getInstance(),this.isRunning=!1}async run(){if(!(this.queue.length<=0)){if(this.isRunning)return c(h);this.isRunning=!0,requestAnimationFrame((async()=>{try{const t=this.queue.pop();if(!t)return c(d);const e=t.msgId,s=t.action,i=await this.DB.Core.Message.get(e);if(!i)return c(l);const n=q.includes(i.msgType)&&(T.a.get(e)||await E.a.status(e,[])),o=(new _).withEntryPoint(s.entryPoint).withSubType(s.subType).withMessage(i).withStatus(n).withForceStatus((null==s?void 0:s.forceStatus)||"").build();(new w).verify(o)&&M.a.LogActionInfo(s.subType,o)}catch(t){this.logger.zsymb(3,11047,3e4,"error {}",JSON.stringify(t))}finally{this.isRunning=!1,this.run()}}))}}})||I)||I)||I)||I)||I;var G;let F=Object(n.injectable)()(G=function(t,e){return Object(n.inject)(o.c)(t,void 0,0)}(G=function(t,e){return Object(n.inject)(o.a)(t,void 0,1)}(G=Reflect.metadata("design:type",Function)(G=Reflect.metadata("design:paramtypes",[Object,Object])(G=class{constructor(t,e){this.producer=t,this.consumer=e}run(t,e){this.producer.push(t,e),this.consumer.run()}})||G)||G)||G)||G)||G;n.ModuleContainer.registerSingleton(o.d,class{constructor(){Object(r.a)(this,"queue",void 0),this.queue=[]}push(t){this.queue.push(t)}pop(){return this.queue.pop()}get length(){return this.queue.length}}),n.ModuleContainer.registerSingleton(o.c,a),n.ModuleContainer.registerSingleton(o.a,C),n.ModuleContainer.registerSingleton(o.b,F)}}]);
//# sourceMappingURL=../sourcemaps/lazy/default-main-startup-photo.cb000b1b241e896d444f.js.map