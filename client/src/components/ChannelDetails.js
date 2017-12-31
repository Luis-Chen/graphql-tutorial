//client/src/components/ChannelDetails.js

import React from 'react';
import MessageList from './MessageList';
import ChannelPreview from './ChannelPreview';
import NotFound from './NotFound';

import { gql, graphql } from 'react-apollo';

const ChannelDetails = ({ data: { loading, error, channel }, match }) => {
	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	if (channel === null) {
		return <NotFound />;
	}
	return (
		<div>
			<div className="channelName">{channel.name}</div>
			<MessageList messages={channel.messages} />
		</div>
	);
};

//client/src/components/channelDetails.js
export const channelDetailsQuery = gql`
	query ChannelDetailsQuery($channelId: ID!) {
		channel(id: $channelId) {
			id
			name
			messages {
				id
				text
			}
		}
	}
`;

//export const channelDetailsQuery = gql`...`;
// ...

export default graphql(channelDetailsQuery, {
	options: props => ({
		variables: { channelId: props.match.params.channelId }
	})
})(ChannelDetails);
