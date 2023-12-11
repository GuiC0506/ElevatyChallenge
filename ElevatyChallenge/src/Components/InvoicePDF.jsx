import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import Poppins from "../Fonts/Poppins-Regular.ttf";
import "../App.css";

Font.register({
  family: "Poppins",
  src: Poppins,
});

const styles = StyleSheet.create({
  body: {
    width: "100vw",
    height: "100vh",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "#fefefe",
    fontFamily: "Poppins",
  },
  header: {
    maxWidth: "65%",
    minHeight: "20px",
    paddingVertical: "5px",
    backgroundColor: "#dde4fe",
    color: "black",
  },

  section: {
    minHeight: "70px",
    minWidth: "150px",
    maxWidth: "220px",
    textOverflow: "ellipsis",
    color: "black",
    fontSize: 10,
    marginTop: "16px",
    backgroundColor: "#dde4fe",
    padding: "6px",
  },

  locationAndEmails: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    columnGap: "5px",
    justifyContent: "flex-start",
    marginBottom: "8px",
  },

  tableHeader: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    height: "20px",
    backgroundColor: "#5e707a",
    color: "white",
    fontSize: "10px",
    alignItems: "center",
    paddingHorizontal: "7px",
  },

  tableRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    columnGap: "3px",
    alignItems: "center",
    marginVertical: "3px",
    overflow: "hidden",
  },

  tableRowData: {
    backgroundColor: "#dde4fe",
    color: "black",
    fontSize: "10px",
    height: "25px",
    padding: "3px",
    overflow: "hidden",
  },

  companyName: {
    backgroundColor: "#dde4fe",
    color: "#b5c9e3",
    width: "70%",
    marginBottom: "20px",
  },

  bottomSection: {
    display: "flex",
    flexDirection: "row",
    columnGap: "25px",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  invoiceDate: {
    backgroundColor: "#dde4fe",
    color: "#5e707a",
    fontSize: "12px",
  },

  resumeSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "20px",
    width: "100%",
  },

  resume: {
    display: "flex",
    flexDirection: "row",
    fontSize: "10px",
    width: "25%",
  },

  resumeLeftSide: {
    color: "#5e707a",
    flexBasis: "40%",
  },

  resumeRightSide: {
    color: "#5e707a",
    backgroundColor: "#dde4fe",
    flexBasis: "60%",
  },

  sectionSeparation: {
    height: "2px",
    width: "25%",
    marginLeft: "394px",
    backgroundColor: "#5e707a",
  },
});

function PDFFile({ person, company, productData }) {
  let products = [];
  productData.forEach((product) => {
    products.push({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      qty: 1,
    });
  });

  const tableData = products.map((product) => {
    return (
      <View style={styles.tableRow}>
        <Text
          style={[styles.tableRowData, { flexBasis: "40%", textAlign: "left" }]}
        >
          {product.name}
        </Text>
        <Text
          style={[
            styles.tableRowData,
            { flexBasis: "20%", textAlign: "right" },
          ]}
        >
          ${product.price}
        </Text>
        <Text
          style={[
            styles.tableRowData,
            { flexBasis: "20%", textAlign: "right" },
          ]}
        >
          {product.qty}
        </Text>
        <Text
          style={[
            styles.tableRowData,
            { flexBasis: "20%", textAlign: "right" },
          ]}
        >
          5
        </Text>
      </View>
    );
  });

  // console.log(person.address);
  const { street, city, country, zipcode } = person.address;
  return (
    <Document style={{ padding: 0, margin: 0 }}>
      <Page style={styles.body}>
        <Text
          id="company-name"
          style={[styles.companyName, { color: "#5e707a" }]}
        >
          {company}
        </Text>
        <View style={[styles.locationAndEmails]}>
          <View style={styles.section}>
            <Text>
              {street}, {city} - {country}
            </Text>
            <Text>Zip Code: {zipcode}</Text>
          </View>
          <View style={styles.section}>
            <Text>{person.phone}</Text>
            <Text>{person.email}</Text>
            <Text>{person.website}</Text>
          </View>
        </View>
        <Text style={{ fontSize: "10px", marginTop: "4px" }}>Billed to</Text>
        <View
          style={[styles.section, { marginBottom: "20px", marginTop: "0px" }]}
        >
          <Text>
            {person.firstname} {person.lastname}
          </Text>
          <Text>{street}</Text>
          <Text>
            {street}, {city} - {country}
          </Text>
          <Text>Zip Code: {zipcode}</Text>
          <Text>{person.phone}</Text>
        </View>
        <View id="bottom-section" style={styles.bottomSection}>
          <View id="invoice-date">
            <Text style={{ color: "#5e707a" }}>Invoice</Text>
            <Text style={{ color: "#5e707a", fontSize: "12px" }}>
              Invoice number
            </Text>
            <Text style={styles.invoiceDate}>
              {new Date().toLocaleDateString("en-US")}
            </Text>
            <Text style={{ color: "#5e707a", fontSize: "12px" }}>
              Date of issue
            </Text>
            <Text style={styles.invoiceDate}>00001</Text>
          </View>
          <View style={{ width: "70%" }} id="table">
            <View id="table-header" style={styles.tableHeader}>
              <Text
                style={{
                  flexBasis: "40%",
                  textAlign: "left",
                }}
              >
                Description{" "}
              </Text>
              <Text
                style={{
                  flexBasis: "20%",
                  textAlign: "right",
                }}
              >
                Unit cost
              </Text>
              <Text
                style={{
                  flexBasis: "20%",
                  textAlign: "right",
                }}
              >
                QTY/HR Rate
              </Text>
              <Text
                style={{
                  flexBasis: "20%",
                  textAlign: "right",
                }}
              >
                Amount
              </Text>
            </View>
            <View
              style={{ padding: "5px", backgroundColor: "rgb(240, 240, 240)" }}
            >
              {tableData}
            </View>
          </View>
        </View>
        <View style={styles.resumeSection}>
          <View style={styles.resume}>
            <View style={styles.resumeLeftSide}>
              <Text>SUBTOTAL</Text>
              <Text>DISCOUNT</Text>
              <Text>TAX RATE</Text>
              <Text>TAX</Text>
            </View>
            <View style={styles.resumeRightSide}>
              <Text style={{ textAlign: "right" }}>$0</Text>
              <Text style={{ textAlign: "right" }}>$0</Text>
              <Text style={{ textAlign: "right" }}>$0</Text>
              <Text style={{ textAlign: "right" }}>$0</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionSeparation}></View>
      </Page>
    </Document>
  );
}

export default PDFFile;
