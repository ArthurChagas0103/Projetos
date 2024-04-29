import React from "react";
import { Text, View } from "react-native";

import AboutScreenStyle from "../../styles/screens/AboutScreenStyle";

const AboutScreen = () => {
  return (
    <>
      <View style={[AboutScreenStyle.container]}>
        <Text style={[AboutScreenStyle.titleAbout]}>About: Age Calculator</Text>
        <Text style={[AboutScreenStyle.textAbout]}>
          Welcome to Age Calculator, the ultimate tool for calculating your
          precise age down to the last day!
        </Text>
        <Text style={[AboutScreenStyle.textAbout]}>
          Have you ever wondered exactly how many years, months, and days you've
          been on this planet? With Age Calculator, you can find out in just a
          few taps. Simply input your date of birth, and our app will instantly
          generate your complete age, including years, months, and days.
        </Text>
        <Text style={[AboutScreenStyle.textAbout]}>
          Whether you're celebrating a milestone birthday or just curious about
          your age in finer detail, Age Calculator has you covered. It's quick,
          easy, and incredibly accurate.
        </Text>
        <Text style={[AboutScreenStyle.textAboutLast]}>
          Download Age Calculator today and unlock the secrets of your age!
        </Text>
      </View>
    </>
  );
};

export default AboutScreen;
