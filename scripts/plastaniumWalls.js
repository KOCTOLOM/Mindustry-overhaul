var plastWallBullet = extend(ShrapnelBulletType, {
	damage: 220,
	lifetime: 35,
	width: 5,
	length: 7,
	ammoMultiplier: 0,
	fromColor: Pal.plastaniumFront,
	toColor: Pal.plastaniumFront,
	hitColor: Pal.plastaniumFront,
});

const NotPlastWall = extend(Wall, "not-plast-wall", {
    requirements: ItemStack.with(Items.plastanium, 6, Items.metaglass, 8),
    category: Category.defense,
    health: 125,
    insulated: true,
    absorbLasers: true,
    schematicPriority: 10,
    buildVisibility: BuildVisibility.shown
});

NotPlastWall.buildType = () => extend(Wall.WallBuild, NotPlastWall, {
    cooldown: 0,
    collision(bullet){
        this.super$collision(bullet);
        
        this.cooldown++;
        
        if(this.cooldown == 4) {
            for(let i = 0; i < 4; i++){
                plastWallBullet.create(this, this.x, this.y, (360 / 4) * i);
            }
            this.cooldown = 0;
        }
        return true
    }
});

const NotPlastWallLarge = extend(Wall, "not-plast-wall-large", {
    requirements: ItemStack.mult(NotPlastWall.requirements, 4),
    category: Category.defense,
    health: 125 * 4,
    insulated: true,
    absorbLasers: true,
    schematicPriority: 10,
    buildVisibility: BuildVisibility.shown,
    size: 2
});

NotPlastWallLarge.buildType = () => extend(Wall.WallBuild, NotPlastWallLarge, {
    cooldown: 0,
    collision(bullet){
        this.super$collision(bullet);
        
        this.cooldown++;
        
        if(this.cooldown == 8) {
            for(let i = 0; i < 8; i++){
                plastWallBullet.create(this, this.x, this.y, (360 / 8) * i);
            }
            this.cooldown = 0;
        }
        return true
    }
});

