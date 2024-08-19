importPackage(Packages.arc.assets.loaders);

const mod = Vars.mods.locateMod("mov");

const evilLaugh = new Sound();
evilLaugh.load(Vars.tree.get("sounds/evil-laugh.ogg"));

const startSector = SectorPresets.groundZero.sector;

Events.on(WaveEvent, event => {
    if (Vars.state.getSector() == startSector && Vars.state.wave == 2) {
		evilLaugh.play();
	}
})