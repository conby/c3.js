function start(t){var e=tree.nodes(t),a=tree.links(e);svgg.selectAll(".link").data(a).enter().append("path").attr("class","link").attr("d",diagonal);var r=svgg.selectAll(".d3node").data(e).enter().append("g").attr("class","d3node").attr("transform",function(t){return"rotate("+(t.x-90)+")translate("+t.y+")"});r.append("circle").attr("r",4.5),r.append("text").attr("dy",".28em").attr("text-anchor",function(t){return t.x<180?"start":"end"}).attr("transform",function(t){return t.x<180?"translate(8)":"rotate(180)translate(-8)"}).text(function(t){return t.name}),d3.select(self.frameElement).style("height",h+"px")}function updateVtypeChange(t){json_source=JSON.parse(t);var e=json_source;svg.selectAll("*").remove(),svgg=svg.append("g").attr("transform","translate("+w/2+","+h/2+")"),start(e)}w=ow,h=oh;var tree=d3.layout.tree().size([w/2,h/2-20]).separation(function(t,e){return(t.parent==e.parent?1:2)/t.depth}),diagonal=d3.svg.diagonal.radial().projection(function(t){return[t.y,t.x/180*Math.PI]});svg&&svg.remove(),svg=d3.select("#chat").append("svg").attr("width",w).attr("height",h),svgg=svg.append("g").attr("transform","translate("+w/2+","+h/2+")"),json_source?start(json_source):d3.json(document.getElementById("jsonsource").value,function(t,e){if(t)throw t;start(e)});