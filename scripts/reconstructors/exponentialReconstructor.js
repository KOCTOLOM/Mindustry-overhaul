const script = require("reconstructorHandler")

script.handleReconstructor(Blocks.exponentialReconstructor, 
	UnitTypes.zenith, ItemStack.with(Items.plastanium, 900, Items.copper, 900 ,Items.silicon, 1300, Items.titanium, 750),
	UnitTypes.spiroct, ItemStack.with(Items.plastanium, 400, Items.thorium, 500,Items.silicon, 1400, Items.titanium, 750),
	UnitTypes.fortress, ItemStack.with(Items.plastanium, 500, Items.pyratite, 400, Items.silicon, 1400, Items.titanium, 750),
	UnitTypes.bryde, ItemStack.with(Items.plastanium, 600, Items.thorium, 400, Items.silicon, 1900, Items.titanium, 750),
	UnitTypes.mega, ItemStack.with(Items.plastanium, 500, Items.phaseFabric, 120, Items.silicon, 1100, Items.titanium, 750),
	UnitTypes.quasar, ItemStack.with(Items.plastanium, 700, Items.graphite, 500, Items.silicon, 1200, Items.titanium, 750),
	UnitTypes.cyerce, ItemStack.with(Items.plastanium, 900, Items.silicon, 1300, Items.titanium, 1460)
);