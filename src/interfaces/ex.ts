import { Component } from "react";
export const ItemTypes = {
    BOX: 'box',
  }
  
export interface DragItem {
    type: Component
    id: string
    top: number
    left: number
  }