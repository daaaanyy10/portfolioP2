NUEVO REPOSITORIO RESPECTO A LA ENTREGA 1

# Portfolio profesional - Dany Megías Maya

Portfolio como desarrollador web junior (DAW) para la tarea UD7 (Entrega 2).

🔗 **Web publicada:** https://daaaanyy10.github.io/portfolio/

## Tecnologías usadas
- HTML5 semántico
- CSS3 (variables de Bootstrap y clases propias, tema deportivo)
- Bootstrap 5.3.3 y Bootstrap Icons 1.11.3 (por CDN)
- Tipografías Barlow y Barlow Condensed (Google Fonts)
- JavaScript (modo claro/oscuro, modal de proyectos y validación del formulario)
- GitHub Pages para el despliegue

## Estilo deportivo y paleta de colores

Diseño inspirado en el deporte: franjas de césped y círculo central en la portada, secciones numeradas como dorsales, etiquetas en forma de paralelogramo y tipografía condensada en cursiva (Barlow Condensed). Todos los estilos se aplican con **clases** (`.portada`, `.tarjeta-deporte`, `.etiqueta`...), no con ids. Las clases con prefijo `js-` solo las usa el JavaScript.

| Uso | Color | Fondo | Ratio | Resultado |
|---|---|---|---|---|
| Texto normal (tema claro) | `#212529` | `#FFFFFF` | 15,4:1 | AA ✅ |
| Texto secundario | `#495057` | `#FFFFFF` | 8,2:1 | AA ✅ |
| Verde de marca (enlaces, números y etiquetas) | `#15803D` | `#FFFFFF` | 5,0:1 | AA ✅ |
| Verde de marca sobre gris claro | `#15803D` | `#F8F9FA` | 4,8:1 | AA ✅ |
| Texto de botones (tema claro) | `#FFFFFF` | `#15803D` | 5,0:1 | AA ✅ |
| Titular de la portada (lima) | `#C6F432` | `#0F3D24` | 9,6:1 | AA ✅ |
| Texto de la portada | `#FFFFFF` | `#0F3D24` | 12,3:1 | AA ✅ |
| Texto de botones y etiquetas (tema oscuro) | `#0B2A1A` | `#C6F432` | 12,1:1 | AA ✅ |
| Texto normal (tema oscuro) | `#DEE2E6` | `#212529` | 11,8:1 | AA ✅ |
| Enlaces (tema oscuro) | `#4ADE80` | `#212529` | 8,9:1 | AA ✅ |
| Borde de campos (claro) | `#6C757D` | `#FFFFFF` | 4,7:1 | AA ✅ (mín. 3:1) |

> Comprueba los números en https://webaim.org/resources/contrastchecker/ antes de entregar.

## Informe de calidad
Capturas guardadas en `docs/evidencias/`:

- Lighthouse (móvil): `docs/evidencias/lighthouse.png`
- WAVE: `docs/evidencias/wave.png`
- Validador HTML del W3C: `docs/evidencias/validador-html.png`
- Validador CSS del W3C: `docs/evidencias/validador-css.png`

## Declaración de uso de IA
He usado Claude de forma puntual en `js/main.js` para resolver una duda concreta sobre (cómo pasar los datos al modal / cómo validar el formulario).
Lo utilicé porque no me salía y quería saberlo. El resto del código, los textos y las pruebas de calidad los he hecho yo. Y en algunos sitios puntuales del css, poco más.

## Estructura
```
portfolio/
├── index.html
├── css/estilos.css
├── js/main.js
├── img/
├── docs/
│   ├── cv.pdf
│   └── evidencias/
└── README.md
```
