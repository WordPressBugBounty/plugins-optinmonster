"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[945],{83689:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var o=function(){var e=this,s=e._self._c;return s("core-page",[s("common-alerts",{attrs:{id:"dashboard-alerts",alerts:e.alerts}}),e.isLoading?s("core-loading"):e._e(),e.hasSiteError?s("dashboard-resources-widget"):s("div",{staticClass:"omapi-dash omapi-card__flex"},[e.connected?"none"!==e.upsellToShow?s("dashboard-upsell-box",{attrs:{"video-src":e.upsellVideo,"upsell-key":`${e.upsellToShow}Upsell`}},[e.showGrowUpsell?s("p",[e._v(" Onsite Retargeting allows you to trigger campaigns based on your visitor's behaviors...like if they're new or returning, or if they've converted a specific campaign already. Upgrade today to save 50% and gain access to Onsite Retargeting, Coupon Wheels, Geolocation, Live Chat Support and more! ")]):s("p",[e._v(" Over 70% of the visitors to your website leave without taking any action. You could be stopping them with an attention grabbing Exit-Intent® Campaign. Upgrade today to save 50% and unlock Exit-Intent®, MonsterLinks™, Yes/No Campaigns, Campaign Scheduling, Device Targeting, Countdown Timers and more! ")])]):e.showWelcomeBack?s("common-welcome-back-box"):e._e():s("common-welcomebox",{attrs:{"card-type":e.connected?"dismiss":"permanent","learn-more":!0},scopedSlots:e._u([{key:"afterButtons",fn:function(){return[s("core-button",{staticClass:"omapi-create-campaign__link-more",attrs:{href:e.$urls.docs("getting-started-optinmonster-wordpress-checklist","WelcomeBox"),target:"_blank",rel:"noopener noreferrer","link-style":!0,arrow:!0}},[e._v(" Read the Getting Started Guide ")])]},proxy:!0}],null,!1,2753726301)},[e._v(" Instantly grow your email list, get more leads and increase sales with the #1 most powerful conversion optimization toolkit in the world. ")]),s("dashboard-stats-widget"),e.canShowUpsell?s("div",{staticClass:"omapi-dash__cards-wrapper omapi-dash__cards-banner"},[s("a",{attrs:{href:"https://optinmonster.com/pricing?utm_source=WordPress&utm_medium=pluginMenu&utm_campaign=BF2024"}},[s("img",{attrs:{src:t(74985),alt:"Black Friday Sale"}})])]):e._e(),s("div",{staticClass:"omapi-dash__cards-wrapper omapi-dash__cards-wrapper__left"},[s("dashboard-template-select-widget"),s("dashboard-top-campaigns-widget")],1),s("div",{staticClass:"omapi-dash__cards-wrapper omapi-dash__cards-wrapper__right"},[e.connected&&(e.showProUpsell||e.showGrowUpsell)?s("dashboard-upsell-widget",{attrs:{"upsell-plan":e.upsellToShow}}):e._e(),e.announcements.length||e.announcementsLoading?s("dashboard-announcements-widget",{attrs:{"is-loading":e.announcementsLoading,"upsell-to-show":e.upsellToShow,announcements:e.announcements}}):e._e(),s("dashboard-resources-widget")],1)],1)],1)},a=[],r=t(49001),n=t(95353),i={data(){return{canShowWelcomeBack:!0}},computed:{...(0,n.aH)(["alerts"]),...(0,n.aH)("dashboard",["dismissedWelcomeBack","dismissedProUpsell","dismissedGrowthUpsell"]),...(0,n.L8)(["connected","hasSiteError","upgradeGrowth","topTier"]),...(0,n.L8)("dashboard",["announcements"]),isLoading(){return this.$store.getters.isLoading("plugins")},announcementsLoading(){return this.$store.getters.isLoading("announcements")},canShowUpsell(){return!this.topTier&&2<this.visits},showGrowUpsell(){return this.canShowUpsell&&this.upgradeGrowth&&!this.dismissedGrowthUpsell},showProUpsell(){return this.canShowUpsell&&!this.upgradeGrowth&&!this.dismissedProUpsell},showWelcomeBack(){return this.canShowWelcomeBack&&!this.dismissedWelcomeBack},upsellVideo(){const e=this.showGrowUpsell?"z7nYlJPRePc":"BBXLrYD3-hs";return`https://www.youtube.com/embed/${e}?rel=0&controls=0&showinfo=0&autoplay=1`},visits(){return this.$get("$store.state.visits."+(this.$route.fullPath||this.$route.path),1)},upsellToShow(){return this.showGrowUpsell?"Growth":this.showProUpsell?"Pro":"none"}},watch:(0,r.oP)(["dismissedProUpsell","dismissedGrowthUpsell"],"disableShowWelcomeBack"),beforeCreate(){this.$store.dispatch("dashboard/fetch"),this.$store.dispatch("dashboard/fetchAnnouncements")},methods:{disableShowWelcomeBack(e){e&&(this.canShowWelcomeBack=!1)}}},l=i,d=t(81656),c=(0,d.A)(l,o,a,!1,null,null,null),p=c.exports},74985:function(e,s,t){e.exports=t.p+"img/optinmonster-blackfriday-dashboardcard.840a488a.png"}}]);
//# sourceMappingURL=dashboard.493ff9a1.js.map