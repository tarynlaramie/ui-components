const c = [
	() => import("..\\components\\layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\components\\test1\\Test1.svelte")
];

const d = decodeURIComponent;

export const routes = [
	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	,

	// src/components/test1/Test1.svelte
	[/^\/src\/components\/test1\/Test1\/?$/, [c[0], c[2]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];