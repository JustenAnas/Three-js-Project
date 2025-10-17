uniform sampler2D uTexture;
varying vec2 vUv;
uniform vec2 uMouse;
uniform float uHover;
uniform float uIsColored; // 1.0 = fully colored, 0.0 = apply grey effect

void main() {
    float blocks = 20.0;
    vec2 blockUv = floor(vUv * blocks) / blocks;

    float distance = length(blockUv - uMouse);
    float effect = smoothstep(0.4, 0.0, distance);
    vec2 distortion = vec2(0.03) * effect;
    vec4 color = texture2D(uTexture, vUv + (distortion * uHover));

    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    vec4 finalColor = mix(vec4(gray, gray, gray, 1.0), color, uHover);

    // Only first plane keeps color
    gl_FragColor = uIsColored > 0.5 ? color : finalColor;
}
