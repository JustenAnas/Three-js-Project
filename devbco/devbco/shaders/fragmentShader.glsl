uniform float uTime;
uniform float uColorChange;
varying float vElevation;
varying vec2 vUv;


void main(){ 
  vec4 c1 = vec4(1.0, 0.7804, 0.9608, 1.0); // #FFC7F5
  vec4 c2 = vec4(1.0, 0.7294, 0.9373, .8); //rgb(254, 204, 242)

  vec4 c3 = vec4(1.0, 0.8667, 0.7804, 1.0); //rgb(255, 221, 199)
  vec4 c4 = vec4(0.9608, 0.8431, 0.7922, 1.0); //rgb(245, 215, 202)
  float v = smoothstep(-0.1,.1,vElevation);
   vec4 colorRed = mix(c1,c2,v);
   vec4 colorYellow = mix(c3,c4,v);
   vec4 final = mix(colorRed, colorYellow , uColorChange);
  gl_FragColor = final;
} 
