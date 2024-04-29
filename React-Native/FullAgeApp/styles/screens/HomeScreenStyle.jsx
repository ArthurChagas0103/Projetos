import { StyleSheet } from "react-native";

const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputDatePicker: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },

  textDatePicker: {
    marginBottom: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "80%",
  },

  buttonOpenModal: {
    backgroundColor: "#2196F3",
    width: "80%",
    padding: 10,
    borderRadius: 10,
  },

  buttonClose: {
    backgroundColor: "white",
    position: "absolute",
    right: 5,
    top: 5,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textShowModal: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },

  modalText: {
    textAlign: "center",
  },

  displayNone: {
    display: "none",
  },

  displayFlex: {
    display: "flex",
  },

  imgIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: "relative",
    bottom: 30
  },

  imgCake: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: "absolute",
    bottom: 80
  },

  buttonOkDatePicker: {
    paddingBottom: "100px"
  }
});

export default HomeScreenStyle;
