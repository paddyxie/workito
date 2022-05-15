import React from 'react';
import {Button, Col, Form, Row, Select, Space, Table, Tag} from 'antd';
import {NodeCollapseOutlined, NodeExpandOutlined, PlusCircleOutlined} from '@ant-design/icons';
import columns from '../../test/v1/tables/project-detail.json'
import project from '../../test/v1/projects/data.json'

const items = project.payload.wbs;


class ProjectDetail extends React.Component {

  state = {
    bordered: true,
    loading: false,
    size: 'small',
    showHeader: true,
    rowSelection: undefined,
    hasData: true,
    columns: columns,
    data: items,
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

  toggle = column => {
    return (record, rowIndex) => ({
      onClick: () => {
        let schedule = record.schedule || (record.schedule = []);

        let status = schedule[column.title];
        if (status === 'TODO') {
          schedule[column.title] = '';
        } else {
          schedule[column.title] = 'TODO';
        }

        this.setState({...this.state});
      }
    })
  }

//  const { Option } = Select;

  render() {
    const {...state} = this.state;

    const tableColumns = state.columns.map(column => {
        column.ellipsis = state.ellipsis;

        if (column.title === 'Status') {
          column.render = text => {

            let color = text === 'WIP' ? 'processing' : 'success';

            return (
              <Tag color={color} key={text}>
                {text.toUpperCase()}
              </Tag>
            );
          }
        }

        if (column.title.startsWith("W")) {
          column.render = text => {
            return (
              <div style={{backgroundColor: text === 'TODO' ? '' : '#24b39b'}}> &nbsp;</div>
            );
          }
          column.onCell = this.toggle(column);

        }
        return column;
      }
    )

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
        <Row style={{padding:"5px 5px"}}>
          <Col span={12}>
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
          </Col>
          <Col span={12} style={{display:'flex', justifyContent:'flex-end'}}>
            <Space size={2} >
              <Button type='primary'
                icon={<PlusCircleOutlined />}
                onClick={() => {
                }}
              >Create</Button>
            </Space>
          </Col>
        </Row>
        <Table
          {...this.state}
          pagination={{position: 'bottom', size: 'middle'}}
          columns={tableColumns}
          dataSource={state.hasData ? state.data : null}
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