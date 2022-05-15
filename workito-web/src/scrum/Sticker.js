import React from 'react';
import {useDrag} from 'react-dnd'

import {Card} from "antd";
import store from "../app/store"
import {move} from "./scrumSlice"

const {Meta} = Card;

export default function Sticker(props) {

  const {content} = props;

  const [{isDragging}, drag, dragPreview] = useDrag(
    () => ({
      type: "Sticker",
      item: {id: content.id, group:content.group},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      })
    }),
    []
  );

  // store.dispatch(move())

  return (
    <>
      <div ref={drag} style={{display: isDragging ? 'none' : ''}}>
        <Card bordered={true} hoverable
              style={{
                width: 200,
                height: 100
              }}>
          {content.description}
        </Card>
      </div>
    </>
  );
}
