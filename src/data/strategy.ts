/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  group?: string; 
  content: string | string[] | { label: string; text: string; details?: string[] }[];
  type: 'portal' | 'diagnosis' | 'machinery' | 'target' | 'architecture' | 'investment' | 'plan' | 'video' | 'calendar';
  stats?: { label: string; value: string; trend?: 'up' | 'down'; color?: string }[];
  technicalInfo?: string[];
  calendarData?: { day: number; title: string; type: string; description: string; pauta?: string }[];
  strategicContext?: string; // Explain WHY this matters to the campaign chief
}

export interface MonthStrategy {
  month: string;
  year: number;
  slides: SlideContent[];
}

export const GENERAL_DIRECTIVES: SlideContent[] = [
  {
    id: 'general-slide-1',
    type: 'portal',
    group: 'ESTRATEGIA MAESTRA',
    title: 'Intel-Comunicación: PRIN Talara 2026',
    subtitle: 'De la captación digital a la movilización en urnas',
    content: 'Este es el Cimiento Estratégico. El sistema digital y las reglas permanentes que garantizan la victoria de Arnulfo Neira.',
  },
  {
    id: 'general-slide-2',
    type: 'diagnosis',
    group: 'ESTRATEGIA MAESTRA',
    title: 'DIAGNÓSTICO: GUERRA ASIMÉTRICA 2.0',
    subtitle: 'Inteligencia de Datos vs. Estructuras Caducas',
    strategicContext: 'En palabras simples: Nuestros rivales están gastando mucho dinero en publicidad antigua que nadie mira. Nosotros usamos datos para saber exactamente quién nos va a votar y no malgastar ni un sol.',
    stats: [
      { label: 'Brecha de Voto Duro', value: '-8.5%', trend: 'up' },
      { label: 'Inversión Rival/Inef.', value: '12:1', trend: 'up' }
    ],
    content: [
      {
        label: 'Obsolecencia Tradicional',
        text: 'Los rivales operan con modelos de 1990: bulto físico, pintura de muros y mitines costosos sin retorno medible.',
      },
      {
        label: 'Ventaja Asimétrica',
        text: 'Nuestra fuerza radica en el Micro-Targeting. Identificamos no solo DÓNDE vive el votante, sino QUÉ le duele y cómo convencerlo.',
      },
      {
        label: 'Austeridad Táctica',
        text: 'Convertimos la falta de presupuesto en agilidad. S/ 1 invertido en el SIM equivale a S/ 25 en publicidad física tradicional.',
      },
    ],
  },
  {
    id: 'general-slide-4',
    type: 'target',
    group: 'ESTRATEGIA MAESTRA',
    title: 'EL TARGET: ARQUETIPOS DE VOTANTES',
    subtitle: 'A quién le hablamos: Los ciudadanos que deciden la elección',
    strategicContext: 'No le hablamos a "todo Talara" por igual. Hemos dividido a la gente en grupos según lo que les preocupa. Así, cuando Arnulfo habla, cada persona siente que le está hablando directamente a ella.',
    stats: [
      { label: 'Población Objetivo', value: '45k', trend: 'up' },
      { label: 'Indecisión Estimada', value: '38%', trend: 'down' }
    ],
    content: [
      {
        label: 'La Madre Protectora',
        text: 'Enfoque: Seguridad y Salud. Prioridad en Negritos y zonas críticas.',
      },
      {
        label: 'El Joven Desencantado',
        text: 'Enfoque: Educación y Empleo. TikTok es el canal de conexión principal.',
      },
      {
        label: 'El Trabajador/Pescador',
        text: 'Enfoque: Anticorrupción y Economía. Contacto directo y pragmático.',
      },
    ],
  },
  {
    id: 'general-slide-inbound',
    type: 'architecture',
    group: 'ESTRATEGIA MAESTRA',
    title: 'ARQUITECTURA INBOUND: 4 PILARES',
    subtitle: 'Contenido diseñado para convencer y movilizar',
    strategicContext: 'Así es como convertimos a un extraño en un votante de Arnulfo. No se trata de publicar por publicar, sino de llevar a la gente por un camino: que nos respete, que vea que tenemos soluciones, que confíe en nosotros y, finalmente, que nos dé sus datos.',
    stats: [
      { label: 'Expectativa de Engage', value: '4.8%', trend: 'up', color: 'brand-red' },
      { label: 'Alcance Orgánico', value: '15k', trend: 'up' }
    ],
    content: [
      {
        label: 'Pilar 1: Autoridad',
        text: 'Arnulfo como el gestor capaz. No "bailamos", demostramos preparación.',
      },
      {
        label: 'Pilar 2: Solución',
        text: 'Marketing de Dolores: Explicamos CÓMO resolver Agua y Seguridad.',
      },
      {
        label: 'Pilar 3: Prueba Social',
        text: 'Testimonios reales de Arnulfo en la calle escuchando al pueblo.',
      },
      {
        label: 'Pilar 4: Conversión',
        text: 'El llamado a la acción obligatorio: Registro en el SIM y WhatsApp.',
      },
    ],
  },
  {
    id: 'general-slide-sim-concept',
    type: 'architecture',
    group: 'PLATAFORMA SIM',
    title: 'SISTEMA SIM: EL COMANDO CENTRAL',
    subtitle: 'Propiedad Privada y Portal Oficial del Candidato',
    strategicContext: 'Jefa, el SIM no es solo para nosotros. Es la "Casa Digital" de Arnulfo. Aquí, la gente que quiere saber "la verdad" entra a leer las propuestas reales sin el ruido de las redes sociales. Es mitad búnker secreto, mitad oficina de atención abierta 24/7.',
    technicalInfo: [
      'Infraestructura: Nube de Alta Disponibilidad',
      'Seguridad: Encriptación Multicapa',
      'Capacidad: 100k+ Usuarios Concurrentes'
    ],
    stats: [
      { label: 'Integridad de Datos', value: '100%', trend: 'up' },
      { label: 'Blindaje Digital', value: 'Máximo', trend: 'up' }
    ],
    content: [
      {
        label: '¿Qué es el SIM?',
        text: 'Es nuestro HUB DIGITAL. Una WEB APP que funciona como oficina privada para el comité y como PORTAL OFICIAL para el votante que busca propuestas serias.',
      },
      {
        label: 'Soberanía de Narrativa',
        text: 'Es el único lugar donde nosotros controlamos el 100% de lo que se lee. Publicamos el plan de gobierno detallado y la historia del partido PRIN.',
      },
      {
        label: 'Puente de Captación',
        text: 'Mientras el votante lee las propuestas, el sistema lo invita sutilmente a registrarse, convirtiendo a un curioso en un simpatizante identificado.',
      },
    ],
  },
  {
    id: 'general-slide-frontend',
    type: 'machinery',
    group: 'PLATAFORMA SIM',
    title: 'EXPERIENCIA CIUDADANA EN EL SIM',
    subtitle: 'El Portal de Propuestas y Transparencia de Arnulfo',
    strategicContext: 'Este es el lado que ve la gente. Para el votante educado que no se conforma con un video de 15 segundos, el SIM es el lugar para conocer a fondo el Plan de Rescate de Talara y los valores de nuestro partido.',
    content: [
      {
        label: 'Plan de Gobierno Vivo',
        text: 'Propuestas detalladas por ejes: Seguridad, Agua, Pesca y Juventud. Lectura obligatoria para líderes de opinión.',
      },
      {
        label: 'Místico y Partido',
        text: 'Sección dedicada a los principios del PRIN. Generamos sentido de pertenencia y lealtad ideológica.',
      },
      {
        label: 'Agenda del Candidato',
        text: 'Cronograma público de visitas y mitines para que la gente sepa dónde encontrar a Arnulfo.',
      },
      {
        label: 'Combate de Fake News',
        text: 'Sección de "Verdad vs Mentira" donde desmentimos ataques rivales con documentos oficiales.',
      },
    ],
  },
  {
    id: 'general-slide-dashboard',
    type: 'machinery',
    group: 'PLATAFORMA SIM',
    title: 'CEREBRO: DASHBOARD DE CONTROL',
    subtitle: 'Administración total con seguridad y niveles de acceso restringidos',
    content: [
      {
        label: 'CMS Político',
        text: 'Control de fotos, lemas y promesas sin depender de externos. Actualización inmediata.',
      },
      {
        label: 'CRM de Campaña',
        text: 'Base de datos centralizada de voluntarios clasificada por distrito y zona de votación.',
      },
      {
        label: 'Módulo Financiero',
        text: 'Registro transparente de aportes para cumplimiento normativo y transparencia interna.',
      },
      {
        label: 'Control de Campo',
        text: 'Panel para coordinadores donde pueden ver sus tareas y el avance real de su zona.',
      },
    ],
  },
  {
    id: 'general-slide-tech',
    type: 'architecture',
    group: 'PLATAFORMA SIM',
    title: 'SOLIDEZ Y SEGURIDAD DEL SISTEMA',
    subtitle: 'Infraestructura diseñada para la máxima confiabilidad',
    content: [
      {
        label: 'Estabilidad Permanente',
        text: 'El sistema soporta miles de visitas simultáneas sin colapsar ni ponerse lento.',
      },
      {
        label: 'Acceso Total Móvil',
        text: 'Optimizado para funcionar como una aplicación en cualquier celular de Talara.',
      },
      {
        label: 'Blindaje de Información',
        text: 'Datos encriptados. La información de nuestros simpatizantes es confidencial y segura.',
      },
    ],
  },
  {
    id: 'general-slide-6',
    type: 'machinery',
    group: 'GESTIÓN Y COMITÉ',
    title: 'INTEGRACIÓN DEL COMITÉ EJECUTIVO',
    subtitle: 'Cada Secretaría asume un rol táctico en el nuevo sistema',
    strategicContext: 'El comité no puede trabajar como antes. Ahora, cada secretario tiene una tarea digital específica. Si la jefa de la mujer no usa WhatsApp, estamos perdiendo votos. Todos deben subirse al sistema.',
    content: [
      {
        label: 'Secretaría de Organización',
        text: 'Supervisa "Coordinadores de Base" y captura datos físicos en mercados con QR.',
      },
      {
        label: 'Secretaría de Prensa',
        text: 'Editores del SIM. Producen los artículos y gestionan la narrativa oficial.',
      },
      {
        label: 'Secretaría de Juventudes',
        text: 'Fuerza de choque digital (TikTok) y usuarios expertos del SIM móvil.',
      },
      {
        label: 'Secretaría de la Mujer',
        text: 'Administración de comunidades de WhatsApp segmentadas (Apafas, Vasos de Leche).',
      },
    ],
  },
  {
    id: 'general-slide-7',
    type: 'investment',
    group: 'INVERSIÓN',
    title: 'ESTRUCTURA DE COSTOS BASE',
    subtitle: 'Distribución de recursos para el arranque estratégico',
    strategicContext: 'Jefa, aquí está la clave de la eficiencia: Mientras otros candidatos regalan polos de S/ 15 que la gente usa para trapear, nosotros invertimos céntimos en llegar digitalmente al celular de la misma persona con un mensaje que SÍ la convence.',
    stats: [
      { label: 'Costo por Voto Est.', value: 'S/ 0.12', trend: 'down' },
      { label: 'ROI Político', value: 'Máximo', trend: 'up' }
    ],
    content: [
      {
        label: 'S/ 400 - SISTEMA SIM (PAGO ANUAL)',
        text: 'Acceso total a la infraestructura. Costo de desarrollo (Wilmer Salazar) subsidiado al 100%. Cubre mantenimiento y servidor por todo el periodo electoral.',
      },
      {
        label: 'S/ 200 - PAUTA DIGITAL MÍNIMA (MENSUAL)',
        text: 'Presupuesto base indispensable para mantener presencia en Facebook (S/ 100) y TikTok (S/ 100). Es el motor que mantiene el algoritmo activo.',
      },
      {
        label: 'Eficiencia vs. Despilfarro',
        text: 'Mientras la competencia gasta miles en pintura que se borra, nosotros invertimos en datos que se quedan en nuestra base de datos para siempre.',
      },
    ],
  },
  {
    id: 'general-slide-ads-strategy',
    type: 'investment',
    group: 'INVERSIÓN',
    title: 'ESTRATEGIA DE PAUTA Y RETARGETING',
    subtitle: 'Conversión de Simpatizantes en Votantes Activos',
    stats: [
      { label: 'Costo por Registro', value: 'S/ 0.35', trend: 'down' },
      { label: 'Potencial Alcance', value: '120k', trend: 'up' }
    ],
    content: [
      {
        label: 'Inversión Progresiva',
        text: 'Los S/ 200 base son para "mantener la llama". La victoria real se construye escalando esta pauta mes a mes para ahogar el ruido de los oponentes.',
      },
      {
        label: 'Público Cautivo (Retargeting)',
        text: 'No lanzamos dinero al aire. El SIM nos permite identificar quién vio nuestros videos y volver a impactarlos con contenido más profundo hasta la conversión total.',
      },
      {
        label: 'Escalabilidad Crítica',
        text: 'Fase I: S/ 200 (Arranque). Fase II: S/ 500 (Consolidación). Fase III: S/ 2,000+ (Cierre de Urnas). La inversión se justifica con el control del territorio digital.',
      },
    ],
  },
  {
    id: 'general-slide-counter',
    type: 'architecture',
    group: 'PROTOCOLO DE DEFENSA',
    title: 'CONTRA-OFENSIVA Y MANEJO DE CRISIS',
    subtitle: 'Blindaje Reputacional y Respuesta Relámpago',
    stats: [
      { label: 'Tiempo de Reacción', value: '<15min', trend: 'down' },
      { label: 'Muro de Contención', value: 'Activo', trend: 'up' }
    ],
    content: [
      {
        label: 'Detección Temprana',
        text: 'Algoritmos de monitoreo para detectar ataques de "Guerra Sucia" o Fake News en los grupos de Facebook de Talara.',
      },
      {
        label: 'Respuesta Coordinada',
        text: 'Uso del SIM para activar a nuestros 50+ activistas digitales y neutralizar ataques en menos de 15 minutos.',
      },
      {
        label: 'Vacunación Digital',
        text: 'Adelantarse a las críticas con transparencia. Si el rival miente, nosotros respondemos con datos alojados en nuestro servidor propio.',
      },
    ],
  },
  {
    id: 'general-slide-roadmap',
    type: 'plan',
    group: 'MAPA DE VICTORIA',
    title: 'ROADMAP ESTRATÉGICO 2026',
    subtitle: 'El camino hacia la Alcaldía de Talara',
    stats: [
      { label: 'Etapa Actual', value: '01/04', trend: 'up' },
      { label: 'Victoria Probable', value: 'Incrementando', trend: 'up' }
    ],
    content: [
      {
        label: 'Fase 1: Reconocimiento (Abr-May)',
        text: 'Posicionamiento del SIM y captura masiva de simpatizantes iniciales.',
      },
      {
        label: 'Fase 2: Consolidación (Jun-Dic)',
        text: 'Crecimiento de la base de datos hasta alcanzar los 15,000 registros.',
      },
      {
        label: 'Fase 3: Movilización (Ene-Sep 2026)',
        text: 'Conversión de registros en votos duros y organización de personeros digitales.',
      },
    ],
  },
  {
    id: 'general-slide-vision',
    type: 'portal',
    group: 'VISIÓN FINAL',
    title: 'LA RUTA HACIA EL PALACIO MUNICIPAL',
    subtitle: 'Talara elige Futuro, Tecnología y Resultados',
    content: 'No estamos compitiendo por un segundo lugar. El SIM y esta estrategia asimétrica están diseñados para una sola cosa: ganar. Con Arnulfo Neira, Talara recupera su dignidad con inteligencia.',
  },
];

export const MONTHLY_TACTICAL_PLANS: MonthStrategy[] = [
  {
    month: 'Mayo',
    year: 2026,
    slides: [
      {
    id: 'mayo-2026-slide-8',
    type: 'plan',
    title: 'OBJETIVO DEL MES: MAYO',
    subtitle: 'Fase 1: Posicionamiento de Choque ("Top of Mind")',
    strategicContext: 'Este mes el objetivo no es convencer, sino que nos CONOZCAN. Queremos que cuando alguien piense en Arnulfo, piense en alguien que va a poner orden.',
    stats: [
          { label: 'Efectividad Mensual', value: '78%', trend: 'up' },
          { label: 'Alcance Orgánico', value: '15k', trend: 'up' }
        ],
        content: [
          { 
            label: 'Concepto: Autoridad', 
            text: 'Asociar a Arnulfo Neira con la mano dura contra la delincuencia en Talara.' 
          },
          { 
            label: 'Concepto: Rescate', 
            text: 'Posicionar el Plan de Rescate ante el desastre ambiental y sanitario.' 
          },
          { 
            label: 'Estrategia Viral', 
            text: 'Generar impacto visual crudo en locaciones emblemáticas (Colegio Pardo, Mercados).' 
          }
        ],
      },
      {
        id: 'mayo-2026-calendar',
        type: 'calendar',
        group: 'EJECUCIÓN',
        title: 'PLANIFICADOR TÁCTICO: MAYO 2026',
        subtitle: 'Calendario Interactivo de Publicaciones y Pauta',
        stats: [
          { label: 'Post Feed', value: '16', trend: 'up' },
          { label: 'Pauta Pardo', value: 'S/ 200', trend: 'up' }
        ],
        calendarData: [
          { day: 4, title: 'La Bomba de Tiempo', type: 'Video Pautado', description: 'Impacto en indignación de "La Madre Protectora". Locación: Colegio José Pardo.', pauta: 'S/ 25' },
          { day: 6, title: '¿Qué es el Botón de Pánico?', type: 'Infografía', description: 'Carrusel estético explicando el funcionamiento de la app de seguridad.' },
          { day: 8, title: 'Mercado de Pariñas', type: 'Reel/TikTok', description: 'Arnulfo escuchando sin filtro a los vecinos. Formato crudo y empático.' },
          { day: 10, title: 'Unete al Plan', type: 'Conversión', description: 'Flyer digital directo pidiendo registro en la web SIM.' },
          
          { day: 11, title: 'Chamba sin Vara', type: 'Video Pautado', description: 'Instituto Tecnológico Pesquero. Captando al joven desencantado.', pauta: 'S/ 25' },
          { day: 13, title: 'Burocracia vs SIM', type: 'Gráfica', description: 'Explicando el fin de las coimas con procesos digitales.' },
          { day: 15, title: 'Testimonio Joven', type: 'Reel/TikTok', description: 'Joven talareño hablando de la falta de oportunidades.' },
          { day: 17, title: 'Talara Emprende', type: 'Lanzamiento', description: 'Pre-inscripción para emprendedores locales en el SIM.' },

          { day: 18, title: 'Resumen Volantes QR', type: 'Video Orgánico', description: 'Entrega de material físico y escaneo masivo en mercados.' },
          { day: 20, title: 'Planta Coreana de Agua', type: 'Video Didáctico', description: 'Arnulfo explicando la solución técnica definitiva al agua.' },
          { day: 22, title: 'Frente a lo Tradicional', type: 'Reel/TikTok', description: 'Mensaje frontal: "Tenemos un plan, ellos solo regalan polos".' },
          { day: 24, title: 'Mapa Interactivo', type: 'Interactivo', description: 'Mira qué haremos en tu calle. Navegación directa en el portal.' },

          { day: 25, title: 'Acción en La Brea', type: 'Video Orgánico', description: 'Entrevista a Carlos sobre acciones de emergencia local.' },
          { day: 27, title: 'Firma de Compromiso', type: 'Transparencia', description: 'Compromiso de publicar el 100% de los gastos en el SIM.' },
          { day: 29, title: 'Turismo Máncora', type: 'Reel/TikTok', description: 'Abandono actual vs Inversión proyectada en el eje turístico.' },
          { day: 31, title: 'Cierre y Misión Junio', type: 'Video Cierre', description: 'Agradecimiento y nueva meta para la Comunidad de WhatsApp.' }
        ],
        content: [
          {
            label: 'Operación Diaria',
            text: '2 Historias diarias (Behind the Scenes) operadas por el equipo de prensa con celular en mano.',
          },
          {
            label: 'Regla de Oro',
            text: 'Cada post debe incluir un Call to Action (CTA) directo al registro en el SIM.',
          }
        ]
      },
      {
        id: 'mayo-2026-stories',
        type: 'plan',
        group: 'EJECUCIÓN',
        title: 'ESTRATEGIA DIARIA (STORIES)',
        subtitle: 'Conexión Orgánica y Detrás de Cámaras',
        stats: [
          { label: 'Historias/Día', value: '2 Min.', trend: 'up' },
          { label: 'Canales', value: 'IG/FB/WA', trend: 'up' }
        ],
        content: [
          {
            label: 'La Regla de Oro',
            text: 'CERO posteos muertos. Cada historia debe llevar un enlace al SIM o invitar a comentar.',
          },
          {
            label: 'Contenido Crudo',
            text: 'No requiere diseño. Arnulfo respondiendo preguntas rápidas o reuniones vecinales.',
          },
          {
            label: 'WhatsApp Status',
            text: 'Uso crítico de los estados para movilizar a la Comunidad de WhatsApp.',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-9',
        type: 'video',
        title: 'PRODUCCIÓN AUDIOVISUAL DEL MES',
        subtitle: 'Pauta Digital Estratégica para Mayo',
        content: [
          {
            label: 'Video 1: Ataque al Dolor',
            text: '"La Bomba de Tiempo en Negritos". Colegio José Pardo. Dirigido a Madres (FB).',
          },
          {
            label: 'Video 2: Solución Tecnológica',
            text: '"El Botón de Pánico Talara". Demostración de la APP. Público general (FB/TT).',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-10',
        type: 'machinery',
        title: 'DESPLIEGUE FÍSICO DEL MES',
        subtitle: 'La Calle: Captura de Datos en Mercados',
        content: [
          {
            label: 'Volantes de Captura',
            text: 'Primeros impresos con código QR vinculado directamente al SIM.',
          },
          {
            label: 'Flyer 1: Rescate Sanitario',
            text: 'Acción específica para La Brea con enfoque en salud pública.',
          },
          {
            label: 'Flyer 2: Talara Emprende',
            text: 'Captura de jóvenes emprendedores para la base de datos.',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-11',
        type: 'plan',
        group: 'RESULTADOS',
        title: 'METAS Y KPIs DE MAYO',
        subtitle: 'Lo que vamos a medir al 31 de Mayo',
        stats: [
          { label: 'Eficiencia de Gasto', value: '92%', trend: 'up' },
          { label: 'Costo por Registro', value: 'S/ 0.40', trend: 'down' }
        ],
        content: [
          { 
            label: 'Captación SIM', 
            text: 'Impacto directo: 1,000 simpatizantes registrados y validados en el sistema.' 
          },
          { 
            label: 'Estructura Electoral', 
            text: 'Activación de 50 voluntarios reales capacitados en el uso del SIM móvil.' 
          },
          { 
            label: 'Comunidad Digital', 
            text: 'Consolidación de 500 miembros activos en el canal oficial de WhatsApp.' 
          },
          { 
            label: 'Alcance Video', 
            text: '20,000 reproducciones mínimas de los videos estratégicos de choque.' 
          },
        ],
      },
    ],
  },
];
