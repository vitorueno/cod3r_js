// calcular área de um círculo
// area = pi * raio * raio

const PI = 3.141592; // pi do próprio JS: Math.PI
const raio = 10;
let areaCirc = raio * raio * PI

console.log(`A área é de ${areaCirc} m²`);

areaCirc = raio * raio * Math.PI

console.log(`A área é de ${areaCirc} m²`);
