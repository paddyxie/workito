import React from 'react';
import {Button, Form, Select, Space, Table, Tag} from 'antd';
import {NodeCollapseOutlined, NodeExpandOutlined} from '@ant-design/icons';
import project from '../../test/v1/projects/data.json'

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    width: 200,
    fixed: 'left'
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    width: 300,
    fixed: 'left'
  },
  {
    title: 'Owner',
    dataIndex: ['owner', 'userName'],
    key: ['owner', 'userId'],
    width: 100,
    filters: [
      {
        text: 'Minchao',
        value: 'mifu',
      },
      {
        text: 'Qingwei',
        value: 'qingwei.song',
      },
    ]
  },
  {
    title: 'Estimation',
    children: [
      {
        title: 'FE',
        dataIndex: 'estimatedFe',
        width: 50,
        align: 'center'
      },
      {
        title: 'BE',
        dataIndex: 'estimatedBe',
        width: 50,
        align: 'center'
      }
    ]
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 80,
    align: 'center',
    render: text => {

      let color = text == 'WIP' ? 'processing' : 'success';

      return (
        <Tag color={color} key={text}>
          {text.toUpperCase()}
        </Tag>
      );
    }
  },
  {
    title: 'Last Update',
    children: [
      {
        title: 'Time',
        dataIndex: 'updateTime',
        width: 50,
        align: 'center'
      },
      {
        title: 'Update',
        dataIndex: 'updateContent',
        align: 'left'
      }
    ]
  }
];

for (let i = 0; i < 13; i++) {

  columns.push({
    title: 'W' + (i + 1),
    width: 50,
    align: 'center',
    dataIndex: ['schedule', 'W' + (i + 1)],
    responsive: ['lg'],
    onCell: (record, rowIndex) => ({
      onClick: () => {

        let status = record.schedule['W' + (i + 1)];
        if (status === 'TODO') {
          record.schedule['W' + (i + 1)] = '';
        } else {
          record.schedule['W' + (i + 1)] = 'TODO';
        }
        console.log(record.schedule)
      }
    }),
    render: text => {

      console.log(text)
      return (
        <div style={{
          backgroundColor: text === 'TODO' && '#24b39b'
        }}>
          &nbsp;
        </div>
      );
    }
  })
}


const data = project.payload.wbs;
console.log(project.payload.wbs);
//for (let i = 0; i < 100; i++) {
//  data.push({
//    key: i,
//    category: 'Problem & Scope',
//    summary: 'Work with PO for Scope Definition',
//    description: 'Currently we\'ve no idea about the scope yet at all',
//    owner: 'mifu',
//    ownerName: 'Minchao',
//    status: 'WIP',
//    estimatedFe: 0,
//    estimatedBe: i,
//    children: [
//        {
//          key: i*100,
//          summary: 'Flag I18N Solution Scope',
//          owner: 'mifu',
//          ownerName: 'Minchao',
//          status:'DONE',
//          estimatedFe: 0,
//          estimatedBe: 1,
//        }
//    ]
//  });
//}

class ProjectDetail extends React.Component {
  state = {
    bordered: true,
    loading: false,
    size: 'small',
    showHeader: true,
    rowSelection: undefined,
    hasData: true,
    bottom: 'bottomRight',
    xScroll: 'scroll',
    ellipsis: false,
    scroll: {
      x: '90vw',
      y: '70vh'
    }
  };


  handleTableLayoutChange = e => {
    this.setState({tableLayout: e.target.value});
  };

  handleEllipsisChange = enable => {
    this.setState({ellipsis: enable});
  };

  handleYScrollChange = enable => {
    this.setState({yScroll: enable});
  };

  handleDataChange = hasData => {
    this.setState({hasData});
  };

//  const { Option } = Select;

  render() {
    const {...state} = this.state;

    const tableColumns = columns.map(item => ({...item, ellipsis: state.ellipsis}));

    return (
      <>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{marginBottom: 16}}
        >
          <Form.Item label="Project">
            <Select
              showSearch
              style={{width: 200}}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Select.Option value="1">Flag Service</Select.Option>
              <Select.Option value="2">Object Store</Select.Option>
              <Select.Option value="3">Pixiu 2</Select.Option>
              <Select.Option value="4">SE/SX Auth</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        <Space size={2}>
          <Button
            icon={<NodeCollapseOutlined/>}
            onClick={() => {
            }}
          />
          <Button
            icon={<NodeExpandOutlined/>}
            onClick={() => {
            }}
          />
        </Space>
        <Table
          {...this.state}
          pagination={{position: 'bottom', size: 'middle'}}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          //          onRow={(record, rowIndex) => {
          //            return {
          //              onClick: event=> {
          //                                console.log(event);
          //                            }
          //            };
          //          }}
          //          onRow={(record, rowIndex) => {
          //              return {
          //                onClick: event => {console.log(event);}, // click row
          //                onDoubleClick: event => {}, // double click row
          //                onContextMenu: event => {}, // right button click row
          //                onMouseEnter: event => {}, // mouse enter row
          //                onMouseLeave: event => {}, // mouse leave row
          //              };
          //          }}
        />
      </>
    );
  }
}

export default ProjectDetail