(this.webpackJsonpProjectName=this.webpackJsonpProjectName||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"name":"ProjectName","displayName":"ProjectName"}')},142:function(e,n,t){var o=t(0),a=o(t(143)),r=o(t(198)),l=t(101),i=o(t(373));t(374),a.default.registerComponent(l.name,(function(){return r.default})),a.default.runApplication(l.name,{rootTag:document.getElementById("root")}),(0,i.default)()},198:function(e,n,t){var o=t(0);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(101)),r=(o(t(1)),o(t(199))),l=o(t(37)),i=o(t(2)),s=o(t(12)),c=o(t(44)),f=o(t(4)),d=t(206),u=t(217),h=t(46),m=t(288),g=o(t(363)),p=t(19),y=function(e){var n=e.children,t=e.title,o="dark"===(0,c.default)();return(0,p.jsxs)(f.default,{style:k.sectionContainer,children:[(0,p.jsx)(s.default,{style:[k.sectionTitle,{color:o?d.Colors.white:d.Colors.black}],children:t}),(0,p.jsx)(s.default,{style:[k.sectionDescription,{color:o?d.Colors.light:d.Colors.dark}],children:n})]})},C=function(){var e="dark"===(0,c.default)(),n={backgroundColor:e?d.Colors.darker:d.Colors.lighter};return(0,p.jsxs)(l.default,{contentInsetAdjustmentBehavior:"automatic",style:n,children:[(0,p.jsx)(d.Header,{}),(0,p.jsxs)(f.default,{style:{backgroundColor:e?d.Colors.black:d.Colors.white},children:[(0,p.jsxs)(y,{title:"Step One",children:["Edit ",(0,p.jsx)(s.default,{style:k.highlight,children:"App.tsx"})," to change this screen and then come back to see your edits."]}),(0,p.jsx)(y,{title:"See Your Changes",children:(0,p.jsx)(d.ReloadInstructions,{})}),(0,p.jsx)(y,{title:"Debug",children:(0,p.jsx)(d.DebugInstructions,{})}),(0,p.jsx)(y,{title:"Learn More",children:"Read the docs to discover what to do next:"}),(0,p.jsx)(d.LearnMoreLinks,{})]})]})},x=(0,m.createMaterialTopTabNavigator)(),j=function(){var e=(0,u.useSafeAreaInsets)(),n=(0,h.useLinkTo)(),t="dark"===(0,c.default)(),o=t?d.Colors.ligher:d.Colors.darker,a=t?d.Colors.darker:d.Colors.lighter,l={backgroundColor:a,flex:1},i={tabBarStyle:{backgroundColor:a,paddingTop:e.top},tabBarLabelStyle:{color:t?d.Colors.light:d.Colors.dark},tabBarIndicatorStyle:{backgroundColor:o}};return(0,p.jsxs)(x.Navigator,{initialRouteName:"Home",screenOptions:i,children:[(0,p.jsx)(x.Screen,{component:C,name:"Home"},"Home"),(0,p.jsx)(x.Screen,{component:function(){return(0,p.jsxs)(f.default,{style:[l,k.detailsContainer],children:[(0,p.jsx)(g.default,{name:"rocket",size:30,color:"red"}),(0,p.jsx)(s.default,{style:[k.sectionTitle,{color:t?d.Colors.white:d.Colors.black}],children:"If you see a rocket, react-native-vector-icons is working!"})]})},name:"Details"},"Details"),(0,p.jsx)(x.Screen,{component:function(){return(0,p.jsx)(f.default,{style:[l,k.detailsContainer],children:(0,p.jsx)(r.default,{title:"Link to Details",onPress:function(){return n("/details")}})})},name:"Linking"},"Linking")]})},k=i.default.create({detailsContainer:{flex:1,alignContent:"center",justifyContent:"center",alignItems:"center"},sectionContainer:{marginTop:32,paddingHorizontal:24},sectionTitle:{fontSize:24,fontWeight:"600"},sectionDescription:{marginTop:8,fontSize:18,fontWeight:"400"},highlight:{fontWeight:"700"}}),v=function(){return(0,p.jsx)(u.SafeAreaProvider,{initialMetrics:u.initialWindowMetrics,children:(0,p.jsx)(h.NavigationContainer,{linking:{prefixes:["plaut-ro.github.io/luna","localhost"],config:{screens:{Details:"details",Linking:"linking",Home:"*"}}},documentTitle:{formatter:function(e,n){var t;return a.default.displayName+" - "+(null!=(t=null==e?void 0:e.title)?t:null==n?void 0:n.name)}},children:(0,p.jsx)(j,{})})})};n.default=v},373:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(e){e&&e instanceof Function&&t.e(3).then(t.t.bind(null,389,7)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,l=n.getTTFB;t(e),o(e),a(e),r(e),l(e)}))};n.default=o},374:function(e,n,t){var o=t(0),a=o(t(375)),r=o(t(376)),l=o(t(377)),i=o(t(378)),s=o(t(379)),c=o(t(380)),f=o(t(381)),d=o(t(382)),u=o(t(383)),h=o(t(384)),m=o(t(385)),g=o(t(386)),p=o(t(387)),y="\n@font-face {\n  src: url("+a.default+");\n  font-family: AntDesign;\n}\n@font-face {\n  src: url("+r.default+");\n  font-family: Entypo;\n}\n@font-face {\n  src: url("+l.default+");\n  font-family: EvilIcons;\n}\n@font-face {\n  src: url("+i.default+");\n  font-family: Feather;\n}\n@font-face {\n  src: url("+s.default+");\n  font-family: FontAwesome;\n}\n@font-face {\n  src: url("+c.default+");\n  font-family: Fontisto;\n}\n@font-face {\n  src: url("+f.default+");\n  font-family: Foundation;\n}\n@font-face {\n  src: url("+d.default+");\n  font-family: Ionicons;\n}\n@font-face {\n  src: url("+u.default+");\n  font-family: Materialicons;\n}\n@font-face {\n  src: url("+h.default+");\n  font-family: MaterialCommunityIcons;\n}\n@font-face {\n  src: url("+m.default+");\n  font-family: Octicons;\n}\n@font-face {\n  src: url("+g.default+");\n  font-family: Zocial;\n}\n@font-face {\n  src: url("+p.default+");\n  font-family: SimpleLineIcons;\n}\n",C=document.createElement("style");C.type="text/css",C.styleSheet?C.styleSheet.cssText=y:C.appendChild(document.createTextNode(y)),document.head.appendChild(C)}},[[142,1,2]]]);
//# sourceMappingURL=main.f99c2fb9.chunk.js.map