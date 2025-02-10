Blocks.foreshadow.removeConsumer(Blocks.foreshadow.coolant);
Blocks.foreshadow.coolant = null;

Blocks.foreshadow.buildType = () => extend(ItemTurret.ItemTurretBuild, Blocks.foreshadow, {
    acceptItem(source, item) {
        return (item == Items.blastCompound && this.items.get(item) <= 49) || this.super$acceptItem(source, item);
    },

    handleItem(source, item) {
        if (item == Items.blastCompound) {
            this.items.add(item, 1);
        } else {
            this.super$handleItem(source, item);
        }
    },

    useAmmo() {
        this.items.remove(Items.blastCompound, 15);
        this.super$useAmmo();
    }
});
