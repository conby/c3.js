function updateVtypeChange(t){json_source=JSON.parse(t);var r=json_source;svg.selectAll("*").remove(),svgg=svg.append("svg:g").attr("transform","translate("+rx+","+ry+")"),svgg.append("svg:path").attr("class","arc").attr("d",d3.svg.arc().innerRadius(ry-120).outerRadius(ry).startAngle(0).endAngle(2*Math.PI)).on("mousedown",mousedown),start(r)}function start(t){var r=cluster.nodes(t);svgg.selectAll("path.link").data(cluster.links(r)).enter().append("svg:path").attr("class","link").attr("d",diagonal);var e=svgg.selectAll("g.d3node").data(r).enter().append("svg:g").attr("class","d3node").attr("transform",function(t){return"rotate("+(t.x-90)+")translate("+t.y+")"});e.append("svg:circle").attr("r",3),e.append("svg:text").attr("dx",function(t){return t.x<180?8:-8}).attr("dy",".31em").attr("text-anchor",function(t){return t.x<180?"start":"end"}).attr("transform",function(t){return t.x<180?null:"rotate(180)"}).text(function(t){return t.name})}function mouse(t){return[t.pageX-rx,t.pageY-ry]}function mousedown(){m0=mouse(d3.event),d3.event.preventDefault()}function mousemove(){if(m0){var t=mouse(d3.event),r=180*Math.atan2(cross(m0,t),dot(m0,t))/Math.PI,e="translate3d(0,"+(ry-rx)+"px,0)rotate3d(0,0,0,"+r+"deg)translate3d(0,"+(rx-ry)+"px,0)";d3.select("#chat").style("-moz-transform",e).style("-ms-transform",e).style("-webkit-transform",e)}}function mouseup(){if(m0){var t=mouse(d3.event),r=180*Math.atan2(cross(m0,t),dot(m0,t))/Math.PI,e="rotate3d(0,0,0,0deg)";rotate+=r,rotate>360?rotate-=360:rotate<0&&(rotate+=360),m0=null,d3.select("#chat").style("-moz-transform",e).style("-ms-transform",e).style("-webkit-transform",e),svgg.attr("transform","translate("+rx+","+ry+")rotate("+rotate+")").selectAll("g.d3node text").attr("dx",function(t){return(t.x+rotate)%360<180?8:-8}).attr("text-anchor",function(t){return(t.x+rotate)%360<180?"start":"end"}).attr("transform",function(t){return(t.x+rotate)%360<180?null:"rotate(180)"})}}function cross(t,r){return t[0]*r[1]-t[1]*r[0]}function dot(t,r){return t[0]*r[0]+t[1]*r[1]}var rx,ry,m0,rotate=0;w=ow,h=oh,rx=w/2,ry=h/2;var cluster=d3.layout.cluster().size([360,ry-120]).sort(null),diagonal=d3.svg.diagonal.radial().projection(function(t){return[t.y,t.x/180*Math.PI]});svg&&svg.remove(),svg=d3.select("#chat").append("svg:svg").attr("width",w).attr("height",w),svgg=svg.append("svg:g").attr("transform","translate("+rx+","+ry+")"),svgg.append("svg:path").attr("class","arc").attr("d",d3.svg.arc().innerRadius(ry-120).outerRadius(ry).startAngle(0).endAngle(2*Math.PI)).on("mousedown",mousedown),json_source?start(json_source):d3.json(document.getElementById("jsonsource").value,function(t){start(t)}),d3.select(window).on("mousemove",mousemove).on("mouseup",mouseup);