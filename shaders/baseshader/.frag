uniform sampler2D u_texture;

varying vec2 v_texCoords;

uniform float u_time;
uniform vec3 u_hue_shift;

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(){
	vec4 rgba_color = texture2D(u_texture, v_texCoords);
	vec3 hsv_color = rgb2hsv(rgba_color.rgb);

	hsv_color *= u_hue_shift;
	hsv_color.x = fract(hsv_color.x);
    hsv_color.y = fract(hsv_color.y);

	gl_FragColor = vec4(hsv2rgb(hsv_color), rgba_color.a);
}
