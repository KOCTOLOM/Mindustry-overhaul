var plastWallBullet = extend(ShrapnelBulletType, {
	damage: 220,
	lifetime: 35,
	width: 5,
 serrations: 3,
	length: 7,
	ammoMultiplier: 0,
	fromColor: Pal.plastaniumFront,
	toColor: Pal.plastaniumFront,
	hitColor: Pal.plastaniumFront,
});

const ReinfPlastWall = extend(Wall, "reinf-plast-wall", {
    requirements: ItemStack.with(Items.plastanium, 10, Items.metaglass, 20, Items.surgeAlloy, 8),
    category: Category.defense,
    health: 1800,
    armor:9,
    insulated: true,
    absorbLasers: true,
    schematicPriority: 10,
    buildVisibility: BuildVisibility.shown
});

ReinfPlastWall.buildType = () => extend(Wall.WallBuild, ReinfPlastWall, {
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

const ReinfPlastWallLarge = extend(Wall, "reinf-plast-wall-large", {
    requirements: ItemStack.mult(ReinfPlastWall.requirements, 4),
    category: Category.defense,
    health: 1800 * 4,
    armor: 9,
    insulated: true,
    absorbLasers: true,
    schematicPriority: 10,
    buildVisibility: BuildVisibility.shown,
    size: 2
});

ReinfPlastWallLarge.buildType = () => extend(Wall.WallBuild, ReinfPlastWallLarge, {
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

