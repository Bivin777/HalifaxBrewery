import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, TouchableOpacity } from "react";
// import DropDownPicker from 'react-native-dropdown-picker';
import { province } from "../geo/province.js";
import { region } from "../geo/region.js";
import { store } from "../geo/store.js";
import { brand } from "../geo/brand.js";
import { product } from "../geo/product.js";
import { Text } from "@rneui/themed";
import AwesomeAlert from "react-native-awesome-alerts";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import {
  StyleSheet,
  // Text,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
export default Add = ({ navigation }) => {
  // const [products, setproducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [items, setItems] = useState(province);
  const [regions, setRegions] = useState(region);
  const [stores, setStores] = useState(store);
  const [brands, setbrands] = useState(brand);
  const [products, setproducts] = useState(product);
  // const [region, onChangeRegion] = React.useState("");
  // const [store, onChangeStore] = React.useState("");
  // const [brand, onChangeBrand] = React.useState("");
  // const [product, onChangeProduct] = React.useState("");
  const [facings, onChangeFacings] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const [provinceValue, setProvinceValue] = useState(null);
  const [regionValue, setRegionValue] = useState(null);
  const [storeValue, setStoreValue] = useState(null);
  const [brandValue, setBrandValue] = useState(null);
  const [productValue, setProductValue] = useState(null);

  const [Focus, setFocus] = useState(false);

  // console.log(province);
  showAlert = () => {
    setAlert(true);
  };

  hideAlert = () => {
    setAlert(false);
  };

  const goForFetch = () => {
    fetch("https://atlanticbreweries.herokuapp.com/add-data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        province: value, //value
        region: region, //region
        store: store, //store
        brand: brand, //brand
        product: product, //product
        facings: facings, //facings
        logDate: new Date().toUTCString(),
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('getting data from fetch', responseJson);

        console.log(responseJson.message);
        showAlert();
      })
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView>
      <View>
        <AwesomeAlert
          show={alert}
          titleStyle={{
            color: "blue",
            fontSize: 20,
          }}
          showProgress={false}
          title="Hey!"
          message="Product Added Successfully!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="Confirm"
          confirmButtonColor="green"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "http://www.sd43.bc.ca/school/gleneagle/StaffInfo/Dept%20Icons/all-icons/add_to_shopping_cart.png",
          }}
          style={{
            width: 80,
            height: 80,
            marginTop: 30,
            marginBottom: -40,
          }}
        />
        <Text> {"\n"}</Text>
      </View>
      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <View style={styles.dropdownLabelContainer}>
            <Text style={styles.label}>Province</Text>
          </View>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={items}
              style={[styles.dropdown, Focus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!Focus ? "Select Province" : "..."}
              searchPlaceholder="Search..."
              value={provinceValue}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(item) => {
                setProvinceValue(item.value);
                setFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={Focus ? "blue" : "black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <View style={styles.dropdownLabelContainer}>
            <Text style={styles.label}>Region</Text>
          </View>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={regions}
              style={[styles.dropdown, Focus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!Focus ? "Select Region" : "..."}
              searchPlaceholder="Search..."
              value={regionValue}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(item) => {
                setRegionValue(item.value);
                setFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={Focus ? "blue" : "black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </View>

      <StatusBar style="auto" />

      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <View style={styles.dropdownLabelContainer}>
            <Text style={styles.label}>Store</Text>
          </View>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={stores}
              style={[styles.dropdown, Focus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!Focus ? "Select Store" : "..."}
              searchPlaceholder="Search..."
              value={storeValue}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(item) => {
                setStoreValue(item.value);
                setFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={Focus ? "blue" : "black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <View style={styles.dropdownLabelContainer}>
            <Text style={styles.label}>Brand</Text>
          </View>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={brands}
              style={[styles.dropdown, Focus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!Focus ? "Select Brand" : "..."}
              searchPlaceholder="Search..."
              value={brandValue}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(item) => {
                setBrandValue(item.value);
                setFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={Focus ? "blue" : "black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <View style={styles.dropdownLabelContainer}>
            <Text style={styles.label}>Product</Text>
          </View>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={products}
              style={[styles.dropdown, Focus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!Focus ? "Select Product" : "..."}
              searchPlaceholder="Search..."
              value={productValue}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(item) => {
                setProductValue(item.value);
                setFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={Focus ? "blue" : "black"}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.formElements}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Facings</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={onChangeFacings}
            value={facings}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </View>
      </View>
      <Button
        title={"Add a New Product"}
        onPress={goForFetch}
        color="#228822d6"
      />

      <Button
        title={"<Back"}
        onPress={() => navigation.navigate("home")}
        color="#007AFF"
      />
      <Text> {"\n"}</Text>

      {/* <Button
        title='Go to Update Page'
        onPress={() => navigation.navigate('update', { name: 'Danny' })}
        style={{ width: 50, height: 50 }}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F45678",
    alignItems: "center",
    justifyContent: "center",
  },
  formElements: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 10,
    marginVertical: -4,
    borderColor: "#000",
    borderWidth: 1,
    // marginBottom: 10,
  },
  dropContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  dropdownLabelContainer: {
    flex: 1,
    marginRight: 10,
  },
  dropdownContainer: {
    flex: 2.5,
  },
  label: {
    // flex: 1,
    padding: 10,
    fontSize: 18,
    margin: -4,
    marginRight: 1,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputContainer: {
    flex: 2.5,
    marginTop: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 200,
  },
  inputLabel: {
    fontSize: 17,
  },
  success: {
    textAlign: "center",
    marginBottom: 10,
    padding: 10,
    color: "white",
    borderRadius: 10,
  },
  bgSuccess: {
    backgroundColor: "#228822d6",
  },
});
