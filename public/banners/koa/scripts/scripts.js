var main = {
	banner			:   document.getElementById('banner'),
	cta				:   document.getElementById('cta'),
	invisBtn		:   document.getElementById('invisBtn'),
	logoKOA 		: 	document.getElementById('logo--koa'),
	logoKOA_sm		: 	document.getElementById('logo--koa_sm'),
	logoMYWO		: 	document.getElementById('logo--mywo'),
	textOne			: 	document.getElementById('holder--1'),
	textTwo			: 	document.getElementById('holder--2'),
	yellowBG		: 	document.getElementById('yellow_bg'),
	bg 				: 	document.getElementById('bg--1'),
	ctaPaths		: 	document.querySelectorAll('.cta__path'),

	initialize: function() {
		if (!Enabler.isInitialized()) {
			Enabler.addEventListener(studio.events.StudioEvent.INIT, main.enablerInitHandler);
		} else {
			main.enablerInitHandler();
		}

		CSSPlugin.defaultForce3D = true;
	},

	//---------------------------------------------------------------------------------------------
	// ENABLER IS INITIATED, WAIT FOR PAGE LOAD BEFORE ANIMATION
	//---------------------------------------------------------------------------------------------
	enablerInitHandler: function() {
		if (!Enabler.isPageLoaded()) {
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, main.pageLoadedHandler);
		} else {
			main.pageLoadedHandler();
		}
	},

	//---------------------------------------------------------------------------------------------
	// PAGE IS LOADED, CHECK AD IS VISIBLE
	//---------------------------------------------------------------------------------------------
	pageLoadedHandler: function() {
		if (!Enabler.isVisible()) {
			Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, main.runBannerAnimation);
		} else {
			main.runBannerAnimation();
		}
	},

	//---------------------------------------------------------------------------------------------
	// BEGIN ANIMATION
	//---------------------------------------------------------------------------------------------
	runBannerAnimation: function() {
		main.banner.className = 'ready';

		var t1 = new TimelineLite();
			t1.to(main.logoKOA, 					0.6, 	{ alpha: 0, delay: 1,
					onComplete: function() {
						main.logoKOA.className = 'graphic second';
						TweenLite.set(main.logoKOA, 	{ alpha: 1 });
					}
			  })
			  .to(main.textOne, 					0.8, 	{ x: -280, ease: Power4.easeOut })
			  .to(main.textTwo, 					0.8, 	{ x: -280, ease: Power4.easeOut, delay: 0.5 })
			  .add([
			  	TweenLite.to(main.yellowBG,			2.5, 	{ x: -612, ease: Power4.easeIn, rotation: 0.01, rotationZ: 0.01 }),
			  	TweenLite.to(main.logoKOA,			2.5, 	{ x: -612, ease: Power4.easeIn, rotation: 0.01, rotationZ: 0.01,
			  		onStart: function() {
			  			TweenLite.to(main.textOne, 	0.4, 	{ width: 0, delay: 2 });
			  			TweenLite.to(main.textTwo, 	0.4, 	{ width: 0, delay: 2 });
			  		}
			  	})
			  ])	
			  .to(main.bg, 							2.0, 	{ x: -192, rotation: 0.01, rotationZ: 0.01, delay: -0.4 })
			  .to(main.logoKOA_sm,					0.8,	{ alpha: 1, delay: 0.4 })
			  .to(main.logoMYWO, 					0.8, 	{ alpha: 1, delay: 0.2,
			  	onStart: () => {
			  		main.logoMYWO.className += ' shadow';
			  	}
			  })
			  .to(main.cta, 						0.8, 	{ alpha: 1, delay: 0.2, onComplete: main.addListeners });

		// console.log(t1.duration());
	},

	addListeners: function() {
		invisBtn.addEventListener('mouseover', function(event) {
			TweenLite.to(main.cta,				0.25,   { backgroundColor: '#FFFFFF', scale: 1.05 });
		});

		invisBtn.addEventListener('mouseout', function(event) {
			TweenLite.to(main.cta,				0.25,   { backgroundColor: '#FFD100', scale: 1 });
		});
	}
}

window.onload = function() {
	main.initialize();
}