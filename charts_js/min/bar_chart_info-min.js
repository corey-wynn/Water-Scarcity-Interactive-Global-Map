function AccessToWaterData(t){bardata.length=0,0!=bardata.length&&bardata.shift(),$.getJSON("json/access_to_water.json",function(e){for(var a=e.length,r=0;a>r;r++){var n=e[r].FIELD1;if(n==t){for(var i in e[r])e[r].hasOwnProperty(i)&&(array_item=e[r][i],bardata.push(array_item));bardata.shift(),$("#bar_chart").empty();var l={top:30,right:30,bottom:40,left:50},s=80,d=600-l.left-l.right,o=50,c=5,g,h=d3.scale.linear().domain([0,.33*bardata.length,.6*bardata.length,bardata.length]).range(["#435552","#648785","#8ED2D1"]),u=d3.scale.linear().domain([0,100]).range([0,s]),m=d3.scale.ordinal().domain(d3.range(0,bardata.length)).rangeBands([0,d],.2),v=d3.select("#bar_chart").append("svg").attr("width",d+l.left+l.right).attr("height",s+l.top+l.bottom).append("g").attr("transform","translate("+l.left+", "+l.top+")").style("overflow","visible").selectAll("rect").data(bardata).enter().append("rect").style("fill",function(t,e){return h(e)}).attr("width",m.rangeBand()).attr("x",function(t,e){return m(e)}).attr("height",0).attr("y",s);v.transition().attr("height",function(t){return u(t)}).attr("y",function(t){return s-u(t)}).delay(function(t,e){return 20*e}).duration(1e3).ease("elastic");var f=d3.scale.linear().domain([0,100]).range([s,0]),p=d3.scale.ordinal().domain(d3.range(1980,2012)).rangeBands([0,d],.2),b=d3.svg.axis().scale(f).orient("right").ticks(5),y=d3.select("#bar_chart svg").append("g");b(y),y.attr("transform","translate(35, 25)"),y.selectAll("path").style({fill:"none",stroke:"#000"}),y.selectAll("line").style({fill:"none",stroke:"#000"});var _=d3.svg.axis().scale(p).orient("bottom").ticks(20),x=d3.select("#bar_chart svg").append("g");_(x),x.attr("transform","translate("+l.left+", "+(s+l.top)+")"),x.selectAll("path").style({fill:"none",stroke:"#000"}),x.selectAll("line").style({stroke:"#000"})}}})}function environmentalIssues(t){$.getJSON("json/environmental_issues.json",function(e){for(var a=e.length,r=0;a>r;r++){var n=e[r].FIELD3,i=e[r].FIELD23,l=e[r].FIELD21,s=e[r].FIELD14,d=e[r].FIELD13,o=e[r].FIELD7,c=e[r].FIELD6;if(n==t)var g=radialProgress(document.getElementById("div1")).label("Waste Water Treatment").diameter(150).value(i).render(),h=radialProgress(document.getElementById("div2")).label("Pesticide Regulation").diameter(150).value(l).render(),u=radialProgress(document.getElementById("div3")).label("Fish Stocks").diameter(150).value(s).render(),m=radialProgress(document.getElementById("div4")).label("Forest Coverage").diameter(150).value(d).render(),v=radialProgress(document.getElementById("div5")).label("Critical Habit Protection").diameter(150).value(o).render(),f=radialProgress(document.getElementById("div6")).label("Agricultural Subsidies").diameter(150).value(c).render()}})}function pathTween(){var t=d3.scale.quantile().domain([0,1]).range(d3.range(1,linedata.length+1));return function(e){return line(linedata.slice(0,t(e)))}}function mortalityRate(t){linedata.length=0,0!=linedata.length&&linedata.shift(),$.getJSON("json/health_impacts_child_mortality.json",function(e){function a(){var t=d3.scale.quantile().domain([0,1]).range(d3.range(1,linedata.length+1));return function(e){return h(linedata.slice(0,t(e)))}}for(var r=e.length,n=0;r>n;n++){var i=e[n].val0;if(i==t)for(var l in e[n])e[n].hasOwnProperty(l)&&(array_item=100*e[n][l],linedata.push(array_item))}$("#line_chart").empty();var s=[80,80,80,80],d=700-s[1]-s[3],o=350-s[0]-s[2],c=d3.scale.linear().domain([0,linedata.length]).range([0,d]),g=d3.scale.linear().domain([0,d3.max(linedata)]).range([o,0]),h=d3.svg.line().x(function(t,e){return c(e)}).y(function(t){return g(t)}),u=d3.select("#line_chart").append("svg:svg").attr("width",d+s[1]+s[3]).attr("height",o+s[0]+s[2]).append("svg:g").attr("transform","translate("+s[3]+","+s[0]+")"),m=d3.svg.axis().scale(c).tickSize(-o).tickSubdivide(!0);u.append("svg:g").attr("class","x axis").attr("transform","translate(0,"+o+")").call(m);var v=d3.svg.axis().scale(g).ticks(4).orient("left");u.append("svg:g").attr("class","y axis").attr("transform","translate(-25,0)").call(v),u.append("svg:path").attr("d",h(linedata)).attr("stroke","steelblue").attr("fill","none").transition().duration(1e3).attrTween("d",a)})}$.getJSON("json/world-countries.json",function(t){for(var e=0;e<t.features.length;e++)country_abbrv=t.features[e].id,country_title=t.features[e].properties.name,$(document).on("click","#"+country_abbrv,function(){country_title=$(this).find("title").text(),waste_water_info=$(this).find("waste").text(),$(this).siblings().attr("class","#aaa"),$(this).attr("class","red"),$(".project_title").find("p").remove(),$(".project_title").append("<p>"+country_title+"</p>"),$(".waste_water_info").find("h2").remove(),$(".waste_water_info").append("<h2>"+waste_water_info+"</h2>"),$(".percent_of_waste_water_chart").css("width",waste_water_info+"%");var t=Math.round(bardata[20]);$(".last_bar_chart_indicator").find("h2").remove(),$(".last_bar_chart_indicator").append("<h2 id='availability_number'>"+t+"%</h2>"),$(".last_bar_chart_indicator_graph").css("height",t+"%"),AccessToWaterData(country_title),environmentalIssues(country_title),mortalityRate(country_title)})});var bardata=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],margin={top:30,right:30,bottom:40,left:50},height=80,width=600-margin.left-margin.right,barWidth=50,barOffset=5,tempColor,colors=d3.scale.linear().domain([0,.33*bardata.length,.6*bardata.length,bardata.length]).range(["#435552","#648785","#8ED2D1"]),yScale=d3.scale.linear().domain([0,d3.max(bardata)]).range([0,height]),xScale=d3.scale.ordinal().domain(d3.range(0,bardata.length)).rangeBands([0,width],.2),barChart=d3.select("#bar_chart").append("svg").style("background","").attr("width",width+margin.left+margin.right).attr("height",height+margin.top+margin.bottom).append("g").attr("transform","translate("+margin.left+", "+margin.top+")").style("overflow","visible").selectAll("rect").data(bardata).enter().append("rect").style("fill",function(t,e){return colors(e)}).attr("width",xScale.rangeBand()).attr("x",function(t,e){return xScale(e)}).attr("height",0).attr("y",height);barChart.transition().attr("height",function(t){return yScale(t)}).attr("y",function(t){return height-yScale(t)}).delay(function(t,e){return 20*e}).duration(1e3).ease("elastic");var vGuideScale=d3.scale.linear().domain([0,100]).range([height,0]),hGuideScale=d3.scale.ordinal().domain(d3.range(0,0)).rangeBands([0,width],.2),vAxis=d3.svg.axis().scale(vGuideScale).orient("right").ticks(5),vGuide=d3.select("#bar_chart svg").append("g");vAxis(vGuide),vGuide.attr("transform","translate(35, 25)"),vGuide.selectAll("path").style({fill:"none",stroke:"#000"}),vGuide.selectAll("line").style({fill:"none",stroke:"#000"});var hAxis=d3.svg.axis().scale(hGuideScale).orient("bottom").ticks(20),hGuide=d3.select("#bar_chart svg").append("g");hAxis(hGuide),hGuide.attr("transform","translate("+margin.left+", "+(height+margin.top)+")"),hGuide.selectAll("path").style({fill:"none",stroke:"#000"}),hGuide.selectAll("line").style({stroke:"#000"});var circledata=[],rp1=radialProgress(document.getElementById("div1")).label("Waste Water Treatment").diameter(150).value(10).render(),rp2=radialProgress(document.getElementById("div2")).label("Pesticide Regulation").diameter(150).value(45).render(),rp3=radialProgress(document.getElementById("div3")).label("Fish Stocks").diameter(150).value(50).render(),rp4=radialProgress(document.getElementById("div4")).label("Forest Coverage").diameter(150).value(12).render(),rp5=radialProgress(document.getElementById("div5")).label("Critical Habit Protection").diameter(150).value(78).render(),rp6=radialProgress(document.getElementById("div6")).label("Agricultural Subsidies").diameter(150).value(90).render(),linedata=[40,10,5,70],m=[80,80,80,80],w=700-m[1]-m[3],h=350-m[0]-m[2],x=d3.scale.linear().domain([0,linedata.length]).range([0,w]),y=d3.scale.linear().domain([0,d3.max(linedata)]).range([h,0]),line=d3.svg.line().x(function(t,e){return x(e)}).y(function(t){return y(t)}),graph=d3.select("#line_chart").append("svg:svg").attr("width",w+m[1]+m[3]).attr("height",h+m[0]+m[2]).append("svg:g").attr("transform","translate("+m[3]+","+m[0]+")"),xAxis=d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(!0);graph.append("svg:g").attr("class","x axis").attr("transform","translate(0,"+h+")").call(xAxis);var yAxisLeft=d3.svg.axis().scale(y).ticks(4).orient("left");graph.append("svg:g").attr("class","y axis").attr("transform","translate(-25,0)").call(yAxisLeft),graph.append("svg:path").attr("d",line(linedata)).attr("stroke","steelblue").attr("fill","none").transition().duration(1e3).attrTween("d",pathTween);