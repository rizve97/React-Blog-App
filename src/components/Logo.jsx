import React from 'react';

function Logo({ width = '100px', src }) {
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecSoliRTBpbD0yXyw6JyT_3ot9QaD2TrA4qFlPovOCf7m92W9m-v2W6ncihDsN_ldFNE&usqp=CAU" alt="Logo" width={width} />
  );
}

export default Logo;