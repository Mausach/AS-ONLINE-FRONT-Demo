import React from 'react';
import { Document, Page, Text, View,Image, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import bwipjs from 'bwip-js'; // Importa la biblioteca de códigos de barras

import Barcode from 'react-barcode';
import CodigoDeBarra from './CodigoDeBarra';

//ES7O NO ES UN COMPONEN7E REAC7

// Define estilos para el PDF
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    padding: 10,
  },
  title: { 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centra horizontalmente el texto
  },
  smallText: {
    fontSize: 12, // Tamaño de letra más pequeño (ajusta según tus necesidades)
    textAlign: 'center', // Centra horizontalmente el texto
    margin: 2,
  },
  logo: {
    width: 50,
    height: 50,
  },
  barcodeContainer: {
    alignItems: 'center',
  },
  barcode: {
    width: 200, // Ajusta el tamaño del código de barras según tus necesidades
    height: 50,
    marginBottom: 10,
    
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
 
});

// Define una función para generar el código de barras (deberia es7ar en helpers)
function generateBarcode(value) {
  const canvas = document.createElement('canvas');
  bwipjs.toCanvas(canvas, {
    bcid: 'code128', // Tipo de código de barras (puedes cambiarlo según tus necesidades)
    text: value, // Valor del código de barras
    scale: 2, // Escala del código de barras
  });

  return canvas.toDataURL('image/png');
}


// Define el contenido del PDF en un componente React
const MyPDF = ({ddjjC}) => {

  const barcodeImage = generateBarcode('123456789'); // Reemplaza '123456789' con el valor de tu código de barras

  return (
    <Document>
    <Page size="A4">
      <View style={styles.container}>
      <View>
          <Image src="data:image/jpeg;base64,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" style={styles.logo} />
        </View>
        <View>
          <Text style={styles.title}>Sindicato de empleado de comercio de Santiago del Estero {/*ver luego en la 7abla si si iba es7e da7o aqui si no 7raerlo de sind*/}</Text>
          <Text style={styles.smallText}>Aportes art 100° Convenio 130/75 | Aportes couta sindical |</Text>
          <Text style={styles.smallText}>Banco Santiago del Estero sucursal-central</Text>
          <Text style={styles.smallText}>Nota de credito para la cuenta N°-----</Text>
        </View>
      </View>

      <View style={styles.container}>

        <View>
        <Text>Razon Social: S.E.C | enre rios 235  liq orig empls.--</Text>
        </View>        

      </View>


      <View style={styles.container}>
      <View>

      <Text style={styles.smallText}>Cuit : {ddjjC.cuit}</Text>
      <Text style={styles.smallText}>Periodo : {ddjjC.periodo}</Text>
      <Text style={styles.smallText}>Ap -% ${ddjjC.totaldescley}</Text>
      <Text style={styles.smallText}>Ap C.S ${ddjjC.totaldescvolunt}</Text>
      <Text style={styles.title}>{"\n"}</Text>
      
      <Text style={styles.smallText}>Imp. Res.: ${ddjjC.totaldescley + ddjjC.totaldescvolunt}</Text>
         </View>

        <View>
          <Text style={styles.smallText}>Cheque/gioro Nro..................C/Banco................</Text>
          <Text style={styles.smallText}>Efectivo S/N..................de.................de 20.....</Text>
          <Text style={styles.smallText}>Firma del Depositante..........</Text>
          <Text style={styles.smallText}>{"\n"}</Text>
          
          <Text style={styles.smallText}>1er Venc 9/12/2023 - importe total a depositar: $---------</Text>
          <Text style={styles.smallText}>2do Venc 15/01/2024 - importe total a depositar: $---------</Text>
        </View>

      </View>

      <View style={styles.container}>

        <View>
        <Text style={styles.smallText}>Talon al: CLIENTE</Text>
        </View>

        <View style={styles.barcode}>
        <Image src={barcodeImage}  />
          <Text style={styles.smallText}>{'123456789'}</Text>
          <Text style={styles.smallText}>Pagos posteriores al primer vencimiento, sucetos a actualizacion</Text>
        </View>

        <View>
        <Text style={styles.smallText}>{ddjjC.fechapresentacion}</Text>
        </View>

      </View>

      <View style={styles.line} /> {/* Esto dibujará una línea */}

      <View style={styles.container}>
      <View>
          <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEQ8PERISDw8PEQ8PDw8QDxEPEA8PGBQZGRgUFhgcIS4mHB4rHxgZJjgmLi8xNTU2HCQ7QDszPy40NTEBDAwMEA8QGRERHDEjISE0NDExNTQ0NDE0NTQxNDQ0NDExMTQxMTExNDQ0NDYxNTQxMTQ/NjExPzQ0NDE0PzQ/Pv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBgcFBP/EAEUQAAIBAwEGAwUFAQ0JAQAAAAECAAMEEQUGEiFUk9ITFjEiQVFhcQcUgZGhsSMlMjRCUmJyc4KSosEVJENEU7Lh8PEX/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAKBEBAAICAQMDAwUBAAAAAAAAAAECERJRAxMhBCIxMkFhBRRxgZEj/9oADAMBAAIRAxEAPwD0vI+m8qvVrd0PI+m8qvVrd00ZkZnVrXhw725Z3yRpnKp1K3dDyRpnKp1K3dNFCNa8G9+Wd8kaZyqdSt3SfI+mconUrd00MYCZxXhdr8s8NhtM5ROpW7pI2G0zlE6lbumjxJAjFeGom/LODYXTOVXqVu6N5E0zlF6tbumkAjhZPHC5tyzI2E0zlE6tbuk+Q9M5ROrW7ppwsYCSccNe7lmBsFpfKL1a3dJ8haXyidSv3zThYwWTwsbcsv5C0vlE6lfvk+QdL5ROpX75qQsbdk8Hu5ZTyBpfKJ1K/fJ8gaXyadSv3zVbsndjwe7llPIGl8mnUr98PIGl8mnUr981e7ArHg93LJnYHS+UTqV++QdgtL5ROpX75qysgrHg93LKHYLS+UTqV++HkLS+TTq1+6arEUrL4Pdyyp2D0vlF6tbui+RNM5RepW7pqisUrHhPdyyx2E0zlF6tbukHYXTOUXq1u6agiKRL44TNuWX8jaZyi9St3SPI+mcqvUrd00xEVhLivCTNuWZ8j6ZyidSt3Q8j6ZyidSt3TSERZcV4TNuWbfYnTccLVepW7p877GacP+WXqVu6atpS6zVYrw8rzf7TLM+TNO5VOpW7oeTdO5VOpW7poisgpPXWvDx2vzP+s6djdO5VOpW7pHk3TuVX/HW7poisMS614Z3vzP8Ar7ISYTm2dkURASZIjK6gCMBARgJMt6gCOBACOBJldQojgQAkgQsQlRHAgojATLWABHAgBJAhdRiGJIEcLBgmJOI+7J3YyuFeJBEtxIIhMKsQIlmIpEGFZWLiWGQRBhUREIlxErYS5ZwrIikRzIIgwqIiMJaYhEuWcKyIhEtMrMuTUhiMJZIxLFsPOaq92KVluIETUWYnpqSsjdl2JG7NxZiemshCE8XTgQEJIEinEYCKI6wGAjqJCxxCpAjKJCywCRpIkXFUU0d24KiM593oMxwJm9vr3w7JkBw1d1pD+qclv0BH4zVK7XivKWnEZeaPtDQjhbtvZ97jGJcdu1KErRIfhgE5Wc8pUj6+74z06duQitjg2MfOfX/Z9P7w456tmiqfaBWHpRT8WM+RvtFuh/wqX+aeFd2xVguOJ4zzatPBx75f2vS+0EdWzWf/AKPdf9Kl/mnQNl9Se7tUuHAV2ZgQvpwacNInYvs5P730/wCvUH6zk9X0a0pmsYe/RvNpxLTEQxLMSMT50y6VZEUiWERSIhJVERTLSIjCVCERCJZFYQKSIpEsIlbCVkhEQiWkRCJUVERCJaZW0CswksJEIIGEJUwiGJMIyk1EIQhoRhFjAQHWWCIojCRTrHEVRHAkErLQJWstWRoy/wDv0mA2/vUqVqFoG9qkzNWP8lHZRuqT8cH9ZvatVUR3Y4VFZ2J9AAM5nJ7eqlQ1al3Tfw7l3qLcKCSpJ4DM7PSUzabcPLrWxGF+naeEqPb1yEFRN6lUY4UnGfWX069I2tOmTmtTqkndAIamCckNnHvma1TU6zilQQvV3cpSDKN5UJwAPmfnPVp7BauwDM24xAIUVcD8hw/SdPV9TWtsW+fw8K9G0xl6le4tXumqF92ilH2QwwWbGMDH4zxbixK0RcVBg1yfCX3kZxn6T4tTtbywqJSvVG7UG8jjDDGcE5HDh8J9Vpd+E6O6eMqBtxXZt1CR6j4ceM9+jaOpGaTnCWpNfl5tegyjLDdyPfwnWvs2H73U/wC0q/tE59qdmR+7V6ib9T2kpod4BSMgcJ0f7N1/e5P7Sr+0Tx9fbPSj+Xr6f6mnxIMfEgifHl1qiIpH/n04flMFtrTcX1N7tLmppZtWRHt2qf7tdFlxVcIQTgBvlxlaVsXGhpTu6l1SNC6HjMxHilUOC654kekDfkfL5/hnEQzjFpqdZLC6ovUqZuK1G7tnNRy26l793rID8PYQ4/pTRVrD7xd65vVK6NbU6b2+5cVUWmwpb2cA4PGXKYdCP4/kYpH1/IznFhqlWpW0Kq7uzvpt3Uqe0R4lRFOGYe8y/Z7SWr29hqK3D0rp6or13eq7LVpluNHcJ3fTIHCVG8aIR+vpOe6hqL/7SqXoqstva3lvp5piq4QoUYO26D677gS+40WmdWW2NS48F7Srcsguqw/dBUUBgc8ODNw+cmTDcE+/3fs+sRpzq6Rri31m/epVW4tLi4S2KVqirRSljdCqDj0xnPrN3p1Y1KNF24s6IxP9Ld4zTMrzEaORFaVFZixmiwghCEAhCEAhCEAEcRBHEodY4iLHEirBGEVYwkDrLFlaywSNMr9oNwVo0KW+USvUZahHvRVz+WcTG3z7lFadO6FenUY71ELhkA9oE/LJnu/aG5W4t98eJSNNilP3b29xM8K/pvUoLUW0WhTpsN6oD7TZ4Yx9eM+v6WsRSv5cnWmZs+zZTQ3uHasgyaDIf6Qb1VlB9cETb65VvVJqpX3E3VHhhN0BgOLe88ZiNh9pha3Yt6gVadyyIzsSNw8QrfiSBOlavpd3WqEpcIlEqAKT0VfB95yQZw9e0d+0xj+3TSPY53q+o07mkVu2pXlVWZKCF3p1bd2Q5cIVUOPZ9c+pHxmddfUfCez9oOy/3Sit01ZTWqVkVVQbmVwSzD6YH5zxabFkRjwJUE/Iz6H6fatptHjP4+Hh14mMS9Kzx4GVtHrVN5gbj2mUDHp6cMTpX2d/xBMjH7pV4fDj6TnliSLchLrw23mZqBUAeuAcn4zo32fqRYUieJdqjZ+Ptev6Ty9dH/P+z0/1NMRK2lhMrJnyXYzGr6FdPdG6tbtaHiUWt6tCvRa4osCQQ6AOAG4CfDYbFig2nMlbKWKXKsGpjervUGCwIb2QPhibM/8A35xCYGAv9gQ9naWxuUSpaXFer45pey6VajVGp43+HtbnHP8AJ9JfdbM1zXva1K+p0qV6KaVVNsHYU1QL7L7+ASAfdJ+1b+IUxu7+bu2XcHDeU72U/HGPxnh7QWNMWLoti+m+Ne2VNgzoz1Azhd4FWOMZlTy0a7LolbTqiVAtCxtalqKbgM1RHUje3w3D4+hnn2+ytSn93t3vEazta33ijR8MJVyp3kR338FQccMDMyepuatnaWzE72mU6oqqDkBlvFoUgf7gJ/GfbqFota81Sn91qXVU0bYW5RsCjU3ThiSwA444/KEe2NhKRtalF3Rr2o71Td+EQyuXLKQm9kgeyPX3ZnqU9IK3lK8esjMlobUpubm+xZDv728fXc9Me/1nibP0KlPVUpVm3q1PR7VKpznLhiGOfjw9Z8mtW61NXuA9m1+FtaJCIyIU4n2jlh8P0iCZw9O62WfN4lO6WnZ6hUNWtTelvOrOMvuPvYAb8cTS06a00RAcKihF3jjIAwJhtqxTqGzsPZtVp2b3Iplwvg1Am7TTIPHGGH92LeVkvDs81RQ6Vy4qIfRitIkg4+ayxKT5b3P4/TjEYQo0lpolNBuoiqiL7lVRgD5wYzTJGiR2iQghCEAhCEAhCEAjCLGECxY4iLHEKsWSIqxhEixY4lamODMtMF9pVYrVtCPUI7D/ABD854NpUV037us7UwPZoIcbx9B9J1DV9KS6pPSdQSVYI+PaRvUEH6zjNI+G5DjJRmUg+m8DjiJ9b0lovTX7w5etWdsrtU0ZiqO6tTDhmpO2N4rngDHoPqaKEp3jbgGBvO5wvuHEGevpuoBne4rAOEQrTRhlQSPh+X5z66FCl92puc+LUrHODgCn9Pw/Wbv0enafdHn8MR1rVjwzNexrVXV7u4e4KfwULMy/Tj6T0bKx8V1QuKIdTuM6koxHoPdn3fnPcqW1sly9JhvUnondLEkq5Awf2zx7i/36At3wWt2PhOBxA+Rnr0q1rGvTjGfmZYte1vqWardBh4daki1aY3VqUxuhgB68J1TZej4dlaJ7/CRj9WG8f2zij3DVCqE7zMVUE8SSTgCd6oJuIqDgEVVA+QUTj/UPbFaR/Lo9LHmZXZkGQTFzPl4dYMVpJMRjKPH2m0Nb6gtBqj0N2olVXQKzBkzjgfrPPr7MPUQ07i9r3AFa3roXSkChpsGCjdA9cTTExDKksrcbG0mOoMKlRP8AaFSg7kKpFLw33yqfHebOZ6Fhoi0bi5uVdna5WirowUIgQED6+s9YyGMIzepbNNUuze07urbVWopQPhpTcFFPD+ED78z56uyz+N95W9uKdY0kpO6JSJdVz7TZGMnM1DSsxhJZ+hsvS8V69yxvar0qdEtXpod0J/KHDGSST+M+JdjVRbdadzVp/datetRZUpkoamd5cEYwMnE1ZiGVMqaFMoiIWLlEVS5ADPgYLED0yZLQV8gN8cGQ0qFaJGaLCCEIQCEIQCEIQCSJEBAtWODKxGUwLAZYJWI4MSpxHBlYjqZGlqn/AFnKNU2XvHu7p6dBijXFZ0YkKCrMSCD+M6qDGDT16PWt0pmY+7Fqxb5cnXZa/UcaBI+CspP5AyXo16Y3alN03fcyECdZBhURXUo6hlIIKsMgidNfXWz5iHnPp4n4cYubkkhieI9DPgrVSTOp32w9pUyUL0Sf5jAr+RzOdbUaK9lVFJnDq676OBjKfAj3GdvS9XS84j5eVulavyq2fpeJeWafzrijn+qGDH9AZ3nP+k4r9nlLxNSoHHCmtWofqFIH/dOz5nz/AF1trxHDo6EYiZNmBMTMCZxvcxMUmQTEJhMpJiEwJi5hEExTGYxDAVjKzHYysysyDKyY5lcYQirgAD0AxximT7gP2RTKFMiSZEIIQhAIQhAIQhKCEJEgdY6ysRwYFimODKwYwMKtWMDK1McGTC5WKY4MpBjqZFWgyQZWDGBhVgM8jXdnLe9KNXD71MMFKOFO6f5PEGermTmWJms5g8TGJZ3Qtk6dndPXosxptR8MK7BnDlgTxwOGFH5zT5lWZOZZmbTmSIiPhYTILRMyMzK5MTFzIJhmDIJkZkExSYQMYhMCYpMIgyCZJMQmVMlJimSTEJlRBMQxjKyYQQhCAQhCAQhCBEmJmTmb1ecWNCRmEzMNxZMZTFhIZWgxgZWDGUwuVoMdTKQY4MSq0GSDKwYwMixKwGMDKgYwMKtzJzKsxsyCzMN6V5hmBZvQ3omZGYDlpBaLmQTBlOYpMXMgmUSTIJkExSYQExSYExTLhAYhMCYpMIUmRAwlBCEJEyIQhLgyISIS4MqA0YNKMyd6e+rhi76A8A0o3oytMzV6Vu+gGRmHuihpjV67/CwGMGlOZIaSarvD6FMYGfOHjh5NWovC8GMDKA8YPJqu0LwY2Z84eMHkwuy7MnMq35IeMLtC3MMyrfhmTBstzAmV78N+XBtB8yCYm/ILRg2g5MgmVlpBaMG5yYuYheRmXBtBiYpaBMUmMGwMQmSWiy4Z2TCEjMuGdkwkQiITYQhCXCTYQhIzLhneWU846dzK9Or2yfOWncyvTq9sIS9yzf7Sn5HnLT+ZXp1e2A2y07ml6dbtkwmZ6llj0tY+8vo87abj+NL0q3bKvOmncyvTrdsITO8t9mo866bzSdOt2SfOum80nTrdsIRvJ2K8jztpvNJ0q3bGG22m80vTrdsiEk3lexXlI2303ml6dbtjDbfTeaXpVu2EI3le1VPnnTebTp1uyMNudN5tOnW7IQjeTtVT550zm06dbtk+etN5tOnW7YQmdpXt1HnrTebTp1u2HnrTebTp1u2EI2k7cDz3pnNr063ZJ896ZzadOt2QhG0nbhB260zm06dbsh5603m06dbthCNpO3Up250zm06dbskHbnTObTp1uyEI2k7dUeeNN5penW7Y/nnTOaTp1u2EI2k7dUeeNM5penW7Yp2303ml6dbshCNpO3CPO+mc0nTrdsPO+mc0nTrdsIRtJ2qjzvpvNJ063bDzvpvNJ063bCEbynaqPO+m80nTrdsPO+m80nTrdsITW8nZqPO+m80nTrdsPO+m80nTrdsIRvJ2ajzvpvNJ063bI87abzS9Ot2whG8p2av/2Q==" style={styles.logo} />
        </View>
        <View>
          <Text style={styles.title}>Sindicato de empleado de comercio de Santiago del Estero {/*ver luego en la 7abla si si iba es7e da7o aqui si no 7raerlo de sind*/}</Text>
          <Text style={styles.smallText}>Aportes art 100° Convenio 130/75 | Aportes couta sindical |</Text>
          <Text style={styles.smallText}>Banco Santiago del Estero sucursal-central</Text>
          <Text style={styles.smallText}>Nota de credito para la cuenta N°-----</Text>
        </View>
      </View>

      <View style={styles.container}>

        <View>
        <Text>Razon Social: S.E.C | enre rios 235  liq orig empls.--</Text>
        </View>        

      </View>


      <View style={styles.container}>
      <View>

      <Text style={styles.smallText}>Cuit : {ddjjC.cuit}</Text>
      <Text style={styles.smallText}>Periodo : {ddjjC.periodo}</Text>
      <Text style={styles.smallText}>Ap -% ${ddjjC.totaldescley}</Text>
      <Text style={styles.smallText}>Ap C.S ${ddjjC.totaldescvolunt}</Text>
      <Text style={styles.title}>{"\n"}</Text>
      
      <Text style={styles.smallText}>Imp. Res.: ${ddjjC.totaldescley + ddjjC.totaldescvolunt}</Text>
         </View>

        <View>
          <Text style={styles.smallText}>Cheque/gioro Nro..................C/Banco................</Text>
          <Text style={styles.smallText}>Efectivo S/N..................de.................de 20.....</Text>
          <Text style={styles.smallText}>Firma del Depositante..........</Text>
          <Text style={styles.smallText}>{"\n"}</Text>
          
          <Text style={styles.smallText}>1er Venc 9/12/2023 - importe total a depositar: $---------</Text>
          <Text style={styles.smallText}>2do Venc 15/01/2024 - importe total a depositar: $---------</Text>
        </View>

      </View>

      <View style={styles.container}>

        <View>
        <Text style={styles.smallText}>Talon al: BANCO</Text>
        </View>

        <View style={styles.barcode}>
        <Image src={barcodeImage}  />
          <Text style={styles.smallText}>{'123456789'}</Text>
          <Text style={styles.smallText}>Pagos posteriores al primer vencimiento, sucetos a actualizacion</Text>
        </View>

        <View>
        <Text style={styles.smallText}>{ddjjC.fechapresentacion}</Text>
        </View>

      </View>

      
    </Page>
  </Document>
    
  );
};

export default MyPDF;

// Componente para mostrar el PDF generado
