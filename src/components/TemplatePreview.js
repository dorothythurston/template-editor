import React, { useState } from "react";
import T from "../utils/i18n";
import pdfmake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
const { vfs } = vfsFonts.pdfMake;
pdfmake.vfs = vfs;

function TemplatePreview(props) {
  const { template } = props;
  const [base64pdf, updatePDF] = useState(undefined);

  const generatePdf = async () =>
    //pdfmake is modifying the original object so deep clone it first :(
    await pdfmake
      .createPdf(JSON.parse(JSON.stringify(template)))
      .getBase64(base64pdf => {
        updatePDF("data:application/pdf;base64, " + base64pdf);
        console.log("generated PDF from", template);
      });

  return (
    <div className="TemplatePreview">
      <header>{T.translate("templateEditor.templatePreview")}</header>
      <iframe src={base64pdf} title="Report Preview" className="iFrame" />
      <button onClick={generatePdf}>Refresh PDF</button>
    </div>
  );
}

export default TemplatePreview;
