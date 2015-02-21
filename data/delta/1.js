use wk;
db.profile.insert({
	identificator : "liam-brown",
	name : "Liam Brown",
	picture : "/images/people/perfil_1.png",
	expertise : [
		{ 
			name : "HTML5",
			score : 500
		},
		{ 
			name : "Nodejs",
			score : 400
		},
		{ 
			name : "Saas",
			score : 300
		},
		{ 
			name : "Angular",
			score : 200
		},
		{ 
			name : "Flash",
			score : 100
		}
	],
	profession : "UX Designer",
	country : "Costa Rica",
	email : "liam.qa+testing@whoknows.com",
	phone : "+506-83097721",
	location : 'San Jose. Costa Rica, Av 24',
	projects : [
			{
				projectId : 1,
				projectName : "Space X",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "David James"
					},
					{
						name : "Barbara Stuart"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_1b.png',

				stars : 176
			},
			{
				projectId : 2,
				projectName : "Falaniux",
				tech : [ 
					{
						name : "Flash"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "David James"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_2b.png',
				stars : 276
			},
			{
				projectId : 3,
				projectName : "Expertise.Me",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_3b.png',
				stars : 301
			},
			{
				projectId : 4,
				projectName : "What the Zig!",
				tech : [ 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}, 
					{
						name : "Flash"
					}
				],
				members : [
					{
						name : "Patricia Morgan"
					},
					{
						name : "David James"
					},
					{
						name : "Barbara Stuart"
					}
				],
				picture : '/images/projects/portafolio_4b.png',
				stars : 434
			},
			{
				projectId : 5,
				projectName : "Essentials",
				tech : [ 
					{
						name : "Angular"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "HTML5"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "David James"
					}
				],
				picture : '/images/projects/portafolio_5b.png',
				stars : 244
			}
		]
});


db.profile.insert({
	identificator : "david-james",
	name : "David James",
	picture : "/images/people/perfil_2.png",
	expertise : [
		{ 
			name : "Saas",
			score : 500
		},
		{ 
			name : "Angular",
			score : 400
		},
		{ 
			name : "Flash",
			score : 300
		},
		{ 
			name : "HTML5",
			score : 200
		},
		{ 
			name : "Nodejs",
			score : 100
		}
	],
	profession : "UX Designer",
	country : "Costa Rica",
	email : "david.qa+testing@whoknows.com",
	phone : "+506-82221338",
	location : 'San Jose. Costa Rica, Av 24',
	projects : [
			{
				projectId : 5,
				projectName : "Essentials",
				tech : [ 
					{
						name : "Angular"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "HTML5"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					}
				],
				picture : '/images/projects/portafolio_5b.png',
				stars : 244
			},
			{
				projectId : 2,
				projectName : "Falaniux",
				tech : [ 
					{
						name : "Flash"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_2b.png',
				stars : 276
			},
			{
				projectId : 3,
				projectName : "Expertise.Me",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_3b.png',
				stars : 301
			},
			{
				projectId : 1,
				projectName : "Space X",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "Barbara Stuart"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_1b.png',

				stars : 176
			},
			{
				projectId : 4,
				projectName : "What the Zig!",
				tech : [ 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}, 
					{
						name : "Flash"
					}
				],
				members : [
					{
						name : "Patricia Morgan"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "Barbara Stuart"
					}
				],
				picture : '/images/projects/portafolio_4b.png',
				stars : 434
			}
		]
});

db.profile.insert({
	identificator : "patricia-morgan",
	name : "Patricia Morgan",
	picture : "/images/people/perfil_3.png",
	expertise : [
		{ 
			name : "Angular",
			score : 500
		},
		{ 
			name : "HTML5",
			score : 400
		},
		{ 
			name : "Nodejs",
			score : 300
		},
		{ 
			name : "Flash",
			score : 200
		},
		{ 
			name : "Saas",
			score : 100
		}
	],
	profession : "Full Stack Developer",
	country : "Costa Rica",
	email : "patricia.qa+testing@whoknows.com",
	phone : "+506-85239345",
	location : 'San Jose. Costa Rica, Av 24',
	projects : [
			{
				projectId : 3,
				projectName : "Expertise.Me",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					}
				],
				picture : '/images/projects/portafolio_3b.png',
				stars : 301
			},
			{
				projectId : 5,
				projectName : "Essentials",
				tech : [ 
					{
						name : "Angular"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "HTML5"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					}
				],
				picture : '/images/projects/portafolio_5b.png',
				stars : 244
			},
			{
				projectId : 2,
				projectName : "Falaniux",
				tech : [ 
					{
						name : "Flash"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "David James"
					}
				],
				picture : '/images/projects/portafolio_2b.png',
				stars : 276
			},
			{
				projectId : 4,
				projectName : "What the Zig!",
				tech : [ 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}, 
					{
						name : "Flash"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "David James"
					},
					{
						name : "Barbara Stuart"
					}
				],
				picture : '/images/projects/portafolio_4b.png',
				stars : 434
			},
			{
				projectId : 1,
				projectName : "Space X",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "Barbara Stuart"
					},
					{
						name : "David James"
					}
				],
				picture : '/images/projects/portafolio_1b.png',

				stars : 176
			}
		]
});


db.profile.insert({
	identificator : "barbara-stuart",
	name : "Barbara Stuart",
	picture : "/images/people/perfil_4.png",
	expertise : [
		{ 
			name : "Nodejs",
			score : 500
		},
		{ 
			name : "Flash",
			score : 400
		},
		{ 
			name : "Angular",
			score : 300
		},
		{ 
			name : "Saas",
			score : 200
		},
		{ 
			name : "HTML5",
			score : 100
		}
	],
	profession : "Back-End Developer",
	country : "Costa Rica",
	email : "barbara.qa+testing@whoknows.com",
	phone : "+506-81302322",
	location : 'San Jose. Costa Rica, Av 24',
	projects : [
			{
				projectId : 5,
				projectName : "Essentials",
				tech : [ 
					{
						name : "Angular"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "HTML5"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					}
				],
				picture : '/images/projects/portafolio_5b.png',
				stars : 244
			},
			{
				projectId : 3,
				projectName : "Expertise.Me",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_3b.png',
				stars : 301
			},
			{
				projectId : 4,
				projectName : "What the Zig!",
				tech : [ 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}, 
					{
						name : "Flash"
					}
				],
				members : [
					{
						name : "Patricia Morgan"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "David James"
					}
				],
				picture : '/images/projects/portafolio_4b.png',
				stars : 434
			},
			{
				projectId : 2,
				projectName : "Falaniux",
				tech : [ 
					{
						name : "Flash"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}
				],
				members : [
					{
						name : "Margareth Smith"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_2b.png',
				stars : 276
			},
			{
				projectId : 1,
				projectName : "Space X",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "David James"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_1b.png',

				stars : 176
			}
		]
});

db.profile.insert({
	identificator : "margareth-smith",
	name : "Margareth Smith",
	picture : "/images/people/perfil_5.png",
	expertise : [
		{ 
			name : "Flash",
			score : 500
		},
		{ 
			name : "Saas",
			score : 400
		},
		{ 
			name : "HTML5",
			score : 300
		},
		{ 
			name : "Nodejs",
			score : 200
		},
		{ 
			name : "Angular",
			score : 100
		}
	],
	profession : "Front-End Developer",
	country : "Costa Rica",
	email : "margareth.qa+testing@whoknows.com",
	phone : "+506-82324322",
	location : 'San Jose. Costa Rica, Av 24',
	projects : [
			{
				projectId : 5,
				projectName : "Essentials",
				tech : [ 
					{
						name : "Angular"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "HTML5"
					}
				],
				members : [
					{
						name : "David James"
					},
					{
						name : "Liam Brown"
					}
				],
				picture : '/images/projects/portafolio_5b.png',
				stars : 244
			},
			{
				projectId : 4,
				projectName : "What the Zig!",
				tech : [ 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}, 
					{
						name : "Flash"
					}
				],
				members : [
					{
						name : "Patricia Morgan"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "Barbara Stuart"
					}
				],
				picture : '/images/projects/portafolio_4b.png',
				stars : 434
			},
			{
				projectId : 3,
				projectName : "Expertise.Me",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_3b.png',
				stars : 301
			},
			{
				projectId : 2,
				projectName : "Falaniux",
				tech : [ 
					{
						name : "Flash"
					}, 
					{
						name : "Nodejs"
					}, 
					{
						name : "Angular"
					}
				],
				members : [
					{
						name : "David James"
					},
					{
						name : "Liam Brown"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_2b.png',
				stars : 276
			},
			{
				projectId : 1,
				projectName : "Space X",
				tech : [ 
					{
						name : "HTML5"
					}, 
					{
						name : "Saas"
					}
				],
				members : [
					{
						name : "Liam Brown"
					},
					{
						name : "Barbara Stuart"
					},
					{
						name : "Patricia Morgan"
					}
				],
				picture : '/images/projects/portafolio_1b.png',

				stars : 176
			}
		]
});