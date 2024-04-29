import { StyleSheet } from "react-native";

const AboutScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleAbout: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 30,
  },

  textAbout: {
    textAlign: "justify",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
  },

  textAboutLast: {
    textAlign: "justify",
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default AboutScreenStyle;
