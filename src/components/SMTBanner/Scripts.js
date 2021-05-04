import gsap, { TweenLite, TimelineLite } from "gsap"

(() => {
	var	banner          =   document.getElementById('banner'),
		cta             =   document.getElementById('cta'),
		invisBtn        =   document.getElementById('invisBtn'),
		bg_1			=	document.getElementById('bg--1'),
		bg_2			=	document.getElementById('bg--2'),
		bg_3			=	document.getElementById('bg--3'),
		circle_1		= 	document.getElementById('circle--1'),
		circle_2		= 	document.getElementById('circle--2'),
		text_1			= 	document.getElementById('text--1'),
		text_2			= 	document.getElementById('text--2'),
		logo			= 	document.getElementById('logo'),
        footer			= 	document.getElementById('footer'),
		ctaPaths		= 	document.querySelectorAll('.cta__path'),
		hashtag			=	document.getElementById('text--hashtag'),

	initialize = () => {
		// if (!Enabler.isInitialized()) {
		// 	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
		// } else {
		// 	enablerInitHandler();
		// }

		// CSSPlugin.defaultForce3D = true;
        runBannerAnimation();
	},

	//---------------------------------------------------------------------------------------------
	// ENABLER IS INITIATED, WAIT FOR PAGE LOAD BEFORE ANIMATION
	//---------------------------------------------------------------------------------------------
	// enablerInitHandler = () => {
	// 	if (!Enabler.isPageLoaded()) {
	// 		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	// 	} else {
	// 		pageLoadedHandler();
	// 	}
	// },

	// //---------------------------------------------------------------------------------------------
	// // PAGE IS LOADED, CHECK AD IS VISIBLE
	// //---------------------------------------------------------------------------------------------
	// pageLoadedHandler = () => {
	// 	if (!Enabler.isVisible()) {
	// 		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, runBannerAnimation);
	// 	} else {
	// 		runBannerAnimation();
	// 	}
	// },

	//---------------------------------------------------------------------------------------------
	// BEGIN ANIMATION
	//---------------------------------------------------------------------------------------------
	runBannerAnimation = () => {
		// banner.className = 'ready';

		var t1 = new TimelineLite();
			t1.to(circle_1, 					2, 		{ scale: 1,
				onStart: () => {
					TweenLite.to(circle_1, 		0.25, 	{ opacity: 1 });
				}
			  }, '+=1')
			  .add([
			  	TweenLite.to(circle_1, 			0.5, 	{ opacity: 0.85 }),
			  	TweenLite.to(text_1,			0.5, 	{ opacity: 1 })
			  ], '-=1')
			  .to(circle_1, 					0.5, 	{ opacity: 1 }, '+=0.6')
			  .to(circle_1, 					1,		{ scale: 0.001,
			  	onStart: () => {
			  		TweenLite.set(bg_1, 				{ opacity: 0 });
			  		TweenLite.to(text_1, 		0.5, 	{ opacity: 0 });
			  		TweenLite.to(circle_1, 		0.25, 	{ opacity: 0, delay: 1.75 });
			  	}
			  })
			  .to(circle_2, 					2, 		{ scale: 1,
				onStart: () => {
					TweenLite.to(circle_2, 		0.25, 	{ opacity: 1 });
				}
			  }, '+=1')
			  .add([
			  	TweenLite.to(circle_2, 			0.5, 	{ opacity: 0.85 }),
			  	TweenLite.to(text_2,			0.5, 	{ opacity: 1 })
			  ], '-=1')
			  .to(circle_2, 					0.5, 	{ opacity: 1 }, '+=1')
			  .to(circle_2, 					1,		{ scale: 0.001, top: '114px', left: '140px', 
			  	onStart: () => {
			  		TweenLite.set(bg_2, 				{ opacity: 0 });
			  		TweenLite.to(text_2, 		0.5, 	{ opacity: 0 });
			  		TweenLite.to(circle_2, 		0.25, 	{ opacity: 0, delay: 1.75 });
			  	}
			  })
			  .to(logo, 						0.5, 	{ scale: 1,
			  	onStart: () => {
			  		TweenLite.to(logo, 			0.2, 	{ opacity: 1 });
			  	}
			  }, '-=0.4')
			  .to(footer,						0.5, 	{ y: -75, onComplete: addListeners });

		// console.log(t1.duration());
	},

	addListeners = () => {
		// invisBtn.addEventListener('mouseover', function(event) {
		// 	TweenLite.to(cta, 					0.25,   { backgroundColor: '#FFD82B', borderColor: '#099AAD' });
		// 	TweenLite.to(ctaPaths, 				0.25, 	{ fill: '#099AAD'});
		// });

		// invisBtn.addEventListener('mouseout', function(event) {
		// 	TweenLite.to(cta, 					0.25,   { backgroundColor: '#099AAD', borderColor: '#FFD82B' });
		// 	TweenLite.to(ctaPaths, 				0.25, 	{ fill: '#FFFFFF'});
		// });
	}

	initialize();
})();