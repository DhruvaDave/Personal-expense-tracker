import React from "react";
import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

const UserIncomes = (props) => {
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 3,
			}}
			dataSource={props.data}
			renderItem={(item) => (
				<List.Item
					key={item.from_date}
					// actions={[
					// <IconText type="star-o" text="156" />,
					// <IconText type="like-o" text="156" />,
					// <IconText type="message" text="2" />]}
					// extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
				>
					<List.Item.Meta
						// avatar={<Avatar src={item.avatar} />}
						title={<a href={`/user-income/${item.id}`}>{item.user_id}</a>}
						description={
							<a href={`/user-income/${item.id}`}>
								{item.from_date} to {item.to_date}
							</a>
						}
						// user_id={item.user_id}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	);
};

export default UserIncomes;
