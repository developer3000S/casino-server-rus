exports = module.exports = {
	server: {
		port: 7000,
		host: '0.0.0.0',
		hellomsg: 'Добро пожаловать в онлайн-казино',
		server: 20141201,
		client_req: 20141130
	},
	redis: {
		host: 'localhost',
		port: 6379,
		passwd: null
	},
	new_user : {
		coins: 10000,
		score: 0,
		exp: 0,
		level: 1
	},
	games: {
		'chat': {
			name: 'чат-комната',
			desc: 'комната только для общения',
			game: 'room.js',
			options: {
			},
			min: 2,
			max: 200
		},
		'jinhua1': {
			name: 'классическая цзиньхуа',
			desc: 'игра цзиньхуа, правила: классические',
			game: 'jinhua_game.js',
			options: {
				max_seats: 6,
				no_joker: true,
				no_number: [],
				ready_countdown: 10,
				turn_countdown: 20,
				ante: 50,			// 锅底
				bet_min: 50,		// 最少投注
				bet_max: -1,		// 最大投注
				raise_min: 50,		// 最少加注
				raise_multiple: false,
				pot_cap: -1,		// 封顶
			},
			min: 2,
			max: 200
		},
		'jinhua2': {
			name: 'пк цзиньхуа',
			desc: 'игра цзиньхуа, правила: число>6',
			game: 'jinhua_game.js',
			options: {
				max_seats: 6,
				no_joker: true,
				no_number: [2,3,4,5,6],
				ready_countdown: 10,
				turn_countdown: 20,
				ante: 500,
				bet_min: 500,
				bet_max: -1,
				raise_min: 500,
				raise_multiple: true,	// 以跟注为基础，翻倍加注
				pot_cap: -1,			// 封顶
			},
			min: 2,
			max: 200
		},
		'holdem1': {
			name: 'техасский холдем',
			desc: 'техасский холдем, правила: лимит',
			game: 'holdem_game.js',
			options: {
				max_seats: 10,
				no_joker: true,
				no_number: [],
				ready_countdown: 10,
				turn_countdown: 20,
				limit_rule: 0,		// 0: limit, 1: pot limit, 2: no limit
				limit: 100,			// big blind
				limit_cap: 200,		// -1, means no limit
			},
			min: 2,
			max: 200
		},
		'holdem2': {
			name: 'техасский холдем',
			desc: 'техасский холдем, правила: пот-лимит',
			game: 'holdem_game.js',
			options: {
				max_seats: 10,
				no_joker: true,
				no_number: [],
				ready_countdown: 10,
				turn_countdown: 20,
				limit_rule: 1,		// 0: limit, 1: pot limit, 2: no limit
				limit: 100,			// big blind
				limit_cap: -1,		// -1, means no limit
			},
			min: 2,
			max: 200
		},
		'holdem3': {
			name: 'техасский холдем',
			desc: 'техасский холдем, правила: безлимитный',
			game: 'holdem_game.js',
			options: {
				max_seats: 10,
				no_joker: true,
				no_number: [],
				ready_countdown: 10,
				turn_countdown: 20,
				limit_rule: 2,		// 0: limit, 1: pot limit, 2: no limit
				limit: 100,			// big blind
				limit_cap: -1,		// -1, means no limit
			},
			min: 2,
			max: 200
		}
	}
};
