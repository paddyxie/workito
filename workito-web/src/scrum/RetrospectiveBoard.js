import React from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import {Card, Col, Row} from "antd";

import StickerPanel from "./StickerPanel";
import {useSelector} from "react-redux";


const {Meta} = Card;

export default function RetrospectiveBoard(props) {

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <StickerPanel group={'good'}/>
            </Col>
            <Col span={8}>
              <StickerPanel group={'improve'}/>
            </Col>
            <Col span={8}>
              <StickerPanel group={'action'}/>
            </Col>
          </Row>
        </div>
      </DndProvider>
    </>
  );
}
