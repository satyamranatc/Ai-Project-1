/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  useEffect(() => {

  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Welcome to Heart Attack Predictor</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
        fermentum ipsum et, dignissim quam. Duis in leo turpis. Vivamus at neque et leo
        pulvinar hendrerit. Fusce nisi mi, lacinia at faucibus ac, fermentum ut mauris.
        Phasellus nec sem in justo pellentesque facilisis. Mauris luctus mattis lectus
        sit amet posuere. Nulla facilisi. Sed id purus nec nulla tincidunt aliquam a sit amet ligula.
        Nulla viverra ultricies urna, eget lacinia diam tincidunt sed. Cras posuere ipsum
        sed nulla dignissim, nec feugiat dolor aliquet. Donec nec eros quam.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Nam dignissim eros nec mauris suscipit, ac lobortis nulla fermentum. Sed ut felis
        purus. Donec ultrices volutpat lectus, vel dignissim lacus ullamcorper ut. Duis
        vehicula, nisl eget gravida vulputate, sem leo aliquet magna, sed fermentum lectus
        sem sit amet ligula. In eleifend, neque ac luctus euismod, dui risus varius dui, in
        suscipit justo est vitae dui. Integer fringilla, urna a hendrerit pharetra, tortor
        quam sollicitudin nunc, id bibendum nunc erat eget turpis. Integer auctor ultricies
        suscipit. Maecenas mattis vel justo vel laoreet. Integer nec orci non dolor convallis
        aliquam. Vivamus vel tincidunt sem. Donec tempus pretium nibh, id feugiat elit fermentum
        ac. Morbi vitae condimentum mi, sit amet accumsan libero.
      </p>
    </div>
  )
}