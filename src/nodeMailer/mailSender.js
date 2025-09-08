import { sendEmail } from '../config/nodemailer.config.js';

const enviarMail = async (to, user, ticket, cart) => {
    try {
        const res = await sendEmail(
            to,
            `Compra realizada! El envío está en progreso. Número de orden: ${ticket._id}`,
            `
    <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Bebas+Neue:ital,wght@0,400" rel="stylesheet" />
 <link href="https://fonts.googleapis.com/css?family=Onest:ital,wght@0,400;0,500;0,600" rel="stylesheet" />
 <title>Untitled</title>
 <!-- Made with Postcards Email Builder by Designmodo -->
 <style>
 html, body { margin: 0 !important; padding: 0 !important; min-height: 100% !important; width: 100% !important; -webkit-font-smoothing: antialiased; }
         * { -ms-text-size-adjust: 100%; }
         #outlook a { padding: 0; }
         .ReadMsgBody, .ExternalClass { width: 100%; }
         .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height: 100%; }
         table, td, th { mso-table-lspace: 0 !important; mso-table-rspace: 0 !important; border-collapse: collapse; }
         u + .body table, u + .body td, u + .body th { will-change: transform; }
         body, td, th, p, div, li, a, span { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; }
         img { border: 0; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; }
         a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
         .body .pc-project-body { background-color: transparent !important; }
                 @media screen and (-webkit-min-device-pixel-ratio:0) { .pc-img-h-pct { height: auto !important; } }
 
         @media (min-width: 621px) {
             .pc-lg-hide {  display: none; } 
             .pc-lg-bg-img-hide { background-image: none !important; }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container, .pc-component {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-20-0-0-0 {padding: 20px 0px 0px 0px !important;}
 .pc-w620-itemsVSpacings-30 {padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-itemsHSpacings-0 {padding-left: 0px !important;padding-right: 0px !important;}
 table.pc-w620-spacing-0-0-40-0 {margin: 0px 0px 40px 0px !important;}
 td.pc-w620-spacing-0-0-40-0,th.pc-w620-spacing-0-0-40-0{margin: 0 !important;padding: 0px 0px 40px 0px !important;}
 .pc-w620-width-70 {width: 70px !important;}
 .pc-w620-height-auto {height: auto !important;}
 table.pc-w620-spacing-0-0-20-20 {margin: 0px 0px 20px 20px !important;}
 td.pc-w620-spacing-0-0-20-20,th.pc-w620-spacing-0-0-20-20{margin: 0 !important;padding: 0px 0px 20px 20px !important;}
 .pc-w620-font-size-62px {font-size: 62px !important;}
 .pc-w620-line-height-90pc {line-height: 90% !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-20-12-20-12 {padding: 20px 12px 20px 12px !important;}
 .pc-w620-font-size-14px {font-size: 14px !important;}
 .pc-w620-line-height-140pc {line-height: 140% !important;}
 .pc-w620-padding-12-12-12-16 {padding: 12px 12px 12px 16px !important;}
 .pc-w620-width-fill {width: 100% !important;}
 .pc-w620-font-size-20px {font-size: 20px !important;}
 .pc-w620-padding-12-16-12-16 {padding: 12px 16px 12px 16px !important;}
 .pc-w620-width-auto {width: auto !important;}
 .pc-w620-padding-12-12-12-12 {padding: 12px 12px 12px 12px !important;}
 .pc-w620-padding-20-20-20-20 {padding: 20px 20px 20px 20px !important;}
 .pc-w620-itemsVSpacings-0 {padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-width-0px {width: 0px !important;}
 .pc-w620-fontSize-14px {font-size: 14px !important;}
 table.pc-w620-spacing-5-0-0-0 {margin: 5px 0px 0px 0px !important;}
 td.pc-w620-spacing-5-0-0-0,th.pc-w620-spacing-5-0-0-0{margin: 0 !important;padding: 5px 0px 0px 0px !important;}
 table.pc-w620-spacing-0-0-20-0 {margin: 0px 0px 20px 0px !important;}
 td.pc-w620-spacing-0-0-20-0,th.pc-w620-spacing-0-0-20-0{margin: 0 !important;padding: 0px 0px 20px 0px !important;}
 .pc-w620-width-150px {width: 150px !important;}
 .pc-w620-text-align-right {text-align: right !important;text-align-last: right !important;}
 .pc-w620-font-size-12px {font-size: 12px !important;}
 .pc-w620-letter-spacing-0p9px {letter-spacing: 0.9px !important;}
 div.pc-w620-align-center,th.pc-w620-align-center,a.pc-w620-align-center,td.pc-w620-align-center {text-align: center !important;text-align-last: center !important;}
 table.pc-w620-align-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-align-center {margin-right: auto !important;margin-left: auto !important;}
 .pc-w620-width-150 {width: 150px !important;}
 .pc-g-ib{display: inline-block !important;}
 .pc-g-b{display: block !important;}
 .pc-g-rb{display: block !important;width: auto !important;}
 .pc-g-wf{width: 100% !important;}
 .pc-g-rpt{padding-top: 0 !important;}
 .pc-g-rpr{padding-right: 0 !important;}
 .pc-g-rpb{padding-bottom: 0 !important;}
 .pc-g-rpl{padding-left: 0 !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Bebas Neue'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9WdhzQ.woff') format('woff'), url('https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wdhyw.woff2') format('woff2'); } @font-face { font-family: 'Onest'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPh9R-puxtL.woff') format('woff'), url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPh9R-puxtN.woff2') format('woff2'); } @font-face { font-family: 'Onest'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPhxx-puxtL.woff') format('woff'), url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPhxx-puxtN.woff2') format('woff2'); } @font-face { font-family: 'Onest'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPhKxipuxtL.woff') format('woff'), url('https://fonts.gstatic.com/s/onest/v8/gNMZW3F-SZuj7zOT0IfSjTS16cPhKxipuxtN.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; font-weight: normal; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #ffe1d8;" bgcolor="#ffe1d8">
 <table class="pc-project-body" style="table-layout: fixed; width: 100%; min-width: 600px; background-color: #ffe1d8;" bgcolor="#ffe1d8" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top" style="width:auto;">
    <table class="pc-project-container" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center" class="pc-component" style="width: 600px; max-width: 600px;">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
             <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-12-12-12-12" style="padding: 12px 12px 12px 12px; height: unset; background-color: #f6f6f6;" bgcolor="#f6f6f6">
                <table class="pc-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tbody>
                  <tr>
                   <td class="pc-g-rpt pc-g-rpb" align="center" valign="top" style="padding-top: 0px; padding-bottom: 0px;">
                    <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                     <tr>
                      <!--[if !gte mso 9]><!-- -->
                      <td class="pc-w620-padding-20-0-0-0" align="left" valign="middle" background="cid:image-17331566261820" style="padding: 28px 0px 0px 0px; height: auto; background-image: url('cid:image-17331566261820'); background-size: cover; background-position: 50% 0; background-repeat: no-repeat; background-color: #ffe1d8; border-radius: 16px 16px 0px 0px;">
                       <!--<![endif]-->
                       <!--[if gte mso 9]>
                <td class="pc-w620-padding-20-0-0-0" align="left" valign="middle" background="cid:image-17331566261820" style="background-image: url('cid:image-17331566261820'); background-size: cover; background-position: 50% 0; background-repeat: no-repeat; background-color: #ffe1d8; border-radius: 16px 16px 0px 0px;">
            <![endif]-->
                       <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 576px;">
                    <v:fill src="cid:image-17331566261820" color="#ffe1d8" type="frame" size="1,1" aspect="atleast" origin="-0.5,-0.5" position="-0.5,-0.5"/>
                    <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                        <div style="font-size: 0; line-height: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center">
                                <tr>
                                    <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                                <td colspan="3" height="28" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="0" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                <td valign="top" align="left">
                <![endif]-->
                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td align="left" valign="top">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td class="pc-w620-spacing-0-0-40-0" style="padding: 0px 0px 72px 0px;">
                             <table class="pc-width-fill pc-g-b" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody class="pc-g-b">
                               <tr class="pc-g-ib pc-g-wf">
                                <td class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30" align="center" valign="middle" style="width: 100%; padding-top: 0px; padding-bottom: 0px;">
                                 <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                   <td align="center" valign="middle">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                     <tr>
                                      <td align="center" valign="top" style="line-height: 1px; font-size: 1px;">
                                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                         <td align="center" valign="top">
                                          <a class="pc-font-alt" href="https://www.coderhouse.com/" target="_blank" style="text-decoration: none; display: inline-block; vertical-align: top;">
                                           <img src="cid:ecommerce_logo_2-c006fba1" class="pc-w620-width-70 pc-w620-height-auto" width="120" height="58" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 120px; height: auto; max-width: 100%; border: 0;" />
                                          </a>
                                         </td>
                                        </tr>
                                       </table>
                                      </td>
                                     </tr>
                                    </table>
                                   </td>
                                  </tr>
                                 </table>
                                </td>
                               </tr>
                              </tbody>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                        <tr>
                         <td align="left" valign="top">
                          <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td class="pc-w620-spacing-0-0-20-20" valign="top" style="padding: 0px 32px 32px 32px; mso-padding-left-alt: 0; margin-left:32px; height: auto;">
                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                               <td valign="top" align="left">
                                <div class="pc-font-alt" style="text-decoration: none;">
                                 <div style="font-size:62px;line-height:90%;text-align:left;text-align-last:left;color:#141414;font-family:'Bebas Neue', Arial, Helvetica, sans-serif;letter-spacing:0px;font-style:normal;">
                                  <div style="font-family:'Bebas Neue', Arial, Helvetica, sans-serif;"><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; font-size: 100px; line-height: 90%; font-weight: 400;" class="pc-w620-font-size-62px pc-w620-line-height-90pc">TU PEDIDO</span><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; color: rgb(209, 79, 45); font-size: 100px; line-height: 90%; font-weight: 400;" class="pc-w620-line-height-90pc pc-w620-font-size-62px"> </span><span style="white-space: pre-wrap;">	</span><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; color: rgb(209, 79, 45); font-size: 100px; line-height: 90%; font-weight: 400;" class="pc-w620-line-height-90pc pc-w620-font-size-62px">ESTÁ EN CAMINO</span>
                                  </div>
                                 </div>
                                </div>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                        <tr>
                         <td align="left" valign="top" style="line-height: 1px; font-size: 1px;">
                          <img src="cid:image-1737475186248" width="576" height="auto" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;" />
                         </td>
                        </tr>
                       </table>
                       <!--[if gte mso 9]>
                                                </td>
                                                <td width="0" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                    </v:textbox>
                </v:rect>
                <![endif]-->
                      </td>
                     </tr>
                    </table>
                   </td>
                  </tr>
                 </tbody>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0">
                   <table class="pc-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                     <tr>
                      <td class="pc-g-rpt pc-g-rpb" align="center" valign="top" style="padding-top: 0px; padding-bottom: 0px;">
                       <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td class="pc-w620-padding-20-12-20-12" align="left" valign="middle" style="padding: 32px 32px 32px 32px; height: auto; background-color: #ffffff; border-radius: 0px 0px 16px 16px;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="left" valign="top">
                             <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <td valign="top" style="padding: 0px 0px 24px 0px; height: auto;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                 <tr>
                                  <td valign="top" align="left">
                                   <div class="pc-font-alt" style="text-decoration: none;">
                                    <div style="font-size:14px;line-height:140%;text-align:left;text-align-last:left;color:#141414;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:0px;font-style:normal;">
                                     <div style="font-family:'Onest', Arial, Helvetica, sans-serif;"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 18px; line-height: 140%; font-weight: 400;" class="pc-w620-font-size-14px pc-w620-line-height-140pc">Hola ${user.first_name} </span><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-weight: 400; font-size: 18px; line-height: 140%;">👋</span>
                                     </div>
                                     <div style="font-family:'Onest', Arial, Helvetica, sans-serif;"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-weight: 400; font-size: 18px; line-height: 140%;">Gracias por tu compra!</span>
                                     </div>
                                     <div style="font-family:'Onest', Arial, Helvetica, sans-serif;"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-weight: 400; font-size: 18px; line-height: 140%;">Esperamos que el envío llegue entre 3 a 5 días hábiles.</span>
                                     </div>
                                    </div>
                                   </div>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                           <tr>
                            <td align="left" valign="top">
                             <table class="pc-width-fill pc-g-b" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody class="pc-g-b">
                               <tr class="pc-g-ib pc-g-wf">
                                <td class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30" align="right" valign="middle" style="width: 100%; padding-top: 0px; padding-bottom: 0px;">
                                 <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                   <td class="pc-w620-padding-12-12-12-16" align="right" valign="middle" style="padding: 12px 12px 12px 30px; height: auto; background-color: #f6f6f6; border-radius: 100px 100px 100px 100px;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                     <tr>
                                      <td align="right" valign="top">
                                       <table class="pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                         <td>
                                          <table class="pc-width-fill pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                           <tbody>
                                            <tr>
                                             <td class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30" align="right" valign="middle" style="width: 50%; padding-top: 0px; padding-bottom: 0px;">
                                              <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                               <tr>
                                                <td align="left" valign="middle">
                                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                                  <tr>
                                                   <td valign="top" align="left">
                                                    <div class="pc-font-alt" style="text-decoration: none;">
                                                     <div style="font-size:20px;line-height:210%;text-align:left;text-align-last:left;color:#979da6;font-family:'Bebas Neue', Arial, Helvetica, sans-serif;letter-spacing:0px;font-style:normal;">
                                                      <div style="font-family:'Bebas Neue', Arial, Helvetica, sans-serif;"><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; font-size: 30px; line-height: 140%; font-weight: 400;" class="pc-w620-font-size-20px">OrdeN #:</span><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; color: rgb(40, 60, 92); font-size: 30px; line-height: 140%; font-weight: 400;" class="pc-w620-font-size-20px"> ${ticket._id}</span>
                                                      </div>
                                                     </div>
                                                    </div>
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                             <td class="pc-w620-itemsHSpacings-0" valign="middle" style="padding-right: 20px; padding-left: 20px;" />
                                             <td class="pc-g-rpt pc-g-rpb pc-w620-itemsVSpacings-30" align="right" valign="middle" style="width: 50%; padding-top: 0px; padding-bottom: 0px;">
                                              <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                               <tr>
                                                <td align="right" valign="middle">
                                                 <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                  <tr>
                                                   <td align="right" valign="top">
                                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="min-width: 100%;">
                                                     <tr>
                                                      <th valign="top" align="right" style="text-align: right; font-weight: normal;">
                                                       <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-auto" align="right" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 100px 100px 100px 100px; background-color: #141414; text-align:center; color: #ffffff; padding: 12px 20px 12px 20px; mso-padding-left-alt: 0; margin-left:20px;" bgcolor="#141414">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; text-align: center;" href="https://www.coderhouse.com/" target="_blank"><span style="font-size:14px;line-height:24px;color:#ffffff;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:-0.1px;font-style:normal;display:inline-block;"><span style="font-family:'Onest', Arial, Helvetica, sans-serif;display:inline-block;"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 24px; font-weight: 500;">Seguir el envío</span></span></span></a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                                                       <!--[if !mso]><!-- -->
                                                       <a class="pc-w620-width-auto pc-w620-padding-12-16-12-16" style="display: inline-block; box-sizing: border-box; border-radius: 100px 100px 100px 100px; background-color: #141414; padding: 12px 20px 12px 20px; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" href="https://www.coderhouse.com/" target="_blank"><span style="font-size:14px;line-height:24px;color:#ffffff;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:-0.1px;font-style:normal;display:inline-block;"><span style="font-family:'Onest', Arial, Helvetica, sans-serif;display:inline-block;"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 24px; font-weight: 500;">Seguir el envío</span></span></span></a>
                                                       <!--<![endif]-->
                                                      </th>
                                                     </tr>
                                                    </table>
                                                   </td>
                                                  </tr>
                                                 </table>
                                                </td>
                                               </tr>
                                              </table>
                                             </td>
                                            </tr>
                                           </tbody>
                                          </table>
                                         </td>
                                        </tr>
                                       </table>
                                      </td>
                                     </tr>
                                    </table>
                                   </td>
                                  </tr>
                                 </table>
                                </td>
                               </tr>
                              </tbody>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Summary -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center" class="pc-component" style="width: 600px; max-width: 600px;">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
             <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-12-12-12-12" style="padding: 12px 12px 12px 12px; height: unset; background-color: #f6f6f6;" bgcolor="#f6f6f6">
                <table class="pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-g-b pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody class="pc-g-b">
                     <tr class="pc-g-ib pc-g-wf">
                      <td class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30" align="left" valign="top" style="width: 100%; padding-top: 0px; padding-bottom: 0px;">
                       <table class="pc-w620-width-fill" style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td class="pc-w620-padding-20-20-20-20" align="left" valign="middle" style="padding: 32px 32px 32px 32px; height: auto; background-color: #ffffff; border-radius: 16px 16px 16px 16px;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="left" valign="top">
                             <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <td valign="top" style="padding: 0px 0px 32px 0px; height: auto;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                 <tr>
                                  <td valign="top" align="left">
                                   <div class="pc-font-alt" style="text-decoration: none;">
                                    <div style="font-size:30px;line-height:100%;text-align:left;text-align-last:left;color:#141414;font-family:'Bebas Neue', Arial, Helvetica, sans-serif;letter-spacing:0px;font-style:normal;">
                                     <div style="font-family:'Bebas Neue', Arial, Helvetica, sans-serif;"><span style="font-family: 'Bebas Neue', Arial, Helvetica, sans-serif; font-size: 30px; line-height: 100%; font-weight: 400;">Resúmen del pedido</span>
                                     </div>
                                    </div>
                                   </div>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>

${''
        // ---------------------------------------------------
        // -----------  Productos del carrito   -----------
        // ---------------------------------------------------
        }   
                            

                            ${cart.products.map(p => {
            return (
                `
                        <tr>
                            <td align="left" valign="top">
                             <table class="pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <td class="pc-w620-spacing-0-0-20-0" style="padding: 0px 0px 32px 0px;">
                                <table class="pc-width-fill pc-g-b pc-w620-width-fill" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tbody class="pc-g-b">
                                  <tr class="pc-g-ib pc-g-wf">
                                   <td class="pc-g-rb pc-g-rpt pc-g-wf pc-w620-itemsVSpacings-0" align="left" valign="top" style="padding-top: 0px; padding-bottom: 0px;">
                                    <table class="pc-w620-width-fill" style="width: 300px; height: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                     <tr>
                                      <td align="left" valign="middle">
                                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                         <td align="left" valign="top">
                                          <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                           <tr>
                                            <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 4px 0px; height: auto;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tr>
                                               <td valign="top" align="left">
                                                <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 120%; letter-spacing: -0.2px; font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; color: #141414; text-align: left; text-align-last: left;">
                                                 <div><span style="font-family: 'Onest', Arial, Helvetica, sans-serif;font-weight: 600;font-style: normal;letter-spacing: 0px;">${p.product.title}</span>
                                                 </div>
                                                </div>
                                               </td>
                                              </tr>
                                             </table>
                                            </td>
                                           </tr>
                                          </table>
                                         </td>
                                        </tr>
                                        <tr>
                                         <td align="left" valign="top">
                                          <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                           <tr>
                                            <td class="pc-w620-spacing-5-0-0-0" valign="top" style="padding: 3px 0px 0px 0px; height: auto;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tr>
                                               <td valign="top" class="pc-w620-padding-0-0-0-0" align="left">
                                                <div class="pc-font-alt" style="text-decoration: none;">
                                                 <div style="font-size:12px;line-height:10px;text-align:left;text-align-last:left;color:#979da6;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:0.9px;font-style:normal;">
                                                  <div style="font-family:'Onest', Arial, Helvetica, sans-serif;"><span style="vertical-align: top; font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; line-height: 10px;">Cantidad: ${p.quantity}</span>
                                                  </div>
                                                 </div>
                                                </div>
                                               </td>
                                              </tr>
                                             </table>
                                            </td>
                                           </tr>
                                          </table>
                                         </td>
                                        </tr>
                                       </table>
                                      </td>
                                     </tr>
                                    </table>
                                   </td>
                                   <td class="pc-w620-itemsHSpacings-0" valign="top" style="padding-right: 5px; padding-left: 5px;" />
                                   <td class="pc-g-rb pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-0" align="left" valign="top" style="padding-top: 0px; padding-bottom: 0px;">
                                    <table style="width: 20px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                     <tr>
                                      <td class="pc-w620-padding-0-0-0-0" align="right" valign="middle" style="padding: 5px 0px 0px 0px; height: auto;">
                                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                         <td align="right" valign="top">
                                          <table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                           <tr>
                                            <td class="pc-w620-spacing-5-0-0-0" valign="top">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tr>
                                               <td valign="top" align="right">
                                                <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 140%; letter-spacing: -0.2px; font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; color: #333333; text-align: right; text-align-last: right;">
                                                 <div><span style="font-family: 'Onest', Arial, Helvetica, sans-serif;font-weight: 600;font-style: normal;letter-spacing: 0px;">$${p.product.price}</span>
                                                 </div>
                                                </div>
                                               </td>
                                              </tr>
                                             </table>
                                            </td>
                                           </tr>
                                          </table>
                                         </td>
                                        </tr>
                                       </table>
                                      </td>
                                     </tr>
                                    </table>
                                   </td>
                                  </tr>
                                 </tbody>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>

                     `);
        })}



                <tr tr >
                <td align="left" valign="top">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                            <td valign="top" style="padding: 0px 0px 32px 0px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                                    <tr>
                                        <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #dfdfdf;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
                           </tr >
    <tr>
        <td align="left" valign="top">
            <table class="pc-width-fill pc-g-b" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                <tbody class="pc-g-b">
                    <tr class="pc-g-ib pc-g-wf">
                        <td class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30" align="left" valign="top" style="width: 100%; padding-top: 0px; padding-bottom: 0px;">
                            <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td align="left" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tr>
                                                <td align="left" valign="top">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                        <tr>
                                                            <td valign="top" style="padding: 0px 0px 8px 0px; height: auto;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                    <tr>
                                                                        <td valign="top" align="right">
                                                                            <div class="pc-font-alt" style="text-decoration: none;">
                                                                                <div style="font-size:12px;line-height:10px;text-align:right;text-align-last:right;color:#979da6;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:0.9px;font-style:normal;">
                                                                                    <div style="font-family:'Onest', Arial, Helvetica, sans-serif;" class="pc-w620-text-align-right"><span style="vertical-align: top; font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 10px; font-weight: 600; text-transform: uppercase;" class="pc-w620-font-size-12px pc-w620-letter-spacing-0p9px">Total</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                                        <tr>
                                                            <td valign="top" align="right">
                                                                <div class="pc-font-alt" style="text-decoration: none;">
                                                                    <div style="font-size:20px;line-height:140%;text-align:right;text-align-last:right;color:#141414;font-family:'Onest', Arial, Helvetica, sans-serif;letter-spacing:-0.2px;font-style:normal;">
                                                                        <div style="font-family:'Onest', Arial, Helvetica, sans-serif;" class="pc-w620-text-align-right"><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 140%; font-weight: 600;" class="pc-w620-font-size-20px">$</span><span style="font-family: 'Onest', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 20px; line-height: 140%;" class="pc-w620-font-size-20px">${ticket.amount}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
                          </table >
                         </td >
                        </tr >
                       </table >
                      </td >
                     </tr >
                    </tbody >
                   </table >
                  </td >
                 </tr >
                </table >
               </td >
              </tr >
             </table >
            </td >
           </tr >
          </table >
         </td >
        </tr >
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center" class="pc-component" style="width: 600px; max-width: 600px;">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
             <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-20-20-20-20" style="padding: 10px 48px 0px 48px; height: unset; background-color: #f6f6f6;" bgcolor="#f6f6f6">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-20-0 pc-w620-align-center" style="padding: 0px 0px 32px 0px;">
                   <table class="pc-width-fill pc-g-b" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody class="pc-g-b">
                     <tr class="pc-g-ib pc-g-wf">
                      <td class="pc-g-rb pc-g-rpt pc-g-rpb pc-g-wf pc-w620-itemsVSpacings-30" align="left" valign="top" style="padding-top: 0px; padding-bottom: 0px;">
                       <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td align="center" valign="middle">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="center" valign="top" style="line-height: 1px; font-size: 1px;">
                             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <td align="center" valign="top">
                                <a class="pc-font-alt" href="https://www.coderhouse.com/" target="_blank" style="text-decoration: none; display: inline-block; vertical-align: top;">
                                 <img src="cid:ecommerce_logo_3-1bf3f503" class="pc-w620-width-150 pc-w620-height-auto" width="200" height="96" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 200px; height: auto; max-width: 100%; border: 0;" />
                                </a>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
         </td>
        </tr>
       </table >
      </td >
     </tr >
    </table >
   </td >
  </tr >
 </table >
</body >

</html >

    `
        );
        if (res.rejected.length > 0) {
            throw Error(`Hubo un error al enviar el mail.`);
        }
    } catch (error) {
        console.log(error);
    }

}

export default enviarMail;