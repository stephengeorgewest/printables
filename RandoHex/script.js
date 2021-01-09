
function init(evt) {
	if ( window.svgDocument == null )
		svgDocument = evt.target.ownerDocument;
}

var svgNS = "http://www.w3.org/2000/svg";
var mouseEntryPoint = document.documentElement.createSVGPoint();
var p = document.documentElement.createSVGPoint();
var lines = new Array();
var vertical=true;
var s = 10;
var h = s*Math.sin(Math.PI*30/180);
var r = s*Math.cos(Math.PI*30/180);

function updateStats(lineN)
{
	addPoint(lineN);
	/*var txt;
	txt=document.createElementNS(svgNS,"text");
	txt.setAttributeNS(null,"id","txt_arr_"+(lineN.points.length-1));
	txt.setAttributeNS(null,"x", "0");
	txt.setAttributeNS(null,"y", (lineN.points.length-1)*20);
	var txtNode = document.createTextNode(JSON.stringify(lineN.points[lineN.points.length-1]));
	//txt.firstChild.data=JSON.strigify(lineN.points[lineN.points.length-1]);
	txt.appendChild(txtNode);
	txt_parent = svgDocument.getElementById("lineN.pointstext");
	txt_parent.appendChild(txt);//insertBefore(txt,txt_parent.lastChild);
	
	svgDocument.getElementById("lineN.pointstext_1").firstChild.data = "onclick = " + JSON.stringify(lineN.points);//.toString();
	*/
}

function addPoint(lineN)
{
	if(lineN.points.length==0)
	{
		var start= new Object();
		start.x=mouseEntryPoint.x;//svgDocument.rootElement.clientWidth/2;
		start.y=mouseEntryPoint.y;//svgDocument.rootElement.clientHeight/2;
		start.even_odd=true;//Math.floor(Math.random()+0.5)==1;
		lineN.points[0]=start;
		//svgDocument.getElementById("txt_arr_.points"+).firstChild.data = JSON.stringify(lineN.points[0]);
	}
	var v = document.documentElement.createSVGPoint();
	
	v.x=p.x-lineN.points[lineN.points.length-1].x;
	v.y=p.y-lineN.points[lineN.points.length-1].y;
	var size = new Object();
		if(svgDocument.rootElement.clientWidth==0 && svgDocument.rootElement.clientHeight==0)
		{size.x=500;size.y=500;}
		else
		{size.x=svgDocument.rootElement.clientWidth;size.y=svgDocument.rootElement.clientHeight;}
	if(v.x==0 && v.y==0)
	{
		v.x=size.x/2-lineN.points[lineN.points.length-1].x;
		v.y=size.y/2-lineN.points[lineN.points.length-1].y;
	}
	var v_mag = Math.sqrt(v.x*v.x + v.y*v.y) ;
	var next = new Object();
	next.even_odd=!lineN.points[lineN.points.length-1].even_odd;
	var next_outofbounds=true;
	var options_tried = new Array();
	//var which = Math.floor(Math.random()*3);
	
	var u = document.documentElement.createSVGPoint();
	/*svgDocument.getElementById("vectorText").firstChild.data =
	"p "+ p.x+"," + p.y+ "\n"+
	"l["+(lineN.points.length-1)+"]="+lineN.points[lineN.points.length-1].x+","+lineN.points[lineN.points.length-1].y +"\n"+
	"v "+ v.x+"," + v.y+ "\n"+
	"u "+v.x/Math.sqrt(v.x*v.x + v.y*v.y)*s+","+v.y/Math.sqrt(v.x*v.x + v.y*v.y)*s;JSON.stringify(p)//;*/
	u.x=v.x/Math.sqrt(v.x*v.x + v.y*v.y)*s;
	u.y=v.y/Math.sqrt(v.x*v.x + v.y*v.y)*s;
	var u0 = document.documentElement.createSVGPoint();
	var u1 = document.documentElement.createSVGPoint();
	var u2 = document.documentElement.createSVGPoint();
	if(vertical)
	{
		if(!lineN.points[lineN.points.length-1].even_odd)
		{	// even = 0
			//    |2  
			//  1/ \0 
			u0.x=r;
			u0.y=h;
			u1.x=-r;
			u1.y=h;
			u2.x=0;
			u2.y=-s;
		}else
		{	// odd = 1
			//  0\ /1
			//   2|
			u0.x=-r;
			u0.y=-h;
			u1.x=r;
			u1.y=-h;
			u2.x=0;
			u2.y=+s;
		}
	}
	else
	{
		if(!lineN.points[lineN.points.length-1].even_odd)
		{	// even = 0
			//  2_/0
			//    \1
			u0.x=h;
			u0.y=-r;
			u1.x=h;
			u1.y=r;
			u2.x=-s;
			u2.y=0;
		}else
		{	// odd = 1
			//  1\_2
			//   /0
			u0.x=-r;
			u0.y=h;
			u1.x=-h;
			u1.y=-r;
			u2.x=s;
			u2.y=0;
		}
	}
//don't care only angles for now
	//var u0projected_magnitude = (v.x*u0.x+v.y*u0.y)/s/Math.sqrt(v.x*v.x + v.y*v.y);
	//var u1projected_magnitude = (v.x*u1.x+v.y*u1.y)/s/Math.sqrt(v.x*v.x + v.y*v.y);
	//var u2projected_magnitude = (v.x*u2.x+v.y*u2.y)/s/Math.sqrt(v.x*v.x + v.y*v.y);
	var angle0= (Math.PI-Math.abs(Math.acos((u.x*u0.x+u.y*u0.y)/(s*s))));
	var angle1= (Math.PI-Math.abs(Math.acos((u.x*u1.x+u.y*u1.y)/(s*s))));
	var angle2= (Math.PI-Math.abs(Math.acos((u.x*u2.x+u.y*u2.y)/(s*s))));
	var angle_sum=angle0+angle1+angle2;
	var rand_num = Math.random();
	var which;
	if(rand_num<angle0/angle_sum)
		which=0;
	else if(rand_num<(angle0+angle1)/angle_sum)
		which=1;
	else which=2;
	options_tried[options_tried.length]=which;
	while(next_outofbounds)
	{
		if(vertical)
		{
			if(!lineN.points[lineN.points.length-1].even_odd)
			{// even = 0
			//    |2  
			//  1/ \0 
				switch(which){
				case(0):
					next.x=lineN.points[lineN.points.length-1].x+r;
					next.y=lineN.points[lineN.points.length-1].y+h;
					//next.sib0=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib0=next;
					break;
				case(1):
					next.x=lineN.points[lineN.points.length-1].x-r;
					next.y=lineN.points[lineN.points.length-1].y+h;
					//next.sib1=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib1=next;
					break;
				case(2):
					next.x=lineN.points[lineN.points.length-1].x;
					next.y=lineN.points[lineN.points.length-1].y-s;
					//next.sib2=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib2=next;
					break;
				default:};
			}
			else
			{
			// odd = 1
			//  0\ /1
			//   2|
				switch(which){
				case(0):
					next.x=lineN.points[lineN.points.length-1].x-r;
					next.y=lineN.points[lineN.points.length-1].y-h;
					//next.sib0=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib0=next;
					break;
				case(1):
					next.x=lineN.points[lineN.points.length-1].x+r;
					next.y=lineN.points[lineN.points.length-1].y-h;
					//next.sib1=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib1=next;
					break;
				case(2):
					next.x=lineN.points[lineN.points.length-1].x;
					next.y=lineN.points[lineN.points.length-1].y+s;
					//next.sib2=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib2=next;
					break;
				default:};
			}
		}
		else//horizontal
		{
			if(!lineN.points[lineN.points.length-1].even_odd)
			{// even = 0
			//  2_/0
			//    \1
				switch(which){
				case(0):
					next.x=lineN.points[lineN.points.length-1].x+h;
					next.y=lineN.points[lineN.points.length-1].y-r;
					//next.sib0=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib0=next;
					break;
				case(1):
					next.x=lineN.points[lineN.points.length-1].x+h;
					next.y=lineN.points[lineN.points.length-1].y+r;
					//next.sib1=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib1=next;
					break;
				case(2):
					next.x=lineN.points[lineN.points.length-1].x-s;
					next.y=lineN.points[lineN.points.length-1].y;
					//next.sib2=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib2=next;
					break;
				default:};
			}
			else
			{
			// odd = 1
			//  1\_2
			//   /0
				switch(which){
				case(0):
					next.x=lineN.points[lineN.points.length-1].x-h;
					next.y=lineN.points[lineN.points.length-1].y+r;
					//next.sib0=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib0=next;
					break;
				case(1):
					next.x=lineN.points[lineN.points.length-1].x-h;
					next.y=lineN.points[lineN.points.length-1].y-r;
					//next.sib1=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib1=next;
					break;
				case(2):
					next.x=lineN.points[lineN.points.length-1].x+s;
					next.y=lineN.points[lineN.points.length-1].y;
					//next.sib2=lineN.points[lineN.points.length-1];
					//lineN.points[lineN.points.length-1].sib2=next;
					break;
				default:};
			}
		}
		next_outofbounds=false;
		//if(next.x<(-r)||next.x>svgDocument.rootElement.clientWidth-r || next.y<(0-s-h)|| next.y>svgDocument.rootElement.clientHeight-s-h)
		//if(next.x<(r)||next.x>svgDocument.rootElement.clientWidth-r || next.y<(s+h)|| next.y>svgDocument.rootElement.clientHeight-s-h)
		if(next.x<(r)||next.x>size.x-r || next.y<(h)|| next.y>size.y-h)
			next_outofbounds=true;
		//for(i=0; i<lineN.points.length; i++)
		{
			if(Math.abs(next.x-lineN.points[lineN.points.length-1].x) < .5 && Math.abs(next.y-lineN.points[lineN.points.length-1].y) < .5)
				next_outofbounds=true;
		}
		
		if(options_tried.length==3 && next_outofbounds)
		{
			lineN.isDead=true;
			break;//dead line
		}
		if(options_tried.length==2){
			if(options_tried[0]!=0 && options_tried[1]!=0)
				which=0;
			if(options_tried[0]!=1 && options_tried[1]!=1)
				which=1;
			if(options_tried[0]!=2 && options_tried[1]!=2)
				which=2;
		}
		if(options_tried.length==1)
		{
			var loop=true;
			while(loop)
			{loop=false;
				which = Math.floor(Math.random()*3);
				if(options_tried[0]==which)
					loop=true;
			}
		}
		options_tried[options_tried.length]=which;

	}
	//lineN.points[lineN.points.length-1].next=next;
	//lineN.points[0]=start;
	if(!(Math.abs(next.x-lineN.points[lineN.points.length-1].x) < .5 && Math.abs(next.y-lineN.points[lineN.points.length-1].y) < .5)){
	lineN.points[lineN.points.length]=next;
	if(lineN.points.length==2)
		createPolyLine(lineN);
	updatePolyLine(lineN);}/**/
	
}
function createPolyLine(lineN) {
	var newPolyLine = document.createElementNS(svgNS, "polyline");
		
	newPolyLine.setAttributeNS(null, "id",     "polyLine_"+lineN.num);
	newPolyLine.setAttributeNS(null, "style",  "fill:none;stroke:black;stroke-width:2;opacity: 0.5;");
	document.getElementById("firstGroup").appendChild(newPolyLine);
}	
function updatePolyLine(lineN)
{
	var points_str;
	points_str=lineN.points[0].x+","+lineN.points[0].y;
	for(i=1; i<lineN.points.length; i++)
	{
		points_str+=" "+lineN.points[i].x+","+lineN.points[i].y;
	}
	var b = document.getElementById("polyLine_"+ lineN.num);
	b.setAttributeNS(null, "points", points_str);/**/
}
function mouseMove (evt) {

	p.x = evt.clientX;
	p.y = evt.clientY;
	if(lines.length==0)
	{
		var line0 = new Object();
		line0.points = new Array();
		line0.num=0;
		lines[0]=line0;
		lines[0].isDead=false;
	}
	if(!lines[lines.length-1].isDead)
		addPoint(lines[lines.length-1]);
	else
	{
		var newLine = new Object();
		newLine.points = new Array();
		newLine.num=lines.length;
		newLine.isDead=false;
		lines[lines.length]=newLine;
	}
}
function mouseOver(evt){
	mouseEntryPoint.x=evt.clientX;
	mouseEntryPoint.y=evt.clientY;
}