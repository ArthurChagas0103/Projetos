import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  Pressable,
  Image,
  Platform,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import HomeScreenStyle from "../../styles/screens/HomeScreenStyle";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [completeAge, setCompleteAge] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  const showDatePickerComponent = () => {
    setShowDatePicker(true);
  };

  const calculateAge = () => {
    const dateNow = new Date();
    const birthDate = date;

    if (dateNow.getTime() < birthDate.getTime()) {
      return alert("How is it possible for someone to be born in the future?");
    }

    let years = dateNow.getFullYear() - birthDate.getFullYear();
    let months = dateNow.getMonth() - birthDate.getMonth();
    let days = dateNow.getDate() - birthDate.getDate();

    if (years === 0 && months === 0 && days === 0) {
      return alert("Like this? Were you born today?");
    }
    if (days < 0) {
      months--;
      days += new Date(dateNow.getFullYear(), dateNow.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const completeAgeString = `Congratulations (or not)! You are ${years} ${
      years > 1 ? "years" : "year"
    }, ${months} ${months > 1 ? "months" : "month"} and ${days} ${
      days > 1 ? "days" : "day"
    } old`;

    setCompleteAge(completeAgeString);
    setModalVisible(true);
    setDate(dateNow);
  };

  return (
    <>
      <View
        style={[
          HomeScreenStyle.container,
          modalVisible
            ? HomeScreenStyle.displayNone
            : HomeScreenStyle.displayFlex,
        ]}
      >
        <Image
          source={require("../../assets/icon.png")}
          style={HomeScreenStyle.imgIcon}
        />
        <Text style={HomeScreenStyle.textDatePicker}>
          Enter Your Date of Birth
        </Text>
        <Text
          style={HomeScreenStyle.inputDatePicker}
          placeholder="Enter Your Date of Birth"
          onPress={showDatePickerComponent}
        >
          {date.toLocaleDateString("pt-br")}
        </Text>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}
        {showDatePicker && Platform.OS === "ios" && (
          <Button
            style={HomeScreenStyle.buttonOkDatePicker}
            title="OK"
            onPress={hideDatePicker}
          />
        )}
        {!showDatePicker && (
          <Pressable
            style={[HomeScreenStyle.buttonOpenModal]}
            onPress={calculateAge}
          >
            <Text style={HomeScreenStyle.textShowModal}>CALCULATE</Text>
          </Pressable>
        )}
      </View>

      <View
        style={[
          HomeScreenStyle.centeredView,
          modalVisible
            ? HomeScreenStyle.displayFlex
            : HomeScreenStyle.displayNone,
        ]}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={HomeScreenStyle.centeredView}>
            <View style={HomeScreenStyle.modalView}>
              <Image
                source={require("../../assets/cake.png")}
                style={HomeScreenStyle.imgCake}
              />
              <Text style={HomeScreenStyle.modalText}>{completeAge}</Text>
              <Pressable
                style={[HomeScreenStyle.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name={"close"} size={20} color={"black"} />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default HomeScreen;
