function updateVtypeChange(t){json_source=JSON.parse(t);var n=json_source;svg.selectAll("*").remove(),svgg=svg.append("g").attr("transform","translate("+w/2+","+.52*h+")"),start(n)}function start(t){var n=svgg.datum(t).selectAll("path").data(partition.nodes).enter().append("path").attr("display",function(t){return t.depth?null:"none"}).attr("d",arc).style("stroke","#fff").style("fill",function(t){return color7((t.children?t:t.parent).name)}).style("fill-rule","evenodd").each(stash);d3.selectAll("input").on("change",function(){var t="count"===this.value?function(){return 1}:function(t){return t.size};n.data(partition.value(t).nodes).transition().duration(1500).attrTween("d",arcTween)}),d3.select(self.frameElement).style("height",h+"px")}function stash(t){t.x0=t.x,t.dx0=t.dx}function arcTween(t){var n=d3.interpolate({x:t.x0,dx:t.dx0},t);return function(e){var r=n(e);return t.x0=r.x,t.dx0=r.dx,arc(r)}}document.getElementById("sunburstpartition_radio").style.display="",w=ow,h=oh,radius=Math.min(w,h)/2-30,color7=d3.scale.category20c(),svg&&svg.remove(),svg=d3.select("#chat").append("svg").attr("width",w).attr("height",h),svgg=svg.append("g").attr("transform","translate("+w/2+","+.52*h+")");var partition=d3.layout.partition().sort(null).size([2*Math.PI,radius*radius]).value(function(t){return 1}),arc=d3.svg.arc().startAngle(function(t){return t.x}).endAngle(function(t){return t.x+t.dx}).innerRadius(function(t){return Math.sqrt(t.y)}).outerRadius(function(t){return Math.sqrt(t.y+t.dy)});json_source?start(json_source):d3.json(document.getElementById("jsonsource").value,function(t,n){if(t)throw t;start(n)});