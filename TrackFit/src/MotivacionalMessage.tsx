import React from 'react';

interface MotivacionalMessageProps {
    message: string;
    author: string;
};

  
export function MotivacionalMessage(props: MotivacionalMessageProps){
    return (
    <div style={{ border: '1px solid #ccc', padding: "1rem" }}>
      <p>{props.message}</p>
      <p><em>{props.author}</em></p>
    </div>
  );
}
