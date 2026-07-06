# CLAUDE.md — Proyecto: Plataforma de Tests para Oposición Auxiliar Administrativo C2 (CAC 2026)

## Stack técnico

Vamos a usar **React** (sin backend, sin servidor propio). Datos de preguntas en JSON (uno por tema) y progreso/estadísticas guardados en localStorage del navegador. Lo primero que se debe montar es el esqueleto de la app en React (estructura de componentes, routing básico entre modos de test, y carga de un JSON de ejemplo) antes de generar el banco de preguntas completo.

## Forma de trabajar con los PDFs (IMPORTANTE)

Todos los PDFs del temario ya están en la propia carpeta del proyecto. **No leer todos los PDFs de golpe ni generar el banco de preguntas completo en una sola pasada.** El proceso debe ser secuencial, tema a tema:

1. Leer un único PDF (un solo tema).
2. Generar las preguntas correspondientes solo a ese tema (siguiendo las reglas de la sección 1 y 2 de este documento).
3. Entregarlas para mi revisión.
4. Solo cuando yo confirme que ese tema está validado, pasar al siguiente PDF.

El motivo es poder controlar mejor la calidad y detectar errores cuanto antes, sin arrastrar fallos a los 17 temas de golpe. No avanzar al siguiente tema sin confirmación expresa mía.

## Contexto del proyecto

Estoy preparando la oposición de Auxiliar Administrativo (C2) de la Comunidad Autónoma de Canarias, convocatoria 2026 (296 plazas). Tengo el temario completo en PDF, organizado en 17 temas numerados (0100 a 9950). Quiero una aplicación web de autoevaluación tipo test para estudiar de forma eficiente.

## Objetivo

Construir una webapp de tests interactivos que me permita:
1. Practicar por tema individual.
2. Hacer tests aleatorios combinando varios temas.
3. Clasificar las preguntas por relevancia/probabilidad de caer en examen (sistema oro/plata/bronce).
4. Llevar estadísticas de mi progreso para detectar puntos débiles.

---

## 1. Generación del banco de preguntas (LO MÁS IMPORTANTE)

**Esto no es solo una tarea de programación, es una tarea de contenido legal-administrativo. Hay que tratarla con rigor.**

- Cada pregunta debe generarse **únicamente** a partir del contenido literal del PDF del tema correspondiente. Nunca completar con conocimiento general ni inventar artículos, plazos, porcentajes o nombres si no aparecen explícitamente en el texto.
- Si un dato no está claro o el PDF es ambiguo, la pregunta NO se genera, en lugar de arriesgarse a una alucinación.
- Cada pregunta debe llevar:
  - El tema al que pertenece (número y nombre).
  - La referencia exacta de dónde sale (artículo, página o epígrafe del PDF, si es localizable).
  - 4 opciones de respuesta (a, b, c, d), con una sola correcta.
  - Una breve justificación de por qué es correcta (para repasar al fallar).
- Evitar preguntas "trampa" mal formuladas o con doble interpretación; en oposiciones reales las preguntas suelen ser literales sobre el texto normativo (números, plazos, órganos competentes, requisitos, excepciones).
- Priorizar preguntas sobre: plazos y números (días, porcentajes, importes), órganos competentes y reparto de competencias, excepciones y casos especiales (donde más se falla), definiciones literales de la norma, y artículos muy citados en exámenes anteriores si tengo esa información disponible.
- **Yo (el usuario) voy a revisar manualmente cada bloque de preguntas generado antes de darlo por bueno.** La IA debe entregar las preguntas en lotes razonables (ej. de 20 en 20) para facilitar esa revisión, no todas de golpe.

## 2. Sistema de clasificación Oro / Plata / Bronce

Necesito una clasificación de las preguntas por relevancia, similar a como se hace en academias de oposiciones:

- **🥇 Oro:** preguntas sobre contenido que cae de forma recurrente en convocatorias anteriores, o que son "núcleo duro" del tema (definiciones clave, plazos críticos, órganos principales). Si no tengo exámenes anteriores para contrastar, marcar como oro lo que el propio texto normativo destaca como más relevante o lo que se repite en varios artículos del tema.
- **🥈 Plata:** contenido importante pero secundario, matices, excepciones poco habituales o desarrollo de detalle.
- **🥉 Bronce:** contenido residual, de relleno, o muy específico/poco probable que se pregunte (notas a pie, referencias cruzadas, disposiciones transitorias poco relevantes).

Importante: si no hay forma fiable de saber qué ha caído realmente en exámenes anteriores, la IA debe decírmelo explícitamente y no inventarse que algo es "oro" porque sí. La clasificación debe ser razonada (puede ser una estimación de relevancia, pero etiquetada como tal, no como un hecho verificado).

## 3. Funcionalidades de la webapp

### Modos de test
- **Test por tema:** elegir un tema y hacer un test solo de ese tema (longitud configurable: 10/20/30/todas).
- **Test aleatorio combinado:** mezcla preguntas de todos los temas o de los temas que yo seleccione.
- **Test por nivel:** posibilidad de filtrar solo preguntas Oro, o Oro+Plata, o todas.
- **Modo repaso de fallos:** repetir solo las preguntas que he fallado anteriormente.
- **Modo examen simulado:** X preguntas con tiempo limitado, simulando condiciones reales de examen (consultar si la convocatoria tiene tiempo y nº de preguntas oficial, y si no lo sé, dejarlo configurable).

### Resultados y feedback
- Al terminar cada test: nota, nº aciertos/fallos/en blanco, y repaso pregunta a pregunta con la justificación de la respuesta correcta.
- Penalización configurable por fallo (muchas oposiciones restan; quiero poder simular eso).

### Estadísticas y seguimiento
- Histórico de tests realizados con fecha y nota.
- Porcentaje de acierto por tema, para ver qué temas tengo más flojos.
- Porcentaje de acierto por nivel (oro/plata/bronce) — si fallo mucho en "oro" es alarma prioritaria.
- Preguntas que fallo repetidamente marcadas como "pendientes de repasar".

### Otros
- Diseño simple, rápido, usable desde el móvil (voy a estudiar también fuera de casa).
- Sin necesidad de cuenta/login complejo: guardar el progreso localmente (o decirme la opción más sencilla posible para no perder datos).
- Código organizado para que sea fácil añadir preguntas nuevas más adelante (por ejemplo, un archivo JSON por tema, separado de la lógica de la app).

## 4. Estructura de datos sugerida (orientativa)

Cada pregunta como objeto con: id, tema, nivel (oro/plata/bronce), enunciado, opciones (4), índice de la correcta, justificación, y referencia normativa (artículo/fuente). Un archivo de preguntas por tema, para poder regenerar o ampliar un tema sin tocar los demás.

## 5. Cosas que la IA debe preguntarme si no las tiene claras

- Si no encuentra los PDFs de algún tema o no puede leerlos bien.
- Si detecta contradicciones entre el PDF y lo que "cree saber" de la norma (en ese caso, manda SIEMPRE el PDF, nunca su memoria general).
- Si el tema es muy largo y conviene trocearlo en varias tandas de generación.
- Cuántas preguntas por tema le parece razonable generar (yo no tengo cifra cerrada, que me proponga un número orientativo según la densidad del tema, pero confirmándomelo antes de generar todo el lote).

## 6. Lo que NO quiero

- Que se invente preguntas "de cultura general" sobre administración pública que no estén en mis PDFs.
- Que mezcle contenido de una ley derogada o una versión antigua si el PDF ya reflejaba una reforma (debe fiarse del PDF, no de su conocimiento entrenado, que puede estar desactualizado).
- Que genere todo el banco de golpe sin que yo pueda revisar por el camino.
