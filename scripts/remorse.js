/*const remorse = extend(CoreBlock, "remorse", {
    requirements: ItemStack.with(Items.copper, 1),
    category: Category.effect,
    size: 5,
    health: 500000,
    armor: 25,
    itemCapacity: 13000,
    unitType: this,
    buildVisibility: BuildVisibility.hidden
    //Это на время разработки.
    //is it possible to build a core regardless of another core
    canPlaceOn(tile, team, rotation) {
        return true;
    },
    //can this core replace another one
    canReplace(other) {
        if(other instanceof CoreBlock) return false;
        return this.super$canReplace(other);
    },
    //is it possible to break the core
    canBreak(tile) {
        return true;
    },
});*/
