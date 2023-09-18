window.addEventListener("DOMContentLoaded", init);

function init() {

	const width = 960;
	const height = 540;

	// create renderer
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector("#myCanvas")
	});

	renderer.setSize(width, height);
	renderer.setPixelRatio(`window`.devicePixelRatio);

	// create scene
	const scene = new THREE.Scene();

	// set camera
	const camera = new THREE.PerspectiveCamera(
		45,
		width / height,
		1,
		10000
	);

	camera.position.set(0, 0, 1000);

	// create cube
	const geometry = new THREE.BoxGeometry(500, 500, 500);

	const material = new THREE.MeshStandardMaterial({
		color: 0x0000ff
	});

	const box = new THREE.Mesh(geometry, material);

	scene.add(box);

	// create light
	const light = new THREE.DirectionalLight(0xffffff);
	light.intensity = 2;
	light.position.set(1,1,1);

	scene.add(light);

	renderer.render(scene, camera);

	tick();

	function tick() {
		requestAnimationFrame(tick);

		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		renderer.render(scene, camera);
	}
}
