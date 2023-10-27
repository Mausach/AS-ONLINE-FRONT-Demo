import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Define el contenido del PDF en un componente React
const MyPDF = () => (
  <Document>
    <Page size="A4">
      <View style={styles.container}>
        <Text style={styles.title}>Mi Volante</Text>
        <Text>Este es el contenido de mi volante en formato PDF.</Text>
        {/* Agrega más contenido según tus necesidades */}
      </View>
    </Page>
  </Document>
);

// Define estilos para el PDF
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

// Componente para mostrar el PDF generado
const MyPDFViewer = () => (
  <PDFViewer>
    <MyPDF />
  </PDFViewer>
);

export default MyPDFViewer;
