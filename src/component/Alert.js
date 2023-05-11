import React, { useState } from 'react'

export default function Alert(props) {
  const capital =  (word)=>
  {
    const lower = word.toUpperCase();
    return lower.charAt(0) + lower.slice(1); 
    
  }
   
  return (
    props.alert &&<div class="alert alert-primary" role="alert" >
   <strong>{capital{props.alert.message}}</strong>{props.alert.type}
  </div>
  )
}
