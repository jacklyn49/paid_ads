(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"20180716_LFP_Promo_1SL2_HERO1002_atlas_", frames: [[644,752,206,59],[644,813,188,64],[0,752,642,398],[852,779,127,26],[981,779,109,25],[834,813,149,27],[0,0,1200,750],[852,752,140,25]]}
];


// symbols:



(lib._2day_b1 = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2day_b2 = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.H2_2dayonly = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.H2_onlineonly = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.H2_proexclusive = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.HERO1002_background_v2x = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.online_only = function() {
	this.spriteSheet = ss["20180716_LFP_Promo_1SL2_HERO1002_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.H2_onlineonly();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,109,25), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.H2_proexclusive();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,149,27), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.H2_2dayonly();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,127,26), null);


(lib.ONLYteXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcDMQgGAAAAgGIAAigIh2jrQgDgGAHAAIA9AAQAGAAACAGIBPCeIACAAIBQieQADgGAGAAIA6AAQAHAAgCAGIh2DrIAACgQAAAGgHAAg");
	this.shape.setTransform(121.8,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/DMQgGAAAAgGIAAmLQAAgGAGAAIA7AAQAGAAAAAGIAAFOQAAAEAEgBIC6AAQAGABAAAGIAAAzQAAAGgGAAg");
	this.shape_1.setTransform(92.9,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbDMQgGAAgEgGIilkYIgDAAIAAEYQABAGgHAAIg0AAQgGAAAAgGIAAmLQAAgGAGAAIA3AAQAHAAADAGICmEZIACAAIAAkZQAAgGAGAAIA0AAQAGAAAAAGIAAGLQAAAGgGAAg");
	this.shape_2.setTransform(57.3,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZC6QgngZgPgxIgGgTIgCgWIgDgeIAAgpIAAgoIADgeIACgWIAGgTQAPgxAngZQAlgZA0AAQA1AAAmAZQAlAZARAxIAEATIAEAWIACAeIAAAoIAAApIgCAeIgEAWIgEATQgRAxglAZQgmAZg1gBQg0ABglgZgAgwiEQgTAOgIAZIgDANIgCASIgCAaIAAAkIAAAlIACAaIACASIADAMQAIAaATAOQATAOAdAAQAeAAATgOQASgOAJgaIADgMIACgSIACgaIABglIgBgkIgCgaIgCgSIgDgNQgJgZgSgOQgTgOgeAAQgdAAgTAOg");
	this.shape_3.setTransform(20.8,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,76);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.online_only();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(0,0,140,25), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib._2day_b2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.984,0.984);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,185,63), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2day_b1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.981,0.981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,202.2,57.9), null);


(lib.CTA_ShopNow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA2QAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgThDIAAAAIgSBDQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgQAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgchpQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAVAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIAPBEIABAAIAShEQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIANAAQABAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIATBEIAQhEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAVAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgcBpQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape.setTransform(87.7,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAxQgLgGgEgNIgBgGIgBgGIgBgIIAAgKIAAgKIABgHIABgGIABgGQAEgNALgHQALgGANAAQAOAAALAGQALAHAEANIABAGIABAGIABAHIAAAKIAAAKIgBAIIgBAGIgBAGQgEANgLAGQgLAHgOAAQgNAAgLgHgAgKgfQgEADgCAGIgBADIAAAEIgBAHIAAAIIAAAJIABAGIAAAFIABADQACAGAEADQAEADAGAAQAHAAAEgDQAEgDACgGIABgDIABgFIAAgGIAAgJIAAgIIAAgHIgBgEIgBgDQgCgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_1.setTransform(75.8,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA2QAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgmhEIgBAAIAABEQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgSAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAhpQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIATAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIAlBEIAAAAIAAhEQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAABpQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_2.setTransform(65.6,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAhpQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIApAAQAJAAAHADQAHADAFAEQAFAFACAGQADAHAAAIQAAAIgDAGQgCAFgFAFQgFAFgHACQgHACgJABIgSAAIgBAAIAAAlQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAgAgQggIAAAcIABABIARAAQAHAAAEgFQAEgEAAgGQAAgHgEgEQgEgEgHAAIgRAAIgBABg");
	this.shape_3.setTransform(52,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAxQgLgGgEgNIgBgGIgBgGIgBgIIAAgKIAAgKIABgHIABgGIABgGQAEgNALgHQALgGANAAQAOAAALAGQALAHAEANIABAGIABAGIABAHIAAAKIAAAKIgBAIIgBAGIgBAGQgEANgLAGQgLAHgOAAQgNAAgLgHgAgKgfQgEADgCAGIgBADIAAAEIgBAHIAAAIIAAAJIABAGIAAAFIABADQACAGAEADQAEADAGAAQAHAAAEgDQAEgDACgGIABgDIABgFIAAgGIAAgJIAAgIIAAgHIgBgEIgBgDQgCgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_4.setTransform(41.9,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA2QAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgqIgBgBIgjAAIgBABIAAAqQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgVAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAVAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAApIABABIAjAAIABgBIAAgpQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAVAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAABpQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_5.setTransform(31.7,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA3IgLgDIgKgFIgIgGQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAMgOQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAGAFAHADQAHAEAIAAQAIAAAFgEQAFgEAAgFQAAgFgEgDQgDgDgKgCIgFAAQgRgDgJgHQgIgHAAgPQAAgIACgGQADgGAFgEQAFgFAHgCQAHgCAIAAQALAAAKADQAJADAHAFQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgJAPQgBAAAAAAQAAABAAAAQgBAAAAAAQAAgBgBAAQgGgEgGgCQgGgCgHAAQgGAAgEAEQgDADAAAFQAAAFADADQAEADAJABIAFABQARACAJAIQAJAHAAAPQAAAHgDAGQgDAHgFAEQgGAFgIACQgIADgKAAQgGAAgGgBg");
	this.shape_6.setTransform(21.6,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,0,1).p("AoljlIRLAAIAAHLIxLAAg");
	this.shape_7.setTransform(55,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,112,48);


(lib.DEALStext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpC4QgVgEgSgHQgSgHgPgJQgQgJgKgKQgEgEADgFIApgvQADgEAFAEQASAOAYAMQAYALAcAAQAdAAAPgMQAQgMAAgTQAAgQgMgKQgMgLghgEIgSgCQg3gIgegZQgegbAAgxQAAgZAJgUQAJgVARgOQARgPAYgIQAYgIAcAAQAkAAAgAKQAhALAXARQAEADgDAFIghAxQgDAEgEgDQgVgOgVgGQgVgHgWAAQgXAAgMALQgNALAAARQAAAQANAKQAMAKAfAEIATADQA5AHAdAbQAdAZAAAyQAAAZgJAVQgJAVgSAPQgSAQgbAIQgbAJgjAAQgUAAgVgEg");
	this.shape.setTransform(226.3,97.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSCmQgkgWgOgtIgEgSIgEgVIgBgZIgBgjIABgiIABgaIAEgUIAEgSQAOgsAkgXQAkgWAuAAQAwAAAjAWQAjAXAPAsIAEASIADAUIACAaIABAiIgBAjIgCAZIgDAVIgEASQgPAtgjAWQgjAWgwAAQguAAgkgWgAgkhrQgOALgHATIgCALIgCAPIgBAVIAAAeIAAAeIABAWIACAPIACALQAHATAOAKQAPALAVAAQAXAAAOgLQAOgKAGgTIACgLIADgPIABgWIAAgeIAAgeIgBgVIgDgPIgCgLQgGgTgOgLQgOgKgXAAQgVAAgPAKg");
	this.shape_1.setTransform(193.8,97.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9C2QgGAAgCgFIg+iFIgwAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIAACDQABAFgGAAIhEAAQgGAAAAgFIAAlhQAAgFAGAAICQAAQAcAAAXAJQAWAIAQAPQARAPAJAUQAJAWAAAYQgBAjgQAaQgSAageAOIBICOIAAAFIgEACgAg9htIAABTQAAABABABQAAAAAAABQABAAAAAAQABAAABAAIA/AAQAWAAAOgMQANgMAAgVQAAgUgNgMQgOgNgWAAIg/AAQgBAAgBAAQAAAAgBABQAAAAAAABQgBABAAABg");
	this.shape_2.setTransform(161.2,97.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiCC2QgGAAAAgFIAAlhQAAgFAGAAICMAAQAdAAAYAJQAXAJARAPQARAPAIAWQAJAWAAAaQAAAZgJAVQgJAVgQAPQgRAQgXAJQgYAIgdAAIhAAAQAAAAgBAAQgBAAAAABQAAAAgBABQAAABAAAAIAAB6QAAAFgFAAgAg5htIAABbQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAIA7AAQAZAAAOgNQAOgNAAgWQAAgXgOgNQgOgOgZAAIg7AAQAAAAgBAAQgBAAAAABQAAAAgBABQAAABAAABg");
	this.shape_3.setTransform(128.5,97.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA9C2QgGAAgDgFIg8iFIgyAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAACDQgBAFgFAAIhEAAQgFAAgBgFIAAlhQABgFAFAAICQAAQAcAAAWAJQAXAIARAPQAQAPAJAUQAJAWgBAYQAAAjgQAaQgSAageAOIBHCOIAAAFIgDACgAg8htIAABTQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIA/AAQAXAAANgMQAOgMAAgVQAAgUgOgMQgNgNgXAAIg/AAQAAAAgBAAQAAAAgBABQAAAAAAABQAAABAAABg");
	this.shape_4.setTransform(82.9,97.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSCmQgkgWgOgtIgEgSIgEgVIgCgZIAAgjIAAgiIACgaIAEgUIAEgSQAOgsAkgXQAjgWAvAAQAvAAAkAWQAjAXAPAsIAEASIAEAUIABAaIABAiIgBAjIgBAZIgEAVIgEASQgPAtgjAWQgkAWgvAAQgvAAgjgWgAgkhrQgPALgFATIgDALIgCAPIgBAVIgBAeIABAeIABAWIACAPIADALQAFATAPAKQAPALAVAAQAWAAAOgLQAPgKAGgTIADgLIACgPIABgWIAAgeIAAgeIgBgVIgCgPIgDgLQgGgTgPgLQgOgKgWAAQgVAAgPAKg");
	this.shape_5.setTransform(48.7,97.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah0C2QgFAAAAgFIAAlhQAAgFAFAAIDpAAQAFAAAAAFIAAA6QAAAFgFAAIicAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAABIAABMQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAICBAAQAGAAAAAFIAAA4QAAAFgGABIiBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAIAACKQAAAFgFAAg");
	this.shape_6.setTransform(17.7,97.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5D+QgdgGgZgJQgZgJgVgMQgVgNgPgOQgGgGAFgHIA4hBQAFgFAHAFQAZAUAhAQQAhAPAnABQAoAAAVgRQAWgRAAgbQAAgVgRgPQgQgNgtgHIgagDQhNgLgpgjQgpglAAhDQAAgjAMgcQANgdAYgUQAXgUAhgLQAhgLAnAAQAzAAAsAOQAtAOAfAZQAHAEgFAHIgtBDQgFAGgFgEQgdgTgdgKQgdgJgfgBQggAAgRAQQgRAQAAAXQAAAWARAOQASAOArAGIAaADQBPALAoAkQAoAkAABFQAAAigNAeQgNAdgYAVQgZAVglAMQglAMgxAAQgdAAgcgGg");
	this.shape_7.setTransform(200.7,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AijD8QgIAAAAgHIAAnoQAAgIAIAAIBeAAQAIAAgBAIIAAGJQAAAFAFAAIDdAAQAIAAgBAHIAABTQABAHgIAAg");
	this.shape_8.setTransform(160.1,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB+D8QgHAAgCgHIgdhZIivAAIgdBZQgCAHgHAAIhhAAQgHAAACgHICtnoQADgIAHAAIBcAAQAHAAACAIICrHoQACAHgHAAgAA7BAIg6iwIgBAAIg4CwIBzAAg");
	this.shape_9.setTransform(114.4,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AigD8QgIAAAAgHIAAnoQAAgIAIAAIFCAAQAHAAAAAIIAABPQAAAHgHAAIjYAAQgFAAAAAFIAABkQAAAEAFAAICzAAQAIAAgBAIIAABNQABAIgIAAIizAAQgFAAAAAEIAABoQAAAFAFAAIDYAAQAHAAAAAHIAABQQAAAHgHAAg");
	this.shape_10.setTransform(70.4,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai3D8QgHAAAAgHIAAnoQAAgIAHAAIC7AAQBCAAAtAcQAsAcATA6IAFAVIAFAbIACAlIABA0IgBA1IgCAkIgFAcIgFAWQgTA4gsAdQgtAchCAAgAhRiVIAAErQAAAFAEAAIA5AAQAlAAAXgMQAXgNAJgfIAEgMIADgSIABgcIABgpIgBgoIgBgbIgDgSIgEgNQgJgfgXgNQgXgMglAAIg5AAQgEAAAAAFg");
	this.shape_11.setTransform(26,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.3,136.6);


(lib._2DaysText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqC9QgWgEgSgHQgTgHgPgJQgQgKgLgKQgFgFAEgFIAqgvQADgFAFAEQATAPAZAMQAZAMAcgBQAeABAQgNQAPgMAAgUQAAgRgMgKQgMgKghgFIgTgDQg5gHgfgbQgegbAAgxQAAgaAJgWQAJgVASgPQARgPAYgHQAZgJAdAAQAlAAAhAKQAhALAYASQAFAEgEAEIghAyQgEAFgEgDQgVgPgWgGQgVgIgXABQgYAAgMALQgNALAAASQAAAQANAKQANALAfAFIAUACQA6AHAeAcQAeAbAAAzQAAAYgKAWQgJAWgSAQQgTAPgbAKQgcAIgkAAQgVAAgVgEg");
	this.shape.setTransform(152.9,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiC7QgFAAAAgFIAAiQIhvjbQgCgFAGAAIBIAAQAGAAACAFIBDCJIABAAIBEiJQACgFAGAAIBFAAIAEACIAAADIhuDbIAACQQAAAFgGAAg");
	this.shape_1.setTransform(123.1,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABeC7QgGAAgBgFIgWhCIiCAAIgUBCQgCAFgGAAIhIAAQgFAAACgFICAlrQACgFAFAAIBFAAQAFAAACAFIB+FrQACAFgGAAgAArAwIgqiDIgBAAIgqCDIBVAAg");
	this.shape_2.setTransform(91.9,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHC7QgGAAAAgFIAAlrQAAgFAGAAICKAAQAxAAAhAVQAiAVANAqIAEARIADATIADAcIAAAmIAAAnIgDAcIgDAUIgEAQQgNAqgiAVQghAVgxAAgAg8hvIAADfQAAAAAAABQAAABABAAQAAABABAAQABAAAAAAIAqAAQAcAAARgJQARgJAHgXIACgJIADgOIABgUIAAgfIAAgeIgBgTIgDgOIgCgKQgHgXgRgJQgRgJgcAAIgqAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAAAg");
	this.shape_3.setTransform(59.3,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuC+QgGAAAAgFIAAgzIADgJICDiaQALgNAFgMQAGgNAAgOQAAgTgLgMQgLgNgSAAQgnABgFAsQAAAGgGgBIg8gLQgGgBABgFQACgUAIgRQAIgSAPgNQAPgNAWgIQAVgIAaAAQAbAAAVAJQAVAHAPAPQAPAOAIATQAIAUAAAXQAAAagKAWQgLAWgRAUIhiB0IAAABICCAAQAGAAAAAFIAAA3QAAAFgGAAg");
	this.shape_4.setTransform(17.2,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.7,70);


// stage content:
(lib._20180716_LFP_Promo_1SL2_HERO1002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Online Only
	this.instance = new lib.Symbol4_1();
	this.instance.parent = this;
	this.instance.setTransform(678,30.5,1,1,0,0,0,70,12.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({x:658.1},0).wait(1).to({x:638.2},0).wait(1).to({x:618.3},0).wait(1).to({x:598.5},0).wait(1).to({x:578.6},0).wait(1).to({x:558.7},0).wait(1).to({x:538.9},0).wait(1).to({x:519},0).wait(232).to({_off:true},1).wait(5));

	// CTA
	this.instance_1 = new lib.CTA_ShopNow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(285,223,1,1,0,0,0,55,23);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(5));

	// Text_ 2DAY
	this.instance_2 = new lib._2DaysText("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156,98.2,1,0.074,0,0,0,90.4,34.4);
	this.instance_2.alpha = 0.039;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({regX:86.6,regY:30.1,scaleY:0.22,x:152.2,y:97.2,alpha:0.28},0).wait(1).to({scaleY:0.36,y:96.6,alpha:0.52},0).wait(1).to({scaleY:0.5,y:96,alpha:0.76},0).wait(1).to({scaleY:0.64,y:95.4,alpha:1},0).wait(1).to({scaleY:0.79,y:94.8},0).wait(1).to({scaleY:0.93,y:94.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.6,x:152.1,y:94.3},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-0.3,y:94.2},0).wait(1).to({rotation:0.6,x:152.2},0).wait(1).to({rotation:-0.3,x:152.1},0).wait(1).to({rotation:-1.2,y:94.3},0).wait(1).to({rotation:0,y:94.2},0).wait(1).to({rotation:1.1,x:152.2,y:94.1},0).wait(1).to({rotation:0.4,y:94.2},0).wait(1).to({rotation:-0.3,x:152.1},0).wait(1).to({rotation:-0.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.1,y:94.3},0).wait(1).to({rotation:-2,x:152,y:94.4},0).wait(1).to({rotation:-0.1,x:152.1,y:94.2},0).wait(1).to({rotation:1.7,x:152.2,y:94.1},0).wait(1).to({rotation:-0.1,x:152.1,y:94.2},0).wait(1).to({rotation:-2,x:152,y:94.4},0).wait(1).to({rotation:-0.1,x:152.1,y:94.2},0).wait(1).to({rotation:1.7,x:152.3,y:94.1},0).wait(1).to({rotation:0.7,x:152.2,y:94.2},0).wait(1).to({rotation:-0.3,x:152.1},0).wait(1).to({rotation:-0.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.1,y:94.3},0).wait(1).to({rotation:-2,x:152,y:94.4},0).wait(1).to({rotation:-0.2,x:152.1,y:94.2},0).wait(1).to({rotation:1.5,x:152.2,y:94.1},0).wait(1).to({rotation:-0.3,y:94.2},0).wait(1).to({rotation:-2,x:152,y:94.4},0).wait(1).to({rotation:-0.1,x:152.1,y:94.2},0).wait(1).to({rotation:1.7,x:152.2,y:94.1},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:-0.3,x:152.1,y:94.2},0).wait(1).to({rotation:-0.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(5));

	// Layer_3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(412,95.9,1,1,0,0,0,101,28.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:101.1,x:394.6,alpha:0.067},0).wait(1).to({x:377,alpha:0.133},0).wait(1).to({x:359.5,alpha:0.2},0).wait(1).to({x:341.9,alpha:0.267},0).wait(1).to({x:324.4,alpha:0.333},0).wait(1).to({x:306.8,alpha:0.4},0).wait(1).to({x:289.3,alpha:0.467},0).wait(1).to({x:271.7,alpha:0.533},0).wait(1).to({x:254.2,alpha:0.6},0).wait(1).to({x:236.6,alpha:0.667},0).wait(1).to({x:219.1,alpha:0.733},0).wait(1).to({x:201.5,alpha:0.8},0).wait(1).to({x:184,alpha:0.867},0).wait(1).to({x:166.4,alpha:0.933},0).wait(1).to({x:148.9,alpha:1},0).wait(249).to({_off:true},1).wait(5));

	// Text_ONLY
	this.instance_4 = new lib.ONLYteXT("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.4,100.3,1,1,0,0,0,71.1,38);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(1).to({regX:71.2,regY:32.6,x:196.5,y:99},0).wait(1).to({y:103},0).wait(1).to({y:107.1},0).wait(1).to({y:111.1},0).wait(1).to({y:115.2},0).wait(1).to({y:119.2},0).wait(1).to({y:123.3,alpha:0.143},0).wait(1).to({y:127.3,alpha:0.286},0).wait(1).to({y:131.4,alpha:0.429},0).wait(1).to({y:135.4,alpha:0.571},0).wait(1).to({y:139.5,alpha:0.714},0).wait(1).to({y:143.5,alpha:0.857},0).wait(1).to({y:147.6,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(5));

	// Layer_2
	this.instance_5 = new lib.Symbol3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-99.5,146.4,1,1,0,0,0,92.5,31.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:31.5,x:-79.9,y:146.5,alpha:0.067},0).wait(1).to({x:-60.4,alpha:0.133},0).wait(1).to({x:-40.9,alpha:0.2},0).wait(1).to({x:-21.4,alpha:0.267},0).wait(1).to({x:-1.9,alpha:0.333},0).wait(1).to({x:17.6,alpha:0.4},0).wait(1).to({x:37.1,alpha:0.467},0).wait(1).to({x:56.7,alpha:0.533},0).wait(1).to({x:76.2,alpha:0.6},0).wait(1).to({x:95.6,alpha:0.667},0).wait(1).to({x:115.1,alpha:0.733},0).wait(1).to({x:134.7,alpha:0.8},0).wait(1).to({x:154.2,alpha:0.867},0).wait(1).to({x:173.7,alpha:0.933},0).wait(1).to({x:193.2,alpha:1},0).wait(249).to({_off:true},1).wait(5));

	// Text_DEALS
	this.instance_6 = new lib.DEALStext("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(417.7,-47.3,1.029,1.029,0,0,0,128.7,56.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({regX:123,regY:65.1,x:411.8,y:-29.9,alpha:0.167},0).wait(1).to({y:-21,alpha:0.333},0).wait(1).to({y:-12.2,alpha:0.5},0).wait(1).to({y:-3.4,alpha:0.667},0).wait(1).to({y:5.5,alpha:0.833},0).wait(1).to({y:14.3,alpha:1},0).wait(1).to({y:23.1},0).wait(1).to({y:32},0).wait(1).to({y:40.8},0).wait(1).to({y:49.6},0).wait(1).to({y:58.4},0).wait(1).to({y:67.2},0).wait(1).to({y:76.1},0).wait(1).to({y:84.9},0).wait(1).to({y:93.7},0).wait(1).to({y:102.6},0).wait(1).to({y:111.4},0).wait(1).to({y:120.2},0).wait(1).to({y:129},0).wait(1).to({y:127.5},0).wait(1).to({y:126},0).wait(1).to({y:124.5},0).wait(1).to({y:126},0).wait(1).to({y:127.5},0).wait(1).to({y:129},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(5));

	// Bck_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egu3AVmMAAAgrLMBdvAAAMAAAArLg");
	var mask_graphics_264 = new cjs.Graphics().p("Egu3AVmMAAAgrLMBdvAAAMAAAArLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:300.1,y:138.2}).wait(264).to({graphics:mask_graphics_264,x:300.1,y:138.2}).wait(6));

	// Background
	this.instance_7 = new lib.background();
	this.instance_7.parent = this;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(264).to({_off:true},1).wait(5));

	// ONLINE
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(559.8,474,1,1,0,0,0,54.5,12.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:559.7},0).wait(1).to({x:559.6},0).wait(1).to({x:559.5},0).wait(1).to({x:559.4},0).wait(1).to({x:559.3},0).wait(1).to({x:559.2},0).wait(1).to({x:559.1},0).wait(1).to({x:559},0).wait(1).to({x:558.9},0).wait(1).to({x:558.8},0).wait(1).to({x:558.7},0).wait(1).to({x:558.6},0).wait(1).to({x:558.5},0).wait(1).to({x:558.4},0).wait(1).to({x:558.3},0).wait(1).to({x:558.2},0).wait(1).to({x:558.1},0).wait(1).to({x:558},0).wait(1).to({x:557.9},0).wait(1).to({x:557.8},0).wait(1).to({x:557.7},0).wait(1).to({x:557.6},0).wait(1).to({x:557.5},0).wait(1).to({x:557.4},0).wait(1).to({x:557.3},0).wait(1).to({x:557.2},0).wait(1).to({x:557.1},0).wait(1).to({x:557},0).wait(1).to({x:556.9},0).wait(1).to({x:556.8},0).wait(1).to({x:556.7},0).wait(1).to({x:556.6},0).wait(1).to({x:556.5},0).wait(1).to({x:556.4},0).wait(1).to({x:556.3},0).wait(1).to({x:556.2},0).wait(1).to({x:556.1},0).wait(1).to({x:556},0).wait(1).to({x:555.9},0).wait(1).to({x:555.8},0).wait(1).to({x:555.7},0).wait(1).to({x:555.6},0).wait(1).to({x:555.5},0).wait(1).to({x:555.4},0).wait(1).to({x:555.3},0).wait(1).to({x:555.2},0).wait(1).to({x:555.1},0).wait(1).to({x:555},0).wait(1).to({x:554.9},0).wait(1).to({x:554.8},0).wait(1).to({x:554.7},0).wait(1).to({x:554.6},0).wait(1).to({x:554.5},0).wait(1).to({x:554.4},0).wait(1).to({x:554.3},0).wait(1).to({x:519.7,y:475.2,alpha:0.25},0).wait(1).to({x:485.2,y:476.1,alpha:0.5},0).wait(1).to({x:450.6,y:476.6,alpha:0.75},0).wait(1).to({x:417.3,y:474,alpha:1},0).wait(61).to({x:409.3,alpha:0.95},0).wait(1).to({x:401.4,alpha:0.9},0).wait(1).to({x:393.4,alpha:0.85},0).wait(1).to({x:385.5,alpha:0.8},0).wait(1).to({x:377.5,alpha:0.75},0).wait(1).to({x:369.6,alpha:0.7},0).wait(1).to({x:361.6,alpha:0.65},0).wait(1).to({x:353.7,alpha:0.6},0).wait(1).to({x:345.7,alpha:0.55},0).wait(1).to({x:337.8,alpha:0.5},0).wait(1).to({x:329.9,alpha:0.45},0).wait(1).to({x:321.9,alpha:0.4},0).wait(1).to({x:314,alpha:0.35},0).wait(1).to({x:306,alpha:0.3},0).wait(1).to({x:298.1,alpha:0.25},0).wait(1).to({x:290.1,alpha:0.2},0).wait(1).to({x:282.2,alpha:0.15},0).wait(1).to({x:274.2,alpha:0.1},0).wait(1).to({x:266.3,alpha:0.05},0).wait(1).to({x:258.4,alpha:0},0).wait(4).to({_off:true},1).wait(126));

	// PRO_EX
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(579.8,474,1,1,0,0,0,74.5,13.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:576.8},0).wait(1).to({x:573.9},0).wait(1).to({x:571},0).wait(1).to({x:568.1},0).wait(1).to({x:565.2},0).wait(1).to({x:562.2},0).wait(1).to({x:559.3},0).wait(1).to({x:556.4},0).wait(1).to({x:553.5},0).wait(1).to({x:550.6},0).wait(1).to({x:547.7},0).wait(1).to({x:544.7},0).wait(1).to({x:541.8},0).wait(1).to({x:538.9},0).wait(1).to({x:536},0).wait(1).to({x:533.1},0).wait(1).to({x:530.2},0).wait(1).to({x:527.2},0).wait(1).to({x:524.3},0).wait(1).to({x:521.4},0).wait(1).to({x:518.5},0).wait(1).to({x:515.6},0).wait(1).to({x:512.7},0).wait(1).to({x:509.7},0).wait(1).to({x:506.8},0).wait(1).to({x:503.9},0).wait(1).to({x:501},0).wait(1).to({x:498.1},0).wait(1).to({x:495.1},0).wait(1).to({x:492.2},0).wait(1).to({x:489.3},0).wait(1).to({x:486.4},0).wait(1).to({x:483.5},0).wait(1).to({x:480.6},0).wait(1).to({x:477.6},0).wait(1).to({x:474.7},0).wait(1).to({x:471.8},0).wait(1).to({x:468.9},0).wait(1).to({x:466},0).wait(1).to({x:463.1},0).wait(1).to({x:460.1},0).wait(1).to({x:457.2},0).wait(1).to({x:454.3},0).wait(1).to({x:451.4},0).wait(1).to({x:448.5},0).wait(1).to({x:445.6},0).wait(1).to({x:442.6},0).wait(1).to({x:439.7},0).wait(1).to({x:436.8},0).wait(1).to({x:402.2,alpha:0.25},0).wait(1).to({x:367.6,alpha:0.5},0).wait(1).to({x:333,alpha:0.75},0).wait(1).to({x:298.4,alpha:1},0).wait(67).to({x:289.4,alpha:0.944},0).wait(1).to({x:280.5,alpha:0.889},0).wait(1).to({x:271.6,alpha:0.833},0).wait(1).to({x:262.7,alpha:0.778},0).wait(1).to({x:253.8,alpha:0.722},0).wait(1).to({x:244.9,alpha:0.667},0).wait(1).to({x:235.9,alpha:0.611},0).wait(1).to({x:227,alpha:0.556},0).wait(1).to({x:218.1,alpha:0.5},0).wait(1).to({x:209.2,alpha:0.444},0).wait(1).to({x:200.3,alpha:0.389},0).wait(1).to({x:191.4,alpha:0.333},0).wait(1).to({x:182.4,alpha:0.278},0).wait(1).to({x:173.5,alpha:0.222},0).wait(1).to({x:164.6,alpha:0.167},0).wait(1).to({x:155.7,alpha:0.111},0).wait(1).to({x:146.8,alpha:0.056},0).wait(1).to({x:137.9,alpha:0},0).wait(6).to({_off:true},1).wait(126));

	// 2DAY
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(568.8,473.5,1,1,0,0,0,63.5,13);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({x:560.2},0).wait(1).to({x:551.6},0).wait(1).to({x:543.1},0).wait(1).to({x:534.5},0).wait(1).to({x:526},0).wait(1).to({x:517.4},0).wait(1).to({x:508.9},0).wait(1).to({x:500.3},0).wait(1).to({x:491.8},0).wait(1).to({x:483.2},0).wait(1).to({x:474.7},0).wait(1).to({x:466.1},0).wait(1).to({x:457.6},0).wait(1).to({x:449},0).wait(1).to({x:440.5},0).wait(1).to({x:431.9},0).wait(1).to({x:423.3},0).wait(1).to({x:414.8},0).wait(1).to({x:406.2},0).wait(1).to({x:397.7},0).wait(1).to({x:389.1},0).wait(1).to({x:380.6},0).wait(1).to({x:372},0).wait(1).to({x:363.5},0).wait(1).to({x:354.9},0).wait(1).to({x:346.4},0).wait(1).to({x:337.8},0).wait(1).to({x:329.3},0).wait(1).to({x:320.7},0).wait(1).to({x:312.2},0).wait(1).to({x:303.6},0).wait(1).to({x:295},0).wait(1).to({x:286.5},0).wait(1).to({x:277.9},0).wait(1).to({x:269.4},0).wait(1).to({x:260.8},0).wait(1).to({x:252.3},0).wait(1).to({x:243.7},0).wait(1).to({x:235.2},0).wait(1).to({x:226.6},0).wait(1).to({x:218.1},0).wait(1).to({x:209.5},0).wait(1).to({x:201},0).wait(1).to({x:192.4,alpha:0.25},0).wait(1).to({x:183.9,alpha:0.5},0).wait(1).to({x:175.3,alpha:0.75},0).wait(1).to({x:166.8,alpha:1},0).wait(73).to({x:156.3,alpha:0.933},0).wait(1).to({x:145.8,alpha:0.867},0).wait(1).to({x:135.3,alpha:0.8},0).wait(1).to({x:124.8,alpha:0.733},0).wait(1).to({x:114.3,alpha:0.667},0).wait(1).to({x:103.8,alpha:0.6},0).wait(1).to({x:93.3,alpha:0.533},0).wait(1).to({x:82.8,alpha:0.467},0).wait(1).to({x:72.3,alpha:0.4},0).wait(1).to({x:61.8,alpha:0.333},0).wait(1).to({x:51.3,alpha:0.267},0).wait(1).to({x:40.8,alpha:0.2},0).wait(1).to({x:30.3,alpha:0.133},0).wait(1).to({x:19.8,alpha:0.067},0).wait(1).to({x:9.3,alpha:0},0).wait(9).to({_off:true},1).wait(126));

	// ONLINE
	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(559.8,474,1,1,0,0,0,54.5,12.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(82).to({_off:false},0).wait(1).to({x:559.7},0).wait(1).to({x:559.6},0).wait(1).to({x:559.5},0).wait(1).to({x:559.4},0).wait(1).to({x:559.3},0).wait(1).to({x:559.2},0).wait(1).to({x:559.1},0).wait(1).to({x:559},0).wait(1).to({x:558.9},0).wait(1).to({x:558.8},0).wait(1).to({x:558.7},0).wait(1).to({x:558.6},0).wait(1).to({x:558.5},0).wait(1).to({x:558.4},0).wait(1).to({x:558.3},0).wait(1).to({x:558.2},0).wait(1).to({x:558.1},0).wait(1).to({x:558},0).wait(1).to({x:557.9},0).wait(1).to({x:557.8},0).wait(1).to({x:557.7},0).wait(1).to({x:557.6},0).wait(1).to({x:557.5},0).wait(1).to({x:557.4},0).wait(1).to({x:557.3},0).wait(1).to({x:557.2},0).wait(1).to({x:557.1},0).wait(1).to({x:557},0).wait(1).to({x:556.9},0).wait(1).to({x:556.8},0).wait(1).to({x:556.7},0).wait(1).to({x:556.6},0).wait(1).to({x:556.5},0).wait(1).to({x:556.4},0).wait(1).to({x:556.3},0).wait(1).to({x:556.2},0).wait(1).to({x:556.1},0).wait(1).to({x:556},0).wait(1).to({x:555.9},0).wait(1).to({x:555.8},0).wait(1).to({x:555.7},0).wait(1).to({x:555.6},0).wait(1).to({x:555.5},0).wait(1).to({x:555.4},0).wait(1).to({x:555.3},0).wait(1).to({x:555.2},0).wait(1).to({x:555.1},0).wait(1).to({x:555},0).wait(1).to({x:554.9},0).wait(1).to({x:554.8},0).wait(1).to({x:554.7},0).wait(1).to({x:554.6},0).wait(1).to({x:554.5},0).wait(1).to({x:554.4},0).wait(1).to({x:554.3},0).wait(1).to({x:519.7,y:475.2,alpha:0.25},0).wait(1).to({x:485.2,y:476.1,alpha:0.5},0).wait(1).to({x:450.6,y:476.6,alpha:0.75},0).wait(1).to({x:417.3,y:474,alpha:1},0).wait(39).to({x:409.8,alpha:0.938},0).wait(1).to({x:402.4,alpha:0.875},0).wait(1).to({x:395,alpha:0.813},0).wait(1).to({x:387.5,alpha:0.75},0).wait(1).to({x:380.1,alpha:0.688},0).wait(1).to({x:372.7,alpha:0.625},0).wait(1).to({x:365.2,alpha:0.563},0).wait(1).to({x:357.8,alpha:0.5},0).wait(1).to({x:350.4,alpha:0.438},0).wait(1).to({x:342.9,alpha:0.375},0).wait(1).to({x:335.5,alpha:0.313},0).wait(1).to({x:328.1,alpha:0.25},0).wait(1).to({x:320.6,alpha:0.188},0).wait(1).to({x:313.2,alpha:0.125},0).wait(1).to({x:305.8,alpha:0.063},0).wait(1).to({x:298.4,alpha:0},0).wait(3).to({_off:true},1).wait(71));

	// PRO_EX
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(579.8,474,1,1,0,0,0,74.5,13.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(82).to({_off:false},0).wait(1).to({x:576.8},0).wait(1).to({x:573.9},0).wait(1).to({x:571},0).wait(1).to({x:568.1},0).wait(1).to({x:565.2},0).wait(1).to({x:562.2},0).wait(1).to({x:559.3},0).wait(1).to({x:556.4},0).wait(1).to({x:553.5},0).wait(1).to({x:550.6},0).wait(1).to({x:547.7},0).wait(1).to({x:544.7},0).wait(1).to({x:541.8},0).wait(1).to({x:538.9},0).wait(1).to({x:536},0).wait(1).to({x:533.1},0).wait(1).to({x:530.2},0).wait(1).to({x:527.2},0).wait(1).to({x:524.3},0).wait(1).to({x:521.4},0).wait(1).to({x:518.5},0).wait(1).to({x:515.6},0).wait(1).to({x:512.7},0).wait(1).to({x:509.7},0).wait(1).to({x:506.8},0).wait(1).to({x:503.9},0).wait(1).to({x:501},0).wait(1).to({x:498.1},0).wait(1).to({x:495.1},0).wait(1).to({x:492.2},0).wait(1).to({x:489.3},0).wait(1).to({x:486.4},0).wait(1).to({x:483.5},0).wait(1).to({x:480.6},0).wait(1).to({x:477.6},0).wait(1).to({x:474.7},0).wait(1).to({x:471.8},0).wait(1).to({x:468.9},0).wait(1).to({x:466},0).wait(1).to({x:463.1},0).wait(1).to({x:460.1},0).wait(1).to({x:457.2},0).wait(1).to({x:454.3},0).wait(1).to({x:451.4},0).wait(1).to({x:448.5},0).wait(1).to({x:445.6},0).wait(1).to({x:442.6},0).wait(1).to({x:439.7},0).wait(1).to({x:436.8},0).wait(1).to({x:402.2,alpha:0.25},0).wait(1).to({x:367.6,alpha:0.5},0).wait(1).to({x:333,alpha:0.75},0).wait(1).to({x:298.4,alpha:1},0).wait(45).to({x:286,alpha:0.923},0).wait(1).to({x:273.7,alpha:0.846},0).wait(1).to({x:261.3,alpha:0.769},0).wait(1).to({x:249,alpha:0.692},0).wait(1).to({x:236.6,alpha:0.615},0).wait(1).to({x:224.3,alpha:0.538},0).wait(1).to({x:211.9,alpha:0.462},0).wait(1).to({x:199.6,alpha:0.385},0).wait(1).to({x:187.2,alpha:0.308},0).wait(1).to({x:174.9,alpha:0.231},0).wait(1).to({x:162.5,alpha:0.154},0).wait(1).to({x:150.2,alpha:0.077},0).wait(1).to({x:137.9,alpha:0},0).wait(6).to({_off:true},1).wait(71));

	// 2DAY
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(568.8,473.5,1,1,0,0,0,63.5,13);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(82).to({_off:false},0).wait(1).to({x:560.2},0).wait(1).to({x:551.6},0).wait(1).to({x:543.1},0).wait(1).to({x:534.5},0).wait(1).to({x:526},0).wait(1).to({x:517.4},0).wait(1).to({x:508.9},0).wait(1).to({x:500.3},0).wait(1).to({x:491.8},0).wait(1).to({x:483.2},0).wait(1).to({x:474.7},0).wait(1).to({x:466.1},0).wait(1).to({x:457.6},0).wait(1).to({x:449},0).wait(1).to({x:440.5},0).wait(1).to({x:431.9},0).wait(1).to({x:423.3},0).wait(1).to({x:414.8},0).wait(1).to({x:406.2},0).wait(1).to({x:397.7},0).wait(1).to({x:389.1},0).wait(1).to({x:380.6},0).wait(1).to({x:372},0).wait(1).to({x:363.5},0).wait(1).to({x:354.9},0).wait(1).to({x:346.4},0).wait(1).to({x:337.8},0).wait(1).to({x:329.3},0).wait(1).to({x:320.7},0).wait(1).to({x:312.2},0).wait(1).to({x:303.6},0).wait(1).to({x:295},0).wait(1).to({x:286.5},0).wait(1).to({x:277.9},0).wait(1).to({x:269.4},0).wait(1).to({x:260.8},0).wait(1).to({x:252.3},0).wait(1).to({x:243.7},0).wait(1).to({x:235.2},0).wait(1).to({x:226.6},0).wait(1).to({x:218.1},0).wait(1).to({x:209.5},0).wait(1).to({x:201},0).wait(1).to({x:192.4,alpha:0.25},0).wait(1).to({x:183.9,alpha:0.5},0).wait(1).to({x:175.3,alpha:0.75},0).wait(1).to({x:166.8,alpha:1},0).wait(51).to({x:151,alpha:0.9},0).wait(1).to({x:135.3,alpha:0.8},0).wait(1).to({x:119.5,alpha:0.7},0).wait(1).to({x:103.8,alpha:0.6},0).wait(1).to({x:88,alpha:0.5},0).wait(1).to({x:72.3,alpha:0.4},0).wait(1).to({x:56.5,alpha:0.3},0).wait(1).to({x:40.8,alpha:0.2},0).wait(1).to({x:25,alpha:0.1},0).wait(1).to({x:9.3,alpha:0},0).wait(9).to({_off:true},1).wait(71));

	// ONLINE
	this.instance_14 = new lib.Symbol5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(558.5,474,1,1,0,0,0,54.5,12.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(125).to({_off:false},0).wait(1).to({x:558.4},0).wait(1).to({x:558.3},0).wait(1).to({x:558.2},0).wait(1).to({x:558.1},0).wait(1).to({x:558},0).wait(1).to({x:557.9},0).wait(1).to({x:557.8},0).wait(1).to({x:557.7},0).wait(1).to({x:557.6},0).wait(1).to({x:557.5},0).wait(1).to({x:557.4},0).wait(1).to({x:557.3},0).wait(1).to({x:557.2},0).wait(1).to({x:557.1},0).wait(1).to({x:557},0).wait(1).to({x:556.9},0).wait(1).to({x:556.8},0).wait(1).to({x:556.7},0).wait(1).to({x:556.6},0).wait(1).to({x:556.5},0).wait(1).to({x:556.4},0).wait(1).to({x:556.3},0).wait(1).to({x:556.2},0).wait(1).to({x:556.1},0).wait(1).to({x:556},0).wait(1).to({x:555.9},0).wait(1).to({x:555.8},0).wait(1).to({x:555.7},0).wait(1).to({x:555.6},0).wait(1).to({x:555.5},0).wait(1).to({x:555.4},0).wait(1).to({x:555.3},0).wait(1).to({x:555.2},0).wait(1).to({x:555.1},0).wait(1).to({x:555},0).wait(1).to({x:554.9},0).wait(1).to({x:554.8},0).wait(1).to({x:554.7},0).wait(1).to({x:554.6},0).wait(1).to({x:554.5},0).wait(1).to({x:554.4},0).wait(1).to({x:554.3},0).wait(1).to({x:519.7,y:475.2,alpha:0.25},0).wait(1).to({x:485.2,y:476.1,alpha:0.5},0).wait(1).to({x:450.6,y:476.6,alpha:0.75},0).wait(1).to({x:417.3,y:474,alpha:1},0).wait(93).to({_off:true},1).wait(5));

	// PRO_EX
	this.instance_15 = new lib.Symbol4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(541.9,474,1,1,0,0,0,74.5,13.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(125).to({_off:false},0).wait(1).to({x:538.9},0).wait(1).to({x:536},0).wait(1).to({x:533.1},0).wait(1).to({x:530.2},0).wait(1).to({x:527.3},0).wait(1).to({x:524.3},0).wait(1).to({x:521.4},0).wait(1).to({x:518.5},0).wait(1).to({x:515.6},0).wait(1).to({x:512.7},0).wait(1).to({x:509.8},0).wait(1).to({x:506.8},0).wait(1).to({x:503.9},0).wait(1).to({x:501},0).wait(1).to({x:498.1},0).wait(1).to({x:495.2},0).wait(1).to({x:492.3},0).wait(1).to({x:489.3},0).wait(1).to({x:486.4},0).wait(1).to({x:483.5},0).wait(1).to({x:480.6},0).wait(1).to({x:477.7},0).wait(1).to({x:474.8},0).wait(1).to({x:471.8},0).wait(1).to({x:468.9},0).wait(1).to({x:466},0).wait(1).to({x:463.1},0).wait(1).to({x:460.2},0).wait(1).to({x:457.2},0).wait(1).to({x:454.3},0).wait(1).to({x:451.4},0).wait(1).to({x:448.5},0).wait(1).to({x:445.6},0).wait(1).to({x:442.7},0).wait(1).to({x:439.7},0).wait(1).to({x:436.8},0).wait(1).to({x:402.2,alpha:0.25},0).wait(1).to({x:367.6,alpha:0.5},0).wait(1).to({x:333,alpha:0.75},0).wait(1).to({x:298.4,alpha:1},0).wait(99).to({_off:true},1).wait(5));

	// 2DAY
	this.instance_16 = new lib.Symbol3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(457.6,473.5,1,1,0,0,0,63.5,13);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(125).to({_off:false},0).wait(1).to({x:449},0).wait(1).to({x:440.5},0).wait(1).to({x:431.9},0).wait(1).to({x:423.4},0).wait(1).to({x:414.8},0).wait(1).to({x:406.3},0).wait(1).to({x:397.7},0).wait(1).to({x:389.2},0).wait(1).to({x:380.6},0).wait(1).to({x:372.1},0).wait(1).to({x:363.5},0).wait(1).to({x:355},0).wait(1).to({x:346.4},0).wait(1).to({x:337.9},0).wait(1).to({x:329.3},0).wait(1).to({x:320.7},0).wait(1).to({x:312.2},0).wait(1).to({x:303.6},0).wait(1).to({x:295.1},0).wait(1).to({x:286.5},0).wait(1).to({x:278},0).wait(1).to({x:269.4},0).wait(1).to({x:260.9},0).wait(1).to({x:252.3},0).wait(1).to({x:243.8},0).wait(1).to({x:235.2},0).wait(1).to({x:226.7},0).wait(1).to({x:218.1},0).wait(1).to({x:209.6},0).wait(1).to({x:201},0).wait(1).to({x:192.5,alpha:0.25},0).wait(1).to({x:183.9,alpha:0.5},0).wait(1).to({x:175.3,alpha:0.75},0).wait(1).to({x:166.8,alpha:1},0).wait(105).to({_off:true},1).wait(5));

	// Bck_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egu1Ay6MAAAg6mMBdvAAAMAAAA6mg");
	mask_1.setTransform(300.2,325.8);

	// Background
	this.instance_17 = new lib.HERO1002_background_v2x();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,277,0.5,0.5);

	this.instance_18 = new lib.HERO1002_background_v2x();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,277,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17}]}).to({state:[]},265).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,326,846.3,651.5);
// library properties:
lib.properties = {
	id: '880AB5A954BC42FBA46FBB5CC29A9E86',
	width: 600,
	height: 652,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/20180716_LFP_Promo_1SL2_HERO1002_atlas_.png", id:"20180716_LFP_Promo_1SL2_HERO1002_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['880AB5A954BC42FBA46FBB5CC29A9E86'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;