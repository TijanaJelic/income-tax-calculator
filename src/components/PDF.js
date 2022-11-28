import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: ' 20px auto',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '5',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
});

const PDFdoc = ({
  weeklyIncome,
  fortnightlyIncome,
  monthlyIncome,
  annuallyIncome,
  getGrossIncome,
  getTax,
  getNetIncome,
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Frequency</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Gross Income</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Tax</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Net Income</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Weekly</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getGrossIncome(weeklyIncome.income)}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getTax(weeklyIncome.income)}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getNetIncome(weeklyIncome.income)}
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Fortnightly</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getGrossIncome(fortnightlyIncome)}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getTax(fortnightlyIncome)}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getNetIncome(fortnightlyIncome)}
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Monthly</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getGrossIncome(monthlyIncome)}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getTax(monthlyIncome)}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getNetIncome(monthlyIncome)}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Annually</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {getGrossIncome(annuallyIncome)}
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getTax(annuallyIncome)}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{getNetIncome(annuallyIncome)}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFdoc;
