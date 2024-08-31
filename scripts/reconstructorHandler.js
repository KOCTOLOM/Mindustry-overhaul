function convertArray(type, arr) {
	var jArr = java.lang.reflect.Array.newInstance(type, arr.length);
		for (var i = 0; i < arr.length; i++) { 
		jArr[i] = arr[i];
	}
	return jArr;
};

function handleReconstructor(/* Reconstructor, ... */) {
	var reconstructor = arguments[0];
	
	const reqs = new ObjectMap();
	const caps = new ObjectMap();
	const acce = new Seq();
	
	for (var arg = 1; arg < arguments.length; arg += 2) {
		reqs.put(arguments[arg], arguments[arg+1]);
	}
	
	reqs.each((type, iss) => {
		var map = new ObjectMap();
		for (var i = 0; i < iss.length; i++) {
			if (!acce.contains(iss[i].item)) {
				acce.add(iss[i].item);
			}
			map.put(iss[i].item, iss[i].amount)
		}
		caps.put(type, map)
	})

	var field = reconstructor.getClass().getClassLoader().loadClass("mindustry.world.Block").getDeclaredField("consumeBuilder");
	field.setAccessible(true);
	var consumeBuilder = field.get(reconstructor);
	consumeBuilder.removeAll(c => {
		return c instanceof ConsumeItems;
	});

	reconstructor.consume(new ConsumeItemDynamic((build) => {
		return (build.payload != null && reqs.containsKey(build.payload.unit.type)) ? reqs.get(build.payload.unit.type) : ItemStack.empty;
	}));

	reconstructor.buildType = () => extend(Reconstructor.ReconstructorBuild, reconstructor, {
		getMaximumAccepted(item) {
			return ((this.payload != null && reqs.containsKey(this.payload.unit.type)) && caps.get(this.payload.unit.type).containsKey(item)) ?
			caps.get(this.payload.unit.type).get(item) * 2 * Vars.state.rules.unitCost(this.team) :
			0;
		},
	
		acceptItem(source, item) {
			return acce.contains(item) && this.items.get(item) < this.getMaximumAccepted(item);
		}
	});
}

module.exports = {
	handleReconstructor: handleReconstructor
};

