const icons={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2"/>',
 moon:'<path d="M20.5 14.2A8 8 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 chart:'<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 back:'<path d="m15 18-6-6 6-6"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
 wallet:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M16 12h5"/>',
 pulse:'<path d="M3 12h4l2-5 4 10 2-5h6"/>',
 layers:'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19 15a2 2 0 0 0 .4 2.2l-2.2 2.2A2 2 0 0 0 15 19l-1 .4V22h-4v-2.6L9 19a2 2 0 0 0-2.2.4l-2.2-2.2A2 2 0 0 0 5 15l-.4-1H2v-4h2.6L5 9a2 2 0 0 0-.4-2.2l2.2-2.2A2 2 0 0 0 9 5l1-.4V2h4v2.6l1 .4a2 2 0 0 0 2.2-.4l2.2 2.2A2 2 0 0 0 19 9l.4 1H22v4h-2.6z"/>',
 file:'<path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/>',
 check9/': '<path d="m5 12 4 4L19 6"/>',
 eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
 alert:'<path d="M18.4 8.9a6 6 0 0 0-12.8 0c0 7.5-3.2 7.5-3.2 9.1h19.2c0-1.6-3.2-1.6-3.2-9.1Z"/><path d="M10.5 21h3"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
 lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
 rule:'<path d="M5 3h14v18H5z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
 refresh:'<path d="M20 7h-5V2"/><path d="M20 7a8 8 0 1 0 1 7"/>',
 target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/>',
 sliders:'<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'
};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons.info}</svg>`;

const saved=JSON.parse(localStorage.getItem('niuda-v4-settings')||'{}');
const state={
 tab:'home',route:null,routeData:{},history:[],
 appearance:saved.appearance||'system',font:saved.font||'standard',
 morningMode:'opportunity',tailMode:'waiting',mediumMode:'confirmed',
 stockInput:'010823@9.99',stockCode:'010823',stockMode:'held',stockCost:9.99,stockQty:saved.stockQty||12000,stockTab:'decision',
 trackingTab:'positions',messageFilter:'all',providerTab:'overview',
 watchlist:['010823','600519','600036'],notifications:5,reconciled:true,
 switches:{decision:true,risk:true,system:true,data:true,quiet:false,...(saved.switches||{})}
};
function resolveTheme(){return state.appearance==='system'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):state.appearance}
function applyPreferences(){document.documentElement.dataset.theme=resolveTheme();document.documentElement.dataset.font=state.font;localStorage.setItem('niuda-v4-settings',JSON.stringify({appearance:state.appearance,font:state.font,stockQty:state.stockQty,switches:state.switches}))}
applyPreferences();

const stocks={
 '010823':{name:'示例科技',sector:'电子元件',price:10.46,chg:'+4.70%',score:82,p1:63,p5:69,p10:74,p15:77,buy:10.12,limit:10.28,stop:9.58,q10:'-4.1%',q50:'+8.2%',q90:'+18.6%',dv:'+76bps',risk:'中',stage:'确认',value:'历史28%分位',reg:'NORMAL',dataAge:'2.6秒',fund:['经营现金流同比改善','负债率处行业中位','盈利预期出现拐点'],tech:['连续8日不再创新低','EMA20开始走平向上','成交量由恐慌放量转为温和放量'],capital:['上一交易日资金流由负转正','筹码集中度改善','行业相对强度回升'],event:['无重大未解析公告','无活动重点提示','行业催化处于早期阶段']},
 '600519':{name:'贵州茅台',sector:'食品饮料',price:1486.55,chg:'+1.82%',score:84,p1:65,p5:72,p10:75,p15:76,buy:1418.20,limit:1421.60,stop:1402.00,q10:'-3.4%',q50:'+6.5%',q90:'+14.2%',dv:'+82bps',risk:'中低',stage:'加速',value:'历史42%分位',reg:'NORMAL',dataAge:'2.3秒',fund:['ROIC 31.8%','经营现金流稳定','盈利质量优秀'],tech:['EMA20上穿EMA60','剩余动量0.74','ATR10为2.1%'],capital:['上一日资金流改善','机构连续增持','成交结构健康'],event:['无重大未解析公告','行业估值处历史42%分位','白酒板块热度回升']},
 '601318':{name:'中国平安',sector:'非银金融',price:59.67,chg:'+2.14%',score:79,p1:68,p5:66,p10:71,p15:73,buy:58.42,limit:58.56,stop:56.88,q10:'-2.7%',q50:'+4.9%',q90:'+10.8%',dv:'+61bps',risk:'中低',stage:'确认',value:'历史35%分位',reg:'NORMAL',dataAge:'2.4秒',fund:['NBV修复','分红能力稳定','资产质量改善'],tech:['EMA多头排列','日内强度0.69','波动率温和'],capital:['资金承接改善','尾盘量价同步增强','大单代理值转正'],event:['无重大利空','金融轮动增强','隔夜风险可控']},
 '000858':{name:'五粮液',sector:'食品饮料',price:128.32,chg:'-0.62%',score:76,p1:57,p5:66,p10:69,p15:70,buy:128.60,limit:129.10,stop:123.40,q10:'-3.8%',q50:'+5.4%',q90:'+12.3%',dv:'+38bps',risk:'中',stage:'观察',value:'历史39%分位',reg:'ABNORMAL_VOLATILITY',dataAge:'2.5秒',fund:['现金流质量良好','渠道库存待验证','估值回落'],tech:['趋势修复中','IFR 0.61','短线承压'],capital:['资金承接不足','上一日净流出','尾盘尚未确认'],event:['异常波动事件待复核','无严重异常波动','行业景气分化']},
 '600036':{name:'招商银行',sector:'银行',price:46.32,chg:'-1.07%',score:77,p1:55,p5:62,p10:69,p15:72,buy:46.28,limit:46.45,stop:44.80,q10:'-2.9%',q50:'+4.1%',q90:'+9.7%',dv:'+42bps',risk:'中低',stage:'观察',value:'历史31%分位',reg:'NORMAL',dataAge:'2.7秒',fund:['ROE领先同业','息差压力可控','资产质量稳定'],tech:['EMA60走平','下跌动量衰减','波动率偏低'],capital:['机构持仓稳定','上一日小幅流入','成交量正常'],event:['无重大不利公告','银行估值偏低','适配中长策略']}
};
const holdings=[
 {code:'010823',strategy:'中长反转',day:'第6日',qty:12000,cost:9.99,price:10.46,pnl:'+4.70%',money:'+¥5,640',stop:9.72,action:'HOLD'},
 {code:'600519',strategy:'早盘趋势',day:'第3日',qty:500,cost:1418.20,price:1486.55,pnl:'+4.82%',money:'+¥34,175',stop:1402.00,action:'HOLD'},
 {code:'601318',strategy:'尾盘T+1',day:'次日',qty:2500,cost:58.42,price:59.67,pnl:'+2.14%',money:'+¥3,125',stop:56.88,action:'TAKE_PROFIT'}
];
const messages=[
 {type:'reg',title:'五粮液出现异常波动记录',desc:'结构化监管事件已接入，普通策略暂时阻断新开仓',time:'刚刚',route:'regulatoryStatus'},
 {type:'decision',title:'早盘最终选入1只',desc:'贵州茅台执行状态VALID，报告剩余74秒',time:'09:42',route:'morningDetail',code:'600519'},
 {type:'risk',title:'示例科技风险线建议上移',desc:'当前9.72，新建议9.88，只允许上移',time:'09:18',route:'position',index:0},
 {type:'data',title:'Tushare当日竞价快照完整',desc:'09:26至09:29四个快照均已归档',time:'09:29',route:'auctionEvidence'},
 {type:'system',title:'商业许可仍处于研究模式',desc:'外部商业展示和模型训练尚未取得书面确认',time:'08:15',route:'dataLicense'}
];

function routeTitle(r){return ({
 profile:'我',messages:'消息',market:'市场状态',account:'账户与资金',risk:'账户风险',dataStatus:'数据中台状态',regulatoryStatus:'监管状态',
 appearance:'模式显示',font:'字体大小',accountSettings:'账户与资金参数',strategyHub:'策略参数中心',morningSettings:'早选参数',tailSettings:'尾选参数',mediumSettings:'中长参数',stockSettings:'个股分析参数',notificationSettings:'消息与提醒',dataSources:'数据源管理',tusharePermissions:'Tushare权限',dataFreshness:'数据时效',dataLicense:'商业许可',ruleCenter:'证券规则中心',compliance:'合规状态',securityPrivacy:'安全与隐私',systemHealth:'系统健康',modelCenter:'模型中心',audit:'版本与审计',
 morningDetail:'早选决策详情',auctionEvidence:'竞价数据依据',decisionEvidence:decisionEvidencePage,execution:executionPage,morningHistory:morningHistoryPage,
 tailDetail:tailDetailPage,nextDay:nextDayPage,tailEvidence:tailEvidencePage,tailHistory:tailHistoryPage,
 mediumDetail:mediumDetailPage,mediumProcess:mediumProcessPage,mediumHistory:mediumHistoryPage,
 stockDetail:stockDetailPage,heldDecision:heldDecisionPage,position:positionPage,candidates:candidateWatchPage,orders:ordersPage,tasks:tasksPage,reconcile:reconcilePage,pnl:pnlPage,trackingRisk:trackingRiskPage,alerts:alertsPage
};return (f[r]||profilePage)()}

function homePage(){return `
<section class="hero" data-route="market"><div class="eyebrow">市场决策中枢 · 09:28:36</div><h1>S2 共振</h1><p>早选允许 · 尾选待启动 · 中长降仓运行 · 监管状态正常</p><div class="hero-grid"><div><b>55%</b><span>允许总仓位</span></div><div><b>1.26%</b><span>账户开放风险</span></div><div><b>¥14.0万</b><span>锁定利润池</span></div></div><div class="hero-action"><i class="pulse-dot"></i>Tushare数据2.3秒 · 规则2026.07 · 券商对账一致</div></section>
<div class="metric-grid"><div class="metric"><label>上证指数</label><b>3,582.64</b><small class="red">+0.82% · 强度0.68</small></div><div class="metric"><label>市场广度</label><b>67%</b><small>上涨3,426只</small></div><div class="metric" data-route="account"><label>可用现金</label><b>¥31.6万</b><small>保护池+共享池</small></div><div class="metric" data-route="risk"><label>20日回撤</label><b>2.18%</b><small>熔断线10%</small></div></div>
<div class="section-head"><h2>六大决策入口</h2><button class="text-btn" data-route="audit">今日审计</button></div>
<div class="strategy-list">
${strategyCard('☀','早选1至5日','已完成 · 正式选入1只','72%','+82bps','8%','morning')}
${strategyCard('◒','尾选T+1','14:25启动 · 当前静默','68%','代理+61bps','0%','tail')}
${strategyCard('↺','中长反转','确认2只 · 保护现金10万','74%','+76bps','16%','medium')}
${strategyCard('⌕','个股AI分析','买前与持仓双模式','82分','七维诊断','实时','stock')}
${strategyCard('▥','跟踪与对账','3只持仓 · 3只候选','一致','1.26%风险','32%','tracking')}
</div>
<div class="section-head"><h2>数据与监管</h2><button class="text-btn" data-route="dataStatus">查看中台</button></div>
<div class="card"><div class="source-row"><div><b>Tushare核心数据中台</b><span>27项权限可用 · 3项独立许可待确认</span></div><span class="badge green">ONLINE</span></div><div class="source-row"><div><b>当日竞价快照</b><span