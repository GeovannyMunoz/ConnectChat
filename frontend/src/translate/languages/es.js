const messages = {
	es: {
		translations: {
			signup: {
				title: "Registro",
				toasts: {
					success:"¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
					fail: "Error creando el usuario. Verifica la data reportada.",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Regístrate",
					login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
				},
			},
			login: {
				title: "Inicio de Sesión",
				form: {
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Ingresa",
					register: "¿No tienes cuenta? ¡Regístrate!",
				},
			},
			plans: {
			 	form: {
			   		name: "Nombre",
					users: "Usuarios",
					connections: "Conexiones",
					campaigns: "Masivo",
					queue:"Depto.",
					value: "Valor",
					schedules: "Horarios",
					internalChat: "Chat Interno",
					externalAPI: "API Externa",
					kanban: "Kanban",
					openAi: "Open.Ai",
					integrations: "Integraciones",
					enabled: "Activado",
					disabled: "Desactivado",
					clear: "Cancelar",
					delete: "Eliminar",
					save: "Guardar",
					yes: "Si",
					no: "No",
					money: "$",
        	 	},
      		},
      		companies: {
        	  title: "Registrar Empresa",
               form: {
			   name: "Nombre de la Empresa",
			   plan: "Plano",
			   token: "Token",
			   submit: "Registrar",
			   success: "Empresa creada con éxito!",
        	 },
      		},
			auth: {
				toasts: {
					success: "¡Inicio de sesión exitoso!",
				},
				token: "Token",
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Tickets hoy: ",
					},
				},
				operationalSummary: {
					inAttendance: {
					  title: "En servicio"
					},
					waiting: {
					  title: "En espera"
					},
					closed: {
					  title: "Finalizados"
					},
					newContacts:{
						title: "Nuevos Contactos"
					},
					attendanceTime:{
						title: "Tiempo Atendimento"
					},
					waitingTime:{
						title: "Tiempo Espera"
					},
				},
				filter: {
					helperText: "Seleccione el período deseado",
					filterDate: "Filtrar por fecha",
					filterPeriod: "Filtrar por Período",
					filterType: {
						title: "Tipo de Filtro",
					},
					startDate: {
						title: "Fecha Inicio",
					},
					endDate: {
						title: "Fecha Fin",
					},
					period: {
						title: "Período",
					},
					selectedNone:{
						title: "Ninguno seleccionado"
					},
					buttonFilter:{
						title: "FILTRAR"
					}
				},
				table:{
					name: "Nombre",
					reviews: "Reseñas",
					attendanceTime: "Tiempo de Atendimento",
					status: "Status (Actual)"
				}
			},
			connections: {
				title: "Conexiones",
				toasts: {
					deleted:"¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
					disconnectTitle: "Desconectar",
					disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
				},
				buttons: {
					add: "Agrega WhatsApp",
					disconnect: "Desconectar",
					tryAgain: "Inténtalo de nuevo",
					qrcode: "QR CODE",
					newQr: "Nuevo QR CODE",
					connecting: "Conectando",
				},
				toolTips: {
					disconnected: {
						title: "No se pudo iniciar la sesión de WhatsApp",
						content: "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
					},
					qrcode: {
						title: "Esperando la lectura del código QR",
						content: "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
					},
					connected: {
						title: "Conexión establecida",
					},
					timeout: {
						title: "Se perdió la conexión con el teléfono celular",
						content:"Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
					},
				},
				table: {
					name: "Nombre",
					status: "Estado",
					lastUpdate: "Última Actualización",
					default: "Por Defecto",
					actions: "Acciones",
					session: "Sesión",
					number: "Número",
					perfilName: "Perfil",
				},
			},
			whatsappModal: {
				title: {
					add: "Agrega WhatsApp",
					edit: "Edita WhatsApp",
				},
				form: {
					name: "Nombre",
					default: "Por Defecto",
					sendIdQueue: "Departamentos",
					timeSendQueue: "Redireccionar para el sector en X minutos",
					queueRedirection: "Redireccionamiento de departamento",
					queueRedirectionDesc: "Seleccione un departamento para los contactos que no tienen uno para ser redirigidos",
					prompt: "Prompt",
					transfer: "Transferir despues x (minutos)",
					transferQueue: "Departamento de Tranferencia",
					maxUseBotQueues: "Enviar bot x veces",
					timeUseBotQueues: "Intervalo en minutos entre envíos de bots",
					expiresTicket: "Cerrar chats abiertos después de x minutos",
					expiresInactiveMessage: "Mensaje de cierre por inactividad",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "WhatsApp guardado satisfactoriamente.",
			},
			qrCode: {
				message: "Lée el código QR para empezar la sesión.",
			},
			contacts: {
				title: "Contactos",
				toasts: {
					deleted: "¡Contacto borrado satisfactoriamente!",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
					deleteTitle: "Borrar",
					importTitlte: "Importar contactos",
					deleteMessage: "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
					importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
				},
				buttons: {
					import: "Importar Contactos",
					add: "Agregar Contacto",
				},
				table: {
					name: "Nombre",
					whatsapp: "WhatsApp",
					email: "Correo Electrónico",
					actions: "Acciones",
				},
			},
			kanba:{
				openTicket: "Chats Abiertos",
				ticketNumber: "Chat n° ",
				viewticket: "Ver Chat"
			},
			task:{
				newTask: "Nueva Tarea",
				buttons: {
					add: "AÑADIR",
					edit: "GUARDAR"
				}
			},
			internalChat:{
				button: "Nuevo",
				modalTitle: "Conversación",
				title: "Título", 
				users: "Usuarios",
				buttonSave: "Guardar",
				buttonClose: "Cerrar"
			},
			queueIntegrationModal: {
				title: {
				  add: "Agregar proyecto",
				  edit: "Editar proyecto",
				},
				form: {
				  id: "ID",
				  type: "Tipo",
				  name: "Nombre",
				  projectName: "Nombre del proyecto",
				  language: "Idioma",
				  jsonContent: "JsonContent",
				  urlN8N: "URL",
				  typebotSlug: "Typebot - Slug",
				  typebotExpires: "Tiempo en minutos para que caduque una conversación",
				  typebotKeywordFinish: "Palabra para finalizar el ticket",
				  typebotKeywordRestart: "Palabra para reiniciar el flujo.",
				  typebotRestartMessage: "Mensaje al reiniciar la conversación",
				  typebotUnknownMessage: "Mensaje de opción no válida",
				  typebotDelayMessage: "Intervalo (ms) entre mensajes",   
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				  test: "Probar Bot",
				},
				messages: {
					testSuccess: "¡Integración probada exitosamente!",
					addSuccess: "La integración se agregó exitosamente.",
					editSuccess: "Integración editada exitosamente.",
				},
			  },
			  promptModal: {
				form: {
				  name: "Nombre",
				  prompt: "Prompt",
				  voice: "Voz",
				  max_tokens: "Tokens máximos en respuesta",
				  temperature: "Temperatura",
				  apikey: "API Key",
				  max_messages: "Mensajes máximos en el historial",
				  voiceKey: "Clave API de voz",
				  voiceRegion: "Región de voz",
				},
				success: "Prompt guardado exitosamente!",
				title: {
				  add: "Agregar Prompt",
				  edit: "Editar Prompt",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
			  },
			  prompts: {
				title: "Prompts",
				table: {
				  name: "Nombre",
				  queue: "Departamento",
				  max_tokens: "Máximo Tokens de Respuesta",
				  actions: "Acciones",
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir!",
				},
				buttons: {
				  add: "Agregar Prompt",
				},
			  },
			contactModal: {
				title: {
					add: "Agregar contacto",
					edit: "Editar contacto",
				},
				form: {
					mainInfo: "Detalles del contacto",
					extraInfo: "Información adicional",
					name: "Nombre",
					number: "Número de Whatsapp",
					email: "Correo Electrónico",
					extraName: "Nombre del Campo",
					extraValue: "Valor",
					whatsapp: "Conexión de origen: "
				},
				buttons: {
					addExtraInfo: "Agregar información",
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Contacto guardado satisfactoriamente.",
			},
			queueModal: {
				title: {
					add: "Agregar Dpto/Sector",
					edit: "Editar Dpto/Sector",
				},
				subtitle:{
					queue: "Datos Departamento",
					schedules:"Horarios de servicio"
				},
				form: {
					name: "Nombre",
					color: "Color",
					greetingMessage: "Mensaje de saludo",
					complationMessage: "Mensaje de finalización",
					outOfHoursMessage: "Mensaje fuera de horario",
					ratingMessage: "Mensaje de calificación",
					token: "Token",
					orderQueue: "Orden de sector (Bot)",
					integrationId: "Integración",
				},
				buttons: {
					okAdd: "Añadir",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				bot:{
					options: "Opciones",
					add:"Agregar",
					optionTitle: "Título de la opción",
					noTitle: "Título no definido",
					optiontext:"Digite el texto de la opción"
				}
			},
			userModal: {
				title: {
					add: "Agregar usuario",
					edit: "Editar usuario",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
					profile: "Perfil",
					whatsApp: "Conexión predeterminada"
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Usuario guardado satisfactoriamente.",
			},
			scheduleModal: {
				title: {
				  add: "Nuevo Agendamiento",
				  edit: "Editar Agendamiento",
				},
				form: {
				  body: "Mensaje",
				  contact: "Contacto",
				  sendAt: "Fecha del Agendamiento",
				  sentAt: "Fecha del Envio",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
				success: "Agendamiento guardado satisfactoriamente.",
			  },
			tagModal: {
				title: {
				  add: "Nuevo Tag",
				  edit: "Editar Tag",
				},
				form: {
				  name: "Nombre",
				  color: "Color",
				},
				buttons: {
				  okAdd: "Agregar",
				  okEdit: "Guardar",
				  cancel: "Cancelar",
				},
				success: "Tag guardado satisfactoriamente.",
			  },
			chat: {
				noTicketMessage: "Selecciona un chat para empezar a chatear.",
			},
			uploads: {
				titles: {
				  titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
				  titleFileList: "Lista de archivos"
				},
			  },
			ticketsManager: {
				buttons: {
					newTicket: "Nuevo",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Departamentos",
			},
			tickets: {
				toasts: {
					deleted: "El ticket en el que estabas ha sido borrado.",
				},
				notification: {
					message: "Mensaje de",
				},
				tabs: {
					open: { title: "Abiertos" },
					closed: { title: "Resueltos" },
					search: { title: "Buscar" },
				},
				search: {
					placeholder: "Buscar tickets y mensajes.",
				},
				buttons: {
					showAll: "Todos",
				},
			},
			transferTicketModal: {
				title: "Transferir Ticket",
				fieldLabel: "Escriba para buscar usuarios",
				fieldQueueLabel: "Transferir para sector",
				fieldQueuePlaceholder: "Seleccione un sector",
				noOptions: "No se encontraron usuarios con ese nombre",
				buttons: {
					ok: "Transferir",
					cancel: "Cancelar",
				},
			},
			ticketsList: {
				pendingHeader: "En espera",
				assignedHeader: "Mis Chats",
				noTicketsTitle: "¡Nada acá!",
				noTicketsMessage:"No se encontraron chats con este estado o término de búsqueda",
				noQueue: "SIN DPTO.",
				buttons: {
				  accept: "Acceptar",
				  closed: "Finalizar",
         		  reopen: "Reabrir"
				},
			},
			previewTicketModal:{
				buttons: {
					closed: "Cerrar",
				},
			},
			newTicketModal: {
				title: "Crear Chat",
				fieldLabel: "Escribe para buscar un contacto",
				add: "Añadir",
				select:{
					queue: "Seleccione un Departemento",
					connection: "Seleccione una Conexión"
				},
				buttons: {
					ok: "Guardar",
					cancel: "Cancelar",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard",
					connections: "Conexiones",
					tickets: "Chats",
					quickMessages: "Respuestas Rapidas",
					task:"Tareas",
					contacts: "Contactos",
					queues: "Dpto & Chatbot",
					tags: "Tags",
					administration: "Administración",
					users: "Usuarios",
					settings: "Configuraciones",
					helps: "Ayuda",
					messagesAPI: "API",
					schedules: "Programaciones",
					campaigns: "Masivos",
					annoucements: "Informativos",
					chats: "Chat Interno",
					financeiro: "Financiero",
					files: "Lista de archivos",
					prompts: "Open.Ai",
					queueIntegration: "Integraciones",
					listCampaigns:{
						campaigns: "Campañas",
						contactLists: "Contactos",
						campaignsConfig: "Configuraciones"
					},
				},
				appBar: {
					user: {
						profile: "Perfil",
						logout: "Cerrar Sesión",
					},
				},
			},
			queueIntegration: {
				title: "Integraciones",
				table: {
				  id: "ID",
				  type: "Tipo",
				  name: "Nombre",
				  projectName: "Nombre del proyecto",
				  language: "Idioma",
				  lastUpdate: "Ultima actualización",
				  actions: "Acciones",
				},
				buttons: {
				  add: "Agregar proyecto",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage:"¿Estás seguro? ¡Esta acción no se puede revertir! y se eliminará de las colas y conexiones vinculadas",
				},
			  },
			files: {
				title: "Lista de archivos",
				table: {
				  name: "Nombre",
				  contacts: "Contactos",
				  actions: "Acción",
				},
				toasts: {
				  deleted: "¡Lista eliminada exitosamente!",
				  deletedAll: "¡Todas las listas se han eliminado correctamente!",
				},
				buttons: {
				  add: "Agregar",
				  deleteAll: "Eliminar Todos",
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteAllTitle: "Eliminar Todos",
				  deleteMessage: "¿Estás seguro de que quieres eliminar esta lista?",
				  deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
				},
			  },
			messagesAPI: {
				title: "API",
				subtitle: "Documentación para enviar mensajes.",
				methods:{
					title: "Métodos de Envio",
					text: "Mensajes de texto",
					descriptionText: "A continuación se muestra la lista de información necesaria para enviar mensajes de Texto:",
					media: "Mensajes de multimedia",
					descriptionMedia: "A continuación se muestra la lista de información necesaria para enviar mensajes Multimedia:",
					file: "archivo"
				},
				instructions:{
					title: "Instrucciones",
					subtitle: "Observaciones importantes",
					instruction1: "Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes.",
					instruction1_1: "Para registrarse, acceda al menú Conexiones, haga clic en el botón de edición de la conexión e inserte el token en el campo correspondiente.",
					instruction2: "El número de envío no  caracteres especiales y debe constar de:",
					instruction2_1: "Código del país",
					instruction2_2: "Número"
				},
				textMessage: {
				  number: "Número",
				  body: "Mensaje",
				  token: "Token registrado",
				},
				mediaMessage: {
				  number: "Número",
				  body: "Nombre del archivo",
				  media: "Archivo",
				  token: "Token registrado",
				},
				test:"Test de envío"
			},
			invoices:{
				title:"Facturas",
				table:{
					id: "Id",
					details: "Detalles", 
					amount: "Valor",
					dueDate: "Fecha de expiración",
					status: "Estado",
					action: "Acción"
				},
				modal:{
					title: "¡Falta poco!",
					return: "REGRESAR",
					summary: "Resumen de suscripción",
					details: "Detalles del plan",
					users: "Usuario",
					billing: "Facturación: Mensual",
					total: "Total"
				}

			},
			notifications: {
				noTickets: "Sin notificaciones.",
			},
			quickMessages: {
				title: "Respuestas Rapidas",
				searchPlaceholder: "Buscar...",
				noAttachment: "Sin adjunto",
				confirmationModal: {
				  deleteTitle: "Eliminación",
				  deleteMessage: "¡Esta acción es irreversible! ¿Quieres continuar?",
				},
				buttons: {
				  add: "Agregar",
				  attach: "Adjuntar archivo",
				  cancel: "Cancelar",
				  edit: "Editar",
				},
				toasts: {
				  success: "¡Atajo agregado exitosamente!",
				  deleted: "¡Atajo eliminado exitosamente!",
				},
				dialog: {
				  title: "Mensaje Rapida",
				  shortcode: "Atajo",
				  message: "Respuesta",
				  save: "Guardar",
				  cancel: "Cancelar",
				  geral: "Permitir editar",
				  add: "Agregar",
				  edit: "Editar",
				  visao: "Permitir ver",
				},
				table: {
				  shortcode: "Atajo",
				  message: "Mensaje",
				  actions: "Acción",
				  mediaName: "Nombre del Archivo",
				  status: "Status",
				},
			  },
			messageVariablesPicker: {
				label: "Variables disponibles",
				vars: {
				  contactFirstName: "Primer Nombre",
				  contactName: "Nombre",
				  greeting: "Saludos",
				  protocolNumber: "Protocolo",
				  date: "Fecha",
				  hour: "Hora",
				},
			  },
			contactLists: {
				title: "Listas de Contactos",
				table: {
				  name: "Nombre",
				  contacts: "Contactos",
				  valid: "Validos",
				  invalid: "Inválidos",
				  actions: "Acción",
				},
				buttons: {
				  add: "Nueva Lista",
				},
				dialog: {
				  name: "Nombre",
				  company: "Empresa",
				  okEdit: "Editar",
				  okAdd: "Agregar",
				  add: "Agregar",
				  edit: "Editar",
				  cancel: "Cancelar",
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  deleted: "Registro eliminado",
				},
			},
			contactListItems: {
				title: "Contactos",
				searchPlaceholder: "Busqueda",
				buttons: {
				  add: "Nuevo",
				  lists: "Listas",
				  import: "Importar",
				},
				dialog: {
				  name: "Nombre",
				  number: "Numero",
				  whatsapp: "Whatsapp",
				  email: "Correo",
				  okEdit: "Editar",
				  okAdd: "Agregar",
				  add: "Agregar",
				  edit: "Editar",
				  cancel: "Cancelar",
				},
				table: {
				  name: "Nombre",
				  number: "Numero",
				  whatsapp: "Whatsapp",
				  email: "Correo",
				  actions: "Acción",
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage: "Esta acción no se puede revertir",
				  importMessage: "¿Quieres importar contactos desde esta hoja de cálculo?",
				  importTitlte: "Importar",
				},
				toasts: {
				  deleted: "Registro Eliminado",
				},
			  },
			campaigns: {
				title: "Campañas",
				searchPlaceholder: "Busca",
				buttons: {
				  add: "Nueva Campaña",
				  contactLists: "Listas de Contactos",
				},
				table: {
				  name: "Nombre",
				  whatsapp: "Conexión",
				  contactList: "Lista de Contactos",
				  status: "Status",
				  scheduledAt: "Agendamientos",
				  completedAt: "Concluida",
				  confirmation: "Confirmación",
				  actions: "Acción",
				},
				dialog: {
				  new: "Nueva Campaña",
				  update: "Editar Campaña",
				  readonly: "Solo Visualización",
				  form: {
					name: "Nombre",
					message1: "Mensaje",
					message2: "Mensaje 2",
					message3: "Mensaje 3",
					message4: "Mensaje 4",
					message5: "Mensaje 5",
					confirmationMessage1: "Mensaje de Confirmación",
					confirmationMessage2: "Mensaje de Confirmación 2",
					confirmationMessage3: "Mensaje de Confirmación 3",
					confirmationMessage4: "Mensaje de Confirmación 4",
					confirmationMessage5: "Mensaje de Confirmación 5",
					messagePlaceholder: "Contenido del Mensaje",
					whatsapp: "Conexión",
					status: "Status",
					scheduledAt: "Agendamiento",
					confirmation: "Confirmación",
					contactList: "Lista de Contacto",
					tagList: "Lista de Tags",
					fileList: "Lista de Archivos",
					selected: "Ninguno"
				  },
				  buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar Disparos",
					restart: "Reiniciar Disparos",
					close: "Cerrar",
					attach: "Adjuntar Archivo",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  success: "Operación realizada con éxito",
				  cancel:  "Campaña cancelada",
				  restart: "Campaña reiniciada",
				  deleted: "Registro eliminado",
				},
				report:{
					title: "Reporte de ",
					validContacts: "Contactos Válidos",
					requestedConfirmations: "Confirmaciones Solicitadas",
					confirmations: "Confirmaciones",
					delivered: "Entregados",
					connection: "Conexión",
					contactList: "Lista de Contactos",
					appointment: "Agendamiento",
					completion: "Conclusión",
					download: "Descargar Reporte"
				},
				settings:{
					title: "Configuraciones de Campaña",
					subtitle: "Intervalos",
					randomDispatchInterval: "Intervalo de Disparo",
					largerIntervalAfter: "Intervalo Mayor Después",
					largerDispatchInterval: "Intervalo Mayor de Disparo",
					addVarible: "Agregar Variable",
					save: "Guardar",
					shortcut: "Atajo",
					content: "Contenido",
					add:"Adicionar",
					close:"Cerrar",
					success: "Configuraciones guardadas",
					noInterval: "Sin intervalo",
					second: "segundo",
					seconds: "segundos"
				}
			  },
			announcements: {
				active: 'Activo',
				inactive: 'Inactivo',
				title: "Informativos",
				searchPlaceholder: "Busqeuda",
				buttons: {
				  add: "Nuevo Informativo",
				  contactLists: "Listas de Informativos",
				},
				table: {
				  priority: "Prioridad",
				  title: "Titulo",
				  text: "Texto",
				  mediaName: "Archivo",
				  status: "Status",
				  actions: "Acciones",
				},
				dialog: {
				  edit: "Edición del Informativo",
				  add: "Nuevo Informativo",
				  update: "Editar Informativo",
				  readonly: "Apenas Visualización",
				  form: {
					priority: "Prioridad",
					title: "Titulo",
					text: "Texto",
					mediaPath: "Archivo",
					status: "Status",
				  },
				  buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar",
					close: "Cerrar",
					attach: "Adjuntar Archivo",
				  },
				},
				confirmationModal: {
				  deleteTitle: "Eliminar",
				  deleteMessage: "Esta acción no se puede revertir.",
				},
				toasts: {
				  success: "La operación se realizó con éxito",
				  deleted: "Registro eliminado",
				},
			  },
			campaignsConfig: {
				title: "Configuraciones de Campañaas",
			  },
			queues: {
				title: "Departamentos & Chatbot",
				table: {
					name: "Nombre",
					color: "Color",
					greeting: "Mensaje de saludo",
					actions: "Comportamiento",
					orderQueue: "Ordenación del Sector (bot)",
				},
				buttons: {
					add: "Agregar cola",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage:
						"¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
				},
			  },
			queueSelect: {
					inputLabel: "Departamentos",
			  },
			users: {
					title: "Usuarios",
					table: {
						name: "Nombre",
						email: "Correo Electrónico",
						profile: "Perfil",
						actions: "Acciones",
					},
					buttons: {
						add: "Agregar usuario",
					},
					toasts: {
						deleted: "Usuario borrado satisfactoriamente.",
					},
					confirmationModal: {
						deleteTitle: "Borrar",
						deleteMessage:
							"Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la cola.",
					},
			  },
			helps: {
					title: "Central de Ayuda",
			  },
			schedules: {
				title: "Agendamientos",
				confirmationModal: {
					deleteTitle:  "¿Estás seguro de que deseas eliminar este agendamiento?",
					deleteMessage: "Esta acción no se puede revertir.",
				},
				table: {
					contact: "Contacto",
					body: "Mensaje",
					sendAt: "Fecha del Agendamiento",
					sentAt: "Fecha del Envio",
					status: "Status",
					actions: "Acción",
				},
				buttons: {
					add: "Nuevo Agendamiento",
				},
				toasts: {
					deleted: "Agendamiento eliminado exitosamente.",
				},
				calendar:{
					date: "Fecha",
					time: "Hora",
					event: "Evento",
					allDay: "Todo el Día",
					week: "Semana",
					work_week: "Agendamientos",
					day: "Día",
					month: "Mes",
					previous: "Anterior",
					next: "Próximo",
					yesterday: "Ayer",
					tomorrow: "Mañana",
					today: "Hoy",
					agenda: "Agenda",
					noEventsInRange: "No hay agendamientos en este período."
				},
				weekday:{
					monday :"Lunes",
					tuesday :"Martes",
					wednesday :"Miércoles",
					thursday :"Jueves",
					friday :"Viernes",
					saturday :"Sábado",
					sunday :"Domingo"
				} 
			},
			tags: {
					title: "Tags",
					confirmationModal: {
						deleteTitle:  "¿Estás seguro de que deseas eliminar este tag?",
						deleteMessage: "Esta acción no se puede revertir.",
					},
					table: {
					  name: "Nombre",
					  color: "Color",
					  tickets: "# Registros",
					  actions: "Acción",
					},
					buttons: {
					  add: "Nuevo Tag",
					},
					toasts: {
					  deleted: "Tag eliminado exitosamente.",
					},
				  },
			settings: {
				success: "Configuración guardada satisfactoriamente.",
				title: "Configuración",
				settings: {
					userCreation: {
						name: "Creación de usuarios",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						},
					},
				},
				options:{
					title: "Opciones",
					reviews: {
						name :"Reseñas",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						}
					},
					schedules: {
						name :"Horarios",
						options: {
							disabled: "Deshabilitado",
							queue: "Departamento",
							company:"Empresa"
						}
					},
					groups: {
						name: "Ignorar Mensajes de Grupos",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						}
					},
					call: {
						name: "Aceptar llamada",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						}
					},
					chatbot: {
						name: "Tipo ChatBot",
						options: {
							text: "Texto"
						}
					},
					acceptingTicket: {
						name: "Enviar saludo al aceptar chat",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						}
					},
					transferMessage: {
						name :"Enviar mensaje de transferencia de Dpto/Agente",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						}
					}
				}, 
				companies: {
					title:"Empresas",
					name: "Nombre",
					email: "E-mail",
					phone: "Teléfono",
					plan: "Plan",
					status: "Estado",
					campaigns: "Campañas",
					expirationDate: "Fecha de expiración",
					recurrence: "Periodicidad",
					monthly: "Mensual",
					created: "Creado",
					true: "ACTIVO",
					false: "INACTIVO",
					save: "GUARDAR",
					cancel: "Cancelar",
					expiration: "Vencimiento",
					delete: "Eliminar",
					user: "USUARIO",
					enabled: "Habilitado",
					disabled: "Deshabilitado",
					success: "¡Operación realizada con éxito!"
				
				},
				plans: {
					title: "Planes",
				},
				helps: {
					title: "Ayuda",
					form:{
						title: "Título",
						videoCode: "Código del Video",
						description: "Descripción",
						save: "Guardar",
						cancel: "Cancelar",
						delete: "Eliminar"
					},
					success: "¡Operación realizada con éxito!"
				}
			},
			layout:{
				WelcomeGreeting: {
					greetings: "Hola",
					welcome: "Bienvenido a",
					expirationTime: "Activo hasta",
				},
			},
			messagesList: {
				header: {
					assignedTo: "Asignado a:",
					buttons: {
						return: "Devolver",
						resolve: "Resolver",
						reopen: "Reabrir",
						accept: "Aceptar",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Escribe un mensaje",
				placeholderClosed:
					"Vuelva a abrir o acepte este ticket para enviar un mensaje.",
				signMessage: "Firmar",
			},
			contactDrawer: {
				header: "Detalles del contacto",
				buttons: {
					edit: "Editar contacto",
				},
				extraInfo: "Otra información",
			},
			fileModal: {
				title: {
				  add: "Agregar lista de archivos",
				  edit: "Editar lista de archivos",
				},
				buttons: {
				  okAdd: "Guardar",
				  okEdit: "Editar",
				  cancel: "Cancelar",
				  fileOptions: "Agregar archivos",
				},
				form: {
				  name: "Nombre de la lista de archivos",
				  message: "Detalles de la lista",
				  fileOptions: "Lista de archivos",
				  extraName: "Mensaje para enviar con archivos",
				  extraValue: "Valor da opción",
				},
				success: "¡La lista de archivos se guardó correctamente!",
			  },
			ticketOptionsMenu: {
				schedule: "Agendar",
				delete: "Borrar",
				transfer: "Transferir",
				registerAppointment: "Observaciones del Conctato",
				appointmentsModal: {
					title: "Observaciones del Conctato",
					textarea: "Observación",
					placeholder: "Ingresa aquí la información que deseas registrar",
				  },
				confirmationModal: {
					title: "¿Borrar ticket #",
					titleFrom: "del contacto ",
					message:"¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
				},
				buttons: {
					delete: "Borrar",
					cancel: "Cancelar",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancelar",
				},
			},
			messageOptionsMenu: {
				delete: "Borrar",
				reply: "Responder",
				confirmationModal: {
					title: "¿Borrar mensaje?",
					message: "Esta acción no puede ser revertida.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP: "Debe haber al menos una conexión de WhatsApp predeterminada.",
				ERR_NO_DEF_WAPP_FOUND: "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
				ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
				ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
				ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
				ERR_WAPP_DOWNLOAD_MEDIA:"No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
				ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
				ERR_SENDING_WAPP_MSG:"Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
				ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
				ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
				ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
				ERR_USER_CREATION_DISABLED:	"La creación de usuarios fue deshabilitada por el administrador.",
				ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
				ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
				ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
				ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
				ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
				ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
				ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
				ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
				ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
				ERR_FETCH_WAPP_MSG:	"Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:	"Este color ya está en uso, elija otro.",
				ERR_WAPP_GREETING_REQUIRED:	"El mensaje de saludo es obligatorio cuando hay más de una cola.",
			},
		},
	},
};

export { messages };
