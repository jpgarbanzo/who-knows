use wk;
db.profile.insert({
	identificator : "klam",
	name : "Kasen Lam",
	picture : "/public/images/projects/klam.png",
	expertise : {
		Javascript : 9999,
		HTML : 9999,
		CSS : 9999
	},

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
				picture : '/public/images/projects/wk.png'
			}
		]
})