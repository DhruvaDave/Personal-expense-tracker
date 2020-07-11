import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';
import axios from 'axios';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);



const UserExpenseData = (props) => {
  // this.handleDelete = (event) => {
  //   console.log("-------delte----",this);
  //   console.log("-------delte---props---",this.props);
  //   // const userExpenseID = this.props.match.params.userExpenseID;
  //   // axios.delete(`http://127.0.0.1:8000/user-expenses/${userExpenseID}`);
  //   // this.props.history.push('/');
  //   // this.forceUpdate();
  // }
    return (
      <div>
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
        renderItem={item => (
        <List.Item>
            <List.Item.Meta
            // avatar={<Avatar src={item.avatar} />}
            title={<a href={`/user-expenses/${item.id}`}>{item.user_id}</a>}
            description={<a href={`/user-expenses/${item.id}`}>{item.from_date}</a>}
            // user_id={item.user_id}
            />
            {/* {item.content} */}
            {/* <a href={`http://127.0.0.1:8000/user-expenses/${item.id}`} style={{ fontSize: "1.5em", color: "red" }}> Delete </a> */}
            {/* <Button type="danger" onClick={this.handleDelete} itemID={item.id}>Delete</Button> */}
        </List.Item>
        
        )}
    />
    {/* <form onSubmit={this.handleDelete}>
                </form> */}
    </div>
    )
}

export default UserExpenseData;