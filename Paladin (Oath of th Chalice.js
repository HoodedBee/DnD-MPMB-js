AddSubClass("paladin", "oath of the chalice", {
	regExpSearch : /^(?=.*oath)(?=.*of)(?=.*the)(?=.*chalice).*$/i,
	subname : "Oath of the Chalice",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Mindgasm",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Up to 5 creatures you designate within 30 feet of you that can see or hear you must make a wisdom saving throw. On a failure, their eyes glaze over in extacy, and until the end of their next turn, may not use any actions, bonus actions, or reactions to make any attacks and their movement speed is reduced to 0. Any creature that is immune to being charmed is unaffected by this feature.",
			action : ["action", ""],
			spellcastingExtra : ["Tasha's Hideous Laughter", "sanctuary", "detect thoughts", "suggestion", "hypnotic pattern", "slow", "dominate beast", "black tentacles", "dominate person", "hold monster"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Invoke Allure",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "s an action, you present your holy symbol, creating an aura of beauty and grace around yourself. For the next minute, you make charisma(persuasion) and charisma(performance) checks at advantage. If the creature you are communicating with has been harmed by you or your companions, this feature has no effect.",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Lustful Vigor",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "Beginning at 7th level, you and every friendly creature within 10 feet of you may add additional fire damage equal to your Charisma modifier (Minimum +1) to the damage of weapon and unarmed attacks. Beginning at 18th level, the range of this aura increases to 30 feet.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
		},
		"subclassfeature15" : {
			name : "Hedonist Champion",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "Beginning at 15th level, you become immune to the poisoned condition and poison damage.",
			savetxt : { immune : ["poisoned"] ["poison"]}
			},
		"subclassfeature20" : {
			name : "Aspect of Debauchery",
			source : ["HB", 0],
			minlevel : 20,
			description : desc([
				"At 20th Level, as an action, you may break the shackles of civilization and embrace your sinful desire, allowing a miasma of lustful and alluring stench to radiate from yourself. For the next minute, you gain the following effects:",
				" \u2022 You and friendly creatures within 30 feet of you are under the effects of the bless spell",
				" \u2022 For every friendly creature within 30 feet of you, you regain 1 hit point at the beginning of your turns so long as you have at least 1 hit point. For example, if you have 4 friendly creatures within 30 feet of you at the start of your turn, you regain 4 hit points.",
				" \u2022 Critical hits and killing blows that you land cause you to regain 2d4 hit points."
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});