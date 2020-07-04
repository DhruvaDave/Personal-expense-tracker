import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const UserExpenses = (props) => {
    return (
        <p> Herer </p>
    // <List
    //     itemLayout="vertical"
    //     size="large"
    //     pagination={{
    //     onChange: (page) => {
    //         console.log(page);
    //     },
    //     pageSize: 3,
    //     }}
    //     dataSource={props.data}
    //     renderItem={item => (
    //     <List.Item>
    //         <List.Item.Meta
    //         // avatar={<Avatar src={item.avatar} />}
    //         // title={<a href={`/${item.id}`}>{item.user_id}</a>}
    //         // description={<a href={`/${item.id}`}>{item.from_date}</a>}
    //         // user_id={item.user_id}
    //         />
    //         {/* {item.content} */}
    //     </List.Item>
    //     )}
    // />
    )
}

export default UserExpenses;