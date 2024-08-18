const script = require("reconstructorHandler")

script.handleReconstructor(Blocks.multiplicativeReconstructor, 
	UnitTypes.horizon, ItemStack.with(Items.metaglass, 40, Items.graphite, 30,Items.silicon, 120, Items.titanium, 30),
	UnitTypes.mace, ItemStack.with(Items.metaglass, 40, Items.thorium, 20 ,Items.silicon, 140, Items.titanium, 25),
	UnitTypes.poly, ItemStack.with(Items.metaglass, 60, Items.graphite, 30, Items.silicon, 120, Items.titanium, 60),
	UnitTypes.minke, ItemStack.with(Items.metaglass, 90, Items.thorium, 60, Items.silicon, 120, Items.titanium, 40),
	UnitTypes.pulsar, ItemStack.with(Items.metaglass, 40, Items.thorium, 10, Items.silicon, 120, Items.titanium, 30),
	UnitTypes.atrax, ItemStack.with(Items.metaglass, 30, Items.graphite, 120, Items.silicon, 120, Items.titanium, 30),
	UnitTypes.oxynoe, ItemStack.with(Items.metaglass, 120, Items.silicon, 120, Items.titanium, 160)
);