const script = require("reconstructorHandler")

script.handleReconstructor(Blocks.additiveReconstructor, 
	UnitTypes.dagger, ItemStack.with(Items.silicon, 60, Items.graphite, 70),
	UnitTypes.nova, ItemStack.with(Items.silicon, 40, Items.graphite, 115),
	UnitTypes.crawler, ItemStack.with(Items.silicon, 40, Items.graphite, 70),
	UnitTypes.flare, ItemStack.with( Items.silicon, 40, Items.graphite, 50),
	UnitTypes.mono, ItemStack.with( Items.silicon, 50, Items.graphite, 50),
	UnitTypes.risso, ItemStack.with( Items.silicon, 90, Items.graphite, 70),
	UnitTypes.retusa, ItemStack.with(Items.silicon, 90, Items.graphite, 50)
);