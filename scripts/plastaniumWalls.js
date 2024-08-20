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


Blocks.plastaniumWall.buildType = () => extend(Wall.WallBuild, Blocks.plastaniumWall, {
    cooldown: 0,
    collision(bullet){
        this.super$collision(bullet);
        
        this.cooldown++;
        
        if(this.cooldown == 4) {
            for(let i = 0; i < 4; i++){
                plastWallBullet.create(this, this.x, this.y, (360 / 4) * i + 45);
            }
            this.cooldown = 0;
        }
        return true;
    }
});

Blocks.plastaniumWallLarge.buildType = () => extend(Wall.WallBuild, Blocks.plastaniumWallLarge, {
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
        return true;
    }
})

