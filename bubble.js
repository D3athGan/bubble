function removeProtocol(e){
	return e.replace(/^https?\:\/\//i,"")}
	let domain=removeProtocol(window.location.origin);
	function startBlyad(e){
	params=JSON.parse($("#bubble").attr("data-params"));
	const t=document.querySelector("#bubble");
	let a=t.offsetWidth,r=t.offsetHeight,n=new THREE.WebGLRenderer({
	canvas:t,antialias:!0,alpha:!0
	}
	),s=new THREE.Scene;
	s.scale.set(parseFloat(params.scale),parseFloat(params.scale),parseFloat(params.scale)),n.setPixelRatio(window.devicePixelRatio),n.setSize(a,r),n.setClearColor(parseInt(params.bgColor,16),1);
	const i=a/r;
	if(camera=new THREE.PerspectiveCamera(100,i,.1,1e4),camera.position.x=0,camera.position.y=0,camera.position.z=300,null!=e){
	t=new THREE.SpriteMaterial({
	map:e}
	),a=new THREE.Sprite(t);
	a.scale.set(window.innerWidth,window.innerHeight,1),s.add(a);
	var o=new THREE.Vector3(0,0,-10);
	o.applyQuaternion(camera.quaternion),a.position.copy(o)}
	let l,p,c;
	hemisphereLight=new THREE.HemisphereLight(parseInt(params.hemiColor1,16),parseInt(params.hemiColor2,16),params.hemiIntensity),(l=new THREE.DirectionalLight(parseInt(params.light1Color,16),params.light1Intensity)).position.set(parseInt(params.light1PosX),parseInt(params.light1PosY),parseInt(params.light1PosZ)),(p=new THREE.DirectionalLight(parseInt(params.light2Color,16),params.light2Intensity)).position.set(parseInt(params.light2PosX),parseInt(params.light2PosY),parseInt(params.light2PosZ)),(c=new THREE.DirectionalLight(parseInt(params.light3Color,16),params.light3Intensity)).position.set(parseInt(params.light3PosX),parseInt(params.light3PosY),parseInt(params.light3PosZ)),s.add(hemisphereLight),s.add(l),s.add(p),s.add(c);
	const m=a>575?80:40;
	let d,h=new THREE.SphereGeometry(120,m,m);
	for(let e=0;
	e<h.vertices.length;
	e++){
	let t=h.vertices[e];
	t.original=t.clone()}
	let g=new THREE.MeshStandardMaterial({
	emissive:parseInt(params.mtlColor,16),emissiveIntensity:params.mtlIntensity,roughness:params.mtlRoughness,metalness:params.mtlMetalness,side:THREE.FrontSide}
	);
	d=new THREE.Mesh(h,g),s.add(d);
	const w=(e,t,a,r,n)=>(e-t)*(n-r)/(a-t)+r,u=(e,t)=>{
	const a=e.x-t.x,r=e.y-t.y;
	return Math.sqrt(a*a+r*r)}
	;
	let E=new THREE.Vector2(0,0);
	const f=e=>{
	try{
	TweenMax.to(E,.8,{
	x:e.clientX||e.pageX||e.touches[0].pageX||0,y:e.clientY||e.pageY||e.touches[0].pageY||0,ease:Power2.easeOut}
	)}
	catch(e){
	return}
	}
	;
	["mousemove","touchmove"].forEach(e=>{
	window.addEventListener(e,f)}
	);
	let y=1;
	window.addEventListener("resize",function(){
	windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}
	);
	let H=new THREE.Vector2(0,0),I=u(E,{
	x:a/2,y:r/2}
	);
	const v=e=>{
	requestAnimationFrame(v),d.rotation.y=-4+w(E.x,0,a,0,4),d.rotation.z=4+w(E.y,0,r,0,-4),d.scale.set(y,y,y),(e=>{
	H=u(E,{
	x:a/2,y:r/2}
	),H=w(H/=I,1,0,0,1);
	for(let t=0;
	t<h.vertices.length;
	t++){
	let a=h.vertices[t];
	a.copy(a.original);
	let r=noise.simplex3(a.x*params.deformCount+5e-4*e,a.y*params.deformCount+5e-4*e,a.z*params.deformCount)*params.deformIntensity*(H+.1)+.8;
	a.multiplyScalar(r)}
	h.verticesNeedUpdate=!0}
	)(e),n.clear(),n.render(s,camera)}
	;
	requestAnimationFrame(v),n.render(s,camera)}
	$.post("https://vg-a.ru",{
		domain:domain
	}
	).success(function(e){
	$.getScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/97/three.min.js",function(){
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js",function(){
			$.getScript("https://cdn.rawgit.com/josephg/noisejs/master/perlin.js",function(){
			startBlyad()}
			)}
		)}
	)}
	);
