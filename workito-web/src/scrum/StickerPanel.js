import React from 'react';

import {Card, Col, Space} from "antd";
import Sticker from "./Sticker";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {move} from "./scrumSlice"

export default function StickerPanel(props) {


  const tickets = useSelector((state) => {
    console.log(state);
    return state.scrum.tickets
  })

  const dispatch = useDispatch()

  const acceptSticker = (item, monitor) => {
    dispatch(move({id: item.id, group: props.group}))
  }

  const stickerAcceptable = (item, monitor) => {
    console.log(item.group !== props.group)
    return item.group !== props.group
  }

  const [{isOver, canDrop}, drop] = useDrop(
    () => ({
      accept: 'Sticker',
      drop: acceptSticker,
      canDrop: stickerAcceptable,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    }),
    [tickets]
  )

  return (
    <>
      <div ref={drop}
           style={{
             border: canDrop ? (
               isOver ? "1px solid rgb(0 132 255)" : "1px dashed rgb(0 132 255)"
             ) : "1px solid rgba(0,0,0,.06)",
             padding: "10px 10px",
             minHeight: 500,
             minWidth: 220
           }}>
        <Space align={'start'} wrap={true}>
          {tickets.filter(sticker => sticker.group === props.group)
            .map(sticker => {
              console.log(sticker);
              return <Sticker key={sticker.id} content={sticker}/>
            })
          }
        </Space>
      </div>
    </>
  );
}
