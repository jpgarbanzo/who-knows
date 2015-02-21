use wk;
db.profile.insert({
	identificator : "klam",
	name : "Kasen Lam",
	picture : "/images/people/perfil_1.png",
	expertise : [
		{ 
			name : "javascript",
			score : 9999
		},
		{ 
			name : "HTML",
			score : 9999
		},
		{ 
			name : "CSS",
			score : 9999
		}
	],

	profession : "front-end developer",

	country : "Costa Rica",

	email : "someone@kmail.com",

	phone : "8888-8888",

	location : 'San Jose. Costa Rica, Av 24',

	projects : [
			{
				projectId : "wk",
				projectName : "Who knows",
				tech : [ 
					{
						name : "Javascript"
					}, 
					{
						name : "CSS"
					}
				],
				members : [
					{
						name : "klam"
					}
				],
				picture : '/images/projects/portafolio_1.png',

				stars : 176
			}
		]
})