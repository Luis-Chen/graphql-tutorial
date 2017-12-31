const channels = [
];
let nextId = 3;

export const resolvers = {
	Query: {
		channels: () => {
			return channels;
		}
	},
	Mutation: {
		addChannel: (root, args) => {
			const newChannel = { id: nextId++, name: args.name };
			channels.push(newChannel);
			return newChannel;
		}
	}
};
