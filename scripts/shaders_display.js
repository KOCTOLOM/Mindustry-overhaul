// adjust it before using
// save shader files in modRoot/shaders/[shaderName] directory
var modName = "mov"// mod name
var shaderName = "baseshader" // shader name
var settingsEnabledName = "mov-shader"
var settingsDebugName = "mov-shader-debug"

const buffer = new FrameBuffer()
const hueShift = new Vec3(1.0, 0.9, 0.72);

Events.on(ClientLoadEvent, e => {
    Vars.ui.settings.graphics.checkPref(settingsEnabledName, true);
    Vars.ui.settings.graphics.checkPref(settingsDebugName, false);

    Vars.ui.hudGroup.fill(cons(t => {
        t.right()
        t.visibility = () => Core.settings.getBool(settingsDebugName) && Core.settings.getBool(settingsEnabledName)
        t.table(cons(table => {
            table.background(Styles.black5)
            table.right()
            table.defaults().right()

            // debug table content
            table.label(() => "h (" + Strings.fixed(hueShift.x, 2) + ")")
            table.slider(0, 2, 0.05, 1, v => {hueShift.x = v})
            table.row()
            table.label(() => "s (" + Strings.fixed(hueShift.y, 2) + ")")
            table.slider(0, 2, 0.05, 1, v => {hueShift.y = v})
            table.row()
            table.label(() => "v (" + Strings.fixed(hueShift.z, 2) + ")")
            table.slider(0, 2, 0.05, 1, v => {hueShift.z = v})
        })).right()

    }))
})

const shader = extend(Shader,
    Vars.mods.getMod(modName).root.child("shaders").child(shaderName).child(".vert"),
    Vars.mods.getMod(modName).root.child("shaders").child(shaderName).child(".frag"),
    {
        apply(){ // set uniforms there
            this.setUniformf("u_time", Time.time)
            this.setUniformf("u_hue_shift", hueShift)
        }
    })

Events.run(Trigger.preDraw, () => {
    if (Core.settings.getBool(settingsEnabledName)) {
        buffer.resize(Core.graphics.getWidth(), Core.graphics.getHeight())
        buffer.begin(Color.clear)
    }
});

Events.run(Trigger.postDraw, () => {
    if (Core.settings.getBool(settingsEnabledName)) {
        buffer.end()
        buffer.blit(shader)
    }
});