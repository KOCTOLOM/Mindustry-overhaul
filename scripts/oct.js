var sappingWave = new Effect(250, e => {
    Draw.color(Pal.sap.cpy());
    Lines.stroke(e.fout() * 6);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 250);
});
var sappingParticles = extend(ParticleEffect, {
	particles: 120,
	cone: 360,
	interp: Interp.circleOut,
	lifetime: 120,
	sizeFrom: 3,
	sizeTo: 0,
	layer:89,
	colorFrom: Pal.sap.cpy(),
	colorTo: Pal.sap.cpy(),
	length: 150,
});
var sappingParticles2 = extend(ParticleEffect, {
	particles: 80,
	cone: 360,
	interp: Interp.circleOut,
	lifetime: 90,
	sizeFrom: 2,
	sizeTo: 0,
	layer:89,
	colorFrom: Pal.sap.cpy(),
	colorTo: Pal.sap.cpy(),
	length: 150,
});

var sapField = new MultiEffect(sappingWave, sappingParticles, sappingParticles2);
var timer = 1;
var statussap = StatusEffects.sapped;
var sappingField = extend(Ability, {
	update(unit){
        timer += Time.delta;

        if(timer >= 200) {
            Units.nearbyEnemies(unit.team, unit.x, unit.y, 250, other => {
                other.apply(statussap, 900);
            });
            
            var x = unit.x + Angles.trnsx(unit.rotation, 0, 0);
            var y = unit.y + Angles.trnsy(unit.rotation, 0, 0);
            sapField.at(x, y, true ? 250 : unit.rotation, true ? unit : null);

            timer = 0;
        }
    },
    addStats(t) {
    	t.add("[lightgray]" + Stat.reload.localized() + ": [white]" + Strings.autoFixed(60 / 200, 2) + " " + StatUnit.perSecond.localized());
        t.row();
        t.add("[lightgray]" + Stat.shootRange.localized() + ": [white]" +  Strings.autoFixed(250 / Vars.tilesize, 2) + " " + StatUnit.blocks.localized());
        t.row();
        t.add(statussap.emoji() + " " + statussap.localizedName);
    },
   localized() {
   	return Core.bundle.get("ability." + "sappingfield");
   }
});
var molWave = new Effect(250, e => {
    Draw.color(Pal.meltdownHit.cpy());
    Lines.stroke(e.fout() * 6);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 250);
});
var molParticles = extend(ParticleEffect, {
	particles: 90,
	cone: 360,
	interp: Interp.circleOut,
	lifetime: 120,
	sizeFrom: 2,
	sizeTo: 0,
	layer:89,
	colorFrom: Pal.meltdownHit.cpy(),
	colorTo: Pal.meltdownHit.cpy(),
	length: 120,
});

var molParticles2 = extend(ParticleEffect, {
	particles: 160,
	cone: 360,
	interp: Interp.circleOut,
	lifetime: 120,
	sizeFrom: 3,
	sizeTo: 0,
	layer:89,
	colorFrom: Pal.meltdownHit.cpy(),
	colorTo: Pal.meltdownHit.cpy(),
	length: 80,
});

var molField = new MultiEffect(molWave, molParticles, molParticles2);
var timer = 101;
var statusmol = StatusEffects.melting;
var moltenField = extend(Ability, {
	update(unit){
        timer += Time.delta;

        if(timer >= 200) {
            Units.nearbyEnemies(unit.team, unit.x, unit.y, 250, other => {
                other.apply(statusmol, 900);
            });
            
            var x = unit.x + Angles.trnsx(unit.rotation, 0, 0);
            var y = unit.y + Angles.trnsy(unit.rotation, 0, 0);
            molField.at(x, y, true ? 250 : unit.rotation, true ? unit : null);

            timer = 0;
        }
    },
    addStats(t) {
    	t.add("[lightgray]" + Stat.reload.localized() + ": [white]" + Strings.autoFixed(60 / 200, 2) + " " + StatUnit.perSecond.localized());
        t.row();
        t.add("[lightgray]" + Stat.shootRange.localized() + ": [white]" +  Strings.autoFixed(250 / Vars.tilesize, 2) + " " + StatUnit.blocks.localized());
        t.row();
        t.add(statusmol.emoji() + " " + statusmol.localizedName);
    },
   localized() {
   	return Core.bundle.get("ability." + "moltenfield");
   }
});

Events.on(ClientLoadEvent, event => {
	UnitTypes.oct.abilities.addAll(moltenField, sappingField);
});
