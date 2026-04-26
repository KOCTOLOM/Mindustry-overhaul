var plastWallBullet = extend(ShrapnelBulletType, {
	damage: 130,
	lifetime: 25,
	width: 5,
    serrations: 0,
	length: 7,
	fromColor: Pal.plastaniumFront,
	toColor: Pal.plastaniumFront,
	hitColor: Pal.plastaniumFront,
});

var healBullet = extend(BasicBulletType, {
	damage: 1,
	absorbable:false,
	hittable:false,
	collidesTeam:true,
	healPercent:100,
	lifetime: 1,
	width: 0
});


const ReinfPlastWall = extend(Wall, "reinf-plast-wall", {
    requirements: ItemStack.with(Items.plastanium, 10, Items.metaglass, 20, Items.surgeAlloy, 8),
    category: Category.defense,
    health: 2100,
    armor:14,
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
    health: 2100 * 4,
    armor: 14,
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

const UnpWall = extend(Wall, "unpierce-wall", {
    requirements: ItemStack.with(Items.plastanium, 10, Items.metaglass, 20, Items.surgeAlloy, 8),
    health: 99999999,
    armor:9999999,
    insulated: true,
    absorbLasers: true,
    clipSize:8,
    lightClipSize:8,
    canPickup:false,
    drawCracks:false,
    targetable:false,
    underBullets:false,
    drawTeamOverlay:false,
    forceDark:true,
    buildVisibility: BuildVisibility.hidden
});

UnpWall.buildType = () => extend(Wall.WallBuild, UnpWall, {
    cooldown: 0,
    collision(bullet){
        this.super$collision(bullet);

        this.cooldown++;

        if(this.cooldown == 1) {
            for(let i = 0; i < 8; i++){
                healBullet.create(this, this.x, this.y, (360 / 8) * i);
            }
            this.cooldown = 0;
        }
        return true
    }
});