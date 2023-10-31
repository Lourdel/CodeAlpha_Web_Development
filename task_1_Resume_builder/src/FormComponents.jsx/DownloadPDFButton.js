import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-pdf';
import Resume from './Resume';

const DownloadPDFButton = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Download PDF</button>
      <Resume ref={componentRef} />
    </div>
  );
};

export default DownloadPDFButton;