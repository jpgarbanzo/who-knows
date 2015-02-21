use wk;
db.profile.insert({
	identificator : 1,
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