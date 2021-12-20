(this.webpackJsonpProjectName=this.webpackJsonpProjectName||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"name":"ProjectName","displayName":"ProjectName"}')},143:function(e,n,t){var o=t(0).default,l=o(t(144)),a=o(t(199)),r=t(102),i=o(t(374));t(375),l.default.registerComponent(r.name,(function(){return a.default})),l.default.runApplication(r.name,{rootTag:document.getElementById("root")}),(0,i.default)()},199:function(e,n,t){var o=t(0).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=o(t(102)),a=(o(t(1)),o(t(200))),r=o(t(38)),i=o(t(3)),s=o(t(13)),c=o(t(45)),f=o(t(5)),u=t(207),d=t(218),m=t(47),h=t(289),g=o(t(364)),p=t(20),y=function(e){var n=e.children,t=e.title,o="dark"===(0,c.default)();return(0,p.jsxs)(f.default,{style:k.sectionContainer,children:[(0,p.jsx)(s.default,{style:[k.sectionTitle,{color:o?u.Colors.white:u.Colors.black}],children:t}),(0,p.jsx)(s.default,{style:[k.sectionDescription,{color:o?u.Colors.light:u.Colors.dark}],children:n})]})},C=function(){var e="dark"===(0,c.default)(),n={backgroundColor:e?u.Colors.darker:u.Colors.lighter};return(0,p.jsxs)(r.default,{contentInsetAdjustmentBehavior:"automatic",style:n,children:[(0,p.jsx)(u.Header,{}),(0,p.jsxs)(f.default,{style:{backgroundColor:e?u.Colors.black:u.Colors.white},children:[(0,p.jsxs)(y,{title:"Step One",children:["Edit ",(0,p.jsx)(s.default,{style:k.highlight,children:"App.tsx"})," to change this screen and then come back to see your edits."]}),(0,p.jsx)(y,{title:"See Your Changes",children:(0,p.jsx)(u.ReloadInstructions,{})}),(0,p.jsx)(y,{title:"Debug",children:(0,p.jsx)(u.DebugInstructions,{})}),(0,p.jsx)(y,{title:"Learn More",children:"Read the docs to discover what to do next:"}),(0,p.jsx)(u.LearnMoreLinks,{})]})]})},x=(0,h.createMaterialTopTabNavigator)(),j=function(){var e=(0,d.useSafeAreaInsets)(),n=(0,m.useLinkTo)(),t="dark"===(0,c.default)(),o=t?u.Colors.lighter:u.Colors.darker,l=t?u.Colors.darker:u.Colors.lighter,r={backgroundColor:l,flex:1},i={tabBarStyle:{backgroundColor:l,paddingTop:e.top},tabBarLabelStyle:{color:t?u.Colors.light:u.Colors.dark},tabBarIndicatorStyle:{backgroundColor:o}};return(0,p.jsxs)(x.Navigator,{initialRouteName:"Home",screenOptions:i,children:[(0,p.jsx)(x.Screen,{component:C,name:"Home"},"Home"),(0,p.jsx)(x.Screen,{component:function(){return(0,p.jsxs)(f.default,{style:[r,k.detailsContainer],children:[(0,p.jsx)(g.default,{name:"rocket",size:30,color:"red"}),(0,p.jsx)(s.default,{style:[k.sectionTitle,{color:t?u.Colors.white:u.Colors.black}],children:"If you see a rocket, react-native-vector-icons is working!"})]})},name:"Details"},"Details"),(0,p.jsx)(x.Screen,{component:function(){return(0,p.jsx)(f.default,{style:[r,k.detailsContainer],children:(0,p.jsx)(a.default,{title:"Link to Details",onPress:function(){return n("/details")}})})},name:"Linking"},"Linking")]})},k=i.default.create({detailsContainer:{flex:1,alignContent:"center",justifyContent:"center",alignItems:"center"},sectionContainer:{marginTop:32,paddingHorizontal:24},sectionTitle:{fontSize:24,fontWeight:"600"},sectionDescription:{marginTop:8,fontSize:18,fontWeight:"400"},highlight:{fontWeight:"700"}}),v=function(){return(0,p.jsx)(d.SafeAreaProvider,{initialMetrics:d.initialWindowMetrics,children:(0,p.jsx)(m.NavigationContainer,{linking:{prefixes:["plaut-ro.github.io/luna","localhost"],config:{screens:{Details:"details",Linking:"linking",Home:"*"}}},documentTitle:{formatter:function(e,n){var t;return""+l.default.displayName+(null!=e&&e.title||null!=n&&n.name?null!=(t=" - "+(null==e?void 0:e.title))?t:null==n?void 0:n.name:" ")}},children:(0,p.jsx)(j,{})})})};n.default=v},374:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(e){e&&e instanceof Function&&t.e(3).then(t.t.bind(null,390,7)).then((function(n){var t=n.getCLS,o=n.getFID,l=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),o(e),l(e),a(e),r(e)}))};n.default=o},375:function(e,n,t){var o=t(0).default,l=o(t(376)),a=o(t(377)),r=o(t(378)),i=o(t(379)),s=o(t(380)),c=o(t(381)),f=o(t(382)),u=o(t(383)),d=o(t(384)),m=o(t(385)),h=o(t(386)),g=o(t(387)),p=o(t(388)),y="\n@font-face {\n  src: url("+l.default+");\n  font-family: AntDesign;\n}\n@font-face {\n  src: url("+a.default+");\n  font-family: Entypo;\n}\n@font-face {\n  src: url("+r.default+");\n  font-family: EvilIcons;\n}\n@font-face {\n  src: url("+i.default+");\n  font-family: Feather;\n}\n@font-face {\n  src: url("+s.default+");\n  font-family: FontAwesome;\n}\n@font-face {\n  src: url("+c.default+");\n  font-family: Fontisto;\n}\n@font-face {\n  src: url("+f.default+");\n  font-family: Foundation;\n}\n@font-face {\n  src: url("+u.default+");\n  font-family: Ionicons;\n}\n@font-face {\n  src: url("+d.default+");\n  font-family: Materialicons;\n}\n@font-face {\n  src: url("+m.default+");\n  font-family: MaterialCommunityIcons;\n}\n@font-face {\n  src: url("+h.default+");\n  font-family: Octicons;\n}\n@font-face {\n  src: url("+g.default+");\n  font-family: Zocial;\n}\n@font-face {\n  src: url("+p.default+");\n  font-family: SimpleLineIcons;\n}\n",C=document.createElement("style");C.type="text/css",C.styleSheet?C.styleSheet.cssText=y:C.appendChild(document.createTextNode(y)),document.head.appendChild(C)}},[[143,1,2]]]);
//# sourceMappingURL=main.e6d75b2b.chunk.js.map