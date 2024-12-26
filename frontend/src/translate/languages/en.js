const messages = {
	en: {
		translations: {
			signup: {
				title: "Sign up",
				toasts: {
					success: "User created successfully! Please login!",
					fail: "Error creating user. Check the reported data.",
				},
				form: {
					name: "Name",
					email: "Email",
					password: "Password",
				},
				buttons: {
					submit: "Register",
					login: "Already have an account? Log in!",
				},
			},
			login: {
				title: "Login",
				form: {
					email: "Email",
					password: "Password",
				},
				buttons: {
					submit: "Enter",
					register: "Don't have an account? Register!",
				},
			},
			auth: {
				toasts: {
					success: "Login successfully!",
				},
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Tickets today: ",
					},
				},
				operationalSummary: {
					inAttendance: {
					  title: "In Service"
					},
					waiting: {
					  title: "Waiting"
					},
					closed: {
					  title: "Closed"
					},
					newContacts:{
						title: "New Contacts"
					},
					attendanceTime:{
						title: "Attendance Time"
					},
					waitingTime:{
						title: "Waiting Time"
					},
				},
				filter: {
					helperText: "Select the desired period",
					filterDate: "Filter by Date",
					filterPeriod: "Filter by Period",
					filterType: {
						title: "Filter Type",
					},
					startDate: {
						title: "Start Date",
					},
					endDate: {
						title: "End Date",
					},
					period: {
						title: "Period",
					},
					selectedNone:{
						title: "None selected"
					},
					buttonFilter:{
						title: "FILTER"
					}
				},
				table:{
					name: "Name",
					reviews: "Reviews",
					attendanceTime: "Service Time",
					status: "Status (Current)"
				}
			},
			connections: {
				title: "Connections",
				toasts: {
					deleted: "WhatsApp connection deleted sucessfully!",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage: "Are you sure? It cannot be reverted.",
					disconnectTitle: "Disconnect",
					disconnectMessage: "Are you sure? You'll need to read QR Code again.",
				},
				buttons: {
					add: "Add WhatsApp",
					disconnect: "Disconnect",
					tryAgain: "Try Again",
					qrcode: "QR CODE",
					newQr: "New QR CODE",
					connecting: "Connectiing",
				},
				toolTips: {
					disconnected: {
						title: "Failed to start WhatsApp session",
						content:
							"Make sure your cell phone is connected to the internet and try again, or request a new QR Code",
					},
					qrcode: {
						title: "Waiting for QR Code read",
						content:
							"Click on 'QR CODE' button and read the QR Code with your cell phone to start session",
					},
					connected: {
						title: "Connection established",
					},
					timeout: {
						title: "Connection with cell phone has been lost",
						content:
							"Make sure your cell phone is connected to the internet and WhatsApp is open, or click on 'Disconnect' button to get a new QRcode",
					},
				},
				table: {
					name: "Name",
					status: "Status",
					lastUpdate: "Last Update",
					default: "Default",
					actions: "Actions",
					session: "Session",
					number: "Number",
					profileName: "Profile"
				},
			},
			whatsappModal: {
				title: {
					add: "Add WhatsApp",
					edit: "Edit WhatsApp"
				},
				form: {
					name: "Name",
					default: "Default",
					sendIdQueue: "Departments",
					timeSendQueue: "Redirect to the department in X minutes",
					queueRedirection: "Department Redirection",
					queueRedirectionDesc: "Select a department for contacts without one to be redirected to",
					prompt: "Prompt",
					transfer: "Transfer after x (minutes)",
					transferQueue: "Transfer Department",
					maxUseBotQueues: "Send bot x times",
					timeUseBotQueues: "Interval in minutes between bot sends",
					expiresTicket: "Close open chats after x minutes",
					expiresInactiveMessage: "Inactive closure message"
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel"
				},
				success: "WhatsApp saved successfully."
			},			
			qrCode: {
				message: "Read QrCode to start the session",
			},
			contacts: {
				title: "Contacts",
				toasts: {
					deleted: "Contact deleted sucessfully!",
				},
				searchPlaceholder: "Search ...",
				confirmationModal: {
					deleteTitle: "Delete",
					importTitlte: "Import contacts",
					deleteMessage:
						"Are you sure you want to delete this contact? All related tickets will be lost.",
					importMessage: "Do you want to import all contacts from the phone?",
				},
				buttons: {
					import: "Import Contacts",
					add: "Add Contact",
				},
				table: {
					name: "Name",
					whatsapp: "WhatsApp",
					email: "Email",
					actions: "Actions",
				},
			},
			kanba:{
				openTicket: "Open  Chats",
				ticketNumber: "Chat n° ",
				viewticket: "View Chat"
			},
			task:{
				newTask: "New Task",
				buttons: {
					add: "ADD",
					edit: "SAVE"
				}
			},
			internalChat:{
				button: "Nuevo",
				modalTitle: "Conversation",
				title: "Title", 
				users: "Users",
				buttonSave: "Save",
				buttonClose: "Close"
			},
			schedules: {
				title: "Schedules",
				confirmationModal: {
					deleteTitle:  "Are you sure you want to delete this appointment?",
					deleteMessage: "This action cannot be undone.",
				},
				table: {
					contact: "Contact",
					body: "Message",
					sendAt: "Appointment Date",
					sentAt: "Sent Date",
					status: "Status",
					actions: "Action",
				},
				buttons: {
					add: "New Appointment",
				},
				toasts: {
					deleted: "Appointment successfully deleted.",
				},
				calendar:{
					date: "Date",
					time: "Time",
					event: "Event",
					allDay: "All Day",
					week: "Week",
					work_week: "Appointments",
					day: "Day",
					month: "Month",
					previous: "Previous",
					next: "Next",
					yesterday: "Yesterday",
					tomorrow: "Tomorrow",
					today: "Today",
					agenda: "Agenda",
					noEventsInRange: "There are no appointments in this period."
				},
				weekday:{
					monday :"Monday",
					tuesday :"Tuesday",
					wednesday :"Wednesday",
					thursday :"Thursday",
					friday :"Friday",
					saturday :"Saturday",
					sunday :"Sunday"
				}
			},
			tags: {
				title: "Tags",
				confirmationModal: {
				  deleteTitle: "Are you sure you want to delete this tag?",
				  deleteMessage: "This action cannot be undone.",
				},
				table: {
				  name: "Name",
				  color: "Color",
				  tickets: "# Records",
				  actions: "Actions",
				},
				buttons: {
				  add: "New Tag",
				},
				toasts: {
				  deleted: "Tag deleted successfully.",
				},
			  },
			contactModal: {
				title: {
					add: "Add contact",
					edit: "Edit contact",
				},
				form: {
					mainInfo: "Contact details",
					extraInfo: "Additional information",
					name: "Name",
					number: "Whatsapp number",
					email: "Email",
					extraName: "Field name",
					extraValue: "Value",
				},
				buttons: {
					addExtraInfo: "Add information",
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "Contact saved successfully.",
			},
			promptModal: {
				form: {
					name: "Name",
					prompt: "Prompt",
					voice: "Voice",
					max_tokens: "Max Response Tokens",
					temperature: "Temperature",
					apikey: "API Key",
					max_messages: "Max Messages in History",
					voiceKey: "Voice API Key",
					voiceRegion: "Voice Region"
				},
				success: "Prompt saved successfully!",
				title: {
					add: "Add Prompt",
					edit: "Edit Prompt"
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel"
				}
			},
			queueModal: {
				title: {
				  add: "Add Department",
				  edit: "Edit Department"
				},
				subtitle: {
				  queue: "Department Data",
				  schedules: "Service Hours"
				},
				form: {
				  name: "Name",
				  color: "Color",
				  greetingMessage: "Greeting Message",
				  completeMessage: "Completion Message",
				  outOfHoursMessage: "Out of Hours Message",
				  ratingMessage: "Rating Message",
				  token: "Token",
				  orderQueue: "Department Order (Bot)",
				  integrationId: "Integration"
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel"
				},
				bot:{
					options: "Options",
					add:"Add",
					optionTitle: "Option Title",
					noTitle: "Title not defined",
					optiontext:"Enter the option text"
				}
			},
			userModal: {
				title: {
					add: "Add user",
					edit: "Edit user",
				},
				form: {
					name: "Name",
					email: "Email",
					password: "Password",
					profile: "Profile",
					whatsApp: "Default connection"
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "User saved successfully.",
			},
			scheduleModal: {
				title: {
				  add: "New Appointment",
				  edit: "Edit Appointment",
				},
				form: {
				  body: "Message",
				  contact: "Contact",
				  sendAt: "Appointment Date",
				  sentAt: "Sent Date",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "Appointment successfully saved.",
			  },
			  tagModal: {
				title: {
				  add: "New Tag",
				  edit: "Edit Tag",
				},
				form: {
				  name: "Name",
				  color: "Color",
				},
				buttons: {
				  okAdd: "Add",
				  okEdit: "Save",
				  cancel: "Cancel",
				},
				success: "Tag successfully saved.",
			  },
			chat: {
				noTicketMessage: "Select a chat to start chatting.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "New",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Departments",
			},
			tickets: {
				toasts: {
					deleted: "The ticket you were on has been deleted.",
				},
				notification: {
					message: "Message from",
				},
				tabs: {
					open: { title: "Inbox" },
					closed: { title: "Resolved" },
					search: { title: "Search" },
				},
				search: {
					placeholder: "Search tickets and messages.",
				},
				buttons: {
					showAll: "All",
				},
			},
			transferTicketModal: {
				title: "Transfer Ticket",
				fieldLabel: "Type to search for users",
				noOptions: "No user found with this name",
				buttons: {
					ok: "Transfer",
					cancel: "Cancel",
				},
			},
			ticketsList: {
				pendingHeader: "On hold",
				assignedHeader: "My chats",
				noTicketsTitle: "Nothing here!",
				noTicketsMessage: "No chats found with this status or search term.",
				noQueue: "NO DEPT.",
				buttons: {
					accept: "Accept",
					closed: "Closed",
         		  	reopen: "Reopen"
				},
			},
			previewTicketModal:{
				buttons: {
					closed: "Close",
				},
			},
			newTicketModal: {
				title: "Create Chat",
				fieldLabel: "Type to search for a contact",
				add: "Add",
				select:{
					queue: "Select a Department",
					connection: "Select a Connection"
				},
				buttons: {
					ok: "Save",
					cancel: "Cancel",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard",
					connections: "Connections",
					tickets: "Chats",
					quickMessages: "Quick Responses",
					task:"Task",
					contacts: "Contacts",
					queues: "Dep & Chatbot",
					tags: "Tags",
					administration: "Administration",
					users: "Users",
					settings: "Settings",
					helps: "Ayuda",
					messagesAPI: "API",
					schedules: "Schedules",
					campaigns: "Massive",
					annoucements: "Informative",
					chats: "Internal Chat",
					financeiro: "Financial",
					files: "List of files",
					prompts: "Open.Ai",
					queueIntegration: "Integrations",
					listCampaigns:{
						campaigns: "Campaigns",
						contactLists: "Contacts",
						campaignsConfig: "Settings"
					},
				},
				appBar: {
					user: {
						profile: "Profile",
						logout: "Logout",
					},
				},
			},
			notifications: {
				noTickets: "No notifications.",
			},
			queues: {
				title: "Departments",
				table: {
					name: "Name",
					color: "Color",
					greeting: "Greeting message",
					actions: "Actions",
				},
				buttons: {
					add: "Add queue",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage:
						"Are you sure? It cannot be reverted! Tickets in this queue will still exist, but will not have any queues assigned.",
				},
			},
			queueSelect: {
				inputLabel: "Departments",
			},
			users: {
				title: "Users",
				table: {
					name: "Name",
					email: "Email",
					profile: "Profile",
					actions: "Actions",
				},
				buttons: {
					add: "Add user",
				},
				toasts: {
					deleted: "User deleted sucessfully.",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage:
						"All user data will be lost. Users' open tickets will be moved to queue.",
				},
			},
			settings: {
				success: "Settings saved successfully.",
				title: "Settings",
				settings: {
					userCreation: {
						name: "User Creation",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						},
					},
				},
				options: {
					title: "Options",
					reviews: {
						name: "Reviews",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						}
					},
					schedules: {
						name: "Schedules",
						options: {
							disabled: "Disabled",
							queue: "Department",
							company: "Company"
						}
					},
					groups: {
						name: "Ignore Group Messages",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						}
					},
					call: {
						name: "Accept Call",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						}
					},
					chatbot: {
						name: "ChatBot Type",
						options: {
							text: "Text"
						}
					},
					acceptingTicket: {
						name: "Send greeting when accepting chat",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						}
					},
					transferMessage: {
						name: "Send department/agent transfer message",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						}
					}
				},				
				companies: {
					title: "Companies",
					name: "Name",
					email: "E-mail",
					phone: "Phone",
					plan: "Plan",
					status: "Status",
					campaigns: "Campaigns",
					expirationDate: "Expiration Date",
					recurrence: "Recurrence",
					monthly: "Monthly",
					created: "Created",
					true: "ACTIVE",
					false: "INACTIVE",
					save: "SAVE",
					cancel: "Cancel",
					expiration: "Expiration",
					delete: "DELETE",
					user: "USER",
					enabled: "Enabled",
					disabled: "Disabled",
					success: "Operation completed successfully!"


				},
				plans: {
					title: "Plans",
				},
				helps: {
					title: "Help",
					form: {
						title: "Title",
						videoCode: "Video Code",
						description: "Description",
						save: "Save",
						cancel: "Cancel",
						delete: "Delete"
					},
					success: "Operation completed successfully!"				
				}
			},
			plans: {
				form: {
					name: "Name",
					users: "Users",
					connections: "Connections",
					campaigns: "Massive",
					queue: "Dept.",
					value: "Value",
					schedules: "Schedules",
					internalChat: "Internal Chat",
					externalAPI: "External API",
					kanban: "Kanban",
					openAi: "Open.AI",
					integrations: "Integrations",
					enabled: "Enabled",
					disabled: "Disabled",
					clear: "Cancel",
					delete: "Delete",
					save: "Save",
					yes: "Yes",
					no: "No",
					money: "$",
				},
			},						
			layout:{
				WelcomeGreeting: {
					greetings: "Hello",
					welcome: "Welcome to",
					expirationTime: "Active until",
				},
			},
			prompts: {
				title: "Prompts",
				table: {
					name: "Name",
					queue: "Department",
					max_tokens: "Max Response Tokens",
					actions: "Actions"
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage: "Are you sure? This action cannot be undone!"
				},
				buttons: {
					add: "Add Prompt"
				}
			},
			promptModal: {
				form: {
					name: "Name",
					prompt: "Prompt",
					voice: "Voice",
					max_tokens: "Max Response Tokens",
					temperature: "Temperature",
					apikey: "API Key",
					max_messages: "Max Messages in History",
					voiceKey: "Voice API Key",
					voiceRegion: "Voice Region"
				},
				success: "Prompt saved successfully!",
				title: {
					add: "Add Prompt",
					edit: "Edit Prompt"
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel"
				}
			},
			quickMessages: {
				title: "Quick Messages",
				searchPlaceholder: "Search...",
				noAttachment: "No Attachment",
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action is irreversible! Do you want to proceed?",
				},
				buttons: {
				  add: "Add",
				  attach: "Attach file",
				  cancel: "Cancel",
				  edit: "Edit",
				},
				toasts: {
				  success: "Shortcut added successfully!",
				  deleted: "Shortcut deleted successfully!",
				},
				dialog: {
				  title: "Quick Message",
				  shortcode: "Shortcut",
				  message: "Messages",
				  save: "Save",
				  cancel: "Cancel",
				  geral: "Allow editing",
				  add: "Add",
				  edit: "Edit",
				  visao: "Allow viewing",
				},
				table: {
				  shortcode: "Shortcut",
				  message: "Messages",
				  actions: "Action",
				  mediaName: "File Name",
				  status: "Status",
				},
			},
			messagesAPI: {
				title: "API",
				subtitle: "Documentation for sending messages.",
				methods: {
					title: "Sending Methods",
					text: "Text Messages",
					descriptionText: "Below is the list of information required to send Text Messages:",
					media: "Multimedia Messages",
					descriptionMedia: "Below is the list of information required to send Multimedia Messages:",
					file: "file"
				},
				instructions: {
					title: "Instructions",
					subtitle: "Important Observations",
					instruction1: "Before sending messages, it is necessary to register the token linked to the connection that will send the messages.",
					instruction1_1:"To register, go to the 'Connections' menu, click on the connection's edit button, and insert the token in the corresponding field.",
					instruction2: "The sending number must not include special characters and must consist of:",
					instruction2_1: "Country code",
					instruction2_2: "Number"
				},
				textMessage: {
					number: "Number",
					body: "Message",
					token: "Registered token",
				},
				mediaMessage: {
					number: "Number",
					body: "File name",
					media: "File",
					token: "Registered token",
				},
				test: "Sending Test"
			},
			invoices: {
				title: "Invoices",
				table: {
					id: "Id",
					details: "Details",
					amount: "Amount",
					dueDate: "Due Date",
					status: "Status",
					action: "Action"
				},
				modal:{
					title: "Almost there!",
					return: "RETURN",
					summary: "Subscription Summary",
					details: "Plan details",
					users: "Users",
					billing: "Billing: Monthly",
					total: "Total"
				}
				
			},
			contactLists: {
				title: "Contact Lists",
				table: {
				  name: "Name",
				  contacts: "Contacts",
				  valid: "Valid",
				  invalid: "Invalid",
				  actions: "Action",
				},
				buttons: {
				  add: "New List",
				},
				dialog: {
				  name: "Name",
				  company: "Company",
				  okEdit: "Edit",
				  okAdd: "Add",
				  add: "Add",
				  edit: "Edit",
				  cancel: "Cancel",
				},
				confirmationModal: {
				  deleteTitle: "Delete",
				  deleteMessage: "This action cannot be undone.",
				},
				toasts: {
				  deleted: "Record deleted",
				},
			},								
			campaigns: {
    			title: "Campaigns",
				searchPlaceholder: "Search",
				buttons: {
				add: "New Campaign",
				contactLists: "Contact Lists"
				},
				table: {
					name: "Name",
					whatsapp: "Connection",
					contactList: "Contact List",
					status: "Status",
					scheduledAt: "Appointments",
					completedAt: "Completed",
					confirmation: "Confirmation",
					actions: "Action"
				},
				dialog: {
					new: "New Campaign",
					update: "Edit Campaign",
					readonly: "Read-Only",
					form: {
						name: "Name",
						message1: "Message 1",
						message2: "Message 2",
						message3: "Message 3",
						message4: "Message 4",
						message5: "Message 5",
						confirmationMessage1: "Confirmation Message 1",
						confirmationMessage2: "Confirmation Message 2",
						confirmationMessage3: "Confirmation Message 3",
						confirmationMessage4: "Confirmation Message 4",
						confirmationMessage5: "Confirmation Message 5",
						messagePlaceholder: "Message Content",
						whatsapp: "Connection",
						status: "Status",
						scheduledAt: "Appointment",
						confirmation: "Confirmation",
						contactList: "Contact List",
						tagList: "Tag List",
						fileList: "File List",
						selected: "None"
					},
					buttons: {
						add: "Add",
						edit: "Update",
						okadd: "Ok",
						cancel: "Cancel Dispatch",
						restart: "Restart Dispatch",
						close: "Close",
						attach: "Attach File"
					}
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage: "This action cannot be undone."
				},
				toasts: {
					success: "Operation completed successfully",
					cancel: "Campaign canceled",
					restart: "Campaign restarted",
					deleted: "Record deleted"
				},
				report:{
					title: "Repoft of ",
					validContacts: "Valid Contacts",
					requestedConfirmations: "Requested Confirmations",
					confirmations: "Confirmations",
					delivered: "Delivered",
					connection: "Connection",
					contactList: "Contact List",
					appointment: "Appointment",
					completion: "Completion",
				},
				settings:{
					title: "Campaign Settings",
					subtitle: "Intervals",
					randomDispatchInterval: "Random Dispatch Interval",
					largerIntervalAfter: "Larger Interval After",
					largerDispatchInterval: "Larger Dispatch Interval",
					addVarible: "Add Variable",
					save: "Save",
					shortcut: "Shortcut",
					content: "Content",
					add:"Add",
					close:"Close",
					success: "Settings saved",
					noInterval: "No Interval",
					second: "second",
					seconds: "seconds"
				}
			},
			messagesList: {
				header: {
					assignedTo: "Assigned to:",
					buttons: {
						return: "Return",
						resolve: "Resolve",
						reopen: "Reopen",
						accept: "Accept",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Type a message",
				placeholderClosed: "Reopen or accept this ticket to send a message.",
				signMessage: "Sign",
			},
			contactDrawer: {
				header: "Contact details",
				buttons: {
					edit: "Edit contact",
				},
				extraInfo: "Other information",
			},
			ticketOptionsMenu: {
				schedule: "Schedule",
				delete: "Delete",
				transfer: "Transfer",
				confirmationModal: {
					title: "Delete ticket #",
					titleFrom: "from contact ",
					message: "Attention! All ticket's related messages will be lost.",
				},
				buttons: {
					delete: "Delete",
					cancel: "Cancel",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancel",
				},
			},
			messageOptionsMenu: {
				delete: "Delete",
				reply: "Reply",
				confirmationModal: {
					title: "Delete message?",
					message: "This action cannot be reverted.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP:
					"There must be at lest one default WhatsApp connection.",
				ERR_NO_DEF_WAPP_FOUND:
					"No default WhatsApp found. Check connections page.",
				ERR_WAPP_NOT_INITIALIZED:
					"This WhatsApp session is not initialized. Check connections page.",
				ERR_WAPP_CHECK_CONTACT:
					"Could not check WhatsApp contact. Check connections page.",
				ERR_WAPP_INVALID_CONTACT: "This is not a valid whatsapp number.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"Could not download media from WhatsApp. Check connections page.",
				ERR_INVALID_CREDENTIALS: "Authentication error. Please try again.",
				ERR_SENDING_WAPP_MSG:
					"Error sending WhatsApp message. Check connections page.",
				ERR_DELETE_WAPP_MSG: "Couldn't delete message from WhatsApp.",
				ERR_OTHER_OPEN_TICKET:
					"There's already an open ticket for this contact.",
				ERR_SESSION_EXPIRED: "Session expired. Please login.",
				ERR_USER_CREATION_DISABLED:
					"User creation was disabled by administrator.",
				ERR_NO_PERMISSION: "You don't have permission to access this resource.",
				ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
				ERR_NO_SETTING_FOUND: "No setting found with this ID.",
				ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
				ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
				ERR_NO_USER_FOUND: "No user found with this ID.",
				ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.",
				ERR_CREATING_MESSAGE: "Error while creating message on database.",
				ERR_CREATING_TICKET: "Error while creating ticket on database.",
				ERR_FETCH_WAPP_MSG:
					"Error fetching the message in WhtasApp, maybe it is too old.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"This color is already in use, pick another one.",
				ERR_WAPP_GREETING_REQUIRED:
					"Greeting message is required if there is more than one queue.",
			},
		},
	},
};

export { messages };
