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
    title: 'EL TARGET Y NUESTRA OFERTA REAL',
    subtitle: 'Transformaciones de Vida basadas en la Matriz 2026-2031',
    strategicContext: 'Jefa, ya no vendemos "apps" o tecnología por tecnología. Vendemos soluciones a los Dolores que quitan el sueño a los talareños. Cada arquetipo tiene una Oferta Real que Arnulfo garantiza.',
    stats: [
      { label: 'Población Objetivo', value: '45k', trend: 'up' },
      { label: 'Indecisión Estimada', value: '38%', trend: 'down' }
    ],
    content: [
      {
        label: '1. La Madre Protectora (30-55 años)',
        text: 'Dolor: Colapso del desagüe y falta de agua. Oferta: Agua 24/7 (95% cobertura) y construcción de la Planta de Tratamiento (PTAR) para acabar con los aniegos.',
      },
      {
        label: '2. El Joven Desencantado (18-28 años)',
        text: 'Dolor: Falta de certificación y espacios. Oferta: 40% de egresados con certificación técnica y creación de 5 Centros de Desarrollo Juvenil estratégicos.',
      },
      {
        label: '3. El Trabajador/Pescador (35-60 años)',
        text: 'Dolor: Abandono productivo y contaminación. Oferta: Talara Emprende (1,000 MYPES) y Modernización de Desembarcaderos.',
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
    id: 'general-slide-daily-ops',
    type: 'plan',
    group: 'GESTIÓN Y COMITÉ',
    title: 'EL TRABAJO DIARIO (HISTORIAS)',
    subtitle: 'Manejado por la Secretaría de Comunicaciones (Editores)',
    strategicContext: 'Jefa, esta es la "Ley de Campo" para el equipo de Prensa. No se trata de hacer arte, se trata de estar presentes en el celular del votante las 24 horas con un flujo que genere confianza y sensación de triunfo.',
    content: [
      {
        label: 'Mañanas: El Despertar de Talara',
        text: 'Foto de Arnulfo o el equipo en la calle/mercado con un volante QR. Texto: "Empezando temprano por Talara". Genera sensación de trabajo duro.',
      },
      {
        label: 'Tardes: Nutrición de Propuestas',
        text: 'Reposteo de las notas creadas en el "Centro de Noticias" de nuestra web SIM. Llevamos tráfico a nuestra casa digital.',
      },
      {
        label: 'Noches: El Tren Ganador',
        text: 'Capturas de la plataforma SIM mostrando cómo crece el número de simpatizantes (borrando datos sensibles). Nadie quiere votar por un perdedor.',
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

export const OPERATIONAL_PROTOCOLS: SlideContent[] = [
  {
    id: 'op-slide-1',
    type: 'diagnosis',
    group: 'SINERGIA',
    title: 'LA CADENA DE TRABAJO (QUIÉN HACE QUÉ)',
    subtitle: 'División por Grupos: Cerebro vs. Fuerza de Campo',
    strategicContext: 'Jefa, para que todo funcione como un reloj, dividiremos el trabajo en dos grupos claros. El equipo de Estrategia (nosotros) y el equipo de Apoyo (las Secretarías).',
    content: [
      {
        label: 'Tradicional (Pies y Manos)',
        text: 'Las Secretarías: Su trabajo es la calle. Hablar, repartir volantes y llevar gente. Ellos NO graban ni editan.',
      },
      {
        label: 'Estrategia (Cerebro e Imagen)',
        text: 'Wilmer y Arnulfo: Wilmer es el único que graba, edita y maneja el SIM. Arnulfo es la voz y el rostro oficial.',
      },
    ],
  },
  {
    id: 'op-slide-2',
    type: 'plan',
    group: 'SINERGIA',
    title: 'SINERGIA: EL CÍRCULO VICTORIOSO (FLUJO)',
    subtitle: 'De la Grabación a la Captura del Dato',
    strategicContext: 'Jefa, así funciona el engranaje: Wilmer graba un video potente, las Secretarías lo llevan a la calle en los volantes QR, el vecino se registra y la Secretaría de la Mujer lo recibe con cariño en WhatsApp. El ciclo se cierra: capturamos al votante y no lo soltamos.',
    content: [
      { label: '1. Producción', text: 'Wilmer graba video potente de Arnulfo (Ej. Negritos).' },
      { label: '2. Despliegue', text: 'Organización y Juventudes salen a la calle con volantes QR.' },
      { label: '3. Captura', text: 'El vecino ve el video en su celular y se registra en el SIM.' },
      { label: '4. Recepción', text: 'Secretaría de la Mujer los recibe en el WhatsApp oficial.' },
      { label: '5. Victoria', text: 'El Círculo se cierra: El video lo trajo, el equipo lo mantiene.' },
    ],
  },
  {
    id: 'op-slide-sec-1',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '1. ORGANIZACIÓN (El que cuida los grupos)',
    subtitle: 'Misión: Que nadie se quede sentado',
    content: [
      {
        label: 'Reparto de Paquetes',
        text: 'Recibir los volantes y entregárselos a los muchachos que salen a caminar.',
      },
      {
        label: 'Guía de Campo',
        text: 'Llevar a los grupos de gente a los mercados y plazas de Talara.',
      },
      {
        label: 'Lista de Amigos',
        text: 'Anotar en un papel el nombre de los que ayudan cada día para saber que cumplen.',
      },
      {
        label: 'Control de QR',
        text: 'Asegurarse de que todos estén repartiendo los papelitos con el "dibujo cuadradito" (QR).',
      },
    ],
  },
  {
    id: 'op-slide-sec-2',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '2. PRENSA Y COMUNICACIÓN (El que avisa)',
    subtitle: 'Misión: Apoyo Logístico a la Imagen',
    content: [
      {
        label: 'Silencio en Grabación',
        text: 'Acompañar a Wilmer y Arnulfo y pedirle a la gente que guarde silencio un ratito al grabar.',
      },
      {
        label: 'Carga de Equipos',
        text: 'Cargar las luces o el trípode que Wilmer necesite para que los videos salgan bonitos.',
      },
      {
        label: 'Ruta de Radios',
        text: 'Ir a las radios locales a dejar un papelito con las noticias de Arnulfo de la semana.',
      },
    ],
  },
  {
    id: 'op-slide-sec-3',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '3. JUVENTUDES (Muchachos con energía)',
    subtitle: 'Misión: Banderas y Tecnología en la Calle',
    content: [
      {
        label: 'Banderazo de Barrio',
        text: 'Ponerse su polo del partido y caminar por los barrios con nuestras banderas.',
      },
      {
        label: 'Maestros del QR',
        text: 'Enseñar a la gente mayor cómo poner su teléfono frente al "dibujo cuadradito" (QR) para ver el video.',
      },
      {
        label: 'Muro Amigo',
        text: 'Pedir permiso en las casas de los amigos para pegar un afiche en la puerta o ventana.',
      },
    ],
  },
  {
    id: 'op-slide-sec-4',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '4. MUJER Y ASUNTOS SOCIALES (Las señoras)',
    subtitle: 'Misión: La Conversación que Convence',
    content: [
      {
        label: 'Visita de Vecinas',
        text: 'Contar a las mamás en comedores que Arnulfo va a arreglar el problema del agua.',
      },
      {
        label: 'Cariño en WhatsApp',
        text: 'Estar atentas al celular para responder con palabras cariñosas a los que preguntan por el SIM.',
      },
      {
        label: 'Tardes de Cafecito',
        text: 'Organizar reuniones en casas para que Arnulfo converse con 5 o 10 mamás del barrio.',
      },
    ],
  },
  {
    id: 'op-slide-sec-5',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '5. ASUNTOS ELECTORALES (Cuidar los votos)',
    subtitle: 'Misión: Orden y Vigilancia',
    content: [
      {
        label: 'Limpieza de Listas',
        text: 'Mirar la lista que Wilmer saca del SIM y avisar si alguien vive en otro sitio o los datos están mal.',
      },
      {
        label: 'Búsqueda de Valientes',
        text: 'Buscar personas de mucha confianza para que cuenten los votos el día de la elección.',
      },
    ],
  },
  {
    id: 'op-slide-sec-6',
    type: 'machinery',
    group: 'MANUAL DE TAREAS',
    title: '6. ECONOMÍA (El que guarda las cuentas)',
    subtitle: 'Misión: Cuidar cada Solcito',
    content: [
      {
        label: 'Libro de Gastos',
        text: 'Anotar en un cuaderno cada solcito que gastamos (volantes, pasajes, cafés).',
      },
      {
        label: 'Papelito manda',
        text: 'Pedir siempre un recibo o boleta de todo lo que compramos para que Arnulfo sepa en qué se invierte.',
      },
    ],
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
        subtitle: 'OP. ENGRANAJE: Posicionamiento y Captura de Datos',
        strategicContext: 'Jefa, este mes operamos bajo la "Regla de Oro": Todo contenido, por más bonito que sea, solo sirve si nos trae el nombre y teléfono del votante a la web (SIM) para capturar el dato. Estamos engranando la indignación con nuestra solución tecnológica.',
        stats: [
          { label: 'Presupuesto Pauta', value: 'S/ 200', trend: 'up' },
          { label: 'Regla de Oro', value: 'Data/SIM', trend: 'up' }
        ],
        content: [
          { 
            label: 'Enfoque: Rescate Ambiental', 
            text: 'Golpear la indignación sobre el colapso de agua y desagüe para ofrecer la PTAR como solución.' 
          },
          { 
            label: 'Enfoque: Revolución Económica', 
            text: 'Captar al sector emprendedor y pesquero con el plan "Talara Emprende" y modernización de desembarcaderos.' 
          },
          { 
            label: 'Enfoque: Seguridad Estructural', 
            text: 'Diferenciarnos de parches tecnológicos: Proponer Centros de Desarrollo Juvenil para atacar la raíz del crimen.' 
          }
        ],
      },
      {
        id: 'mayo-2026-calendar',
        type: 'calendar',
        group: 'EJECUCIÓN',
        title: 'CALENDARIO DE CONTENIDOS: MAYO',
        subtitle: 'Parrilla Táctica - Operación Engranaje',
        stats: [
          { label: 'Frecuencia', value: '4/Semana', trend: 'up' },
          { label: 'Pauta Lunes', value: 'S/ 50.00', trend: 'up' }
        ],
        calendarData: [
          // SEMANA 1 (4 al 10 de Mayo): Rescate Ambiental y Saneamiento
          { day: 4, title: 'Agua Digna y Mar Limpio', type: 'Video Pautado', description: 'Arnulfo frente a un aniego. Meta: 95% agua y PTAR. Pilar: Solución (MOFU).', pauta: 'S/ 50' },
          { day: 6, title: 'Tolerancia Cero Contaminación', type: 'Gráfica', description: 'Remediación de 5,000 ha de pasivos y erradicación de botaderos. Pilar: Autoridad (TOFU).' },
          { day: 8, title: 'El Desastre en la Calle', type: 'Reel/TikTok', description: 'Cámara en mano en zonas vulneras exponiendo urgencia de drenajes. Pilar: Empatía.' },
          { day: 10, title: 'Súmate al Rescate', type: 'Conversión', description: 'Link directo al SIM. Mensaje: "La solución empieza aquí. Regístrate". Pilar: Respuesta Directa.' },
          
          // SEMANA 2 (11 al 17 de Mayo): Revolución Económica
          { day: 11, title: 'Talara Emprende', type: 'Video Pautado', description: 'Lanzamiento del programa provincial. MYPES sin petróleo. Pilar: Solución (MOFU).', pauta: 'S/ 50' },
          { day: 13, title: 'Dignidad al Pescador', type: 'Carrusel', description: 'Centros de Desarrollo Productivo en Pesca y modernización. Pilar: Autoridad (TOFU).' },
          { day: 15, title: 'La Voz del Trabajador', type: 'Reel/TikTok', description: 'Testimonio de comerciante validando estancamiento y compromiso. Pilar: Prueba Social.' },
          { day: 17, title: '¿Eres Emprendedor?', type: 'Conversión', description: '"Se acabaron las trabas. Conoce el plan y preinscríbete". Link directo al SIM. Pilar: Respuesta Directa.' },

          // SEMANA 3 (18 al 24 de Mayo): Seguridad y Juventud
          { day: 18, title: 'La Raíz del Problema', type: 'Video Pautado', description: '5 Centros de Desarrollo Juvenil vs parches tecnológicos fallidos. Pilar: Solución (MOFU).', pauta: 'S/ 50' },
          { day: 20, title: 'Educación que da Trabajo', type: 'Gráfica', description: 'Infografía meta: 40% egresados con certificación técnica. Pilar: Autoridad (TOFU).' },
          { day: 22, title: 'En el Barrio', type: 'Reel/TikTok', description: 'Conversando con madres sobre delincuencia. Escucha activa. Pilar: Empatía.' },
          { day: 24, title: 'Únete a la Fuerza Joven', type: 'Conversión', description: 'Llamado a jóvenes 18-30 para inscribirse como voluntarios digitales en el SIM. Pilar: Respuesta Directa.' },

          // SEMANA 4 (25 al 31 de Mayo): Municipio Moderno
          { day: 25, title: 'Fin de la Burocracia', type: 'Video Pautado', description: 'Digitalización 100% de servicios (TUPA) para eliminar coimas. Pilar: Solución (MOFU).', pauta: 'S/ 50' },
          { day: 27, title: 'Transparencia Total', type: 'Contraste', description: 'Meta: Publicar 100% de gastos vs gestión cerrada. Pilar: Autoridad (TOFU).' },
          { day: 29, title: 'Resumen del Mes', type: 'Video Cierre', description: 'Behind the Scenes ágil: entrega de volantes QR y visitas críticas. Pilar: Prueba Social.' },
          { day: 31, title: 'El Batallón Digital Crece', type: 'Celebración', description: 'Celebrando registros obtenidos y empuje final: "Faltas tú". Pilar: Respuesta Directa.' }
        ],
        content: [
          {
            label: 'Regla de Oro',
            text: 'Todo contenido debe derivar tráfico a la web (SIM) para capturar el dato.',
          },
          {
            label: 'Frecuencia Estratégica',
            text: '4 Publicaciones en Feed/Reels por semana + Historias de campo diarias.',
          }
        ]
      },
      {
        id: 'mayo-2026-stories',
        type: 'plan',
        group: 'EJECUCIÓN',
        title: 'TRABAJO DIARIO (STORIES)',
        subtitle: 'Gestión de Secretaría de Comunicaciones',
        strategicContext: 'Jefa, las historias no necesitan diseño pro, necesitan REALIDAD. El objetivo es que la gente vea que Arnulfo está en la calle mientras los otros están en sus oficinas.',
        stats: [
          { label: 'Mañana', value: 'QR/Calle', trend: 'up' },
          { label: 'Noche', value: 'Tren Ganador', trend: 'up' }
        ],
        content: [
          {
            label: 'Mañanas (Calle/Mercado)',
            text: 'Foto de Arnulfo o el equipo en la calle con un volante QR. Texto: "Empezando temprano por Talara".',
          },
          {
            label: 'Tardes (Noticias SIM)',
            text: 'Reposteo de las notas creadas en el "Centro de Noticias" de nuestra web oficial SIM.',
          },
          {
            label: 'Noches (Tren Ganador)',
            text: 'Capturas del crecimiento del SIM (datos borrados) para generar urgencia de pertenencia.',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-9',
        type: 'video',
        title: 'PRODUCCIÓN AUDIOVISUAL: MAYO',
        subtitle: 'Inversión Total Mensual: S/ 200',
        strategicContext: 'Pautamos S/ 50 cada lunes para asegurar que el mensaje de "Solución" llegue a todo Talara. No tiramos la plata, la invertimos en bases de datos.',
        content: [
          {
            label: 'Semana 1: Saneamiento',
            text: '"Agua Digna y Mar Limpio". Arnulfo exponiendo meta de 95% cobertura.',
          },
          {
            label: 'Semana 2: Empleo MYPE',
            text: '"Talara Emprende". Programa provincial para formalizar 1,000 MYPES.',
          },
          {
            label: 'Semana 3: Seguridad',
            text: '"La Raíz del Problema". Centros de Desarrollo Juvenil para bajar el crimen.',
          },
          {
            label: 'Semana 4: Gestión',
            text: '"El Fin de la Burocracia". Digitalización total del TUPA para matar la coima.',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-10',
        type: 'machinery',
        title: 'OPERACIÓN TERRESTRE (MAY)',
        subtitle: 'Captura de Datos QR en Mercados',
        content: [
          {
            label: 'Volante QR Rescate',
            text: 'Enfoque ambiental para capturar votos en zonas sin agua.',
          },
          {
            label: 'Volante QR Emprende',
            text: 'Enfoque en comerciantes y jóvenes para integrarlos al SIM.',
          },
        ],
      },
      {
        id: 'mayo-2026-slide-11',
        type: 'plan',
        group: 'RESULTADOS',
        title: 'METAS "OPERACIÓN ENGRANAJE"',
        subtitle: 'Lo que vamos a medir al cierre de Mayo',
        stats: [
          { label: 'Eficiencia Gasto', value: '100%', trend: 'up' },
          { label: 'Tasa Conversión', value: 'Alta', trend: 'up' }
        ],
        content: [
          { 
            label: 'Registros SIM', 
            text: 'Mínimo 1,000 nuevos simpatizantes con perfiles validados.' 
          },
          { 
            label: 'Activismo Digital', 
            text: 'Consolidación de la base de jóvenes (18-30) para defensa en junio.' 
          },
          { 
            label: 'Dominio de Agenda', 
            text: 'Hacer que el "colapso de agua" sea el tema central, con la PTAR como única salida.' 
          }
        ],
      },
    ],
  },
];
